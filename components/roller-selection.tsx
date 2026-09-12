import { ArrowUpRight, PackageCheck } from 'lucide-react';

const references = [
  {title:'Metal konveyör rulosu',tag:'GENEL TAŞIMA HATLARI',image:'https://content.misumi-ec.com/image/upload/t_product_main/t_misumi_wm/v1/p/jp/product/series/110302650050/10302650050_20230801115836.jpg',source:'https://jp.misumi-ec.com/vona2/detail/110302650050/',brand:'MISUMI',description:'Çelik, paslanmaz çelik ve alüminyum gövdeli katalog örnekleri. Malzeme ve yüzey seçimi, taşınan ürün ve çalışma ortamıyla birlikte değerlendirilir.',detail:'Gövde çapı ve boyu · Mil bağlantısı · Yüzey tercihi'},
  {title:'Mini konveyör rulosu',tag:'DAR ALAN / KISA GÖVDE',image:'https://content.misumi-ec.com/image/upload/t_product_main/t_misumi_wm/v1/p/jp/product/series/110300425360/110300425360_001.jpg',source:'https://jp.misumi-ec.com/vona2/detail/110300425360/',brand:'MISUMI',description:'Kompakt yerleşimler için kısa gövdeli rulo örnekleri. Taşınan parçanın tabanı, temas alanı ve rulman düzeni birlikte incelenir.',detail:'Montaj alanı · Temas yüzeyi · Rulman yerleşimi'},
  {title:'Fuji FF7 serisi',tag:'YÜK VE ÇALIŞMA KOŞULLARI',image:'https://content.misumi-ec.com/image/upload/t_product_main/t_misumi_wm/v1/p/jp/product/series/221000846126/221000846126_20230801115837.jpg',source:'https://jp.misumi-ec.com/vona2/detail/221000846126/',brand:'Fuji / MISUMI',description:'PVC ve çelik boru seçenekleri bulunan seri. Gövde, rulman ve yatak yapısının yük ve ses ihtiyacına göre nasıl farklılaştığını incelemek için bir referans.',detail:'Boru malzemesi · Rulman tipi · Çalışma sesi'},
];
const criteria = [
  ['Taşınan ürün','Toplam ağırlık, taban ölçüsü ve taban yapısı','Yükün kaç ruloya ve nasıl dağıldığını anlamak için.'],
  ['Hat ve hareket','Avare veya tahrikli kullanım, hat hızı ve rulolar arası mesafe','Mevcut düzenle uyumu değerlendirmek için.'],
  ['Mil ve montaj','Mil ucu, bağlantı şekli, şase iç açıklığı ve varsa rulman kodu','Rulonun yerine oturmasını ve bağlantı detaylarını belirlemek için.'],
  ['Ortam ve yüzey','Nem, toz, yıkama, sıcaklık ve üründe iz bırakmama ihtiyacı','Gövde, yüzey işlemi ve rulman tercihini görüşmek için.'],
];

export default function RollerSelection(){return <>
  <section className="section wrap roller-options" id="rulo-turleri">
    <div className="section-head"><p className="eyebrow">RULO TÜRLERİ</p><h2>Aynı hat değil.<br/>Aynı rulo da değil.</h2><p>Mevcut parçanıza benzeyen yapıyı inceleyin. Hangi tipin uygun olduğunu bilmiyorsanız fotoğraf veya numuneyle başlayabiliriz.</p></div>
    <div className="roller-reference-grid">{references.map(item=><article className="roller-reference-card" key={item.title}>
      <a className="roller-reference-image" href={item.source} target="_blank" rel="noopener noreferrer" aria-label={item.title+' — kaynak görseli ve ürün sayfası'}><img src={item.image} alt={item.brand+' kataloğundan '+item.title+' referans görseli'} width={320} height={240} loading="lazy" referrerPolicy="no-referrer"/><span>{item.brand} · Referans</span></a>
      <div className="roller-reference-copy"><p className="eyebrow">{item.tag}</p><h3>{item.title}</h3><p>{item.description}</p><p className="roller-reference-detail">{item.detail}</p><a className="text-link" href={item.source} target="_blank" rel="noopener noreferrer">Katalog örneğini incele <ArrowUpRight size={17}/></a></div>
    </article>)}</div>
    <p className="roller-source-note">Görseller ilgili MISUMI / Fuji kataloglarından referans olarak gösterilmiştir; ofirma imalat fotoğrafları değildir. Katalogdaki ölçü ve kapasiteler ilgili üreticinin ürünlerine aittir. ofirma için üretim uygunluğu ve teknik özellikler talebinize göre değerlendirilir.</p>
    <div className="roller-catalog-links"><span>Diğer yapıları keşfedin</span><a href="https://jp.misumi-ec.com/vona2/mech/M1100000000/M1105000000/M1105020000/" target="_blank" rel="noopener noreferrer">Tüm konveyör ruloları <ArrowUpRight size={16}/></a><a href="https://jp.misumi-ec.com/vona2/maker/fujiseisakusyo/mech_conveyor/M1105000000/M1105020000/" target="_blank" rel="noopener noreferrer">Fuji’nin diğer rulo seçenekleri <ArrowUpRight size={16}/></a></div>
  </section>
  <section className="section wrap roller-selection" id="secim-rehberi"><div className="section-head"><p className="eyebrow">SEÇİM REHBERİ</p><h2>Ölçünün ötesinde,<br/>çalışma koşullarına uygun.</h2><p>Sadece çap ve boy yeterli olmayabilir. Bildiğiniz bilgileri paylaşın; eksikleri parçayı inceleyerek birlikte netleştirelim.</p></div>
    <div className="roller-criteria">{criteria.map(([title,info,why],index)=><article key={title}><span className="roller-criterion-number">0{index+1}</span><div><h3>{title}</h3><p>{info}</p><p className="roller-criterion-why">{why}</p></div></article>)}</div>
    <p className="technical-note">Taşınan ürünün toplam ağırlığı, tek bir rulonun taşıma kapasitesi değildir. Rulo adedi, aralık, yük dağılımı ve çalışma koşulları birlikte değerlendirilir.</p>
    <div className="roller-sample-callout"><PackageCheck size={32} aria-hidden="true"/><div><h3>Elinizde eski rulo varsa, başlangıç hazır.</h3><p>Teknik çizim hazırlamanız gerekmez. Genel görünüşün ve iki mil ucunun fotoğraflarını gönderin ya da numune gönderimini birlikte planlayalım.</p></div><a className="cta" href="#teklif">Numunem var <ArrowUpRight size={18}/></a></div>
  </section>
</>;}
