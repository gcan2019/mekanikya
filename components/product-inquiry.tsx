'use client';
import { useRef,useEffect,useState } from 'react';
import { ArrowUpRight, Copy, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { business } from '@/lib/catalog';
import type { InquiryProduct } from '@/lib/additional-products';
import { productInquiryMessage } from '@/lib/product-inquiry';

export default function ProductInquiry({product}:{product:InquiryProduct}){
 const formRef=useRef<HTMLFormElement>(null);
 const [draft,setDraft]=useState('');const [error,setError]=useState('');const [copied,setCopied]=useState('');
 useEffect(()=>{
   const context=(document as Document & {modelContext?:{registerTool:(tool:unknown,options:{signal:AbortSignal})=>void|Promise<void>}}).modelContext;
   if(!context?.registerTool) return;
   const lifecycle=new AbortController();
   try {void Promise.resolve(context.registerTool({name:'read_product_inquiry',description:'Read the currently entered product-specific inquiry. Does not send a message or open WhatsApp.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute(input:unknown){if(!input || typeof input!=='object' || Array.isArray(input) || Object.keys(input).length) throw new Error('Expected an empty object.');if(!formRef.current) throw new Error('Form unavailable.');return {product:product.id,message:productInquiryMessage(product,new FormData(formRef.current)),sent:false};}},{signal:lifecycle.signal})).catch(()=>{});}catch{/* The form works without WebMCP. */}
   return ()=>lifecycle.abort();
 },[product]);
 function submit(event:React.FormEvent<HTMLFormElement>){
   event.preventDefault();let message:string;
   try{message=productInquiryMessage(product,new FormData(event.currentTarget));}catch(error){setError(error instanceof Error?error.message:'Bilgileri kontrol edin.');setDraft('');return;}
   setError('');setDraft(message);setCopied('');
   window.open('https://wa.me/'+business.whatsapp+'?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
 }
 async function copy(){try{await navigator.clipboard.writeText(draft);setCopied('Mesaj kopyalandı.');}catch{setCopied('Mesajı seçerek kopyalayabilirsiniz.');}}
 return <form ref={formRef} className="quote-form" onSubmit={submit} onChange={()=>{setDraft('');setError('');setCopied('');}}>
 <div className="form-head"><span>{product.title}</span><span>TEKLİF TALEBİ</span></div><div className="form-grid">
 <label className="full" htmlFor="customer">Adınız / Firma adınız <span>*</span><Input id="customer" name="customer" required maxLength={120} autoComplete="organization" placeholder="Ad veya firma adı"/></label>
 <label className="full" htmlFor="quantity">Talep ettiğiniz ürün adedi <span>*</span><Input id="quantity" name="quantity" type="number" min="1" max="1000000" step="1" required placeholder="Kaç ürün için teklif istiyorsunuz?"/></label>
 <p className="form-subtitle">Bildiğiniz teknik bilgileri ekleyin; bilmiyorsanız numune gönderebilirsiniz</p>
 {product.fields.map(field=><label key={field.id} htmlFor={field.id} className={field.kind==='text'?'full':undefined}>{field.label}<div className={field.unit?'input-unit':undefined}><Input id={field.id} name={field.id} type={field.kind==='number'?'number':'text'} min={field.kind==='number'?(field.unit==='adet'?1:0.01):undefined} max={field.kind==='number'?1000000:undefined} step={field.kind==='number'?(field.unit==='adet'?1:'any'):undefined} maxLength={field.kind==='text'?300:undefined} placeholder={field.hint}/>{field.unit && <span>{field.unit}</span>}</div></label>)}
 <label className="full" htmlFor="notes">Ek bilgiler<Textarea id="notes" name="notes" rows={3} maxLength={1500} placeholder="Kullanım yeri, mevcut ekipman, özel istek veya açıklama…"/></label></div>
 <label className="sample-option full"><input type="checkbox" name="sample" value="Evet"/> Elimde numune var; ürünü numuneye göre üretmenizi istiyorum.</label>
 <p className="form-note">* Zorunlu alanlar. Teknik bilgileri bilmiyorsanız boş bırakabilirsiniz. Numuneyi kargo ile gönderebilir, fotoğraf ve teknik resimleri WhatsApp görüşmesine ekleyebilirsiniz.</p>
 <Button type="submit" className="submit-button"><MessageCircle size={19}/> WhatsApp’ta teklif iste <ArrowUpRight size={20}/></Button>
 <p className="privacy-note">Bilgileriniz bu sitede kaydedilmez. Mesajı WhatsApp’ta siz gönderirsiniz.</p>
 {error && <p className="form-status" role="alert">{error}</p>}
 {draft && <section className="quote-success" aria-label="Hazırlanan ürün talebi"><h3>Teklif mesajınız hazır</h3><p>Henüz gönderilmedi. WhatsApp açılmadıysa aşağıdaki bağlantıyı kullanın.</p><pre>{draft}</pre><a className="cta" href={'https://wa.me/'+business.whatsapp+'?text='+encodeURIComponent(draft)} target="_blank" rel="noopener noreferrer">WhatsApp’ta devam et <ArrowUpRight size={18}/></a><Button type="button" variant="link" className="text-link" onClick={copy}><Copy size={16}/> Mesajı kopyala</Button><p role="status">{copied}</p></section>}
 </form>;
}
