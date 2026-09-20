import { ArrowUpRight, PackageCheck } from 'lucide-react';
import { factoryOptionImages } from '@/lib/factory-option-images';

const options = [
  ['Modüler ve bölmeli şase','PROFİLLERİ AYRI TUTUN','Farklı profil ve kesitleri ayrı gözlerde düzenlemek için. Bölme aralıkları ve destek yüksekliği malzemenizin boyuna göre değerlendirilir.','Bölme düzeni · Bağlantılı şase · Destek aralığı'],
  ['Açık platform','SERBEST YÜKLEME ALANI','Uzun paketleri geniş bir taban üzerinde taşımak için. Çıkarılabilir dikme veya bölme ihtiyacı varsa yükleme biçimine göre birlikte planlanır.','Platform ölçüsü · Çıkarılabilir dikme talebi'],
  ['İki yandan tutamaklı','UZUN MALZEME AKTARIMI','İki yanda tutamak bulunan açık uçlu düzen. Malzemenin çıkıntısı, koridordaki dönüş alanı ve tutamak yüksekliği birlikte ele alınır.','Yan tutamaklar · Açık uçlar · Manevra alanı'],
  ['Boru ve uzun malzeme arabası','BORU, ÇITA VE PAKETLER','Yan destekli platform üzerinde boru, çıta ve uzun paket taşıma ihtiyacı için. Yuvarlak malzemenin yuvarlanmasını önleyecek destek ve sabitleme düzeni ayrıca belirlenir.','Yan destekler · Sabitleme · Tekerlek yerleşimi'],
  ['Çelik platformlu araba','ATÖLYE İÇİ TAŞIMA','Profil paketleri ve uzun malzemelerin istasyonlar arasında taşınması için. Şase, platform ve tekerlekler toplam yük ve zemin koşullarına göre değerlendirilir.','Çelik gövde · Platform · Yüke uygun tekerlek'],
];

export default function ProfileCartOptions(){return <>
  <section className="section wrap profile-cart-options" id="modeller"><div className="section-head"><p className="overline">TAŞIMA DÜZENLERİ</p><h2>Profilinize ve atölyenize<br/>uygun taşıma düzeni.</h2><p>Malzeme boyu kadar yükleme şekli ve geçiş alanı da önemlidir. İhtiyacınıza yakın yapıyı seçin; ayrıntıları birlikte belirleyelim.</p></div>
    <div className="profile-cart-grid">{options.map(([title,tag,description,details])=>{
      const image = factoryOptionImages[title];
      return <article className="profile-cart-card" key={title}>
        {image && <figure className="profile-cart-image factory-option-photo"><img src={image.src} alt={image.alt} width={600} height={450} loading="lazy"/><figcaption>MISUMI kataloğundan örnek ürün düzeni</figcaption></figure>}
        <div className="profile-cart-copy"><p className="overline">{tag}</p><h3>{title}</h3><p>{description}</p><p className="profile-cart-detail">{details}</p><a className="text-link" href="#teklif">Bu düzen için teklif iste <ArrowUpRight size={17}/></a></div>
      </article>;
    })}</div>
    <p className="small-note">Bu düzenler özel üretim talebinizi tarif etmenize yardımcı olur. Birlikte uygulanabilecek seçenekler, kapasite ve üretim uygunluğu teknik değerlendirmeyle netleşir.</p>
  </section>
  <section className="wrap profile-cart-guide" id="secim"><div className="section-head"><p className="overline">ÖLÇÜ VE SEÇİM REHBERİ</p><h2>Malzemenin boyundan,<br/>atölyedeki dönüşe kadar.</h2><p>Hepsini ölçmeniz gerekmez. Malzemenin ve kullanılacak alanın fotoğraflarıyla başlayabiliriz.</p></div><div className="profile-cart-factors">{[
    ['01','Malzeme ve destek','En uzun parçanın boyu, kesiti ve paketin genişliği destek noktalarını belirler. Uzun malzemenin şase dışına taşan kısmı da değerlendirilir.'],
    ['02','Yük ve denge','Bir seferde taşınan toplam yük ve yükün yerleşimi birlikte incelenir. Yükün ağırlık merkezi ve tekerleklerin oluşturduğu destek alanı tasarımda dikkate alınır.'],
    ['03','Yükleme ve yüzey','Üstten veya yandan yükleme, ayrı bölmeler ve çıkarılabilir dikmeler ihtiyaca göre planlanır. Hassas profiller için temas yüzeyinde koruma talep edebilirsiniz.'],
    ['04','Zemin ve hareket','En dar kapı, koridor dönüşü, eşik ve zemin koşullarını paylaşın. Tekerlek çapı, döner/sabit tekerlek düzeni ve fren ihtiyacı buna göre görüşülür.'],
  ].map(([n,title,description])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    <div className="roller-sample-callout"><PackageCheck size={32}/><div><h3>Teknik çiziminiz olmasına gerek yok.</h3><p>Mevcut arabanızın, taşıdığınız profilin veya çalışma alanınızın fotoğrafını gönderin. Elinizde profil numunesi varsa gönderimini birlikte planlayalım.</p></div><a href="#teklif" className="cta">İhtiyacımı paylaşayım <ArrowUpRight size={18}/></a></div>
  </section>
</>;}
