export type InquiryField = {id:string;label:string;kind:'text'|'number';unit?:string;hint:string};
export type InquiryProduct = {id:string;href:string;title:string;category:string;description:string;details:string[];uses:string[];checks:{title:string;text:string}[];fields:InquiryField[];note:string;source:string};
export const additionalProducts:InquiryProduct[] = [
  {
    "id": "profil-tasima-arabasi",
    "href": "/profil-tasima-arabasi",
    "title": "Profil taşıma arabası",
    "category": "Atölye taşıma ekipmanları",
    "description": "Uzun profilleri ve profil paketlerini taşıma ihtiyacınıza göre ölçü, bölme ve yüzey temas detaylarını belirleyin.",
    "details": [
      "Profil boyuna göre",
      "Bölmeli yerleşim",
      "Atölye içi taşıma"
    ],
    "uses": [
      "Profil işleme atölyeleri",
      "Kapı ve pencere üretimi",
      "Uzun malzeme hazırlama alanları"
    ],
    "checks": [
      {
        "title": "Taşınan profil",
        "text": "En uzun profilin boyunu, kesitini ve bir seferde taşınacak toplam ağırlığı paylaşın."
      },
      {
        "title": "Yerleşim düzeni",
        "text": "Yatay veya dikey kullanım isteğinizi, bölme sayısını ve yerleştirme yönünü belirtin."
      },
      {
        "title": "Zemin ve geçiş",
        "text": "Kapı genişliği, koridor, eşik ve zemin bilgileri dış ölçülerin değerlendirilmesine yardımcı olur."
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
      }
    ],
    "note": "Tekerlek, temas yüzeyi ve taşıma kapasitesi kullanım koşullarına göre değerlendirilir.",
    "source": "https://www.yilmazmachine.com.tr/urunler/pc-4000-profil-tasima-arabasi/"
  },
  {
    "id": "abkant-kalip-arabasi",
    "href": "/abkant-kalip-arabasi",
    "title": "Abkant kalıp taşıma arabası",
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
    "source": "https://www.fersametal.com.tr/products/abkant-kalip-tasima-arabasi"
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
    "source": "https://platinvinc.com/sac-stoklama-rafi/"
  },
  {
    "id": "tekstil-tasima-arabasi",
    "href": "/tekstil-tasima-arabasi",
    "title": "Tekstil ve kumaş taşıma arabası",
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
    "source": "https://www.permak.com.tr/urunler/camasirhane-yardimci-ekipmanlari/permak-utp275-tekstil-tasima-arabasi"
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
    "source": "https://www.tvh.com/tr-tr/yedek-parcalar/yedek-parcalar-icin/forkliftler/forklift-catal-uzaticilar"
  },
  {
    "id": "tup-tasima-kafesi",
    "href": "/tup-tasima-kafesi",
    "title": "Gaz tüpü taşıma kafesi",
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
    "source": "https://emapro-metal.com/products"
  }
];

