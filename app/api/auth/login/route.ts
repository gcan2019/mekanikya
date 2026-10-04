import { env } from 'cloudflare:workers';
import { createAdminToken } from '@/app/chatgpt-auth';

const rateLimits = new Map<string, { attempts: number; resetTime: number }>();

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function POST(request: Request) {
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const now = Date.now();
  
  const rateLimit = rateLimits.get(ip);
  if (rateLimit && now < rateLimit.resetTime) {
    if (rateLimit.attempts >= 5) {
      return new Response(JSON.stringify({ error: 'Çok fazla deneme yaptınız. Lütfen 1 dakika bekleyin.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  const contentType = request.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    return new Response(JSON.stringify({ error: 'Geçersiz istek.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  let password;
  try {
    const body = await request.json() as Record<string, unknown>;
    password = body.password;
  } catch {
    return new Response(JSON.stringify({ error: 'Geçersiz istek.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  if (typeof password !== 'string') {
    return new Response(JSON.stringify({ error: 'Şifre gerekli.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const hashedPassword = await hashPassword(password);
  
  const expectedHash = (env as Cloudflare.Env).ADMIN_PASSWORD_HASH?.trim();
  const adminEmail = ((env as Cloudflare.Env).ADMIN_EMAIL || 'admin@example.com').trim();
  const jwtSecret = (env as Cloudflare.Env).JWT_SECRET?.trim();

  if (!jwtSecret || !expectedHash) {
    return new Response(JSON.stringify({ error: 'Sunucu yapılandırma hatası.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }

  if (hashedPassword.toLowerCase().trim() !== expectedHash.toLowerCase().trim()) {
    // Record failed attempt
    const currentAttempts = rateLimit && now < rateLimit.resetTime ? rateLimit.attempts + 1 : 1;
    rateLimits.set(ip, { attempts: currentAttempts, resetTime: now + 60000 });

    return new Response(JSON.stringify({ error: 'Şifre hatalı.' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
  }

  // Clear rate limit on success
  rateLimits.delete(ip);

  const token = await createAdminToken(adminEmail, jwtSecret);
  
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('Set-Cookie', `__admin_session=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400`);
  
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
}
