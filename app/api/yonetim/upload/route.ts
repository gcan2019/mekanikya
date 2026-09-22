import { env } from 'cloudflare:workers';
import { getChatGPTUser } from '@/app/chatgpt-auth';
import { isSiteAdmin } from '@/lib/site-content';
export async function POST(request: Request) {
 const user=await getChatGPTUser();
 if(!user || !isSiteAdmin(user)) return Response.json({error:'Yetkili hesabınızla giriş yapın.'},{status:user?403:401});
 if(request.headers.get('origin') !== new URL(request.url).origin) return Response.json({error:'Geçersiz istek.'},{status:403});
 if(Number(request.headers.get('content-length'))>6*1024*1024) return Response.json({error:'En fazla 5 MB yükleyebilirsiniz.'},{status:413});
  try {
    const form = await request.formData();
    const file = form.get('file');
    if (!(file instanceof File) || file.size > 5 * 1024 * 1024 || file.size === 0) {
      return Response.json({ error: 'En fazla 5 MB büyüklüğünde bir görsel seçin.' }, { status: 400 });
    }
    const bytes = new Uint8Array(await file.arrayBuffer());
    const png = bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71 && bytes[4] === 13 && bytes[5] === 10 && bytes[6] === 26 && bytes[7] === 10;
    const jpg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
    const webp = new TextDecoder().decode(bytes.slice(0, 4)) === 'RIFF' && new TextDecoder().decode(bytes.slice(8, 12)) === 'WEBP';
    const ext = png ? 'png' : jpg ? 'jpg' : webp ? 'webp' : null;
    if (!ext) return Response.json({ error: 'JPG, PNG veya WebP görseli seçin.' }, { status: 400 });

    if (!env?.MEDIA) {
      if (process.env.NODE_ENV === 'development') {
        const mime = ext === 'jpg' ? 'image/jpeg' : `image/${ext}`;
        const base64 = Buffer.from(bytes).toString('base64');
        return Response.json({ src: `data:${mime};base64,${base64}` });
      }
      throw new Error('media_unavailable');
    }
    const key = crypto.randomUUID() + '.' + ext;
    await env.MEDIA.put(key, bytes, { httpMetadata: { contentType: ext === 'jpg' ? 'image/jpeg' : 'image/' + ext } });
    return Response.json({ src: '/api/media/' + key });
  } catch (error) {
    console.error('image_upload_failed', error);
    return Response.json({ error: 'Görsel yüklenemedi. Tekrar deneyin.' }, { status: 503 });
  }
}
