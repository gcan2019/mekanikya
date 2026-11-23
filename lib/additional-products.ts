import { factoryProducts } from './factory-products.ts';
export type InquiryField = {id:string;label:string;kind:'text'|'number';unit?:string;hint:string};
export type InquiryProduct = {id:string;href:string;title:string;category:string;description:string;details:string[];uses:string[];checks:{title:string;text:string}[];fields:InquiryField[];note:string;source:string;status?:'active'|'inactive'};
export const additionalProducts:InquiryProduct[] = [
...factoryProducts,
{
  "id": "motorlu-boru-dondurme-sehpasi",
  "title": "Motorlu boru ve silindir döndürme sehpası (Kaynak çevirici)",
  "category": "Mekanik hareket ve kaynak pozisyonerleri",
  "description": "Boru, tank ve silindirik parçaları dairesel kaynak, kesim ve taşlama sırasında istenen devirde döndürmek için motorlu çevirici sehpa. Ayak pedallı hız ayarı, ayarlanabilir rulo eksen mesafesi ve parça tonajına göre teklif alın.",
  "details": [
    "Ayarlanabilir rulo aralığı (farklı boru çapları)",
    "Ayak pedallı hız ayarı (eller serbest kaynak)",
    "Poliüretan kaplı çizilmez veya çelik rulo seçeneği"
  ],
  "uses": [
    "Boru alın kaynağı (TIG / MIG / Gazaltı)",
    "Silindirik tank ve flanş kaynak işlemleri",
    "Dairesel kesim, taşlama, markalama ve kaplama"
  ],
  "checks": [
    {
      "title": "Boru çapı ve boyu",
      "text": "Döndürülecek boru veya tankın minimum/maksimum dış çapını ve boyunu belirtin. Rulo eksen aralığı ve şasi genişliği parçanın dengede kalması için buna göre ayarlanır."
    },
    {
      "title": "Ağırlık ve motor torku",
      "text": "İş parçasının toplam ağırlığını ve varsa flanş/dirsek gibi eksantrik (dengesiz) yük durumunu paylaşın. Redüktörlü motor gücü ve tork aktarımı buna göre hesaplanır."
    },
    {
      "title": "Hız kontrolü ve kumanda",
      "text": "Kaynağa uygun dönüş hızı aralığını ve ayak pedalı, ileri/geri yön şalteri ya da masaüstü potansiyometre kontrol ihtiyacınızı belirtin."
    }
  ],
  "fields": [
    {
      "id": "pipeDiameter",
      "label": "Boru / silindir dış çapı",
      "kind": "text",
      "hint": "Örn. Ø50 mm - Ø500 mm"
    },
    {
      "id": "maxWeight",
      "label": "Maksimum parça ağırlığı",
      "kind": "number",
      "unit": "kg",
      "hint": "Döndürülecek iş parçasının ağırlığı"
    },
    {
      "id": "pipeLength",
      "label": "İş parçası boyu ve set düzeni",
      "kind": "text",
      "hint": "Tek tahrikli ünite mi, avara destek sehpalı takım mı?"
    },
    {
      "id": "rollerType",
      "label": "Rulo kaplama tercihi",
      "kind": "text",
      "hint": "Poliüretan kaplı (çizilmez/tutucu) veya tırtıllı çelik"
    },
    {
      "id": "speedControl",
      "label": "Hız ve kumanda ihtiyacı",
      "kind": "text",
      "hint": "Ayak pedallı hız ayarı, çift yön vb."
    }
  ],
  "note": "Making Things Move tork ve sürtünme hesaplarıyla boyutlandırılır; tahrikli ana ünite tek başına veya avara (motorsuz) destek sehpasıyla eşleştirilebilir.",
  "source": "https://kistler-machine.com/en/products/welding-turntables-rotators/",
  "href": "/motorlu-boru-dondurme-sehpasi",
  "status": "inactive"
},
{
  "id": "sac-levha-tasima-arabasi",
  "title": "Sac, levha, cam ve panel taşıma arabaları",
  "category": "Atölye taşıma ekipmanları",
  "description": "Lazer kesim, pres ve montaj istasyonları arasında sac, levha ve panelleri bükülmeden ve çizilmeden taşımak için A tipi dikey veya bölmeli taşıma arabası. Plaka ebadı ve zemin koşullarınıza göre teklif alın.",
  "details": [
    "Levha ebadına göre tasarım",
    "Yatay veya dikey yerleşim talebi",
    "Özel ölçü ve temas yüzeyi koruması"
  ],
  "uses": [
    "Sac ve lazer kesim atölyeleri",
    "Panel, cam ve levha hazırlama alanları",
    "Üretim içi güvenli malzeme taşıma"
  ],
  "checks": [
    {
      "title": "Levha ve yüzey",
      "text": "En büyük levha ölçüsünü ve yüzeyinin çizilmeye duyarlı olup olmadığını belirtin. Temas yüzeyi ve destek aralığı buna göre değerlendirilir."
    },
    {
      "title": "Yük ve yerleşim",
      "text": "Bir seferde taşınacak levha adedi ile toplam ağırlığı paylaşın. Tek veya çift taraflı yerleşim ve bölme ihtiyacınızı konuşalım."
    },
    {
      "title": "Atölyedeki hareket",
      "text": "Kapı genişliği, koridorlar ve zemin koşulları tekerlek ve dış ölçü seçiminde dikkate alınır."
    }
  ],
  "fields": [
    {
      "id": "sheetSize",
      "label": "En büyük levha ölçüsü",
      "kind": "text",
      "hint": "En × boy × kalınlık, mm"
    },
    {
      "id": "load",
      "label": "Toplam taşıma yükü",
      "kind": "number",
      "hint": "Levhaların toplam ağırlığı",
      "unit": "kg"
    },
    {
      "id": "layout",
      "label": "Yerleşim ve yüzey tercihi",
      "kind": "text",
      "hint": "Dikey / yatay, bölme ve yüzey koruma ihtiyacı"
    },
    {
      "id": "clearance",
      "label": "En dar geçiş genişliği",
      "kind": "number",
      "hint": "Kapı veya koridor genişliği",
      "unit": "mm"
    }
  ],
  "note": "Gövde, denge, tekerlek ve levha sabitleme düzeni kullanım bilgileriyle netleştirilir. Standart kapasite taahhüdü verilmez.",
  "source": "https://www.formkar.com.tr/urunler/dairesel-sac-tasima-arabasi/",
  "href": "/sac-levha-tasima-arabasi",
  "status": "active"
},
{
  "id": "talas-hurda-arabasi",
  "title": "Talaş, hurda ve fire arabaları",
  "category": "Fabrika içi taşıma ve malzeme yönetimi",
  "description": "CNC, torna, freze ve pres çevresindeki talaş ve üretim artıklarını toplamak için tezgâh altı ölçüye uygun araba. Süzgeçli hazne, sıvı tahliyesi ve devirmeli boşaltma seçenekleriyle teklif hazırlayalım.",
  "details": [
    "Tezgâh altı çıkış kotuna uygun ölçü",
    "Sıvı süzme ve tahliye musluğu talebi",
    "Forkliftle devirmeli veya elle boşaltma"
  ],
  "uses": [
    "CNC işleme merkezleri",
    "Torna ve freze atölyeleri",
    "Pres fire ve hurda toplama noktaları"
  ],
  "checks": [
    {
      "title": "Talaşın yapısı",
      "text": "Kısa veya uzun talaş, keskin hurda ve beraberindeki soğutma sıvısını belirtin. Kasa ve taban yapısını malzemeye göre değerlendirelim."
    },
    {
      "title": "Yerleşim ve hacim",
      "text": "Tezgâh çıkışının yerden yüksekliğini, kullanılabilir alanı ve toplama hacmini paylaşın. Hacim ile taşıma yükü ayrı değerlendirilir."
    },
    {
      "title": "Boşaltma yöntemi",
      "text": "Elle boşaltma, devirmeli kullanım veya başka ekipmanla aktarım talebinizi belirtin. Sıvı tahliyesi gerekiyorsa bunu da ekleyin."
    }
  ],
  "fields": [
    {
      "id": "material",
      "label": "Talaş / hurda türü",
      "kind": "text",
      "hint": "Metal türü, talaş biçimi ve sıvı durumu"
    },
    {
      "id": "volume",
      "label": "İstenen toplama hacmi",
      "kind": "number",
      "hint": "Biliyorsanız belirtin",
      "unit": "litre"
    },
    {
      "id": "load",
      "label": "Biriktirilecek toplam yük",
      "kind": "number",
      "hint": "Talaş ve sıvı dahil",
      "unit": "kg"
    },
    {
      "id": "space",
      "label": "Tezgâh altındaki kullanılabilir alan",
      "kind": "text",
      "hint": "En × boy × yükseklik, mm"
    },
    {
      "id": "emptying",
      "label": "Boşaltma şekli",
      "kind": "text",
      "hint": "Elle, devirmeli veya diğer"
    }
  ],
  "note": "Devirmeli mekanizma, tahliye ve sızdırmazlık talebi ayrıca değerlendirilir; kesin kapasite ve özellikler proje değerlendirmesiyle netleşir.",
  "source": "https://sarigolkonveyor.com/tr/urunlerimiz/talas-tahliye-ve-depolama-sistemleri/talas-arabasi/",
  "href": "/talas-hurda-arabasi",
  "status": "active"
},
{
  "id": "metal-tasima-kasasi",
  "title": "Metal taşıma, istif kasaları ve malzeme sepetleri",
  "category": "Depolama ve fabrika içi taşıma",
  "description": "Döküm, pres ve talaşlı imalat parçalarını üretim, depo ve sevkiyat arasında taşımak için özel ölçü metal kasa ve sepetler. İstif ayakları, ön erişim kapağı, bölmeler, palet şaseleri ve forklift ceplerini ihtiyacınıza göre değerlendirelim.",
  "details": [
    "Parçaya göre iç ölçü",
    "Forklift / transpalet erişimi",
    "Kapak ve bölme talebi"
  ],
  "uses": [
    "Fabrika içi parça taşıma",
    "Depo ve sevkiyat hazırlığı",
    "Metal ve otomotiv parçası muhafazası"
  ],
  "checks": [
    {
      "title": "Taşınacak parçalar",
      "text": "Parçaların ölçülerini, bir kasaya yerleştirilecek adedi ve toplam ağırlığı paylaşın. Hassas yüzeyler için ayırıcı veya destek ihtiyacını belirtin."
    },
    {
      "title": "Taşıma ekipmanı",
      "text": "Forklift veya transpalet kullanımınızı ve çatal ölçülerini bildirin. Kasa altındaki giriş boşlukları ekipmanınıza göre ele alınır."
    },
    {
      "title": "İstifleme ve ortam",
      "text": "Dolu kasaları üst üste koyma ihtiyacınızı, kat sayısını ve iç/dış ortam koşullarını açıklayın. İstif uygunluğu ayrıca değerlendirilir."
    }
  ],
  "fields": [
    {
      "id": "innerSize",
      "label": "İstenen iç ölçü",
      "kind": "text",
      "hint": "En × boy × yükseklik, mm"
    },
    {
      "id": "load",
      "label": "Kasa başına yük",
      "kind": "number",
      "hint": "Taşınan parçaların toplam ağırlığı",
      "unit": "kg"
    },
    {
      "id": "parts",
      "label": "Parça ve yerleşim bilgisi",
      "kind": "text",
      "hint": "Parça türü, ölçüsü, bölme veya kapak ihtiyacı"
    },
    {
      "id": "handling",
      "label": "Taşıma ve istifleme yöntemi",
      "kind": "text",
      "hint": "Forklift / transpalet, istif katı ve ortam"
    }
  ],
  "note": "Taşıma kapasitesi ve dolu istifleme uygunluğu tasarım değerlendirmesiyle belirlenir. Standart kapasite taahhüdü verilmez.",
  "source": "https://www.eksenraf.com/metal-tasima-kasasi/",
  "href": "/metal-tasima-kasasi",
  "status": "active"
},
{
  "id": "rulolu-destek-sehpasi",
  "title": "Rulolu boru ve profil destek sehpaları",
  "category": "Atölye yardımcı ekipmanları",
  "description": "Uzun boru ve profilleri işleme sırasında desteklemek için rulolu sehpa talebinizi paylaşın. Çalışma yüksekliği, malzeme kesiti ve besleme yönüne göre birlikte değerlendirelim.",
  "details": [
    "Çalışma yüksekliğine göre",
    "Rulo ve temas biçimi seçimi",
    "Boru / profil desteği"
  ],
  "uses": [
    "Şerit testere giriş ve çıkışı",
    "Boru ve profil hazırlama",
    "Uzun malzemeli atölye işleri"
  ],
  "checks": [
    {
      "title": "Malzeme ve hareket",
      "text": "Boru çapını veya profil kesitini, uzunluğunu ve malzemenin ilerleme yönünü belirtin. Düz rulo ya da farklı destek başlığı ihtiyacı buna göre değerlendirilir."
    },
    {
      "title": "Çalışma yüksekliği",
      "text": "Makinenin malzeme alma yüksekliğini ve gerekli ayar aralığını paylaşın. Destek noktasının makineyle hizası önemlidir."
    },
    {
      "title": "Destek noktaları",
      "text": "Toplam malzeme ağırlığını ve kullanılacak sehpa sayısını belirtin. Yük dağılımı, ayak açıklığı ve zemin birlikte ele alınır."
    }
  ],
  "fields": [
    {
      "id": "materialSize",
      "label": "Boru / profil ölçüsü",
      "kind": "text",
      "hint": "Kesit veya çap ve toplam uzunluk"
    },
    {
      "id": "heightRange",
      "label": "Çalışma yüksekliği aralığı",
      "kind": "text",
      "hint": "En düşük – en yüksek, mm"
    },
    {
      "id": "load",
      "label": "Desteklenecek toplam yük",
      "kind": "number",
      "hint": "İş parçasının toplam ağırlığı",
      "unit": "kg"
    },
    {
      "id": "standCount",
      "label": "Birlikte kullanılacak sehpa sayısı",
      "kind": "number",
      "hint": "Planlanan destek sayısı",
      "unit": "adet"
    },
    {
      "id": "process",
      "label": "Makine ve besleme yönü",
      "kind": "text",
      "hint": "Testere, boru işleme vb."
    }
  ],
  "note": "Destek sehpası malzemeyi kendiliğinden sabitlemez. Yük dağılımı ve makineyle birlikte kullanım koşulları değerlendirilir.",
  "source": "https://www.ridgid.com/us/en/adjustable-stand-with-steel-rollers",
  "href": "/rulolu-destek-sehpasi",
  "status": "active"
},
{
  "id": "parca-yikama-sepeti",
  "title": "Parça yıkama sepeti",
  "category": "Atölye yardımcı ekipmanları",
  "description": "Küçük parçaların yıkama sırasında bir arada tutulması için özel ölçü sepet talep edin. Parça boyutu, tank ölçüsü, yıkama sıvısı ve sıcaklığa göre malzeme ile göz açıklığını belirleyelim.",
  "details": [
    "Tank ve parçaya göre ölçü",
    "Tel göz açıklığı seçimi",
    "Sap, kapak ve bölme talebi"
  ],
  "uses": [
    "Endüstriyel parça temizliği",
    "Bakım ve revizyon atölyeleri",
    "Talaşlı imalat sonrası yıkama"
  ],
  "checks": [
    {
      "title": "Parça ve göz açıklığı",
      "text": "Yıkanacak en küçük parçanın ölçüsünü paylaşın. Parçanın düşmesini önleyecek göz açıklığı ile sıvının geçiş ihtiyacı birlikte değerlendirilir."
    },
    {
      "title": "Yıkama koşulları",
      "text": "Kullanılan kimyasalı, yaklaşık sıcaklığı ve yıkama yöntemini belirtin. Paslanmaz malzeme sınıfı bu koşullara göre seçilir."
    },
    {
      "title": "Makineye yerleşim",
      "text": "Tank veya makine iç ölçüsünü, toplam parça yükünü ve tutamak ihtiyacını ekleyin. Mevcut sepetinizin fotoğrafı veya numunesiyle de başlayabiliriz."
    }
  ],
  "fields": [
    {
      "id": "basketSize",
      "label": "Sepet / tank ölçüsü",
      "kind": "text",
      "hint": "En × boy × yükseklik, mm"
    },
    {
      "id": "partSize",
      "label": "En küçük parça ölçüsü",
      "kind": "text",
      "hint": "Parçanın türü ve yaklaşık ölçüleri"
    },
    {
      "id": "load",
      "label": "Sepetteki toplam parça yükü",
      "kind": "number",
      "hint": "Bir yıkamadaki toplam ağırlık",
      "unit": "kg"
    },
    {
      "id": "washing",
      "label": "Yıkama sıvısı ve sıcaklık",
      "kind": "text",
      "hint": "Kimyasal adı, sıcaklık ve yöntem"
    },
    {
      "id": "accessories",
      "label": "Sap, kapak veya bölme ihtiyacı",
      "kind": "text",
      "hint": "Mevcut sepete göre veya özel düzen"
    }
  ],
  "note": "Malzeme seçimi kimyasal ve sıcaklık uyumuna göre yapılır. Ultrasonik veya başka bir makineye uyum ayrıca kontrol edilir.",
  "source": "https://www.threemtool.com/parts-cleaning-washing-custom-wire-baskets/",
  "href": "/parca-yikama-sepeti",
  "status": "inactive"
},
{
  "id": "profil-tasima-arabasi",
  "href": "/profil-tasima-arabasi",
  "title": "Profil, boru ve uzun malzeme taşıma arabaları",
  "category": "Atölye taşıma ekipmanları",
  "description": "Profil, boru ve uzun malzemeler için atölyenize uygun taşıma arabası. Modüler, bölmeli veya platformlu düzeni fotoğraf, numune ve kullanım bilgilerinize göre birlikte belirleyelim.",
  "details": [
    "Profil ve boru boyuna uygun destek düzeni",
    "Modüler, bölmeli veya platformlu şase talebi",
    "Yüzey koruma, tutamak ve fren seçeneklerinin değerlendirilmesi"
  ],
  "uses": [
    "Profil işleme atölyeleri",
    "Kapı ve pencere üretimi",
    "Boru ve metal işleme",
    "Ahşap ve uzun malzeme hazırlama",
    "İstasyonlar arası taşıma"
  ],
  "checks": [
    {
      "title": "Malzeme ve toplam yük",
      "text": "En uzun parça boyunu, kesitini, paket genişliğini ve bir seferde taşınacak toplam yükü belirtin. Yük dağılımı ve destek noktaları birlikte değerlendirilir."
    },
    {
      "title": "Şase ve yerleşim",
      "text": "Modüler, bölmeli veya açık platform tercihini; yükleme yönünü ve hassas yüzeyler için koruma ihtiyacını paylaşın."
    },
    {
      "title": "Geçiş ve tekerlek",
      "text": "Dar kapı ve koridorlar, dönüş alanı, eşikler ve zemin durumunu belirtin. Tekerlek yerleşimi ve fren ihtiyacını kullanım alanına göre görüşelim."
    }
  ],
  "fields": [
    {
      "id": "profileLength",
      "label": "En uzun profil boyu",
      "kind": "number",
      "unit": "mm",
      "hint": "Profilin toplam boyu"
    },
    {
      "id": "load",
      "label": "Bir seferde taşınacak toplam yük",
      "kind": "number",
      "unit": "kg",
      "hint": "Profil paketi toplam ağırlığı"
    },
    {
      "id": "divisions",
      "label": "İstenen bölme sayısı",
      "kind": "number",
      "unit": "adet",
      "hint": "Biliyorsanız belirtin"
    },
    {
      "id": "layout",
      "label": "Yerleşim tercihi",
      "kind": "text",
      "hint": "Yatay, dikey veya birlikte belirleyelim"
    },
    {
      "id": "clearance",
      "label": "En dar geçiş genişliği",
      "kind": "number",
      "unit": "mm",
      "hint": "Kapı veya koridor genişliği"
    },
    {
      "id": "cartType",
      "label": "İstediğiniz taşıma düzeni",
      "kind": "text",
      "hint": "Modüler, açık platform, iki yandan tutamaklı veya birlikte belirleyelim"
    },
    {
      "id": "sectionSize",
      "label": "Profil kesiti / Paket genişliği",
      "kind": "text",
      "hint": "Biliyorsanız en × yükseklik; malzeme türünü de yazabilirsiniz"
    },
    {
      "id": "surfaceProtection",
      "label": "Yüzey koruma / Yükleme ihtiyacı",
      "kind": "text",
      "hint": "Örn. çizilmeye duyarlı profil, üstten yükleme, çıkarılabilir bölme"
    },
    {
      "id": "floor",
      "label": "Zemin ve fren ihtiyacı",
      "kind": "text",
      "hint": "Örn. düz beton, eşik, döner tekerlek veya fren isteği"
    }
  ],
  "note": "Taşıma kapasitesi yalnızca tekerlek kapasitesinden belirlenmez. Şase, destekler, toplam yük ve yük dağılımı birlikte değerlendirilir. Fiyat ve teslim süresi bu bilgiler netleşince paylaşılır.",
  "source": "https://www.yilmazmachine.com.tr/urunler/pc-4000-profil-tasima-arabasi/",
  "status": "active"
},
{
  "id": "abkant-kalip-arabasi",
  "href": "/abkant-kalip-arabasi",
  "title": "Abkant kalıp taşıma ve saklama arabaları",
  "category": "Kalıp ve takım düzeni",
  "description": "Abkant kalıplarınızın kesitine, boyuna ve ağırlığına göre taşıma ve saklama düzeni için teklif isteyin.",
  "details": [
    "Kalıp kesitine göre",
    "Takım yerleşimi",
    "Özel ölçü talebi"
  ],
  "uses": [
    "Abkant pres çevresi",
    "Sac işleme atölyeleri",
    "Kalıp hazırlama alanları"
  ],
  "checks": [
    {
      "title": "Kalıp uyumu",
      "text": "Kalıp markası veya tipiyle birlikte bağlantı kesitini paylaşın. Yalnızca marka adı uyumu doğrulamak için yeterli olmayabilir."
    },
    {
      "title": "Takım dağılımı",
      "text": "Saklanacak kalıp adedini, en uzun parçayı ve toplam takım ağırlığını belirtin."
    },
    {
      "title": "Kullanım alanı",
      "text": "Arabanın duracağı alanı, geçiş genişliğini ve kalıpların nasıl alınacağını açıklayın."
    }
  ],
  "fields": [
    {
      "id": "toolType",
      "label": "Kalıp markası / bağlantı tipi",
      "kind": "text",
      "hint": "Marka, model veya kesit açıklaması"
    },
    {
      "id": "toolLength",
      "label": "En uzun kalıp boyu",
      "kind": "number",
      "unit": "mm",
      "hint": "En uzun tek parçanın boyu"
    },
    {
      "id": "toolCount",
      "label": "Saklanacak kalıp adedi",
      "kind": "number",
      "unit": "adet",
      "hint": "Toplam kalıp sayısı"
    },
    {
      "id": "load",
      "label": "Toplam kalıp ağırlığı",
      "kind": "number",
      "unit": "kg",
      "hint": "Tüm takımların toplamı"
    },
    {
      "id": "space",
      "label": "Kullanılabilir alan",
      "kind": "text",
      "hint": "En × boy × yükseklik, mm"
    }
  ],
  "note": "Kalıp yerleşimi ve taşıma uygunluğu teknik resim ve yük bilgisiyle netleştirilir.",
  "source": "https://www.fersametal.com.tr/products/abkant-kalip-tasima-arabasi",
  "status": "active"
},
{
  "id": "sac-stoklama-rafi",
  "href": "/sac-stoklama-rafi",
  "title": "Dikey sac stoklama rafı",
  "category": "Depolama ve düzen",
  "description": "Sac ve levhaların ebatlarına, bölme ihtiyacına ve yükleme şekline göre stoklama düzeni için teklif isteyin.",
  "details": [
    "Levha ebadına göre",
    "Bölme planlaması",
    "Alan değerlendirmesi"
  ],
  "uses": [
    "Sac işleme tesisleri",
    "Lazer kesim hazırlık alanları",
    "Levha ve plaka stok alanları"
  ],
  "checks": [
    {
      "title": "Levha ölçüleri",
      "text": "En büyük levhanın enini, boyunu ve kullanılan kalınlık aralığını paylaşın."
    },
    {
      "title": "Stok dağılımı",
      "text": "Kaç bölme istediğinizi ve her bölmede tutulacak yükü ayrı belirtin."
    },
    {
      "title": "Yerleştirme yöntemi",
      "text": "Levhaların nasıl yüklenip alınacağını ve rafın konulacağı alanı açıklayın."
    }
  ],
  "fields": [
    {
      "id": "sheetWidth",
      "label": "En büyük levha eni",
      "kind": "number",
      "unit": "mm",
      "hint": "Levhanın kısa kenarı"
    },
    {
      "id": "sheetLength",
      "label": "En büyük levha boyu",
      "kind": "number",
      "unit": "mm",
      "hint": "Levhanın uzun kenarı"
    },
    {
      "id": "thickness",
      "label": "Sac kalınlığı aralığı",
      "kind": "text",
      "hint": "En ince – en kalın, mm"
    },
    {
      "id": "divisions",
      "label": "İstenen bölme sayısı",
      "kind": "number",
      "unit": "adet",
      "hint": "Stok grubuna göre"
    },
    {
      "id": "sectionLoad",
      "label": "Bölme başına planlanan yük",
      "kind": "number",
      "unit": "kg",
      "hint": "Tek bölmedeki toplam ağırlık"
    },
    {
      "id": "loading",
      "label": "Yükleme / boşaltma şekli",
      "kind": "text",
      "hint": "Ekipman ve yaklaşma yönü"
    }
  ],
  "note": "Yük dağılımı, denge ve kurulum koşulları değerlendirilmeden kapasite belirlenmez.",
  "source": "https://platinvinc.com/sac-stoklama-rafi/",
  "status": "inactive"
},
{
  "id": "tekstil-tasima-arabasi",
  "href": "/tekstil-tasima-arabasi",
  "title": "Tekstil ve kumaş taşıma arabaları",
  "category": "Atölye taşıma ekipmanları",
  "description": "Kumaş topu, parça tekstil veya çamaşır taşıma ihtiyacınızı yük ve çalışma ortamıyla birlikte tanımlayın.",
  "details": [
    "Kumaş türüne göre",
    "Hacim ve yük bilgisi",
    "Geçiş alanına göre"
  ],
  "uses": [
    "Tekstil üretim alanları",
    "Kumaş hazırlama bölümleri",
    "Çamaşırhane içi taşıma"
  ],
  "checks": [
    {
      "title": "Malzeme biçimi",
      "text": "Kumaş topu, parça tekstil veya çamaşır taşınacağını belirtin. Top kumaş için boy ve çapı ekleyin."
    },
    {
      "title": "Yük ve hacim",
      "text": "Bir seferde taşınacak toplam yükü, gerekiyorsa hacim ihtiyacını paylaşın."
    },
    {
      "title": "Çalışma koşulları",
      "text": "Islak veya kuru kullanım, temizlik şekli, kapı geçişi ve zemin bilgisini açıklayın."
    }
  ],
  "fields": [
    {
      "id": "textileType",
      "label": "Taşınacak tekstil türü",
      "kind": "text",
      "hint": "Kumaş topu, parça tekstil, çamaşır…"
    },
    {
      "id": "rollSize",
      "label": "Kumaş topu ölçüsü",
      "kind": "text",
      "hint": "Varsa boy × çap, mm"
    },
    {
      "id": "load",
      "label": "Bir seferde taşınacak yük",
      "kind": "number",
      "unit": "kg",
      "hint": "Toplam ağırlık"
    },
    {
      "id": "volume",
      "label": "İstenen hacim",
      "kind": "number",
      "unit": "litre",
      "hint": "Biliyorsanız belirtin"
    },
    {
      "id": "environment",
      "label": "Kullanım ve temizlik koşulları",
      "kind": "text",
      "hint": "Islak / kuru, temizlik yöntemi"
    },
    {
      "id": "clearance",
      "label": "En dar geçiş genişliği",
      "kind": "number",
      "unit": "mm",
      "hint": "Kapı veya koridor genişliği"
    }
  ],
  "note": "Gövde, tekerlek ve temas yüzeyi kullanım koşullarına göre netleştirilir.",
  "source": "https://www.permak.com.tr/urunler/camasirhane-yardimci-ekipmanlari/permak-utp275-tekstil-tasima-arabasi",
  "status": "inactive"
},
{
  "id": "forklift-catal-uzatma",
  "href": "/forklift-catal-uzatma",
  "title": "Forklift çatal uzatma kılıfı",
  "category": "Forklift ekipmanları",
  "description": "Mevcut çatal ölçüsü, forklift bilgisi ve yükünüzle birlikte çatal uzatma ihtiyacınızı değerlendirmeye açın.",
  "details": [
    "Mevcut çatala göre",
    "Özel boy talebi",
    "Uyumluluk değerlendirmesi"
  ],
  "uses": [
    "Depo içi yük elleçleme talepleri",
    "Farklı boydaki yükler için ekipman değerlendirmesi",
    "Mevcut ataşmanın yenilenmesi"
  ],
  "checks": [
    {
      "title": "Mevcut çatal",
      "text": "Çatalın enini, kalınlığını ve boyunu ölçün; uç ve sabitleme bölgesinin fotoğrafını paylaşın."
    },
    {
      "title": "Forklift ve yük",
      "text": "Forklift marka/modelini, kapasite etiketi bilgisini ve taşınacak yükün ölçülerini ekleyin."
    },
    {
      "title": "İstenen uzatma",
      "text": "Hedef uzunluğu ve kullanım amacını belirtin. Sabitleme biçimi ve makine uyumu birlikte değerlendirilir."
    }
  ],
  "fields": [
    {
      "id": "forkWidth",
      "label": "Mevcut çatal eni",
      "kind": "number",
      "unit": "mm",
      "hint": "Tek çatalın genişliği"
    },
    {
      "id": "forkThickness",
      "label": "Mevcut çatal kalınlığı",
      "kind": "number",
      "unit": "mm",
      "hint": "Çatal kesitinin kalınlığı"
    },
    {
      "id": "forkLength",
      "label": "Mevcut çatal boyu",
      "kind": "number",
      "unit": "mm",
      "hint": "Yatay çatal uzunluğu"
    },
    {
      "id": "extensionLength",
      "label": "Talep edilen uzatma boyu",
      "kind": "number",
      "unit": "mm",
      "hint": "Kılıfın istenen toplam boyu"
    },
    {
      "id": "forklift",
      "label": "Forklift marka / model",
      "kind": "text",
      "hint": "Model ve kapasite etiketi bilgisi"
    },
    {
      "id": "loadInfo",
      "label": "Yük ölçüsü ve ağırlığı",
      "kind": "text",
      "hint": "En × boy × yükseklik (mm), ağırlık (kg)"
    }
  ],
  "note": "Uzatma forkliftin taşıma kapasitesini artırmaz. Kullanım uygunluğu, yük merkezi ve üretici talimatlarıyla birlikte doğrulanmalıdır.",
  "source": "https://www.tvh.com/tr-tr/yedek-parcalar/yedek-parcalar-icin/forkliftler/forklift-catal-uzaticilar",
  "status": "inactive"
},
{
  "id": "tup-tasima-kafesi",
  "href": "/tup-tasima-kafesi",
  "title": "Tüp taşıma arabaları ve sabit depolama kafesleri",
  "category": "Taşıma ve muhafaza",
  "description": "Tüp türü, boyutu, adedi ve kullanım yöntemiyle taşıma veya depolama ihtiyacınızı paylaşın.",
  "details": [
    "Tüp ölçüsüne göre",
    "Yerleşim planı",
    "Kullanım yöntemine göre"
  ],
  "uses": [
    "Tüp yerleşimi ve muhafaza talepleri",
    "Atölye içi ekipman planlaması",
    "Mevcut tüp taşıyıcının yenilenmesi"
  ],
  "checks": [
    {
      "title": "Tüp bilgileri",
      "text": "Tüpün içerdiği gazı, dış çapını, yüksekliğini ve dolu ağırlığını belirtin."
    },
    {
      "title": "Yerleşim",
      "text": "Bir kafeste kaç tüp bulunacağını ve tüplere erişim şeklinizi açıklayın."
    },
    {
      "title": "Kullanım yöntemi",
      "text": "Yalnızca depolama mı, forkliftle taşıma mı veya başka bir kaldırma yöntemi mi gerektiğini açıkça yazın."
    }
  ],
  "fields": [
    {
      "id": "gasType",
      "label": "Gaz / tüp türü",
      "kind": "text",
      "hint": "İçerik ve tüp tipi"
    },
    {
      "id": "cylinderDiameter",
      "label": "Tüp dış çapı",
      "kind": "number",
      "unit": "mm",
      "hint": "En büyük tüp çapı"
    },
    {
      "id": "cylinderHeight",
      "label": "Tüp toplam yüksekliği",
      "kind": "number",
      "unit": "mm",
      "hint": "Koruyucu başlık dahil"
    },
    {
      "id": "cylinderCount",
      "label": "Bir kafesteki tüp sayısı",
      "kind": "number",
      "unit": "adet",
      "hint": "Planlanan tüp adedi"
    },
    {
      "id": "fullWeight",
      "label": "Tek tüpün dolu ağırlığı",
      "kind": "number",
      "unit": "kg",
      "hint": "Gaz dahil toplam tüp ağırlığı"
    },
    {
      "id": "handling",
      "label": "Kullanım / taşıma yöntemi",
      "kind": "text",
      "hint": "Depolama, forkliftle taşıma, diğer…"
    }
  ],
  "note": "Depolama kafesi otomatik olarak kaldırma ekipmanı sayılmaz. Kaldırma talebi varsa bağlantılar, yük ve uygunluk ayrıca değerlendirilir.",
  "source": "https://emapro-metal.com/products",
  "status": "active"
},
{
  "id": "microtrac-mini-bahce-traktoru",
  "title": "MicroTrac Mini Bahçe, Sera ve Kompakt Tarım Traktörü",
  "category": "Tarım, bahçe ve sera mekanizasyonu",
  "description": "Dar sera sıraları, meyve bahçeleri ve fidanlıklar için 105 cm genişliğinde açık kaynaklı kompakt tarım traktörü. Modüler 16-24 HP hidrolik güç ünitesi (Power Cube), 450 kg ön yükleyici bom, Bobcat tipi hızlı ataşman sistemi ve paletli yürüyüş. Anahtar teslim veya kaynak kiti (DIY) seçenekleriyle teklif alın.",
  "details": [
    "105 cm kompakt genişlik (Dar sera kapıları ve bağ/meyve aralarına tam uyum)",
    "Bağımsız sol/sağ hidrolik kumanda (Sıfır yarıçapla kendi etrafında 360° dönüş)",
    "Düşük zemin basıncı (Paletli yürüyüş ile toprağı sıkıştırmaz, batmaz)",
    "Bobcat mini hızlı ataşman standardı (Kova, fidan burgusu, toprak frezesi 60 sn'de değişim)",
    "16–24 HP modüler Power Cube hidrolik güç paketi (Tak-çıkar motor)",
    "Anahtar teslim veya atölye kaynak kiti (DIY) teslim seçeneği"
  ],
  "uses": [
    "Örtü altı seracılık ve fide/sebze üretim alanları",
    "Meyve bahçeleri (Ceviz, zeytin, fındık, bağ vb.) sıra arası bakım",
    "Fidan dikimi, tel çit ve bağ direği çukuru açma (Hidrolik burgu ile)",
    "Toprak işleme, çapalama ve kompost/gübre taşıma-yükleme",
    "Çiftlik içi malzeme, balya ve meyve kasası taşıma (Palet çatalı ile)"
  ],
  "checks": [
    {
      "title": "Kullanım alanı ve geçiş genişliği",
      "text": "Traktörün çalışacağı seranın kapı genişliğini, ağaç sıra arasını veya arazinin eğim ve zemin yapısını (balçık, taşlık, engebeli vb.) belirtin."
    },
    {
      "title": "İhtiyaç duyulan ataşmanlar",
      "text": "Standart ön yükleme kovası haricinde hidrolik fidan burgusu, toprak frezesi (çapa), palet çatalı veya budama makası ihtiyacınızı bildirin."
    },
    {
      "title": "Güç ve teslimat formatı",
      "text": "16-18 HP benzinli veya dizel motor tercihinizi ve komple çalışır anahtar teslim mi yoksa kendi atölyenizde toplayabileceğiniz lazer kesim kaynak kiti mi istediğinizi seçin."
    }
  ],
  "fields": [
    {
      "id": "deliveryType",
      "label": "Teslimat şekli tercihi",
      "kind": "text",
      "hint": "Anahtar teslim (çalışır halde) veya Kendin Kaynat şasi kiti"
    },
    {
      "id": "powerOption",
      "label": "Motor / Güç tercihi",
      "kind": "text",
      "hint": "16-18 HP Benzinli / 22 HP Kohler / Dizel / Motorsuz şasi"
    },
    {
      "id": "requiredAttachments",
      "label": "Talep edilen ataşmanlar",
      "kind": "text",
      "hint": "Ön kova, hidrolik fidan burgusu, çapa, forklift çatalı vb."
    },
    {
      "id": "terrainDetails",
      "label": "Arazi ve sera özellikleri",
      "kind": "text",
      "hint": "Örn: 20 dönüm ceviz bahçesi, 3 metre sıra arası, eğimli"
    }
  ],
  "note": "Open Source Ecology (OSE) lisanslı açık kaynak donanım tasarımıdır. Tüm rulman, hidrolik ve mekanik aksamları Türkiye sanayisinde standart raf ürünü olarak temin edilebilir yedek parça garantilidir.",
  "source": "https://wiki.opensourceecology.org/wiki/MicroTrac_v17.10",
  "href": "/microtrac-mini-bahce-traktoru",
  "status": "active"
},
{
  "id": "kaynak-masasi",
  "title": "Delikli 3D kaynak ve fikstür masaları (D28 / D16)",
  "category": "Atölye Tezgahları ve Kaynak Masaları",
  "description": "Kabin, şasi, korkuluk ve hassas metal konstrüksiyon imalatı için D28 ve D16 delik sistemli modüler 3D kaynak masası. Ağır hizmet frezelenmiş çelik tabla, lazer ızgara çizgileri ve mengene aparatlarıyla atölye ölçünüze özel teklif alın.",
  "details": [
    "D28 veya D16 lazer/CNC delik aralığı (50x50 veya 100x100 mm)",
    "Hassas frezelenmiş düzlemsel yüzey ve yan yanaklar",
    "Ağır hizmet rijit şasi ve yükseklik ayarlı ayaklar"
  ],
  "uses": [
    "Çelik konstrüksiyon ve şasi kaynağı",
    "Korkuluk, kapı ve ferforje imalatı",
    "Seri üretim fikstürleme ve montaj"
  ],
  "checks": [
    {
      "title": "Masa ölçüsü ve kalınlık",
      "text": "İstenen tabla ebadını (Örn: 1000x2000 mm, 1200x2400 mm vb.) ve tabla sac kalınlığını (12 mm, 15 mm, 20 mm) belirtin."
    },
    {
      "title": "Delik sistemi (D28 / D16)",
      "text": "Mevcut aparatlarınıza veya çalışma hassasiyetinize göre D28 (Ø28 mm ağır hizmet) veya D16 (Ø16 mm kompakt) delik çapı tercihini paylaşın."
    },
    {
      "title": "Yan yanak ve ayak düzeni",
      "text": "Masada 5 yüzeyli (yan yanaklı) çalışma alanı veya tekerlekli/sabit ayak tercihinizi belirtin."
    }
  ],
  "fields": [
    {
      "id": "tableDimensions",
      "label": "İstenen tabla ölçüsü",
      "kind": "text",
      "hint": "Örn: 1000 × 2000 mm veya 1200 × 2400 mm"
    },
    {
      "id": "holeSystem",
      "label": "Delik çapı ve aralığı",
      "kind": "text",
      "hint": "D28 (100x100 ızgara) veya D16 (50x50 ızgara)"
    },
    {
      "id": "plateThickness",
      "label": "Tabla sac kalınlığı",
      "kind": "text",
      "hint": "12 mm / 15 mm / 20 mm frezeli çelik"
    },
    {
      "id": "sideFlanges",
      "label": "Yan yanak (5 yüzey) ihtiyacı",
      "kind": "text",
      "hint": "Var / Yok veya sadece üst tabla"
    }
  ],
  "note": "Tüm masalar gerilim giderme ve hassas CNC frezeleme işlemlerinden geçirilerek yüksek düzlemsellik garantisiyle üretilir.",
  "source": "",
  "href": "/kaynak-masasi",
  "status": "active"
},
{
  "id": "calisma-tezgahi",
  "title": "Ağır hizmet takım ve çalışma tezgahları (Mengeneli)",
  "category": "Atölye Tezgahları ve Kaynak Masaları",
  "description": "Kalıpçı, bakımcı ve talaşlı imalat ustaları için ağır çelik konstrüksiyonlu çalışma masası. Dövme çelik mengene montajı, kilitli rulmanlı çekmeceler, takım asma panosu ve darbelere dayanıklı masif üst tabla.",
  "details": [
    "Darbeye ve ağır yüke dayanıklı çelik sac üst tabla",
    "Rulmanlı raylı kilitli çekmece üniteleri",
    "Dövme çelik mengene ve aydınlatmalı takım panosu seçeneği"
  ],
  "uses": [
    "Kalıp bakım ve montaj atölyeleri",
    "Talaşlı imalat ve makine montaj hatları",
    "Fabrika ve garaj bakım alanları"
  ],
  "checks": [
    {
      "title": "Tezgah ölçüsü ve yük kapasitesi",
      "text": "Tezgahın boyunu (1500 mm, 2000 mm, 2500 mm vb.) ve üzerine binecek maksimum kalıp/parça ağırlığını belirtin."
    },
    {
      "title": "Çekmece ve dolap düzeni",
      "text": "Kaç adet çekmece ve dolap ünitesine ihtiyaç duyduğunuzu paylaşın."
    },
    {
      "title": "Mengene ve pano aksesuarları",
      "text": "Döner tablalı mengene, takım asma askı panosu, LED aydınlatma ve priz kanalı talebinizi belirtin."
    }
  ],
  "fields": [
    {
      "id": "benchDimensions",
      "label": "Tezgah boyu ve eni",
      "kind": "text",
      "hint": "Örn: 2000 × 800 × 900 mm"
    },
    {
      "id": "drawerLayout",
      "label": "Çekmece ve dolap sayısı",
      "kind": "text",
      "hint": "Örn: 4 çekmeceli blok + 1 kapaklı dolap"
    },
    {
      "id": "viseRequirement",
      "label": "Mengene tercihi",
      "kind": "text",
      "hint": "150 mm veya 175 mm dövme çelik mengene dahil"
    },
    {
      "id": "backPanel",
      "label": "Takım asma panosu ve aydınlatma",
      "kind": "text",
      "hint": "Delikli sac pano, takım kancaları ve LED armatür"
    }
  ],
  "note": "Elektrostatik toz boyalı, çizilmeye ve kimyasallara dayanıklı gövde ile ömürlük mukavemet sağlanır.",
  "source": "",
  "href": "/calisma-tezgahi",
  "status": "active"
},
{
  "id": "hidrolik-atolye-presi",
  "title": "Ağır hizmet hidrolik atölye presleri (10 - 50 Ton)",
  "category": "Atölye Tezgahları ve Kaynak Masaları",
  "description": "Rulman, burç, dişli çakma ve parça doğrultma işlemleri için H tipi çelik konstrüksiyon hidrolik atölye presi. Ayarlanabilir tabla yüksekliği, çift kademeli el pompası veya motorlu hidrolik güç ünitesi ve gliserinli manometre.",
  "details": [
    "H tipi rijit çelik konstrüksiyon gövde",
    "10 tondan 50 tona kadar kapasite seçenekleri",
    "Hassas basınç göstergeli (gliserinli manometre)"
  ],
  "uses": [
    "Rulman, bilya ve burç sökme/takma",
    "Mil ve şaft doğrultma işlemleri",
    "Büküm, zımbalama ve presleme işleri"
  ],
  "checks": [
    {
      "title": "Tonaj ihtiyacı",
      "text": "İşleyeceğiniz en ağır parçaya göre 10 ton, 20 ton, 30 ton veya 50 ton kuvvet ihtiyacını belirtin."
    },
    {
      "title": "Tahrik şekli",
      "text": "Manuel el pompalı, havalı (pnömatik) veya trifaze elektrik motorlu hidrolik ünite tercihini belirtin."
    },
    {
      "title": "Çalışma aralığı",
      "text": "Kolonlar arası net genişlik ve strok (piston hareket mesafesi) ihtiyacınızı paylaşın."
    }
  ],
  "fields": [
    {
      "id": "pressCapacity",
      "label": "Talep edilen tonaj",
      "kind": "text",
      "hint": "Örn: 20 Ton / 30 Ton / 50 Ton"
    },
    {
      "id": "driveType",
      "label": "Pompa / Tahrik türü",
      "kind": "text",
      "hint": "Manuel el pompalı / Havalı / Motorlu hidrolik güç ünitesi"
    },
    {
      "id": "clearanceWidth",
      "label": "İç kolon açıklığı",
      "kind": "text",
      "hint": "Biliyorsanız yazın (örn: 750 mm)"
    }
  ],
  "note": "Yüksek kaliteli honlanmış silindir borusu ve krom kaplı sertleştirilmiş piston milleriyle uzun ömürlü sızdırmazlık sağlanır.",
  "source": "",
  "href": "/hidrolik-atolye-presi",
  "status": "active"
},
{
  "id": "fidan-burgusu",
  "title": "Traktör ve mini ekskavatör hidrolik fidan burgusu",
  "category": "Tarım, Sera ve Bahçe Mekanizasyonu",
  "description": "Meyve bahçeleri, ceviz, fındık, zeytin ve bağ dikimlerinde hızlı çukur açmak için traktör 3 nokta askı veya ekskavatör uyumlu hidrolik toprak burgusu. Aşınmaya dayanıklı değiştirilebilir HARDOX uç bıçakları ve farklı çapta helezonlar.",
  "details": [
    "Yüksek torklu hidrolik motor veya şaftlı redüktör tahriki",
    "Ø20 cm'den Ø60 cm'ye kadar değiştirilebilir helezon uçları",
    "Aşınmaya dayanıklı HARDOX uç ve kılavuz delici bıçak"
  ],
  "uses": [
    "Fidan, ağaç ve çalı dikim çukuru açma",
    "Tel örgü, çit ve direk montaj delikleri",
    "Sera direği ve temel ankraj çukurları"
  ],
  "checks": [
    {
      "title": "Traktör veya makine uyumu",
      "text": "Kullanılacak traktörün beygir gücünü (HP) veya mini ekskavatör/beko loder modelini belirtin."
    },
    {
      "title": "Çukur çapı ve derinliği",
      "text": "Açılacak çukurun çapını (20 cm, 30 cm, 40 cm, 50 cm) ve derinliğini (80 cm, 100 cm, 120 cm) belirtin."
    },
    {
      "title": "Toprak yapısı",
      "text": "Arazinin taşlı, killi, sert veya yumuşak toprak durumunu paylaşın."
    }
  ],
  "fields": [
    {
      "id": "machineModel",
      "label": "Traktör / Makine tipi ve gücü",
      "kind": "text",
      "hint": "Örn: 50 HP Traktör / Mini Kepçe"
    },
    {
      "id": "augerDiameter",
      "label": "Burgu helezon çapı",
      "kind": "text",
      "hint": "Örn: Ø30 cm ve Ø40 cm helezon"
    },
    {
      "id": "diggingDepth",
      "label": "Maksimum delme derinliği",
      "kind": "number",
      "unit": "cm",
      "hint": "Örn: 100 cm"
    },
    {
      "id": "soilCondition",
      "label": "Toprak ve arazi durumu",
      "kind": "text",
      "hint": "Killi, taşlı, sert toprak vb."
    }
  ],
  "note": "Merzifon atölyemizde imal edilir; tüm aşınan bıçaklar civatalı olup sahada kolayca değiştirilebilir.",
  "source": "",
  "href": "/fidan-burgusu",
  "status": "active"
},
{
  "id": "dal-ogutme-makinesi",
  "title": "Dal öğütme ve budama artığı parçalama makinesi",
  "category": "Tarım, Sera ve Bahçe Mekanizasyonu",
  "description": "Meyve bahçeleri, park-bahçeler ve seralarda budama sonrası dalları organik gübre ve malç talaşına dönüştüren ağır hizmet dal parçalama makinesi. Traktör kuyruk mili (PTO) veya bağımsız benzinli motorlu seçenekler.",
  "details": [
    "Özel alaşımlı çift taraflı bilenebilir çelik bıçaklar",
    "Geniş besleme hunisi ve 360° yönlendirilebilir tahliye bacası",
    "Ø8 cm ile Ø12 cm kalınlığa kadar dal öğütme kapasitesi"
  ],
  "uses": [
    "Meyve bahçesi budama artıklarının temizliği",
    "Organik kompost ve peyzaj malç talaşı üretimi",
    "Belediye ve park bakım temizlik işleri"
  ],
  "checks": [
    {
      "title": "Güç kaynağı",
      "text": "Traktör kuyruk milinden mi (PTO şaftlı) yoksa tekerlekli şase üzerinde benzinli motorlu mu tercih ettiğinizi belirtin."
    },
    {
      "title": "Maksimum dal kalınlığı",
      "text": "Öğüteceğiniz dalların ortalama ve en büyük çapını (5 cm, 8 cm, 10 cm vb.) paylaşın."
    }
  ],
  "fields": [
    {
      "id": "powerSource",
      "label": "Tahrik türü",
      "kind": "text",
      "hint": "Traktör PTO (Şaftlı) veya 15 HP Benzinli Motor"
    },
    {
      "id": "maxBranchDiameter",
      "label": "Maksimum dal çapı",
      "kind": "text",
      "hint": "Örn: Ø8 cm veya Ø10 cm"
    },
    {
      "id": "chassisOption",
      "label": "Şase ve taşıma tipi",
      "kind": "text",
      "hint": "Traktör 3 nokta askı veya çekilebilir tekerlekli araba"
    }
  ],
  "note": "Dalların yakılmasını önler, toprağa organik madde kazandırır ve yangın riskini ortadan kaldırır.",
  "source": "",
  "href": "/dal-ogutme-makinesi",
  "status": "active"
},
{
  "id": "motosiklet-lifti",
  "title": "Motosiklet ve ATV hidrolik bakım lifti",
  "category": "Atölye Tezgahları ve Kaynak Masaları",
  "description": "Motosiklet, scooter ve ATV tamir, bakım ve temizlik işleri için ayak pedallı hidrolik makaslı kaldırma platformu. Çentikli kaymaz çelik tabla, ön tekerlek sıkıştırma mengenesi, emniyet kilitleme pimleri ve çıkarılabilir arka teker kapağı.",
  "details": [
    "500 kg - 1000 kg kaldırma kapasitesi",
    "Ayak pedallı hidrolik pompa ve mekanik emniyet kilidi",
    "Çıkarılabilir arka rampa ve arka tekerlek bakım penceresi"
  ],
  "uses": [
    "Motosiklet ve scooter tamir servisleri",
    "ATV ve küçük arazi araçları bakımı",
    "Garaj ve hobi meraklılarının atölyeleri"
  ],
  "checks": [
    {
      "title": "Kaldırma kapasitesi ve tabla boyu",
      "text": "Kaldırılacak en ağır motosiklet/ATV ağırlığını ve aks mesafesini paylaşın."
    },
    {
      "title": "Kaldırma yüksekliği",
      "text": "Maksimum çalışma yüksekliği (genellikle 80 - 100 cm) ihtiyacınızı belirtin."
    }
  ],
  "fields": [
    {
      "id": "liftCapacity",
      "label": "Kaldırma kapasitesi",
      "kind": "text",
      "hint": "500 kg veya 800 kg (ATV uyumlu)"
    },
    {
      "id": "tableLength",
      "label": "Platform tabla boyu",
      "kind": "text",
      "hint": "Örn: 2200 × 700 mm"
    },
    {
      "id": "wheelClamp",
      "label": "Ön tekerlek mengene tipi",
      "kind": "text",
      "hint": "Manuel vidalı kilit veya otomatik kavrama"
    }
  ],
  "note": "Rijit makas sistemi ve mekanik düşme önleyici kilitler sayesinde altında güvenle çalışabilirsiniz.",
  "source": "",
  "href": "/motosiklet-lifti",
  "status": "active"
},
{
  "id": "damperli-tasima-kasasi",
  "title": "Traktör ve çapa arkası damperli taşıma kasası",
  "category": "Tarım, Sera ve Bahçe Mekanizasyonu",
  "description": "Bahçe, sera ve tarla işlerinde gübre, odun, mahsul ve malzeme taşımak için traktör 3 nokta askı kollarına bağlanan mekanik damperli çelik kasa. Açılabilir arka kapak, güçlendirilmiş taban sacı ve kolay boşaltma mandalı.",
  "details": [
    "Mekanik mandallı pratik damperli boşaltma sistemi",
    "Traktör 3 nokta askı uyumlu sağlam çelik şase",
    "Açılabilir ve sökülebilir arka yükleme kapağı"
  ],
  "uses": [
    "Bağ, bahçe ve sera içi malzeme taşımacılığı",
    "Gübre, toprak, çakıl ve odun nakli",
    "Hasat edilen meyve ve sebze kasalarının sevki"
  ],
  "checks": [
    {
      "title": "Kasa iç ölçüsü",
      "text": "Traktörünüzün genişliğine uygun en (120 cm, 150 cm, 180 cm vb.) ve derinlik ihtiyacını belirtin."
    },
    {
      "title": "Kapak yapısı",
      "text": "Üstten veya alttan menteşeli çift yönlü kapak ihtiyacınızı paylaşın."
    }
  ],
  "fields": [
    {
      "id": "boxDimensions",
      "label": "Kasa genişliği ve boyu",
      "kind": "text",
      "hint": "Örn: 150 × 100 × 50 cm"
    },
    {
      "id": "tractorHp",
      "label": "Kullanılacak traktör gücü",
      "kind": "text",
      "hint": "Örn: 40-60 HP"
    },
    {
      "id": "dumpMechanism",
      "label": "Damper tercihi",
      "kind": "text",
      "hint": "Mekanik mandallı veya hidrolik pistonlu"
    }
  ],
  "note": "Merzifon sanayisinde üretilir; rijit taban takviyeleri sayesinde ağır yüklerde bel vermez.",
  "source": "",
  "href": "/damperli-tasima-kasasi",
  "status": "active"
},
{
  "id": "fason-talasli-imalat",
  "title": "Fason talaşlı imalat (CNC torna ve freze parça üretimi)",
  "category": "Fason İmalat ve Mühendislik",
  "description": "Numune veya teknik resme göre tekli, adetli ve seri CNC torna ve dik işleme freze fason parça üretimi. Çelik, paslanmaz, alüminyum, pirinç ve kestamid malzemelerde mikron düzeyinde toleranslı talaşlı imalat.",
  "details": [
    "CNC torna ve CNC dik işleme merkezi fason kapasitesi",
    "Çelik, paslanmaz, döküm, alüminyum ve mühendislik plastikleri",
    "3D CAD/CAM programlama ve hassas kalite kontrol"
  ],
  "uses": [
    "Makine yedek parçaları ve miller",
    "Flanş, dişli taslakları, burç ve yataklar",
    "Aparatlar, kalıp elemanları ve prototip parçalar"
  ],
  "checks": [
    {
      "title": "Teknik resim veya numune",
      "text": "Parçanın 2D teknik resmini (PDF/DXF), 3D modelini (STEP) veya numune fotoğrafını WhatsApp'tan paylaşın."
    },
    {
      "title": "Adet ve malzeme",
      "text": "İstenen sipariş adedini ve malzeme cinsini (Ç-1040, Ç-4140, AISI 304, Alüminyum 6000 serisi vb.) belirtin."
    },
    {
      "title": "Isıl işlem veya yüzey kaplama",
      "text": "Varsa sertleştirme (ısıl işlem), taşlama, galvaniz veya eloksal ihtiyacını belirtin."
    }
  ],
  "fields": [
    {
      "id": "drawingOrSample",
      "label": "Parça bilgisi",
      "kind": "text",
      "hint": "Teknik resim var mı, numuneden mi işlenecek?"
    },
    {
      "id": "materialType",
      "label": "Malzeme tercihi",
      "kind": "text",
      "hint": "İmalat çeliği, ıslah çeliği, paslanmaz, alüminyum vb."
    },
    {
      "id": "orderQuantity",
      "label": "Talep edilen adet",
      "kind": "number",
      "hint": "1 adet prototip veya seri adet"
    },
    {
      "id": "finishingNeeds",
      "label": "Ek işlemler (Isıl işlem, taşlama vb.)",
      "kind": "text",
      "hint": "Varsa belirtin; yoksa boş bırakabilirsiniz"
    }
  ],
  "note": "Merzifon ve çevre illerden kargo veya elden numune teslim alıyoruz. Çiziminiz olmasa da ölçülendirip üretiyoruz.",
  "source": "",
  "href": "/fason-talasli-imalat",
  "status": "active"
},
{
  "id": "fason-kaynak-isleri",
  "title": "Fason gazaltı ve TIG kaynaklı çelik imalat",
  "category": "Fason İmalat ve Mühendislik",
  "description": "Makine şaseleri, platformlar, çelik konstrüksiyon karkaslar ve paslanmaz sac montajları için fason gazaltı (MIG/MAG) ve argon (TIG) kaynak işleri. Projenize uygun fikstürleme ve hatasız kaynak dikişleri.",
  "details": [
    "Gazaltı (MIG/MAG) ve TIG (Argon) paslanmaz kaynağı",
    "Şasi, karkas, tank ve konstrüksiyon montajı",
    "Temiz kaynak dikişleri, çapak alma ve boyaya hazır teslimat"
  ],
  "uses": [
    "Makine ana gövdeleri ve taşıyıcı şaseler",
    "Konveyör şaseleri, sehpalar ve platformlar",
    "Paslanmaz gıda ve kimya ekipman gövdeleri"
  ],
  "checks": [
    {
      "title": "Proje ve malzeme",
      "text": "Kaynatılacak profil, boru veya sac kalınlıklarını ve çelik/paslanmaz sınıfını paylaşın."
    },
    {
      "title": "Ölçü ve tolerans",
      "text": "Toplam konstrüksiyon dış ölçülerini ve varsa kritik montaj yüzeylerini belirtin."
    }
  ],
  "fields": [
    {
      "id": "weldType",
      "label": "Kaynak türü ve malzeme",
      "kind": "text",
      "hint": "Gazaltı çelik kaynağı veya TIG paslanmaz kaynağı"
    },
    {
      "id": "overallSize",
      "label": "Konstrüksiyon ölçüleri",
      "kind": "text",
      "hint": "En × Boy × Yükseklik yaklaşık ebatlar"
    },
    {
      "id": "surfacePrep",
      "label": "Yüzey temizlik ve astar boya",
      "kind": "text",
      "hint": "Sadece kaynaklı montaj mı, astar/toz boyalı teslim mi?"
    }
  ],
  "note": "Kaynak deformasyonlarını önleyici özel fikstürler ve yüksek mukavemetli kaynak telleriyle çalışılır.",
  "source": "",
  "href": "/fason-kaynak-isleri",
  "status": "active"
},
{
  "id": "ozel-mil-ve-saftlar",
  "title": "Özel ölçü miller, şaftlar ve transmisyon parçaları",
  "category": "Talaşlı İmalat & Hassas Parçalar",
  "description": "Kademeli miller, kamalı şaftlar, yivli/dişli miller ve sertleştirilmiş transmisyon milleri. İmalat çeliği (Ç-1040, Ç-1050), ıslah çeliği (4140/42CrMo4) ve paslanmaz malzemeden mikron toleranslı CNC torna ve taşlama üretimi.",
  "details": [
    "Kademeli, kamalı, dişli ve delikli mil imalatı",
    "Rulman ve keçe oturma yüzeyleri için hassas taşlama",
    "İndüksiyon ile yüzey sertleştirme ve kama kanalı açma"
  ],
  "uses": [
    "Elektrik motoru, redüktör ve pompa şaftları",
    "Konveyör tambur ve aktarma milleri",
    "Aşınmış veya kırılmış makine transmisyon milleri"
  ],
  "checks": [
    {
      "title": "Çap, boy ve kademeler",
      "text": "Maksimum mil çapını ve toplam boyunu belirtin. Kademeler, yatak yerleri ve kama kanalları numune veya teknik resme göre işlenir."
    },
    {
      "title": "Malzeme ve çalışma şartı",
      "text": "Ç-1050, 4140 ıslah çeliği, transmisyon çeliği veya paslanmaz (AISI 304/316) malzeme tercihinizi belirtin."
    },
    {
      "title": "Isıl işlem ve taşlama",
      "text": "Rulman yerlerinde sertlik (55-60 HRC) veya hassas yüzey taşlama (Ra 0.8) ihtiyacını paylaşın."
    }
  ],
  "fields": [
    {
      "id": "shaftDiameterLength",
      "label": "Mil çapı ve toplam boy",
      "kind": "text",
      "hint": "Örn: Ø50 mm × 800 mm (kademeli)"
    },
    {
      "id": "steelGrade",
      "label": "Malzeme türü",
      "kind": "text",
      "hint": "4140 Islah / Ç-1050 / İmalat çeliği / Paslanmaz"
    },
    {
      "id": "features",
      "label": "Kama kanalı, diş veya delik",
      "kind": "text",
      "hint": "Kama kanalı, metrik vida dişi veya segman kanalı var mı?"
    },
    {
      "id": "requestedQuantity",
      "label": "Talep edilen adet",
      "kind": "number",
      "hint": "1 adet numune/yedek parça veya seri üretim"
    }
  ],
  "note": "Elinizde çizim yoksa kırık veya aşınmış eski mili atölyemize ulaştırabilirsiniz; kumpas ve mikrometreyle ölçülendirip birebir yenisini üretiriz.",
  "source": "",
  "href": "/ozel-mil-ve-saftlar",
  "status": "active"
},
{
  "id": "bronz-ve-celik-burclar",
  "title": "Hassas burçlar, rulman yatakları ve flanş imalatı",
  "category": "Talaşlı İmalat & Hassas Parçalar",
  "description": "Aşınmaya dayanıklı fosfor bronz (sarı), pirinç, kızıl, alaşımlı çelik ve kestamid (poliamid) kaymalı yatak burçları. Flanşlı burçlar, yağ kanallı burçlar ve özel makine yatak bileşenleri.",
  "details": [
    "Fosfor bronz (CuSn8, CuSn12), pirinç, çelik ve kestamid",
    "İç ve dış spiral/düz yağ kanalı işleme",
    "H7 / h6 sıkı geçme ve çalışma toleransları"
  ],
  "uses": [
    "Ekskavatör, kepçe ve iş makinesi mafsal burçları",
    "Pres, giyotin ve takım tezgahı kaymalı yatakları",
    "Gıda, tarım ve tekstil makineleri döner aksamları"
  ],
  "checks": [
    {
      "title": "İç çap, dış çap ve boy",
      "text": "Burcun iç çapını (mil ölçüsü), dış çapını (yuva ölçüsü) ve toplam boyunu paylaşın."
    },
    {
      "title": "Malzeme seçimi",
      "text": "Yüksek sürtünme ve yük için fosfor bronz, kuru çalışma için kestamid veya çelik burç tercihinizi belirtin."
    },
    {
      "title": "Yağ kanalı ve flanş",
      "text": "Gresörlük deliği, iç yağ kanalı veya flanş (faturalı baş) ihtiyacını paylaşın."
    }
  ],
  "fields": [
    {
      "id": "bushingDimensions",
      "label": "İç çap × Dış çap × Boy",
      "kind": "text",
      "hint": "Örn: Ø40 × Ø50 × 60 mm (Flanşlı veya düz)"
    },
    {
      "id": "material",
      "label": "Malzeme tercihi",
      "kind": "text",
      "hint": "Fosfor Bronz (Sarı) / Çelik / Kestamid / Pirinç"
    },
    {
      "id": "oilGroove",
      "label": "Yağ kanalı / Yağlama deliği",
      "kind": "text",
      "hint": "İç spiral yağ kanalı var mı?"
    },
    {
      "id": "requestedQuantity",
      "label": "Sipariş adedi",
      "kind": "number",
      "hint": "Adet belirtin"
    }
  ],
  "note": "Aşınmış mil ve yuva boşluğunu gidermek için standart dışı özel toleranslı tamir burçları üretilmektedir.",
  "source": "",
  "href": "/bronz-ve-celik-burclar",
  "status": "active"
},
{
  "id": "sanayi-bicaklari",
  "title": "Özel sanayi, gıda ve kesim bıçakları imalatı",
  "category": "Makine Restorasyonu & Parça Yenileme",
  "description": "Gıda işleme (sebze doğrama, kıyma, dilimleme), ambalaj, plastik granül, geri dönüşüm ve sac giyotin bıçaklarının özel imalatı ve bilenmesi. Paslanmaz gıda çeliği ve yüksek alaşımlı takım çeliği (1.2379 / D2) kullanımı.",
  "details": [
    "Paslanmaz gıda sınıfı çelik ve yüksek karbonlu takım çelikleri",
    "Vakum ısıl işlem ile 58-62 HRC yüksek aşınma direnci",
    "Ayna parlaklığında hassas taşlanmış kesici ağız yapısı"
  ],
  "uses": [
    "Endüstriyel sebze ve gıda doğrama makineleri",
    "Plastik granül kırma ve geri dönüşüm tesisleri",
    "Matbaa, kağıt, ambalaj ve tekstil dilimleme bıçakları"
  ],
  "checks": [
    {
      "title": "Numune veya bıçak türü",
      "text": "Elinizdeki körelmiş veya kırılmış bıçağın fotoğrafını veya numunesini ulaştırın. Bıçak formunu numuneden birebir çıkarıyoruz."
    },
    {
      "title": "Kesilen malzeme",
      "text": "Bıçağın kestiği ürünün gıda, plastik, kauçuk, kağıt veya sac olduğunu belirtin; çelik sınıfı buna göre seçilir."
    }
  ],
  "fields": [
    {
      "id": "bladeType",
      "label": "Bıçak türü ve makine bilgisi",
      "kind": "text",
      "hint": "Örn: Sebze doğrama diski / Granül kırma bıçağı / Dairesel dilimleme"
    },
    {
      "id": "cuttingMaterial",
      "label": "Kesilen malzeme",
      "kind": "text",
      "hint": "Gıda maddesi / Plastik / Kağıt / Kauçuk"
    },
    {
      "id": "steelPreference",
      "label": "Çelik türü",
      "kind": "text",
      "hint": "Paslanmaz çelik / 1.2379 Takım çeliği / HSS"
    },
    {
      "id": "requestedQuantity",
      "label": "Talep adedi",
      "kind": "number",
      "hint": "Takım veya adet bilgisi"
    }
  ],
  "note": "Gerçek örneğimizi inceleyin: Sitemizdeki 'Örnek Çalışmalar' bölümünde sebze doğrama makinesi bıçak yenileme projemizi fotoğraflarıyla görebilirsiniz.",
  "source": "",
  "href": "/sanayi-bicaklari",
  "status": "active"
}
,
{
  "id": "d28-kilitleme-pimi",
  "href": "/d28-kilitleme-pimi",
  "title": "D28 Modüler Kaynak Masası Bilyeli Hızlı Kilitleme Pimi",
  "category": "Atölye Tezgahları ve İmalat Destek Ekipmanları",
  "description": "3D delikli D28 kaynak ve fikstür masaları için 3 bilyeli hızlı kilitleme ve sabitleme pimi. Çevir-kilitle mekanizması, sertleştirilmiş 4140 çelik gövde ve hassas taşlanmış dış çap. 10'lu ve 20'li takım paketleri.",
  "details": [
    "4140 ıslah çeliği gövde (ısıl işlem görmüş)",
    "3 adet sertleştirilmiş radyal çelik bilya",
    "Çapak yapışmasını önleyen karartma / nitrasyon kaplama"
  ],
  "uses": [
    "D28 delikli 3D kaynak masalarında fikstür bağlama",
    "Dayama gönyeleri ve köşe takozlarını masaya kilitleme",
    "Kaynak esnasında iş parçası sabitleme"
  ],
  "checks": [
    {
      "title": "Masa delik çapı standardı",
      "text": "Masanızın delik çapının standart D28 (Ø28.00 mm) olup olmadığını belirtin. D16 sistemler için de özel pim imalatımız mevcuttur."
    },
    {
      "title": "Sıkma boyu ve plaka kalınlığı",
      "text": "Masa tablası kalınlığı ile bağlanacak aparatın et kalınlığı toplamını paylaşın (örn: 25 mm masa + 20 mm gönye = 45 mm sıkma boyu)."
    }
  ],
  "fields": [
    {
      "id": "systemType",
      "label": "Sistem delik çapı",
      "kind": "text",
      "hint": "D28 (Standart) veya D16"
    },
    {
      "id": "clampingRange",
      "label": "Bağlama boyu aralığı",
      "kind": "text",
      "hint": "Örn. 0-50 mm ayarlanabilir"
    },
    {
      "id": "requestedQuantity",
      "label": "Talep adedi",
      "kind": "number",
      "hint": "10'lu veya 20'li paket"
    }
  ],
  "note": "Atölyemizde CNC tornada hassas toleranslarla işlenip ısıl işlemden geçirilerek üretilir.",
  "source": "",
  "status": "active"
},
{
  "id": "cnc-torna-yumusak-ayak",
  "href": "/cnc-torna-yumusak-ayak",
  "title": "8 İnç CNC Torna Yumuşak Ayak Takımı (Kitagawa B-208 Uyumlu 3'lü Set)",
  "category": "Talaşlı İmalat & Hassas Parçalar (Torna, Freze, CNC)",
  "description": "8 inç hidrolik CNC torna aynaları için 1.5mm x 60° çentikli C45 çelik yumuşak ayak seti (3 adet). Kitagawa B-208, BB-08, Samchully ve muadili standart aynalarla tam uyumlu. Yüksek eşmerkezlilik ve hassas tornalama için atölye sarf malzemesi.",
  "details": [
    "Kitagawa B-208, BB-08, Howa ve Samchully standart 8 inç hidrolik aynalarla tam uyum",
    "1.5 mm x 60° hassas açılmış çentik dişi (serration) ve 14 mm T-kanal",
    "C45 (1040/1050) sıcak çekme kaliteli imalat çeliğinden CNC frezelenmiş gövde",
    "2 x M12 imbus cıvata için havşalı montaj delikleri (25 mm delik eksen aralığı)",
    "Standart 38 mm veya yüksek profil 50 mm opsiyonu (3 adetlik takım paket)"
  ],
  "uses": [
    "CNC torna tezgahlarında hassas 2. operasyon parçası sıkma",
    "İşlenmiş dış çap veya iç çap tornalama ve salgısız bağlama",
    "Seri imalat torna işlerinde özel çapa göre ayak boşaltma"
  ],
  "checks": [
    {
      "title": "Ayna markası ve inç ölçüsü",
      "text": "CNC torna tezgahınızın ayna çapını (6 inç, 8 inç, 10 inç veya 12 inç) ve marka/modelini (Kitagawa, Samchully, Strong vb.) kontrol edin. En yaygın kullanılan ölçü 8 inçtir."
    },
    {
      "title": "Diş adımı ve kanal ölçüsü",
      "text": "Aynanızın ana çene üzerindeki diş adımının 1.5 mm x 60° ve T-kanal genişliğinin 14 mm olduğunu doğrulayın (Japon ve Kore ayna standardı)."
    },
    {
      "title": "Ayak yüksekliği tercihi",
      "text": "Standart derinlikte parçalar için 38 mm yükseklik yeterlidir; kademeli veya derin bağlama gerektiren parçalar için 50 mm yüksek tip ayak tercih edebilirsiniz."
    }
  ],
  "fields": [
    {
      "id": "chuckSize",
      "label": "Ayna ölçüsü",
      "kind": "text",
      "hint": "8 inç (Standart) / 6 inç / 10 inç"
    },
    {
      "id": "jawHeight",
      "label": "Ayak yüksekliği",
      "kind": "text",
      "hint": "Standart (38 mm) veya Yüksek (50 mm)"
    },
    {
      "id": "quantitySets",
      "label": "Takım adedi",
      "kind": "number",
      "hint": "Takım (1 Takım = 3 Adet Ayak)"
    }
  ],
  "note": "Merzifon atölyemizde CNC dik işlemede sertifikalı C45 lamadan sıfır toleransla üretilir. Stoktan aynı gün kargolanır.",
  "source": "https://jp.misumi-ec.com/vona2/detail/223000625357/",
  "status": "active"
},
{
  "id": "sim-racing-pedal-plakasi",
  "href": "/sim-racing-pedal-plakasi",
  "title": "Sim-Racing Evrensel Pedal & El Freni Adaptör Plakası (CNC Alüminyum)",
  "category": "Talaşlı İmalat & Hassas Parçalar (Torna, Freze, CNC)",
  "description": "Yarış simülatörleri ve alüminyum sigma profil kokpitler için 5mm kalınlığında CNC işlenmiş üniversal pedal ve el freni taban plakası. Moza, Fanatec, Heusinkveld, Logitech ve Thrustmaster pedal setleriyle tam uyumlu çoklu montaj slotları.",
  "details": [
    "5 mm et kalınlığında 6061-T6 veya 5083 havacılık sınıfı rijit alüminyum plaka",
    "Sert frenaj ve Load Cell pedallarda esnemeyi önleyen masif rijit yapı",
    "Moza CRP/SR-P, Fanatec V3/CSL, Heusinkveld Sprint, Logitech G29/PRO uyumlu slotlar",
    "40x40 ve 40x80 sigma profil riglere doğrudan M8 bağlantı kanalları",
    "Pah kırılmış kenarlar, kumlama ve mat siyah eloksal yüzey koruması"
  ],
  "uses": [
    "Alüminyum profil simülasyon kokpitlerinde pedal montajı",
    "Masaüstü ve rig üzeri USB vites / el freni açılı sabitleme",
    "Load cell fren pedallarında sıfır esneme ile tur zamanı geliştirme"
  ],
  "checks": [
    {
      "title": "Pedal ve kokpit uyumu",
      "text": "Kullandığınız pedal setinin modelini ve kokpitinizin profil aralığını (genellikle 400-500 mm arası) belirtin."
    },
    {
      "title": "Eğim ve kızak ihtiyacı",
      "text": "Açılı montaj kulakları veya ileri-geri hareketli kızak adaptörü isteyip istemediğinizi seçebilirsiniz."
    }
  ],
  "fields": [
    {
      "id": "pedalModel",
      "label": "Pedal setiniz",
      "kind": "text",
      "hint": "Örn. Moza CRP, Fanatec CSL LC, Heusinkveld vb."
    },
    {
      "id": "rigType",
      "label": "Kokpit / Rig profil tipi",
      "kind": "text",
      "hint": "Örn. 40x80 sigma profil veya masa montajı"
    }
  ],
  "note": "CNC frezede hassas slotlarla açılır, çapakları alınır ve çizilmeye dayanıklı mat siyah kaplamayla paketlenir.",
  "source": "https://sim-lab.eu/en-tr/products/pedal-slider-baseplate",
  "status": "active"
},
{
  "id": "motosiklet-paddock-bobini",
  "href": "/motosiklet-paddock-bobini",
  "title": "CNC Motosiklet Arka Paddock Sehpa Kaldırma & Koruma Takozu (M6 / M8 / M10)",
  "category": "Talaşlı İmalat & Hassas Parçalar (Torna, Freze, CNC)",
  "description": "Motosiklet arka maşa kaldırma sehpası (paddock stand) yuvasına takılan CNC torna işleme 6061-T6 alüminyum ve Kestamid koruma takozu seti (2 adet). Zincir yağlama, lastik değişimi ve olası düşmelerde maşa koruması sağlar. Paslanmaz çelik imbus cıvata dahil.",
  "details": [
    "CNC tornada hassas işlenmiş 6061-T6 kütük alüminyum veya darbe emici Kestamid gövde",
    "V-tipi arka kaldırma sehpası çatallarına tam oturan 12 mm derin güvenlik kanalı",
    "A2 paslanmaz çelik M6, M8 veya M10 metrik cıvata takımı dahil",
    "Yamaha (M6), Honda/Suzuki/Kawasaki (M8), KTM (M10) model uyumluluk seçenekleri",
    "Çizilmeye ve UV ışınlarına dayanıklı mat siyah eloksal kaplama"
  ],
  "uses": [
    "Motosiklet arka tekerini paddock sehpası ile askıya alma",
    "Periyodik zincir temizliği, yağlama ve teker bakım işleri",
    "Pistte ve yolda olası yana yatmalarda arka maşa ve salıncak koruması"
  ],
  "checks": [
    {
      "title": "Motosiklet marka, model ve cıvata dişi",
      "text": "Motosikletinizin arka salıncak üzerindeki diş ölçüsünü kontrol edin (Yamaha: M6, Honda/Kawasaki/BMW: M8, KTM: M10)."
    }
  ],
  "fields": [
    {
      "id": "motoModel",
      "label": "Motosiklet marka & model",
      "kind": "text",
      "hint": "Örn. Yamaha MT-07, Honda CBR 650R, Kawasaki Ninja"
    },
    {
      "id": "threadSize",
      "label": "Cıvata diş ölçüsü",
      "kind": "text",
      "hint": "M6 / M8 / M10"
    }
  ],
  "note": "CNC torna tezgahımızda tek operasyonda salgısız üretilir; cıvatası ve puluyla çift olarak kutulanır.",
  "source": "https://evotech-performance.com/collections/paddock-stand-bobbins",
  "status": "active"
},

{
  "id": "d28-kaynak-iskencesi",
  "href": "/d28-kaynak-iskencesi",
  "title": "D28 Kaynak Masası Hızlı Sıkma İşkencesi (T-Bar Vidalı Kelepçe)",
  "category": "Atölye Tezgahları ve İmalat Destek Ekipmanları",
  "description": "D28 delikli kaynak masalarında iş parçalarını masaya dikey ve yatay baskıyla sabitlemek için profesyonel hızlı sıkma işkencesi. Yüksek torklu trapez vida ve masaya direkt geçen kılavuz mil.",
  "details": [
    "D28 deliklere tam oturan masif çelik taşıyıcı mil",
    "Lazer kesim/dövme kayar kol ve kilit mekanizması",
    "Kaynak çapağı tutmayan trapez dişli sıkma mili ve mafsallı baskı pabucu"
  ],
  "uses": [
    "Modüler kaynak masasında profilleri ve sacları sabitleme",
    "Kaynak sırasında ısıdan kaynaklanan çarpılmaları engelleme",
    "Hassas şasi montajı"
  ],
  "checks": [
    {
      "title": "Boğaz derinliği ve yükseklik",
      "text": "Sıkılacak parçanın yüksekliğini ve tabladan olan çalışma mesafesini belirtin (Standart boğaz: 150-200 mm, yükseklik: 300 mm)."
    }
  ],
  "fields": [
    {
      "id": "height",
      "label": "Çalışma yüksekliği (mil boyu)",
      "kind": "text",
      "hint": "Örn. 300 mm veya 500 mm"
    },
    {
      "id": "throatDepth",
      "label": "Boğaz derinliği",
      "kind": "text",
      "hint": "Örn. 150 mm veya 200 mm"
    },
    {
      "id": "requestedQuantity",
      "label": "Sipariş adedi",
      "kind": "number",
      "hint": "Kaç adet işkence gerekiyor?"
    }
  ],
  "note": "İthal Avrupa işkencelere kıyasla doğrudan yerli üretimle ekonomik ve dayanıklı çözüm.",
  "source": "",
  "status": "active"
},
{
  "id": "d28-v-blok-kaynak-yatagi",
  "href": "/d28-v-blok-kaynak-yatagi",
  "title": "D28 & D16 V-Blok Boru Kaynak Yatağı ve Prizması (Çiftli Takım)",
  "category": "Atölye Tezgahları ve İmalat Destek Ekipmanları",
  "description": "Silindirik boru, mil ve yuvarlak profilleri kaynak masasında 90° ve 45° açılarda tam merkezleyerek sabitleyen frezelenmiş çelik V-blok kaynak prizması. Alttan D28 pim geçmeli montaj.",
  "details": [
    "S355 yapısal çelik masif freze gövde",
    "90 derece hassas V prizma yatağı (Ø20 - Ø220 mm boru kapasitesi)",
    "Tabanda D28 kaynak masası geçme pimi ve yan tespit delikleri"
  ],
  "uses": [
    "Boru alın kaynağı ve dirsek/flanş montajı",
    "Silindirik şaft ve boruların kaynak öncesi gönyelenmesi",
    "Rollcage ve şasi boru fikstürleri"
  ],
  "checks": [
    {
      "title": "Boru çapı aralığı",
      "text": "Yatak üzerine koyacağınız boru veya millerinizin çap aralığını paylaşın."
    }
  ],
  "fields": [
    {
      "id": "pipeRange",
      "label": "Boru çap aralığı",
      "kind": "text",
      "hint": "Örn. Ø20 - Ø150 mm"
    },
    {
      "id": "setCount",
      "label": "Takım adedi",
      "kind": "number",
      "hint": "Kaç çift V-blok talep ediyorsunuz?"
    }
  ],
  "note": "Frezede tek bağlamada hassas işlenerek eksen kaçıklığı sıfıra indirilmiştir.",
  "source": "",
  "status": "active"
},
{
  "id": "boru-kurt-agzi-aparati",
  "href": "/boru-kurt-agzi-aparati",
  "title": "Matkap Uyumlu Boru Kurtağzı Açma Aparatı (Bihol Testereli)",
  "category": "Atölye Tezgahları ve İmalat Destek Ekipmanları",
  "description": "Standart sütunlu matkap veya el matkabı ile borularda kusursuz kurtağzı (kaynak ağzı) açmak için açı ayarlı profesyonel aparat. 0-60 derece açı taksimatı, çift rulmanlı taşlanmış mil ve sağlam mengene gövdesi.",
  "details": [
    "0-60 derece hassas açı ayar taksimatı",
    "Standart bihol (bimetal delik testeresi) diş adaptörü",
    "Çift rulman yataklı taşlanmış çelik tahrik mili ve boru sıkma mengenesi"
  ],
  "uses": [
    "Motosiklet şasisi, rollcage ve buggy boru konstrüksiyonu",
    "Ferforje, bisiklet ve çelik çatı/sera boru birleştirmeleri",
    "Tesisat ve mobilya boru kaynak ağızları"
  ],
  "checks": [
    {
      "title": "Maksimum boru çapı",
      "text": "Kullanacağınız maksimum boru çapını belirtin (Standart mengene kapasitesi Ø76 mm boruya kadardır)."
    }
  ],
  "fields": [
    {
      "id": "maxPipeDiameter",
      "label": "Maksimum boru çapı",
      "kind": "text",
      "hint": "Örn. 2 inç (Ø60 mm) veya Ø76 mm"
    },
    {
      "id": "drillType",
      "label": "Kullanılacak matkap",
      "kind": "text",
      "hint": "Sütunlu matkap veya Güçlü el matkabı"
    }
  ],
  "note": "Büyük tezgahlara 150 bin TL harcamadan atölyenizdeki matkapla seri boru çentikleme yapmanızı sağlar.",
  "source": "",
  "status": "active"
},
{
  "id": "manuel-boru-bukme",
  "href": "/manuel-boru-bukme",
  "title": "3 Makaralı Manuel Profil ve Boru Bükme Makinesi (Tezgah Tipi Vals)",
  "category": "Atölye Tezgahları ve İmalat Destek Ekipmanları",
  "description": "Boru, profil, lama ve köşebentleri istenen radüste dairesel ve yay şeklinde bükmek için 3 valsli manuel bükme makinesi. C45 çelikten tornalanmış makaralar, trapez vida baskı ve çevirme kolu.",
  "details": [
    "C45 ıslah çeliğinden tornalanmış 3 adet modüler vals makarası",
    "Trapez dişli ağır hizmet üst baskı mili ve el çarkı",
    "Lazer kesim kalın çelik gövde ve tezgah/stand montaj ayakları"
  ],
  "uses": [
    "Sera boruları, tente ve branda kavis bükümleri",
    "Ferforje korkuluk, masa/sandalye mobilya boru bükümleri",
    "Reklam panosu ve çelik yay konstrüksiyonları"
  ],
  "checks": [
    {
      "title": "Bükülecek profil ve boru ölçüleri",
      "text": "Bükmek istediğiniz boru çaplarını (örn: Ø25, Ø32 mm) veya kutu profil ebatlarını (örn: 30x30 mm) belirtin. Uygun makara setleri hazırlanır."
    }
  ],
  "fields": [
    {
      "id": "profileDimensions",
      "label": "Profil / Boru ölçüleri",
      "kind": "text",
      "hint": "Örn. 30x30 mm profil veya 1 inç boru"
    },
    {
      "id": "wallThickness",
      "label": "Et kalınlığı",
      "kind": "text",
      "hint": "Örn. 1.5 mm - 2.5 mm"
    }
  ],
  "note": "Redüktör ve motor takılarak ileride motorlu sisteme çevrilebilir esnek modüler şasi.",
  "source": "",
  "status": "active"
},
{
  "id": "devirmeli-talas-arabasi-forklift",
  "href": "/devirmeli-talas-arabasi-forklift",
  "title": "Sıvı Tahliyeli ve Forklift Cepli Devirmeli Talaş Arabası (250L / 350L)",
  "category": "Atölye Tezgahları ve İmalat Destek Ekipmanları",
  "description": "CNC işleme merkezleri ve torna tezgahları için boryağı/soğutma sıvısı süzme ızgaralı, 1 inç tahliye vanalı ve forkliftle konteynere devirmeli damperli talaş arabası.",
  "details": [
    "Tabanda delikli süzgeç sacı ve boryağı tahliye küresel vanası",
    "Forklift çatal kılıf cepleri ve emniyetli yaylı devirme kilidi",
    "Ağır yük poliüretan/döküm sanayi tekerlekleri ve yön tutamağı"
  ],
  "uses": [
    "CNC torna ve frezelerde talaş biriktirme ve taşıma",
    "Kıymetli boryağını talaştan süzüp geri kazanma",
    "Forkliftle talaş konteynerine tek hamlede devirip boşaltma"
  ],
  "checks": [
    {
      "title": "Kapasite ve tezgah altı yüksekliği",
      "text": "Tezgah talaş konveyörü çıkış yüksekliğinizi ve işletmenize uygun hacmi (250L / 350L / 500L) paylaşın."
    }
  ],
  "fields": [
    {
      "id": "volume",
      "label": "Hacim seçeneği",
      "kind": "text",
      "hint": "250 Litre veya 350 Litre"
    },
    {
      "id": "drainType",
      "label": "Sıvı tahliye vanası",
      "kind": "text",
      "hint": "1 inç küresel vana (Standart)"
    }
  ],
  "note": "Lazer sac büküm ve sızdırmaz gazaltı kaynakla talaşlı imalat için özel olarak üretilir.",
  "source": "",
  "status": "active"
},
{
  "id": "bant-zimpara-makinesi",
  "href": "/bant-zimpara-makinesi",
  "title": "50x2000 mm Tezgah Tipi Metal Bant Zımpara & Çapak Alma Makinesi",
  "category": "Atölye Tezgahları ve İmalat Destek Ekipmanları",
  "description": "Lazer, plazma, testere kesim sonrası parçalardaki çapakları temizlemek, kaynak dikişlerini düzeltmek ve metal şekillendirmek için 50x2000 mm tezgah tipi bant zımpara makinesi.",
  "details": [
    "1.5 kW veya 2.2 kW 2800 d/dk güçlü elektrik motoru",
    "Tornalanmış alüminyum tahrik ve ayarlanabilir avare makaralar",
    "Hızlı bant gerdirme amortisörü ve 0-90° yatay/dikey çalışma açısı"
  ],
  "uses": [
    "Metal ve sac parçaların çapak alma ve kenar kırma işlemleri",
    "Kaynak dikişi taşlama ve polisaj ön hazırlığı",
    "Bıçak imalatı ve genel metal taşlama işleri"
  ],
  "checks": [
    {
      "title": "Elektrik beslemesi",
      "text": "Atölyenizde 220V Monofaze mi yoksa 380V Trifaze elektrik mi bulunduğunu belirtin."
    }
  ],
  "fields": [
    {
      "id": "voltage",
      "label": "Elektrik voltajı",
      "kind": "text",
      "hint": "220V Monofaze veya 380V Trifaze"
    },
    {
      "id": "beltSize",
      "label": "Bant ölçüsü",
      "kind": "text",
      "hint": "50x2000 mm (Standart) veya 75x2000 mm"
    }
  ],
  "note": "Titreşimsiz masif çelik gövde tasarımı ile uzun ömürlü atölye yardımcısı.",
  "source": "",
  "status": "active"
},
{
  "id": "cnc-taret-reduksiyon-kovani",
  "href": "/cnc-taret-reduksiyon-kovani",
  "title": "CNC Torna Taret Redüksiyon Kovanları & Mors Adaptörleri",
  "category": "Talaşlı İmalat & Hassas Parçalar (Torna, Freze, CNC)",
  "description": "CNC torna taret deliklerinde delik barası, rayba, kovan ve mors konik takımları hassas ve salgısız bağlamak için boyuna esneme yarıklı redüksiyon kovanları. D40 ve D32 standart dış çaplar.",
  "details": [
    "4140 ıslah çeliği gövde, taşlanmış dış çap ve H7 iç delik",
    "Salgısız takım sıkma sağlayan tek taraflı boyuna esneme yarığı",
    "Flanşlı alın tasarımı ve tespit cıvata yuvaları"
  ],
  "uses": [
    "CNC torna taretine farklı çapta delik barası ve matkap bağlama",
    "MK1, MK2, MK3 mors şaftlı takımları tarete adapte etme",
    "Titreşimsiz ve rijit talaş kaldırma"
  ],
  "checks": [
    {
      "title": "Dış çap ve iç çap ölçüsü",
      "text": "Taretinizin delik çapını (örn: D40 mm) ve bağlayacağınız takımın sap çapını (örn: Ø20, Ø25 mm) belirtin."
    }
  ],
  "fields": [
    {
      "id": "outerDiameter",
      "label": "Taret dış çapı",
      "kind": "text",
      "hint": "D32, D40 veya D50 mm"
    },
    {
      "id": "innerDiameter",
      "label": "İç takım delik çapı / Mors",
      "kind": "text",
      "hint": "Örn. Ø20 mm, Ø25 mm veya MK2"
    }
  ],
  "note": "Hassas toleranslarda taşlanarak salgı değeri 0.01 mm altına indirilmiştir.",
  "source": "",
  "status": "active"
},
{
  "id": "konik-kilit-saft-kilitleme",
  "href": "/konik-kilit-saft-kilitleme",
  "title": "Kamasız Şaft Kilitleme Elemanları (Konik Kilit / Tollok Muadili)",
  "category": "Talaşlı İmalat & Hassas Parçalar (Torna, Freze, CNC)",
  "description": "Kasnak, dişli, volan ve tamburları transmisyon miline kamasız olarak, yüksek tork ile kilitleyen çift konik sıkma bilezikleri. Kamadan kaynaklı mil zayıflamasını ve boşluk oluşumunu engeller.",
  "details": [
    "C45 çelik iç ve dış konik açılı yarık bilezikler",
    "12.9 yüksek mukavemetli DIN 912 alyan cıvata grubu",
    "Yüksek tork ve eksenel kuvvet taşıma kapasitesi"
  ],
  "uses": [
    "Konveyör tamburları ve redüktör çıkış milleri bağlantısı",
    "Triger kasnak, zincir dişli ve volan sabitleme",
    "Kamasız hassas açısal senkronizasyon gerektiren mekanizmalar"
  ],
  "checks": [
    {
      "title": "Mil çapı ve göbek dış çapı",
      "text": "Milinizin dış çapını (d) ve dişli/kasnak göbeğinizin iç çapını (D) belirtin (örn: 30x55 mm)."
    }
  ],
  "fields": [
    {
      "id": "shaftDiameter",
      "label": "Mil iç çapı (d)",
      "kind": "text",
      "hint": "Örn. Ø25, Ø30, Ø40 mm"
    },
    {
      "id": "hubDiameter",
      "label": "Gövde dış çapı (D)",
      "kind": "text",
      "hint": "Örn. Ø50, Ø55, Ø65 mm"
    }
  ],
  "note": "Montajı ve demontajı son derece pratiktir; millerde kama kanalı maliyetini sıfırlar.",
  "source": "",
  "status": "active"
},
{
  "id": "bk-bf-vidali-mil-yataklari",
  "href": "/bk-bf-vidali-mil-yataklari",
  "title": "BK12 / BF12 ve BK15 / BF15 Vidalı Mil Uç Yatakları Takımı",
  "category": "Talaşlı İmalat & Hassas Parçalar (Torna, Freze, CNC)",
  "description": "CNC router, otomasyon eksenleri ve vidalı mil mekanizmaları için motor tarafı sabit yatak (BK) ve karşı serbest yatak (BF) takımı. Hassas frezelenmiş çelik gövde ve açılı temaslı rulmanlar.",
  "details": [
    "BK Sabit Yatak: Karşılıklı çift sıra eğik temaslı bilyeli rulman (eksenel boşluksuz)",
    "BF Serbest Yatak: Milin termal genleşmesini tolere eden derin oluklu rulman",
    "C45 çelik frezelenmiş gövde, segman ve conta kapakları"
  ],
  "uses": [
    "CNC router ve freze eksen vidalı milleri",
    "3D yazıcı, kartezyen robot ve lineer modüller",
    "Endüstriyel pozisyonlama tablaları"
  ],
  "checks": [
    {
      "title": "Vidalı mil tipi",
      "text": "Kullanacağınız vidalı mil kodunu belirtin (Standart SFU1605/1610 için BK12/BF12, SFU2005/2010 için BK15/BF15)."
    }
  ],
  "fields": [
    {
      "id": "modelType",
      "label": "Yatak modeli",
      "kind": "text",
      "hint": "BK12/BF12 veya BK15/BF15"
    },
    {
      "id": "setCount",
      "label": "Takım adedi",
      "kind": "number",
      "hint": "Kaç takım gerekiyor?"
    }
  ],
  "note": "Eksenel boşluğu sıfırlayarak CNC ve otomasyon projelerinde yüksek tekrarlanabilirlik sağlar.",
  "source": "",
  "status": "active"
},
{
  "id": "cektirmeli-tespit-pimi-din7979",
  "href": "/cektirmeli-tespit-pimi-din7979",
  "title": "DIN 7979 / ISO 8735 Çektirmeli İçten Dişli Taşlanmış Tespit Pimleri",
  "category": "Talaşlı İmalat & Hassas Parçalar (Torna, Freze, CNC)",
  "description": "Kalıp, fikstür ve makine gövdelerinde kör deliklere çakılan ve gerektiğinde cıvata ile geri çekilerek zahmetsizce sökülen hava kanallı içten dişli taşlanmış tespit pimleri. 10'lu paket.",
  "details": [
    "16MnCr5 veya 4140 çelik malzeme, 60 HRC sementasyon/ısıl işlem",
    "m6 ve h7 hassas dış çap taşlama toleransı",
    "Alından metrik iç kılavuz dişi (M6/M8) ve kör delik hava tahliye kanalı"
  ],
  "uses": [
    "Kesme, bükme ve enjeksiyon kalıplarında plaka merkezleme",
    "Kör delik fikstür ve aparat montajları",
    "Sökülüp takılması gereken makine parçaları"
  ],
  "checks": [
    {
      "title": "Pim çapı ve boyu",
      "text": "İhtiyacınız olan pim çapını ve boyunu belirtin (Örn: Ø10x50 mm M6 iç dişli)."
    }
  ],
  "fields": [
    {
      "id": "pinDiameter",
      "label": "Pim çapı (d)",
      "kind": "text",
      "hint": "Örn. Ø8, Ø10, Ø12 mm"
    },
    {
      "id": "pinLength",
      "label": "Pim boyu (L)",
      "kind": "text",
      "hint": "Örn. 40, 50, 60 mm"
    }
  ],
  "note": "Kör delikte kalan pimi çıkartmak için kalıbı bozma derdine son veren standart çözüm.",
  "source": "",
  "status": "active"
},
{
  "id": "forklift-varil-tasima-atasmani",
  "href": "/forklift-varil-tasima-atasmani",
  "title": "Forklift Mekanik Otomatik Varil Taşıma Ataşmanı (Kıskaçlı)",
  "category": "Atölye Tezgahları ve İmalat Destek Ekipmanları",
  "description": "200 litrelik standart saç ve plastik varilleri forklift çatallarına geçerek hidrolik tesisat gerektirmeden, tamamen mekanik yerçekimi kilit sistemiyle taşıyan kıskaçlı ataşman. Tekli ve çiftli seçenekler.",
  "details": [
    "Forklift çatal kılıfları ve emniyet zincir kilidi",
    "Varil çemberini otomatik kavrayan yaylı mekanik kilit çenesi",
    "Ağır hizmet lazer kesim sac konstrüksiyon (500 kg taşıma kapasitesi)"
  ],
  "uses": [
    "Kimya, boya, gıda ve madeni yağ tesislerinde varil yükleme",
    "Kamyon veya konteyner içi varil istifleme",
    "İşletme içi tek operatörle varil transferi"
  ],
  "checks": [
    {
      "title": "Varil tipi ve adedi",
      "text": "Taşınacak varilin saç (çemberli) mi yoksa plastik mi olduğunu ve tekli mi çiftli mi ataşman istediğinizi belirtin."
    }
  ],
  "fields": [
    {
      "id": "drumCount",
      "label": "Ataşman tipi",
      "kind": "text",
      "hint": "Tek varilli veya Çift varilli"
    },
    {
      "id": "drumMaterial",
      "label": "Varil türü",
      "kind": "text",
      "hint": "Saç varil veya Plastik varil"
    }
  ],
  "note": "Operatör forkliftten inmeden varili kavrar ve bırakır; forklift hidroliğine ekstra valf gerektirmez.",
  "source": "",
  "status": "active"
},
{
  "id": "forklift-vinc-bomu-atasmani",
  "href": "/forklift-vinc-bomu-atasmani",
  "title": "Forklift Teleskopik Vinç Bomu Ataşmanı (2.5m - 3m)",
  "category": "Atölye Tezgahları ve İmalat Destek Ekipmanları",
  "description": "Forkliftinizi anında seyyar bir vince dönüştüren teleskopik uzatmalı bom kolu. Tavan vinci bulunmayan açık alanlarda, kamyon kasasından makine indirmede ve yüksek raflara malzeme yerleştirmede kullanılır.",
  "details": [
    "İç içe geçen ağır hizmet kutu profil teleskopik konstrüksiyon",
    "Fırdöndülü 360 derece döner emniyet mandallı çelik vinç kancası",
    "Kademeli pim kilitleme sistemi (1.5 metreden 3 metreye uzatma)"
  ],
  "uses": [
    "Tavan vinci olmayan fabrikalarda makine yükleme/indirme",
    "Geniş ebatlı kalıp ve sac yüklerini askıda taşıma",
    "Yüksek raflara ve derin araç kasalarına erişim"
  ],
  "checks": [
    {
      "title": "Forklift tonajı ve çatal ölçüsü",
      "text": "Forkliftinizin taşıma kapasitesini ve çatal en/kalınlık ölçülerini paylaşın."
    }
  ],
  "fields": [
    {
      "id": "forkliftTonnage",
      "label": "Forklift tonajı",
      "kind": "text",
      "hint": "Örn. 2.5 Ton veya 3.5 Ton"
    },
    {
      "id": "maxExtension",
      "label": "Maksimum uzatma boyu",
      "kind": "text",
      "hint": "Örn. 2.5 metre veya 3.0 metre"
    }
  ],
  "note": "Statik mukavemet hesaplarına uygun St52 çelik profil ve takviye saclarıyla imal edilir.",
  "source": "",
  "status": "active"
},
{
  "id": "hidrolik-pres-rulman-cektirme-seti",
  "href": "/hidrolik-pres-rulman-cektirme-seti",
  "title": "Hidrolik Pres İçin Kademeli Burç ve Rulman Çektirme/Basma Adaptör Seti",
  "category": "Atölye Tezgahları ve İmalat Destek Ekipmanları",
  "description": "Atölye preslerinde rulman, burç, keçe ve bilyeleri parçaya zarar vermeden düzgünce basmak ve sökmek için kademeli çelik disk ve saplama takımı. Ø18 mm'den Ø65 mm'ye kadar 2'şer mm aralıklı diskler.",
  "details": [
    "İmalat çeliğinden hassas tornalanmış çift taraflı kademeli diskler",
    "Sertleştirilmiş çekme/basma merkezleme saplaması ve somun grubu",
    "Darbelere ve yüksek pres basıncına dayanıklı ısıl işlem"
  ],
  "uses": [
    "Oto ve traktör tamir atölyelerinde tekerlek poyra rulmanı basma",
    "Salıncak burçları ve şanzıman bilyeleri sökme-takma",
    "Sanayi makinelerinde burç montajı"
  ],
  "checks": [
    {
      "title": "Çap aralığı tercihi",
      "text": "En çok çalıştığınız rulman ve burç çapı aralığını belirtin."
    }
  ],
  "fields": [
    {
      "id": "diameterRange",
      "label": "Disk çap aralığı",
      "kind": "text",
      "hint": "Ø18 - Ø65 mm (Standart Set)"
    },
    {
      "id": "pressTonnage",
      "label": "Kullanılacak pres tonajı",
      "kind": "text",
      "hint": "Örn. 10 Ton, 20 Ton, 30 Ton"
    }
  ],
  "note": "Preste parça arama ve uydurma takoz kullanma tehlikesini ortadan kaldıran profesyonel takım.",
  "source": "",
  "status": "active"
},
{
  "id": "hidrolik-pres-mil-dogrultma-v-blok",
  "href": "/hidrolik-pres-mil-dogrultma-v-blok",
  "title": "Hidrolik Atölye Presi Mil Doğrultma V-Blok ve Baskı Kaması Takımı",
  "category": "Atölye Tezgahları ve İmalat Destek Ekipmanları",
  "description": "Eğilmiş transmisyon millerini, aksları, boru ve hidrolik piston kollarını hidrolik pres altında hassas doğrultmak için 2 adet V yatak bloğu ve 1 adet kavisli pres ucu baskı kaması takımı.",
  "details": [
    "S355 yapısal çelik masif freze gövde V-bloklar",
    "Pres tablası T-kanalına veya düz zemine oturan kaymaz taban",
    "Pres pistonu ucuna bağlanan yarıçaplı kavisli baskı kaması"
  ],
  "uses": [
    "Tornaya girmeden önce eğri milleri ve şaftları doğrultma",
    "Aks milleri ve traktör transmisyon kolları pres doğrultması",
    "Bükülmüş boru ve profilleri düzeltme"
  ],
  "checks": [
    {
      "title": "Pres tablası ve mil çapı",
      "text": "Presinizin tabla genişliğini ve doğrultulacak maksimum mil çapını belirtin."
    }
  ],
  "fields": [
    {
      "id": "maxShaftDiameter",
      "label": "Maksimum mil çapı",
      "kind": "text",
      "hint": "Örn. Ø80 mm veya Ø120 mm"
    },
    {
      "id": "pressCapacity",
      "label": "Pres kapasitesi",
      "kind": "text",
      "hint": "Örn. 20 Ton veya 50 Ton"
    }
  ],
  "note": "Millerin yüzeyini ezmeden ve çizmeden dengeli kuvvet uygulayarak hassas düzeltme sağlar.",
  "source": "",
  "status": "active"
}
];
