import type { ProductOptionItem } from './site-content';
import { factoryOptionImages } from './factory-option-images';

type RawModel = {
  title: string;
  subtitle: string;
  desc: string;
  isCustomRequest?: boolean;
};

const defaultOptionsByProduct: Record<string, RawModel[]> = {
  'metal-tasima-kasasi': [
    {
      title: 'Açık üstlü kasa',
      subtitle: 'Sık parça alma ve yükleme',
      desc: 'Üstten erişilen parçalar için açık gövde. İç ölçü, parça yerleşimi ve kaldırma ekipmanının yaklaşımı birlikte belirlenir.',
    },
    {
      title: 'Bölmeli kasa',
      subtitle: 'ÖZEL ÜRETİM TALEBİ',
      desc: 'Parçaları ayrı gözlerde düzenlemek için iç bölme talep edebilirsiniz. Bölme yerleşimi ve hassas yüzeyler için temas koruması parçanıza göre değerlendirilir.',
      isCustomRequest: true,
    },
    {
      title: 'Kapaklı kasa',
      subtitle: 'ÖZEL ÜRETİM TALEBİ',
      desc: 'Depolama ve sevkiyatta üst kapak talep edebilirsiniz. Kapak açılma yönü, kilit ve yükleme alanı kullanımınıza göre değerlendirilir.',
      isCustomRequest: true,
    },
    {
      title: 'Ön erişimli kasa',
      subtitle: 'Yandan parça alma',
      desc: 'Ön panel veya açılır kapakla erişim talebi için. Açıklığın ölçüsü ve kapak düzeni parçanın alınma biçimine göre planlanır.',
    },
    {
      title: 'İstif düzenli kasa',
      subtitle: 'Depo alanını kullanma',
      desc: 'Kasaları üst üste yerleştirme ihtiyacı için. Dolu kasa ağırlığı, kat sayısı ve taban bağlantıları ayrıca değerlendirilir.',
    },
    {
      title: 'Forklift cepli ve vinç kulaklı kasa',
      subtitle: 'Ağır parça taşıma',
      desc: 'Döküm, pres veya talaşlı imalat parçalarının forklift veya tavan vinciyle güvenli taşınması ve istiflenmesi için takviyeli yapı.',
    },
    {
      title: 'Fileli ve tel örgülü palet kasası',
      subtitle: 'Hafif ve havalandırmalı parçalar',
      desc: 'İçindeki parçaların dışarıdan net görünmesi ve havalandırma gerektiren yarı mamuller için tel örgülü veya fileli kasa düzeni.',
    },
    {
      title: 'Parça yıkama ve taşıma sepeti',
      subtitle: 'İşleme ve temizlik sonrası',
      desc: 'Yıkama tanklarına uygun ölçülerde, delikli sac veya tel gözlü paslanmaz/çelik taşıma ve temizleme sepeti.',
    },
    {
      title: 'Tekerlekli taşıma altlığı',
      subtitle: 'Kasa ve palet arabası',
      desc: 'Görsel, kasanın üzerine oturtulduğu ayrı tekerlekli altlığı gösterir. Fabrika içi hat besleme ve palet taşıma için tekerlekli şase.',
    },
  ],

  'talas-hurda-arabasi': [
    {
      title: 'Açık hazneli araba',
      subtitle: 'Genel talaş ve hurda toplama',
      desc: 'Atölye içindeki toplama noktaları için açık hazne. Kenar yüksekliği, tutamak ve tekerlekler kullanım alanına göre belirlenir.',
    },
    {
      title: 'Alçak profilli araba',
      subtitle: 'Makine altına yerleşim',
      desc: 'Çıkış ağzının altında sınırlı yükseklik bulunan alanlar için. Makine altındaki açıklık ve arabayı çekmek için gereken mesafe birlikte incelenir.',
    },
    {
      title: 'Süzme bölmeli araba',
      subtitle: 'Sıvılı talaş toplama',
      desc: 'Talaşla birlikte gelen sıvı için süzme bölmesi ve ayrı toplama alanı talebi. Sıvı türü, filtreleme ve tahliye düzeni ayrıca değerlendirilir.',
    },
    {
      title: 'Devirme düzenli araba',
      subtitle: 'Boşaltma kolaylığı',
      desc: 'Hazneyi eğerek boşaltma ihtiyacı için. Devirme yöntemi, kilitleme ve yük dengesi projeye göre belirlenir.',
    },
    {
      title: 'Bölmeli toplama arabası',
      subtitle: 'Malzemeleri ayrı biriktirme',
      desc: 'Farklı metal veya hurda türlerini ayrı toplamak için bölmeler. Gözlerin hacmi ve ayrı boşaltma ihtiyacı birlikte ele alınır.',
    },
  ],

  'profil-tasima-arabasi': [
    {
      title: 'Modüler ve bölmeli şase',
      subtitle: 'PROFİLLERİ AYRI TUTUN',
      desc: 'Farklı profil ve kesitleri ayrı gözlerde düzenlemek için. Bölme aralıkları ve destek yüksekliği malzemenizin boyuna göre değerlendirilir.',
    },
    {
      title: 'Açık platform',
      subtitle: 'SERBEST YÜKLEME ALANI',
      desc: 'Uzun paketleri geniş bir taban üzerinde taşımak için. Çıkarılabilir dikme veya bölme ihtiyacı varsa yükleme biçimine göre birlikte planlanır.',
    },
    {
      title: 'İki yandan tutamaklı',
      subtitle: 'UZUN MALZEME AKTARIMI',
      desc: 'İki yanda tutamak bulunan açık uçlu düzen. Malzemenin çıkıntısı, koridordaki dönüş alanı ve tutamak yüksekliği birlikte ele alınır.',
    },
    {
      title: 'Boru ve uzun malzeme arabası',
      subtitle: 'BORU, ÇITA VE PAKETLER',
      desc: 'Yan destekli platform üzerinde boru, çıta ve uzun paket taşıma ihtiyacı için. Yuvarlak malzemenin yuvarlanmasını önleyecek destek ve sabitleme düzeni ayrıca belirlenir.',
    },
    {
      title: 'Çelik platformlu araba',
      subtitle: 'ATÖLYE İÇİ TAŞIMA',
      desc: 'Profil paketleri ve uzun malzemelerin istasyonlar arasında taşınması için. Şase, platform ve tekerlekler toplam yük ve zemin koşullarına göre değerlendirilir.',
    },
  ],

  'sac-levha-tasima-arabasi': [
    {
      title: 'A Tipi dikey plaka arabası',
      subtitle: 'Geniş sac ve plakalar',
      desc: 'Büyük boyutlu sac levhaların eğilmeden, iki taraflı dik açıyla dengeli taşınması için A şase düzeni.',
    },
    {
      title: 'Çok bölmeli sac ve panel arabası',
      subtitle: 'Farklı kalınlık ve parçalar',
      desc: 'Farklı iş emirlerine ait parçaları veya levhaları ayrı yuvalarda sıralamak için çoklu dikey bölmeler.',
    },
    {
      title: 'Yüzey korumalı cam ve panel arabası',
      subtitle: 'Hassas ve çizilmeye duyarlı',
      desc: 'Boyalı, kaplamalı saclar, kompozit paneller veya cam için koruyucu temas profilleriyle donatılmış taşıma düzeni.',
    },
    {
      title: 'Kavisli ve dairesel sac arabası',
      subtitle: 'Bükülmüş parçalar',
      desc: 'Silindir veya abkantta bükülmüş kavisli ve dairesel parçaların devrilmesini önleyen özel beşikli destekler.',
    },
    {
      title: 'Kompakt atölye sac arabası',
      subtitle: 'Lazer ve pres yanı taşıma',
      desc: 'Dar geçişlerde kolay manevra yapabilen, tezgâh yanı besleme ve ara istasyon arabası.',
    },
  ],

  'abkant-kalip-arabasi': [
    {
      title: 'Dikey yuvalı takım arabası',
      subtitle: 'Üst ve alt kalıplar',
      desc: 'Kalıpların profil kesitine uygun koruyucu yuvalarda dikey yerleşim. Kesit tipi ve parça boyuna göre yuva aralıkları belirlenir.',
    },
    {
      title: 'Kademeli ve çift taraflı araba',
      subtitle: 'Farklı boy ve açılar',
      desc: 'Farklı büküm takımlarını iki taraflı dengeli yerleştirmek için A şase düzeni. Takımların devrilmesini önleyen emniyet pimleri.',
    },
    {
      title: 'Parçalı kalıp raflı araba',
      subtitle: 'Kısa ve fraksiyonel takımlar',
      desc: 'Parçalı ve kısa abkant kalıplarını ayrı sıralamak için koruyucu tablalı raf düzeni.',
    },
    {
      title: 'Ağır hizmet blok kalıp arabası',
      subtitle: 'Ağır ve uzun kalıplar',
      desc: 'Yüksek tonajlı büküm kalıplarının vinç veya forklift desteğiyle yüklenip taşınması için güçlendirilmiş çelik şase.',
    },
    {
      title: 'Tezgâh yanı takım hazırlık arabası',
      subtitle: 'Hızlı kalıp değişimi',
      desc: 'Sıradaki iş emrinin takımlarını presin hemen yanına getiren kompakt ara istasyon arabası.',
    },
  ],

  'tekstil-tasima-arabasi': [
    {
      title: 'Kumaş topu taşıma arabası',
      subtitle: 'Rulo ve top kumaşlar',
      desc: 'Kumaş toplarının ezilmeden ve yuvarlanmadan taşınması için beşikli ve kanallı yatay platform düzeni.',
    },
    {
      title: 'Derin hazneli konfeksiyon arabası',
      subtitle: 'Parça tekstil ve yarı mamul',
      desc: 'Kesim ve dikim hatları arasında hafif kumaş parçalarını toplamak için pürüzsüz iç gövdeli derin hazne.',
    },
    {
      title: 'Tel kafesli havalandırmalı araba',
      subtitle: 'Nem tutmayan taşıma',
      desc: 'Hafif gövde, yüksek görünürlük ve hava sirkülasyonu gerektiren tekstil ve çamaşırhane aktarımı için kafes düzeni.',
    },
    {
      title: 'Çok katlı kumaş raf arabası',
      subtitle: 'Ayrı desen ve partiler',
      desc: 'Farklı partilere ait kumaşları veya yarı mamulleri ezilmeden sıralamak için çok katlı yatay raf yapısı.',
    },
    {
      title: 'Kademeli ön panelli araba',
      subtitle: 'Ergonomik parça alma',
      desc: 'Operatörün arabanın dip kısmındaki parçalara rahatça uzanabilmesi için katlanır veya çıkarılabilir ön panelli gövde.',
    },
  ],

  'rulolu-destek-sehpasi': [
    {
      title: 'Tek rulolu yükseklik ayarlı sehpa',
      subtitle: 'Testere ve tezgâh besleme',
      desc: 'Çalışma yüksekliği vidalı veya pimli mekanizmayla ayarlanabilen, genel amaçlı profil ve boru destek sehpası.',
    },
    {
      title: 'V Yataklı boru destek sehpası',
      subtitle: 'Yuvarlak boru ve miller',
      desc: 'Boru ve yuvarlak malzemelerin sağa sola kaymasını önleyen, merkezleme sağlayan açılı çift rulolu başlık.',
    },
    {
      title: 'Geniş tablalı profil sehpası',
      subtitle: 'Geniş kutu profil ve lama',
      desc: 'Geniş yüzeyli kutu profiller, NPU/NPI profiller veya paket malzemeler için geniş temas rulolu destek.',
    },
    {
      title: 'Ağır sanayi tipi sabit sehpa',
      subtitle: 'Dolu mil ve ağır borular',
      desc: 'Büyük kesitli ve ağır sanayi profillerinin kesim hatlarında güvenle taşınması için takviyeli ayak yapısı.',
    },
    {
      title: 'Bilyalı çok yönlü transfer sehpası',
      subtitle: 'Çok eksenli hareket',
      desc: 'Malzemenin tezgâh girişinde hem boyuna sürülmesi hem de ekseninde döndürülmesi için bilyalı transfer tablası.',
    },
  ],

  'tup-tasima-kafesi': [
    {
      title: 'Tekli ve çiftli tüp arabası',
      subtitle: 'Atölye içi mobil kaynak',
      desc: 'Kaynak makinelerinin yanına tekli veya çiftli tüp taşımak için emniyet zincirli ve kauçuk tekerlekli araba.',
    },
    {
      title: 'Forklift cepli çoklu tüp kafesi',
      subtitle: 'Şantiye ve saha taşıma',
      desc: '4 ila 12 tüpün şantiye veya fabrika sahasında forklift ve tavan vinciyle güvenle taşınması için takviyeli kafes.',
    },
    {
      title: 'Sabit tüp depolama kabini',
      subtitle: 'Açık alan propan/LPG muhafazası',
      desc: 'Örnek görsel, 20 kg propan/LPG tüpü için zemin bağlantılı ve taban havalandırmalı dış ortam kabinini gösterir. Oksijen, argon veya çoklu tüp kabinleri özel üretim talebi olarak üretilir.',
    },
    {
      title: 'Rampa girişli tüp kafesi',
      subtitle: 'Zeminden kolay yükleme',
      desc: 'Ağır sanayi tüplerinin kaldırılmadan, yuvarlanarak kafes içine kolayca sokulabilmesi için menteşeli taban rampası.',
    },
    {
      title: 'Kombine kaynak seti arabası',
      subtitle: 'Oksijen ve LPG ikili taşıma',
      desc: 'Görsel, oksijen ve gaz tüpünü birlikte taşımaya uygun çiftli şaseyi gösterir. Hortum askısı, manometre muhafazası veya nozul kutusu ihtiyaca göre özel üretim talebi olarak eklenir.',
    },
  ],
};

export function getDefaultProductOptions(productId: string): ProductOptionItem[] {
  const models = defaultOptionsByProduct[productId];
  if (!models) return [];

  return models.map((m) => {
    const matchedImage = factoryOptionImages[m.title];
    return {
      title: m.title,
      subtitle: m.subtitle,
      desc: m.desc,
      isCustomRequest: m.isCustomRequest === true || m.subtitle === 'ÖZEL ÜRETİM TALEBİ',
      image: matchedImage ? { src: matchedImage.src, alt: matchedImage.alt } : undefined,
    };
  });
}
