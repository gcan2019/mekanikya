export function quoteMessage(data: FormData, material: string): string {
  const value = (key: string) => String(data.get(key) || '').trim();
  if (!value('name') || value('name').length > 120) throw new Error('Ad veya firma adını girin.');
  const quantity = Number(value('quantity'));
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 1000000) throw new Error('Adet pozitif bir tam sayı olmalıdır.');
  const dimensions = [['diameter','Dış çap (D)'],['body','Gövde boyu (B)'],['shaft','Mil çapı (d)'],['length','Toplam mil boyu (L)']];
  for (const [key] of dimensions) if (value(key) && (!Number.isFinite(Number(value(key))) || Number(value(key)) < 0.01 || Number(value(key)) > 100000)) throw new Error('Ölçüler pozitif ve geçerli olmalıdır.');
  if (value('notes').length > 1500) throw new Error('Notlar en fazla 1500 karakter olabilir.');
  return ['Merhaba ofirma, konveyör rulosu için teklif almak istiyorum.', 'Ad / Firma: '+value('name'), 'Adet: '+quantity, ...dimensions.filter(([key])=>value(key)).map(([key,label])=>label+': '+value(key)+' mm'), 'Malzeme: '+material, ...(value('notes')?['Kullanım / Notlar: '+value('notes')]:[])].join('\n');
}
