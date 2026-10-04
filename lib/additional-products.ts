import { factoryProducts } from './factory-products';
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
}
];
