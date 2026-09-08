'use client';
import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, MessageCircle, Copy } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { business } from '@/lib/catalog';
import { quoteMessage, materialOptions, rollerOptions, shaftOptions } from '@/lib/quote';

function Choice({name,label,options,value,onChange}:{name:string;label:string;options:string[];value:string;onChange:(value:string)=>void}){
  return <div className="field"><label id={name+'-label'}>{label}</label><Select name={name} value={value} onValueChange={value=>onChange(value || options[0])}><SelectTrigger aria-labelledby={name+'-label'}><SelectValue/></SelectTrigger><SelectContent>{options.map(option=><SelectItem value={option} key={option}>{option}</SelectItem>)}</SelectContent></Select></div>;
}

export default function QuoteForm(){
  const [material,setMaterial]=useState(materialOptions[0]);
  const [rollerType,setRollerType]=useState(rollerOptions[0]);
  const [shaftEnd,setShaftEnd]=useState(shaftOptions[0]);
  const [status,setStatus]=useState('');
  const [draft,setDraft]=useState('');
  const [copyStatus,setCopyStatus]=useState('');
  const formRef=useRef<HTMLFormElement>(null);
  const choiceRef=useRef({material,rollerType,shaftEnd});
  useEffect(()=>{choiceRef.current={material,rollerType,shaftEnd};},[material,rollerType,shaftEnd]);
  function currentMessage(form:HTMLFormElement){
    const data=new FormData(form);
    data.set('rollerType',rollerType); data.set('shaftEnd',shaftEnd);
    return quoteMessage(data,material);
  }
  useEffect(()=>{
    const context=(document as Document & {modelContext?: {registerTool:(tool:unknown,options:{signal:AbortSignal})=>void|Promise<void>}}).modelContext;
    if(!context?.registerTool) return;
    const lifecycle=new AbortController();
    try { void Promise.resolve(context.registerTool({
      name:'read_quote_draft',description:'Read the current conveyor roller quote draft. Does not open WhatsApp or send a message.',
      inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},
      execute(input:unknown){
        if(!input || typeof input!=='object' || Array.isArray(input) || Object.keys(input).length) throw new Error('Expected an empty object.');
        if(!formRef.current) throw new Error('Form unavailable.');
        const data=new FormData(formRef.current); data.set('rollerType',choiceRef.current.rollerType);data.set('shaftEnd',choiceRef.current.shaftEnd);
        return {message:quoteMessage(data,choiceRef.current.material),sent:false};
      }
    },{signal:lifecycle.signal})).catch(()=>{}); } catch { /* The visible form remains available in unsupported browsers. */ }
    return ()=>lifecycle.abort();
  },[]);
  function clearDraft(){setDraft('');setStatus('');setCopyStatus('');}
  function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    let message:string;
    try {message=currentMessage(event.currentTarget);} catch(error){setDraft('');setStatus(error instanceof Error?error.message:'Bilgileri kontrol edin.');return;}
    setDraft(message);setStatus('');setCopyStatus('');
    window.open('https://wa.me/'+business.whatsapp+'?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
  }
  async function copyDraft(){
    try {await navigator.clipboard.writeText(draft);setCopyStatus('Mesaj kopyalandı.');}
    catch {setCopyStatus('Otomatik kopyalama kullanılamadı. Aşağıdaki mesajı seçerek kopyalayabilirsiniz.');}
  }
  return <form ref={formRef} className="quote-form" onSubmit={submit} onChange={clearDraft}>
    <div className="form-head"><span>Konveyör rulosu</span><span>TEKLİF FORMU</span></div>
    <div className="form-grid">
      <label className="full" htmlFor="name">Adınız / Firma adınız <span>*</span><Input id="name" name="name" placeholder="Ad veya firma adı" required maxLength={120} autoComplete="organization"/></label>
      {[['diameter','Dış çap · D','Örn. 50'],['body','Gövde boyu · B','Örn. 400'],['shaft','Mil çapı · d','Örn. 12'],['length','Toplam mil boyu · L','Örn. 430']].map(([id,label,placeholder])=><label key={id} htmlFor={id}>{label}<div className="input-unit"><Input id={id} name={id} type="number" min="0.01" step="any" max="100000" placeholder={placeholder}/><span>mm</span></div></label>)}
      <label htmlFor="quantity">Adet <span>*</span><Input id="quantity" name="quantity" type="number" min="1" max="1000000" step="1" placeholder="Örn. 10" required/></label>
      <Choice name="material" label="Malzeme tercihi" options={materialOptions} value={material} onChange={value=>{setMaterial(value);clearDraft();}}/>
      <p className="form-subtitle">Bildiğiniz ölçüleri ekleyin; bilmiyorsanız numune gönderebilirsiniz</p>
      <div className="technical-options">
        <Choice name="rollerType" label="Mevcut rulo tipi" options={rollerOptions} value={rollerType} onChange={value=>{setRollerType(value);clearDraft();}}/>
        <Choice name="shaftEnd" label="Mevcut mil ucu" options={shaftOptions} value={shaftEnd} onChange={value=>{setShaftEnd(value);clearDraft();}}/>
      </div>
      <label htmlFor="weight">Taşınan ürün ağırlığı<div className="input-unit"><Input id="weight" name="weight" type="number" min="0.01" max="1000000" step="any" placeholder="Toplam ürün ağırlığı"/><span>kg</span></div></label>
      <label htmlFor="environment">Çalışma ortamı<Input id="environment" name="environment" maxLength={200} placeholder="Örn. kuru, nemli, tozlu"/></label>
      <label htmlFor="notes" className="full">Kullanım yeri / Ek bilgiler<Textarea id="notes" name="notes" maxLength={1500} placeholder="Taşınan ürün, hat hızı, rulman bilgisi veya mevcut rulodaki sorun…" rows={3}/></label>
      <label className="sample-option full"><input type="checkbox" name="sample" value="Evet"/> Elimde numune var; ürünü numuneye göre üretmenizi istiyorum.</label>
    </div>
    <p className="form-note">* Zorunlu alanlar. Ölçüleri bilmiyorsanız boş bırakabilirsiniz. Tercihler üretim taahhüdü değildir; teknik değerlendirmede netleştirilir.</p>
    <Button type="submit" className="submit-button"><MessageCircle size={19}/> WhatsApp’ta teklif iste <ArrowUpRight size={20}/></Button>
    <p className="privacy-note">Bilgileriniz bu sitede kaydedilmez. Numuneyi kargo ile gönderebilir, fotoğraf veya teknik resmi açılan WhatsApp sohbetine ekleyebilirsiniz.</p>
    {status && <p className="form-status" role="alert">{status}</p>}
    {draft && <section className="quote-success" aria-label="Hazırlanan teklif mesajı"><h3>Teklif mesajınız hazır</h3><p>WhatsApp açılmadıysa aşağıdaki bağlantıyı kullanın. Mesaj henüz gönderilmedi.</p><pre>{draft}</pre><a className="cta" href={'https://wa.me/'+business.whatsapp+'?text='+encodeURIComponent(draft)} target="_blank" rel="noopener noreferrer">WhatsApp’ta devam et <ArrowUpRight size={18}/></a><Button type="button" variant="link" className="text-link" onClick={copyDraft}><Copy size={16}/> Mesajı kopyala</Button><p role="status">{copyStatus}</p></section>}
  </form>;
}
