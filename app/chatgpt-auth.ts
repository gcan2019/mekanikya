import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { env } from 'cloudflare:workers';

export type ChatGPTUser = {
  userId: string;
  displayName: string;
  email: string;
  fullName: string | null;
};

const SIGN_IN_PATH = '/yonetim/giris';

function base64urlEncode(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64urlDecode(base64url: string): Uint8Array {
  const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64 + '==='.slice((base64.length + 3) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export async function createAdminToken(email: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const header = { alg: 'HS256', typ: 'JWT' };
  const payload = { sub: email, exp: Math.floor(Date.now() / 1000) + 86400 };

  const encodedHeader = base64urlEncode(encoder.encode(JSON.stringify(header)).buffer as ArrayBuffer);
  const encodedPayload = base64urlEncode(encoder.encode(JSON.stringify(payload)).buffer as ArrayBuffer);

  const signatureInput = `${encodedHeader}.${encodedPayload}`;
  const signatureBuffer = await crypto.subtle.sign('HMAC', key, encoder.encode(signatureInput));
  const signature = base64urlEncode(signatureBuffer);

  return `${signatureInput}.${signature}`;
}

export async function verifyAdminToken(token: string, secret: string): Promise<{ sub: string; exp: number } | null> {
  const parts = token.split('.');
  if (parts.length !== 3) return null;

  const [encodedHeader, encodedPayload, signature] = parts;
  const signatureInput = `${encodedHeader}.${encodedPayload}`;

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify']
  );

  const signatureBytes = base64urlDecode(signature);
  const isValid = await crypto.subtle.verify('HMAC', key, signatureBytes.buffer as ArrayBuffer, encoder.encode(signatureInput));

  if (!isValid) return null;

  try {
    const payloadBytes = base64urlDecode(encodedPayload);
    const payloadString = new TextDecoder().decode(payloadBytes);
    const payload = JSON.parse(payloadString);
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

export async function getChatGPTUser(): Promise<ChatGPTUser | null> {
  const requestHeaders = await headers();
  const cookieHeader = requestHeaders.get('cookie');
  if (!cookieHeader) return null;

  const match = cookieHeader.match(/(?:^|;\s*)__admin_session=([^;]+)/);
  if (!match) return null;

  const token = match[1];
  const secret = (env as Cloudflare.Env).JWT_SECRET?.trim();
  if (!secret) return null;

  const payload = await verifyAdminToken(token, secret);
  if (!payload || !payload.sub) return null;

  return {
    userId: payload.sub,
    email: payload.sub,
    fullName: 'Admin',
    displayName: 'Admin'
  };
}

export async function requireChatGPTUser(returnTo: string): Promise<ChatGPTUser> {
  const user = await getChatGPTUser();
  if (user) return user;
  redirect(chatGPTSignInPath(returnTo));
}

export function chatGPTSignInPath(returnTo: string): string {
  const safeReturnTo = returnTo.startsWith('/') && !returnTo.startsWith('//') ? returnTo : '/';
  return `${SIGN_IN_PATH}?return_to=${encodeURIComponent(safeReturnTo)}`;
}

export function safeDecode(value: string): string | null {
  try {
    return decodeURIComponent(value);
  } catch {
    return null;
  }
}
