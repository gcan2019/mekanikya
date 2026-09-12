export const materialOptions = ['Birlikte belirleyelim','Çelik','Paslanmaz çelik','Alüminyum','PVC','Diğer'];
export const rollerOptions = ['Bilmiyorum','Avare / serbest dönen','Tahrikli','Diğer'];
export const shaftOptions = ['Bilmiyorum','Düz mil','İç dişli','Dış dişli','Pim delikli','Anahtar ağızlı','Diğer'];

export function quoteMessage(data: FormData, material: string): string {
  const value = (key: string) => String(data.get(key) || '').trim();
  if (!value('name') || value('name').length > 120) throw new Error('Ad veya firma adını girin.');
  const quantity = Number(value('quantity'));
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 1000000) throw new Error('Adet pozitif bir tam sayı olmalıdır.');
  if (!materialOptions.includes(material)) throw new Error('Malzeme tercihini listeden seçin.');
  const dimensions = [['diameter','Dış çap (D)'],['body','Gövde boyu (B)'],['shaft','Mil çapı (d)'],['length','Toplam mil boyu (L)']];
  for (const [key] of dimensions) if (value(key) && (!Number.isFinite(Number(value(key))) || Number(value(key)) < 0.01 || Number(value(key)) > 100000)) throw new Error('Ölçüler pozitif ve geçerli olmalıdır.');
  if (value('body') && value('length') && Number(value('length')) < Number(value('body'))) throw new Error('Toplam mil boyu (L), gövde boyundan (B) kısa görünüyor. Ölçüleri kontrol edin.');
  if (value('weight') && (!Number.isFinite(Number(value('weight'))) || Number(value('weight')) <= 0 || Number(value('weight')) > 1000000)) throw new Error('Taşınan ürün ağırlığını pozitif bir sayı olarak girin.');
  if (value('rollerType') && !rollerOptions.includes(value('rollerType'))) throw new Error('Rulo tipini listeden seçin.');
  if (value('shaftEnd') && !shaftOptions.includes(value('shaftEnd'))) throw new Error('Mil ucunu listeden seçin.');
  if (value('environment').length > 200) throw new Error('Çalışma ortamı en fazla 200 karakter olabilir.');
  for (const key of ['application','reference']) if (value(key).length > 200) throw new Error('Ürün ve referans bilgileri en fazla 200 karakter olabilir.');
  for (const key of ['pitch','speed']) if (value(key) && (!Number.isFinite(Number(value(key))) || Number(value(key)) < 0.01 || Number(value(key)) > 100000)) throw new Error('Rulo aralığı ve hat hızı pozitif ve geçerli sayılar olmalıdır.');
  if (value('notes').length > 1500) throw new Error('Notlar en fazla 1500 karakter olabilir.');
  return ['Merhaba ofirma, konveyör rulosu için teklif almak istiyorum.', 'Ad / Firma: '+value('name'), 'Adet: '+quantity,
    ...dimensions.filter(([key])=>value(key)).map(([key,label])=>label+': '+value(key)+' mm'), 'Malzeme tercihi: '+material,
    ...(value('rollerType')?['Mevcut rulo tipi: '+value('rollerType')]:[]),
    ...(value('shaftEnd')?['Mevcut mil ucu: '+value('shaftEnd')]:[]),
    ...(value('weight')?['Taşınan ürünün toplam ağırlığı: '+value('weight')+' kg']:[]),
    ...(value('environment')?['Çalışma ortamı: '+value('environment')]:[]),
    ...(value('application')?['Taşınan ürün / taban ölçüsü: '+value('application')]:[]),
    ...(value('pitch')?['Rulolar arası merkez mesafesi: '+value('pitch')+' mm']:[]),
    ...(value('speed')?['Hat hızı: '+value('speed')+' m/dk']:[]),
    ...(value('reference')?['Referans model / rulman kodu: '+value('reference')]:[]),
    ...(value('notes')?['Kullanım / Notlar: '+value('notes')]:[]),
    ...(value('sample')?['Numune: Ürünü göndereceğim numuneye göre üretmenizi istiyorum.']:[])].join('\n');
}
