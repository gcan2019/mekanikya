import { ArrowUpRight } from 'lucide-react';
import { factoryOptionImages } from '@/lib/factory-option-images';

const guides: Record<string, {intro:string; models:[string,string,string][]; criteria:[string,string][]}> = {
  'metal-tasima-kasasi': {
    intro:'Parçanın korunması, kasaya erişim ve işletme içindeki taşıma biçimine göre düzen seçin. Standart kasaların yanında palet arabaları, fileli kasalar ve parça sepetleri gibi çözümler de bu ailede ele alınır.',
    models:[
      ['Açık üstlü kasa','Sık parça alma ve yükleme','Üstten erişilen parçalar için açık gövde. İç ölçü, parça yerleşimi ve kaldırma ekipmanının yaklaşımı birlikte belirlenir.'],
      ['Bölmeli kasa','ÖZEL ÜRETİM TALEBİ','Parçaları ayrı gözlerde düzenlemek için iç bölme talep edebilirsiniz. Bölme yerleşimi ve hassas yüzeyler için temas koruması parçanıza göre değerlendirilir.'],
      ['Kapaklı kasa','ÖZEL ÜRETİM TALEBİ','Depolama ve sevkiyatta üst kapak talep edebilirsiniz. Kapak açılma yönü, kilit ve yükleme alanı kullanımınıza göre değerlendirilir.'],
      ['Ön erişimli kasa','Yandan parça alma','Ön panel veya açılır kapakla erişim talebi için. Açıklığın ölçüsü ve kapak düzeni parçanın alınma biçimine göre planlanır.'],
      ['İstif düzenli kasa','Depo alanını kullanma','Kasaları üst üste yerleştirme ihtiyacı için. Dolu kasa ağırlığı, kat sayısı ve taban bağlantıları ayrıca değerlendirilir.'],
      ['Forklift cepli ve vinç kulaklı kasa','Ağır parça taşıma','Döküm, pres veya talaşlı imalat parçalarının forklift veya tavan vinciyle güvenli taşınması ve istiflenmesi için takviyeli yapı.'],
      ['Fileli ve tel örgülü palet kasası','Hafif ve havalandırmalı parçalar','İçindeki parçaların dışarıdan net görünmesi ve havalandırma gerektiren yarı mamuller için tel örgülü veya fileli kasa düzeni.'],
      ['Parça yıkama ve taşıma sepeti','İşleme ve temizlik sonrası','Yıkama tanklarına uygun ölçülerde, delikli sac veya tel gözlü paslanmaz/çelik taşıma ve temizleme sepeti.'],
      ['Tekerlekli taşıma altlığı','Kasa ve palet arabası','Görsel, kasanın üzerine oturtulduğu ayrı tekerlekli altlığı gösterir. Fabrika içi hat besleme ve palet taşıma için tekerlekli şase.'],
    ],
    criteria:[
      ['İç ölçü ve parça','En büyük parçayı, bir kasadaki adedi ve korunması gereken yüzeyleri belirtin. Mevcut kasa veya parça fotoğrafı başlangıç için yeterlidir.'],
      ['Taşıma ekipmanı','Forklift, transpalet veya elle taşıma ihtiyacınızı paylaşın. Çatal girişi ve taban açıklıkları kullanılan ekipmana göre belirlenir.'],
      ['Yük ve istif','Kasanın içindeki toplam yük ile istif kat sayısını ayrı ayrı bildirin. Tekerlekli kullanımın istiflemeye uygunluğu ayrıca incelenir.'],
      ['Ortam ve erişim','İç/dış ortamı, yağ veya nem temasını ve parçaların nasıl alındığını anlatın. Gövde, kapak ve yüzey uygulaması buna göre görüşülür.'],
    ],
  },
  'talas-hurda-arabasi': {
    intro:'Toplanan malzeme kadar makinenin altındaki alan ve boşaltma yöntemi de araba düzenini belirler.',
    models:[
      ['Açık hazneli araba','Genel talaş ve hurda toplama','Atölye içindeki toplama noktaları için açık hazne. Kenar yüksekliği, tutamak ve tekerlekler kullanım alanına göre belirlenir.'],
      ['Alçak profilli araba','Makine altına yerleşim','Çıkış ağzının altında sınırlı yükseklik bulunan alanlar için. Makine altındaki açıklık ve arabayı çekmek için gereken mesafe birlikte incelenir.'],
      ['Süzme bölmeli araba','Sıvılı talaş toplama','Talaşla birlikte gelen sıvı için süzme bölmesi ve ayrı toplama alanı talebi. Sıvı türü, filtreleme ve tahliye düzeni ayrıca değerlendirilir.'],
      ['Devirme düzenli araba','Boşaltma kolaylığı','Hazneyi eğerek boşaltma ihtiyacı için. Devirme yöntemi, kilitleme ve yük dengesi projeye göre belirlenir.'],
      ['Bölmeli toplama arabası','Malzemeleri ayrı biriktirme','Farklı metal veya hurda türlerini ayrı toplamak için bölmeler. Gözlerin hacmi ve ayrı boşaltma ihtiyacı birlikte ele alınır.'],
    ],
    criteria:[
      ['Talaşın yapısı','Kısa, uzun, kıvrımlı veya keskin parçalı malzemeyi ve varsa sıvı temasını belirtin. Fotoğrafla başlayabilirsiniz.'],
      ['Hacim ve ağırlık','Toplama hacmi ile taşınacak ağırlık farklı bilgilerdir. Bildiğiniz değerleri ve yaklaşık boşaltma sıklığını paylaşın.'],
      ['Makine altı ölçüsü','Kullanılabilir en, boy ve yüksekliğin yanı sıra talaşın çıkış noktasını ve arabayı çıkaracağınız alanı gösterin.'],
      ['Boşaltma ve tahliye','Elle, devirerek veya başka ekipmanla boşaltma biçimini belirtin. Sıvı tahliyesi ve sızdırmazlık ihtiyacı ayrıca netleştirilir.'],
    ],
  },
  'sac-levha-tasima-arabasi': {
    intro:'Lazer kesim, pres ve montaj istasyonları arasındaki sac, plaka ve panellerin güvenli taşınması için düzen seçin.',
    models:[
      ['A Tipi dikey plaka arabası','Geniş sac ve plakalar','Büyük boyutlu sac levhaların eğilmeden, iki taraflı dik açıyla dengeli taşınması için A şase düzeni.'],
      ['Çok bölmeli sac ve panel arabası','Farklı kalınlık ve parçalar','Farklı iş emirlerine ait parçaları veya levhaları ayrı yuvalarda sıralamak için çoklu dikey bölmeler.'],
      ['Yüzey korumalı cam ve panel arabası','Hassas ve çizilmeye duyarlı','Boyalı, kaplamalı saclar, kompozit paneller veya cam için koruyucu temas profilleriyle donatılmış taşıma düzeni.'],
      ['Kavisli ve dairesel sac arabası','Bükülmüş parçalar','Silindir veya abkantta bükülmüş kavisli ve dairesel parçaların devrilmesini önleyen özel beşikli destekler.'],
      ['Kompakt atölye sac arabası','Lazer ve pres yanı taşıma','Dar geçişlerde kolay manevra yapabilen, tezgâh yanı besleme ve ara istasyon arabası.'],
    ],
    criteria:[
      ['Levha ebadı ve kalınlığı','Taşınacak en büyük sacın enini, boyunu ve et kalınlığını bildirin. İki taraflı yük dengesi buna göre belirlenir.'],
      ['Yüzey hassasiyeti','Malzemenin ham sac, boyalı levha, cam veya kompozit panel olup olmadığını belirtin; koruyucu kaplama buna göre seçilir.'],
      ['Taşıma yolu ve zemin','İstasyonlar arası mesafe, geçiş kapılarının genişliği ve zemin pürüzsüzlüğü tekerlek ve şase seçimini belirler.'],
      ['Yükleme yöntemi','Elle tek tek yükleme mi yoksa vinç/vakumla toplu yerleştirme mi yapılacağını paylaşın.'],
    ],
  },
  'abkant-kalip-arabasi': {
    intro:'Abkant pres tezgahı çevresinde kalıpların güvenli taşınması ve düzenli saklanması için uygun yapıyı seçin.',
    models:[
      ['Dikey yuvalı takım arabası','Üst ve alt kalıplar','Kalıpların profil kesitine uygun koruyucu yuvalarda dikey yerleşim. Kesit tipi ve parça boyuna göre yuva aralıkları belirlenir.'],
      ['Kademeli ve çift taraflı araba','Farklı boy ve açılar','Farklı büküm takımlarını iki taraflı dengeli yerleştirmek için A şase düzeni. Takımların devrilmesini önleyen emniyet pimleri.'],
      ['Parçalı kalıp raflı araba','Kısa ve fraksiyonel takımlar','Parçalı ve kısa abkant kalıplarını ayrı sıralamak için koruyucu tablalı raf düzeni.'],
      ['Ağır hizmet blok kalıp arabası','Ağır ve uzun kalıplar','Yüksek tonajlı büküm kalıplarının vinç veya forklift desteğiyle yüklenip taşınması için güçlendirilmiş çelik şase.'],
      ['Tezgâh yanı takım hazırlık arabası','Hızlı kalıp değişimi','Sıradaki iş emrinin takımlarını presin hemen yanına getiren kompakt ara istasyon arabası.'],
    ],
    criteria:[
      ['Kalıp tipi ve bağlantı kesiti','Amada, Promecam, Trumpf, Beyeler veya özel bağlantı tipini ve boy kesitini bildirin.'],
      ['Takım adedi ve en uzun parça','Saklanacak toplam kalıp adedini ve en uzun parçanın boyunu paylaşın; yuva aralıkları buna göre planlanır.'],
      ['Toplam takım ağırlığı','Kalıpların toplam ağırlığı şase et kalınlığını, rulmanlı tekerlek tipini ve fren ihtiyacını belirler.'],
      ['Pres yanı manevra alanı','Abkant tezgahının çevresindeki geçiş genişliği ve zemin durumunu paylaşın.'],
    ],
  },
  'tekstil-tasima-arabasi': {
    intro:'Kumaş topu, dikilmiş ürün veya parça tekstil aktarımı için atölye koşullarınıza uygun düzen seçin.',
    models:[
      ['Kumaş topu taşıma arabası','Rulo ve top kumaşlar','Kumaş toplarının ezilmeden ve yuvarlanmadan taşınması için beşikli ve kanallı yatay platform düzeni.'],
      ['Derin hazneli konfeksiyon arabası','Parça tekstil ve yarı mamul','Kesim ve dikim hatları arasında hafif kumaş parçalarını toplamak için pürüzsüz iç gövdeli derin hazne.'],
      ['Tel kafesli havalandırmalı araba','Nem tutmayan taşıma','Hafif gövde, yüksek görünürlük ve hava sirkülasyonu gerektiren tekstil ve çamaşırhane aktarımı için kafes düzeni.'],
      ['Çok katlı kumaş raf arabası','Ayrı desen ve partiler','Farklı partilere ait kumaşları veya yarı mamulleri ezilmeden sıralamak için çok katlı yatay raf yapısı.'],
      ['Kademeli ön panelli araba','Ergonomik parça alma','Operatörün arabanın dip kısmındaki parçalara rahatça uzanabilmesi için katlanır veya çıkarılabilir ön panelli gövde.'],
    ],
    criteria:[
      ['Tekstil türü ve malzeme formu','Kumaş topu, dikilmiş ürün veya parça kumaş olup olmadığını, varsa rulo boyu ve çapını paylaşın.'],
      ['Hacim ve ağırlık dengesi','Taşınacak malzemenin hafif fakat hacimli mi yoksa ağır mı olduğunu bildirin; şase buna göre hafifletilir veya güçlendirilir.'],
      ['İç yüzey ve temizlik','Kumaşın iplik atmasını ve lekelenmesini önleyecek elektrostatik boya, paslanmaz sac veya astar ihtiyacını açıklayın.'],
      ['Atölye içi hat geçişleri','Kesim masaları, dikiş bantları ve ütü istasyonları arasındaki dar koridor genişliklerini belirtin.'],
    ],
  },
  'rulolu-destek-sehpasi': {
    intro:'Testere, boru bükme ve profil işleme tezgâhlarında malzemenin sarkmadan ve dengeli beslenmesi için düzen seçin.',
    models:[
      ['Tek rulolu yükseklik ayarlı sehpa','Testere ve tezgâh besleme','Çalışma yüksekliği vidalı veya pimli mekanizmayla ayarlanabilen, genel amaçlı profil ve boru destek sehpası.'],
      ['V Yataklı boru destek sehpası','Yuvarlak boru ve miller','Boru ve yuvarlak malzemelerin sağa sola kaymasını önleyen, merkezleme sağlayan açılı çift rulolu başlık.'],
      ['Geniş tablalı profil sehpası','Geniş kutu profil ve lama','Geniş yüzeyli kutu profiller, NPU/NPI profiller veya paket malzemeler için geniş temas rulolu destek.'],
      ['Ağır sanayi tipi sabit sehpa','Dolu mil ve ağır borular','Büyük kesitli ve ağır sanayi profillerinin kesim hatlarında güvenle taşınması için takviyeli ayak yapısı.'],
      ['Bilyalı çok yönlü transfer sehpası','Çok eksenli hareket','Malzemenin tezgâh girişinde hem boyuna sürülmesi hem de ekseninde döndürülmesi için bilyalı transfer tablası.'],
    ],
    criteria:[
      ['Malzeme kesiti ve formu','Boru çapı, kutu profil kesiti veya lama ölçüsünü ve malzeme ağırlığını paylaşın.'],
      ['Tezgâh çalışma yüksekliği','Şerit testere veya profil makinesinin malzeme besleme tablası yüksekliğini ve gereken ayar aralığını belirtin.'],
      ['Malzeme boyu ve sehpa sayısı','İşlenen en uzun çubuğu ve hatta yerleştirilecek destek sayısını paylaşın; aralıklar buna göre planlanır.'],
      ['Doğrusal veya çok eksenli hareket','Malzemenin yalnızca ileri sürülmesi mi yoksa açı verilerek döndürülmesi mi gerektiğini açıklayın.'],
    ],
  },
  'tup-tasima-kafesi': {
    intro:'Oksijen, asetilen, argon ve kaynak gazı tüplerinin atölye ve sahada güvenli taşınması ve depolanması için düzen seçin.',
    models:[
      ['Tekli ve çiftli tüp arabası','Atölye içi mobil kaynak','Kaynak makinelerinin yanına tekli veya çiftli tüp taşımak için emniyet zincirli ve kauçuk tekerlekli araba.'],
      ['Forklift cepli çoklu tüp kafesi','Şantiye ve saha taşıma','4 ila 12 tüpün şantiye veya fabrika sahasında forklift ve tavan vinciyle güvenle taşınması için takviyeli kafes.'],
      ['Sabit tüp depolama kabini','Açık alan propan/LPG muhafazası','Örnek görsel, 20 kg propan/LPG tüpü için zemin bağlantılı ve taban havalandırmalı dış ortam kabinini gösterir. Oksijen, argon veya çoklu tüp kabinleri özel üretim talebi olarak üretilir.'],
      ['Rampa girişli tüp kafesi','Zeminden kolay yükleme','Ağır sanayi tüplerinin kaldırılmadan, yuvarlanarak kafes içine kolayca sokulabilmesi için menteşeli taban rampası.'],
      ['Kombine kaynak seti arabası','Oksijen ve LPG ikili taşıma','Görsel, oksijen ve gaz tüpünü birlikte taşımaya uygun çiftli şaseyi gösterir. Hortum askısı, manometre muhafazası veya nozul kutusu ihtiyaca göre özel üretim talebi olarak eklenir.'],
    ],
    criteria:[
      ['Tüp cinsi ve dış ebatları','Oksijen, asetilen, argon tüpünün çapını ve koruma başlığı dahil toplam yüksekliğini belirtin.'],
      ['Tüp adedi ve yerleşim','Kafeste aynı anda kaç tüp bulunacağını ve tek sıra mı çift sıra mı yerleşim istediğinizi bildirin.'],
      ['Kaldırma ve taşıma yöntemi','Elle sürme, forklift çatalları veya vinç mapalarıyla kaldırma ihtiyacını netleştirin.'],
      ['İş güvenliği ve kilit talebi','Sabit depolamada kilitli kapak, tüp sabitleme zinciri veya yangın yönetmeliğine uygunluk taleplerinizi paylaşın.'],
    ],
  },
};

import type { ProductOptionItem } from '@/lib/site-content';

export function hasFactoryGuide(id: string, customOptions?: ProductOptionItem[]) {
  return Boolean(guides[id] || (customOptions && customOptions.length > 0));
}

export default function FactoryProductOptions({ id, customOptions }: { id: string; customOptions?: ProductOptionItem[] }) {
  const guide = guides[id];
  const hasCustom = Boolean(customOptions && customOptions.length > 0);
  if (!guide && !hasCustom) return null;

  const models: readonly [string, string, string, string?, string?][] = hasCustom && customOptions
    ? customOptions.map((opt) => [
        opt.title,
        opt.isCustomRequest ? 'ÖZEL ÜRETİM TALEBİ' : (opt.subtitle || 'DÜZEN SEÇENEĞİ'),
        opt.desc,
        opt.image?.src,
        opt.image?.alt,
      ] as const)
    : (guide?.models.map(([title, tag, text]) => {
        const image = factoryOptionImages[title];
        return [title, tag, text, image?.src, image?.alt] as const;
      }) ?? []);

  const intro = guide?.intro || 'Kullanım amacınıza ve atölye koşullarınıza en uygun düzeni birlikte belirleyelim.';
  const criteria = guide?.criteria || [
    ['İhtiyaç ve ölçüler', 'Parçanın ebatlarını, taşınacak yükü ve kullanım koşullarını paylaşın.'],
    ['Taşıma ve kullanım', 'Manuel çekme, forklift, transpalet veya hat besleme ihtiyacınızı belirtin.'],
    ['Zemin ve geçişler', 'Geçiş genişliği ve zemin durumuna göre tekerlek ve şase tasarımı belirlenir.'],
  ];

  return (
    <>
      <section className="section wrap profile-cart-options" id="modeller">
        <div className="section-head">
          <p className="overline">DÜZEN SEÇENEKLERİ</p>
          <h2>Kullanımınıza uygun yapıyı seçelim.</h2>
          <p>{intro}</p>
        </div>
        <div className="profile-cart-grid">
          {models.map(([title, tag, text, imgSrc, imgAlt]) => (
            <article className="profile-cart-card" key={title}>
              {imgSrc && (
                <figure className="profile-cart-image factory-option-photo">
                  <img src={imgSrc} alt={`Mekanikya ${title}`} width={600} height={450} loading="lazy" />
                  <figcaption>Mekanikya örnek ürün düzeni</figcaption>
                </figure>
              )}
              <div className="profile-cart-copy">
                <p className="overline">{tag}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="text-link" href="#teklif">
                  Teklif talebine geç <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="small-note">
          Bu düzenler özel üretim talebinizi tarif etmenize yardımcı olur. Birlikte uygulanabilecek seçenekler, kapasite ve üretim uygunluğu teknik değerlendirmeyle netleşir.
        </p>
      </section>
      <section className="wrap profile-cart-guide" id="secim">
        <div className="section-head">
          <p className="overline">SEÇİM REHBERİ</p>
          <h2>Fotoğraf veya numuneyle başlayabiliriz.</h2>
          <p>Teknik çizim zorunlu değildir. Bildiğiniz bilgileri paylaşın; eksik ayrıntıları birlikte belirleyelim.</p>
        </div>
        <div className="profile-cart-factors">
          {criteria.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <a className="text-link" href="/fabrika-ici-tasima">
          Fabrika içi taşıma ürünlerini incele <ArrowUpRight size={18} />
        </a>
      </section>
    </>
  );
}

