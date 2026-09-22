import { NextResponse } from 'next/server';
import { getChatGPTUser } from '@/app/chatgpt-auth';
import { getSiteContent, isSiteAdmin, saveSiteContent } from '@/lib/site-content';

export const dynamic = 'force-dynamic';

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return NextResponse.json({ error: 'Oturum açmanız gerekiyor.' }, { status: 401 });
  if (!isSiteAdmin(user)) return NextResponse.json({ error: 'Bu işlem için yetkiniz yok.' }, { status: 403 });
  return NextResponse.json(await getSiteContent());
}

export async function PUT(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return NextResponse.json({ error: 'Oturum açmanız gerekiyor.' }, { status: 401 });
  if (!isSiteAdmin(user)) return NextResponse.json({ error: 'Bu işlem için yetkiniz yok.' }, { status: 403 });

  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
    return NextResponse.json({ error: 'Geçersiz istek (Origin uyuşmazlığı).' }, { status: 403 });
  }

  const contentLength = Number(request.headers.get('content-length'));
  if (contentLength && contentLength > 2 * 1024 * 1024) {
    return NextResponse.json({ error: 'İçerik boyutu çok büyük (en fazla 2 MB).' }, { status: 413 });
  }

  try {
    const body = await request.json();
    await saveSiteContent(body, user.email);
    return NextResponse.json({ ok: true, savedAt: new Date().toISOString() });
  } catch (error) {
    console.error('site_content_save_failed', error);
    return NextResponse.json({ error: 'Değişiklikler kaydedilemedi. Lütfen geçerli bir içerik gönderin.' }, { status: 500 });
  }
}
