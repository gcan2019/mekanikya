'use client';
import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { business } from '@/lib/catalog';
import { quoteMessage } from '@/lib/quote';
export default function QuoteForm(){
const [material,setMaterial]=useState('Birlikte belirleyelim');
const [status,setStatus]=useState('');
const materialRef=useRef(material);
materialRef.current=material;
useEffect(()=>{
 const context=(document as Document & {modelContext?: {registerTool:(tool:unknown,options:{signal:AbortSignal})=>void|Promise<void>}}).modelContext;
 if(!context?.registerTool) return;
 const lifecycle=new AbortController();
 try { void Promise.resolve(context.registerTool({name:'read_quote_draft',description:'Read the current conveyor roller quote draft. Does not open WhatsApp or send a message.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute(input:unknown){if(!input || typeof input!=='object' || Array.isArray(input) || Object.keys(input).length) throw new Error('Expected an empty object.');const form=document.querySelector<HTMLFormElement>('.quote-form');if(!form) throw new Error('Form unavailable.');return {message:quoteMessage(new FormData(form),materialRef.current),sent:false};}},{signal:lifecycle.signal})).catch(()=>{}); } catch { /* Unsupported integration leaves the visible form available. */ }
 return ()=>lifecycle.abort();
},[]);
function submit(e:React.FormEvent<HTMLFormElement>){
e.preventDefault();
let message:string;
try { message=quoteMessage(new FormData(e.currentTarget),material); } catch(error) { setStatus(error instanceof Error?error.message:'Bilgileri kontrol edin.'); return; }
window.open('https://wa.me/'+business.whatsapp+'?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
setStatus('WhatsApp bağlantısı açıldı. Mesajı orada kontrol edip gönderin. Açılmadıysa tarayıcınızın açılır pencere ayarlarını kontrol edin.');
}
return <form className="quote-form" onSubmit={submit}><div className="form-head"><span>Konveyör rulosu</span><span>TEKLİF FORMU</span></div><div className="form-grid"><label className="full" htmlFor="name">Adınız / Firma adınız <span>*</span><Input id="name" name="name" placeholder="Ad veya firma adı" required maxLength={120} autoComplete="organization"/></label>
{[['diameter','Dış çap · D','Örn. 50'],['body','Gövde boyu · B','Örn. 400'],['shaft','Mil çapı · d','Örn. 12'],['length','Toplam mil boyu · L','Örn. 430']].map(([id,label,placeholder])=><label key={id} htmlFor={id}>{label}<div className="input-unit"><Input id={id} name={id} type="number" min="0.01" step="any" max="100000" placeholder={placeholder}/><span>mm</span></div></label>)}
<label htmlFor="quantity">Adet <span>*</span><Input id="quantity" name="quantity" type="number" min="1" max="1000000" step="1" placeholder="Örn. 10" required/></label><div className="field"><label id="material-label">Malzeme tercihi</label><Select value={material} onValueChange={v=>setMaterial(v||'Birlikte belirleyelim')}><SelectTrigger aria-labelledby="material-label"><SelectValue/></SelectTrigger><SelectContent>{['Birlikte belirleyelim','Çelik','Paslanmaz çelik','Alüminyum','PVC','Diğer'].map(m=><SelectItem value={m} key={m}>{m}</SelectItem>)}</SelectContent></Select></div>
<label htmlFor="notes" className="full">Kullanım yeri / Ek bilgiler<Textarea id="notes" name="notes" maxLength={1500} placeholder="Taşınan ürün, yük, çalışma ortamı, mil ucu veya mevcut rulodaki sorun…" rows={3}/></label></div><p className="form-note">* Zorunlu alanlar. Ölçüleri bilmiyorsanız boş bırakabilirsiniz. Fotoğraf ve teknik resmi WhatsApp’ta ekleyin.</p><Button type="submit" className="submit-button"><MessageCircle size={19}/> WhatsApp’ta teklif iste <ArrowUpRight size={20}/></Button><p className="privacy-note">Bilgileriniz bu sitede kaydedilmez. Düğme WhatsApp’ı açar; mesajı siz gönderirsiniz.</p><p className="form-status" role="status">{status}</p></form>;
}
