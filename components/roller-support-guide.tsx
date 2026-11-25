

export const rollerSupportTitle = '2 Metre Şerit Testere / Profil Dayama Sehpası';
export const rollerSupportDescription = 'Şerit testere ve profil kesimi için 2 metre rulolu destek sehpası talebi. Rulolu destek ve boy dayamalı seçenekleri Merzifon / Amasya merkezli değerlendirelim.';

const references = [
  {
    title: 'Kesim sırasında rulolu destek',
    manufacturer: 'ASTAGE · WRS-1',
    image: 'https://content.misumi-ec.com/image/upload/t_product_main/t_misumi_wm/v1/p/jp/product/series/223011218606/223011218606_001.jpg',
    source: 'https://jp.misumi-ec.com/vona2/detail/223011218606/',
    alt: 'MISUMI üzerinde sunulan Astage WRS-1 tek rulolu destek sehpası; referans ürün',
    description: 'Uzun malzemelerin beslenmesi ve kesim işlerinde destek amacıyla sunulan tek rulolu sehpa. Çalışma tezgâhına göre yükseklik ayarı yapılabiliyor.',
    detail: 'Kaynak modelin rulosu Ø48 × 300 mm. Fotoğraf 2 metre modelimizi göstermez; destek prensibini anlatır.',
  },
  {
    title: 'Konveyör için ayarlanabilir ayak',
    manufacturer: 'TRUSCO · VR-K SERİSİ',
    image: 'https://content.misumi-ec.com/image/upload/t_product_main/t_misumi_wm/v1/p/jp/product/series/221005494872/221005494872_20230801115837.jpg',
    source: 'https://jp.misumi-ec.com/vona2/detail/221005494872/',
    alt: 'MISUMI üzerinde sunulan TRUSCO rulolu konveyör destek ayağı; referans bileşen',
    description: 'Rulolu gövdeyi taşıyan ayrı ayak yapısı. Kaynak seride 300 ve 400 mm rulo genişliklerine uygun seçenekler ve 100 mm yükseklik ayarı bulunuyor.',
    detail: 'Çalışma yüzeyi yüksekliği ile ayağın dış yüksekliği farklıdır. Makinenizle hizalama, rulo üst yüzeyi esas alınarak değerlendirilir.',
  },
];

export default function RollerSupportGuide({ whatsapp }: { whatsapp: string }) {
  const inquiry = (variant: string) => `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Merhaba Mekanikya, ${rollerSupportTitle} için ${variant} seçeneğiyle ilgileniyorum. Makine / kullanım: … Profil veya boru ölçüsü: … Çalışma yüksekliği: … Adet ve il/ilçe: …`)}`;
  return (
    <main id="main">
      <div className="wrap product-breadcrumb"><a href="/">Ana Sayfa</a><span>/</span><a href="/urunler">Ürünlerimiz</a><span>/</span><span>Rulolu dayama sehpası</span></div>
      <section className="page-banner wrap">
        <p className="overline">PROFİL KESİMİ VE MALZEME DESTEĞİ</p>
        <h1>{rollerSupportTitle}</h1>
        <p>Uzun profil ve boruları şerit testerenin girişinde veya çıkışında desteklemek için 2 metre rulolu sehpa talebinizi değerlendirelim. Yalnızca malzeme desteği veya tekrarlı kesimler için boy dayaması seçenekleriyle başlayabilirsiniz.</p>
        <p className="small-note">Sipariş üzerine üretim için değerlendirilen ürün taslağıdır; henüz üretilmiş bir Mekanikya modeli değildir. Ölçüler ve donanım, teknik uygunluk değerlendirmesiyle netleşir.</p>
        <a className="cta" href="#secenekler">İki seçeneği inceleyin</a>
      </section>

      <section className="wrap equipment-info" id="secenekler">
        <div className="section-head"><p className="overline">AYNI GÖVDE İÇİN İKİ SEÇENEK</p><h2>Destek mi, boy dayaması da mı?</h2><p>Her iki seçenek için hedef uzunluk 2 metredir. Yükseklik ayarı ve bağlantılar makinenize göre tasarlanır.</p></div>
        <div className="roller-criteria">
          <article><span className="roller-criterion-number">01</span><div><h3>Rulolu destek</h3><p>Profil ve borunun ilerletilmesi sırasında destek ihtiyacı için rulolu gövde ve ayak düzeni. Testere tablasıyla aynı çalışma seviyesine göre değerlendirilir.</p><a className="text-link" href={inquiry('rulolu destek')} target="_blank" rel="noopener noreferrer">Bu seçenek için WhatsApp'tan bilgi paylaşın →</a></div></article>
          <article><span className="roller-criterion-number">02</span><div><h3>Boy dayamalı destek</h3><p>Rulolu desteğe ek olarak tekrarlı kesimlerde konum belirlemek için devirmeli boy stoperi ve ölçü şeridi talebi. Stoperin kilitlenmesi ve kesim hattına göre ayarı birlikte ele alınır.</p><a className="text-link" href={inquiry('boy dayamalı destek')} target="_blank" rel="noopener noreferrer">Boy dayaması ihtiyacınızı paylaşın →</a></div></article>
        </div>
      </section>

      <section className="wrap equipment-info" id="referanslar">
        <div className="section-head"><p className="overline">MISUMI KAYNAKLI REFERANSLAR</p><h2>Parçaları ve çalışma fikrini inceleyin.</h2><p>Aşağıdaki bağlantılar farklı üreticilerin referans ürünlerine aittir; Mekanikya üretimi veya önerilen 2 metre sehpanın fotoğrafı değildir.</p></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
          {references.map((reference) => <figure className="roller-reference-card" key={reference.source} style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
            {/* Önceki yerel araştırma görselleri korunur; yayın izni doğrulanana kadar yalnızca geliştirmede gösterilir. */}
            {process.env.NODE_ENV === 'development' && <div className="roller-reference-image"><img src={reference.image} alt={reference.alt} loading="lazy" width={400} height={300} /><span>Üretici referansı · MISUMI · Yerel inceleme</span></div>}
            <figcaption className="roller-reference-copy"><p className="eyebrow">{reference.manufacturer}</p><h3>{reference.title}</h3><p>{reference.description}</p><p className="roller-reference-detail">{reference.detail}</p><a className="text-link" href={reference.source} target="_blank" rel="noopener noreferrer">Kaynak ürün ve teknik bilgileri açın ↗</a></figcaption>
          </figure>)}
        </div>
        <p className="roller-source-note">Kaynak ürünlerin ölçü ve taşıma değerleri Mekanikya sehpasına ait değildir. Referans ürünlerin fotoğraflarını kaynak bağlantılarından inceleyebilirsiniz.</p>
        <div className="roller-catalog-links"><span>Teknik çizimleri inceleyin</span><a href="https://us.misumi-ec.com/pdf/fa/2014/p1_1289.pdf" target="_blank" rel="noopener noreferrer">Ayarlanabilir konveyör ayakları ↗</a><a href="https://vn.misumi-ec.com/pdf/fa/2014/p1_1303.pdf" target="_blank" rel="noopener noreferrer">Açılır kapanır stoper mekanizması ↗</a></div>
        <p className="roller-source-note">MISUMI CSTP / CSTE, açılır kapanır konveyör durdurucusu için mekanizma referansıdır; ölçü şeritli hassas kesim dayaması olarak sunulmaz.</p>
      </section>

      <section className="wrap equipment-info" id="secim">
        <div className="section-head"><p className="overline">SEÇİM REHBERİ</p><h2>Makineye ve malzemeye göre.</h2></div>
        <div className="roller-criteria">
          <article><span className="roller-criterion-number">01</span><div><h3>Çalışma yüksekliği</h3><p>Zeminden testerenin malzeme taşıyan yüzeyine kadar olan ölçü esas alınır. Gerekli ayar aralığı bu ölçüye göre belirlenir.</p></div></article>
          <article><span className="roller-criterion-number">02</span><div><h3>Rulo genişliği ve aralığı</h3><p>Profil kesiti, en kısa parça ve yük dağılımı birlikte değerlendirilir. Rulo adedi ve aralığı, yalnızca sehpanın uzunluğuna bakılarak sabitlenmez.</p></div></article>
          <article><span className="roller-criterion-number">03</span><div><h3>Yük ve destek noktaları</h3><p>Toplam ağırlığın yanında yükün hangi noktalara geldiği önemlidir. Şase, rulolar ve ayaklar birlikte değerlendirilmeden kapasite belirtilmez.</p></div></article>
          <article><span className="roller-criterion-number">04</span><div><h3>Boy stoperi</h3><p>Tekrarlı kesim için istenen boy aralığı, makine bağlantısı ve stoperi devre dışı bırakma ihtiyacı belirlenir. Ölçü şeridi kesim hattına göre ayarlanır.</p></div></article>
        </div>
        <p className="roller-source-note">MISUMI seçim kılavuzunda ilgili konveyörler için sert tabanda 4 rulo, yumuşak tabanda 6 rulo desteği tarif edilir. Bu, farklı parçalar için rulo yerleşiminin ayrıca değerlendirilmesi gerektiğini gösterir. <a href="https://id.misumi-ec.com/pdf/fa/2014/p1_1165_001.pdf" target="_blank" rel="noopener noreferrer">Seçim kılavuzu ↗</a></p>
      </section>

      <section className="wrap equipment-info" id="teklif">
        <div className="section-head"><p className="overline">MERZİFON / AMASYA</p><h2>Makinenizi gösterin, ihtiyacı netleştirelim.</h2><p>Makinenin ve çalışma alanının fotoğrafını, profil/boru ölçülerini ve tercih ettiğiniz seçeneği WhatsApp'tan paylaşabilirsiniz. Özel ölçü talepleri de değerlendirilir.</p><p>Amasya, Merzifon, Çorum ve Samsun başta olmak üzere Türkiye genelinden taleplere açığız. Fiyat ve üretim planı teklif aşamasında ele alınır.</p><a className="cta" href={inquiry('teknik değerlendirme')} target="_blank" rel="noopener noreferrer">WhatsApp'tan ihtiyacınızı paylaşın</a></div>
      </section>
    </main>
  );
}
