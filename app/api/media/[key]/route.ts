import { env } from 'cloudflare:workers';
export async function GET(_request: Request,{params}:{params:Promise<{key:string}>}) {
 const {key}=await params;
 if(!/^[a-f0-9-]+\.(jpg|png|webp)$/.test(key)) return new Response('Bulunamadı',{status:404});
 try{
  if(!env.MEDIA) return new Response('Geçici olarak kullanılamıyor',{status:503});
  const object=await env.MEDIA.get(key);
  if(!object) return new Response('Bulunamadı',{status:404});
  const headers=new Headers({'cache-control':'public, max-age=31536000, immutable','x-content-type-options':'nosniff'});
  object.writeHttpMetadata(headers); headers.set('etag',object.httpEtag);
  return new Response(object.body,{headers});
 }catch(error){console.error('image_read_failed',error);return new Response('Geçici olarak kullanılamıyor',{status:503});}
}
