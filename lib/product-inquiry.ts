import type { InquiryProduct } from './additional-products';

export function productInquiryMessage(product:InquiryProduct, data:FormData):string {
  const value=(key:string)=>String(data.get(key)||'').trim();
  if(!value('customer') || value('customer').length>120) throw new Error('Ad veya firma adınızı girin.');
  const quantity=Number(value('quantity'));
  if(!Number.isInteger(quantity) || quantity<1 || quantity>1000000) throw new Error('Ürün adedini pozitif bir tam sayı olarak girin.');
  const lines=['Merhaba ofirma, '+product.title.toLocaleLowerCase('tr-TR')+' için teklif almak istiyorum.','Ad / Firma: '+value('customer'),'Talep edilen ürün adedi: '+quantity];
  for(const field of product.fields){
    const input=value(field.id);
    if(!input) continue;
    if(field.kind==='number'){
      const number=Number(input);
      if(!Number.isFinite(number) || number<=0 || number>1000000 || (field.unit==='adet' && !Number.isInteger(number))) throw new Error(field.label+' için geçerli, pozitif '+(field.unit==='adet'?'bir tam sayı':'bir sayı')+' girin.');
    } else if(input.length>300) throw new Error(field.label+' en fazla 300 karakter olabilir.');
    lines.push(field.label+': '+input+(field.unit?' '+field.unit:''));
  }
  if(value('notes').length>1500) throw new Error('Ek bilgiler en fazla 1500 karakter olabilir.');
  if(value('notes')) lines.push('Ek bilgiler: '+value('notes'));
  if(value('sample')) lines.push('Numune: Ürünü göndereceğim numuneye göre üretmenizi istiyorum.');
  return lines.join('\n');
}
