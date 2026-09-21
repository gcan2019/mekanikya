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

  try {
    const body = await request.json();
    await saveSiteContent(body, user.email);
    return NextResponse.json({ ok: true, savedAt: new Date().toISOString() });
  } catch (error) {
    console.error('site_content_save_failed', error);
    return NextResponse.json({ error: 'Değişiklikler kaydedilemedi. Lütfen tekrar deneyin.' }, { status: 500 });
  }
}
