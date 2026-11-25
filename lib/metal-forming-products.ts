import type { InquiryProduct } from './additional-products';

export type MetalFormingVariant = {
  code: string;
  title: string;
  description: string;
  whatsappTopic: string;
};

export type MetalFormingReference = {
  label: string;
  url: string;
  kind: 'CAD / Teknik Çizim Referansı' | 'Ürün Grubu Referansı';
};

export const metalFormingCategory = 'metal-sekillendirme-makineleri';

export const metalFormingExtras: Record<
  string,
  {
    alt: string;
    caption: string;
    schematicSvg: string;
    variants: MetalFormingVariant[];
    references: MetalFormingReference[];
  }
> = {
  'manuel-silindir-sac-kivirma-makinesi': {
    alt: 'Masaüstü manuel silindir sac kıvırma makinesi (3 toplu SJ-300 / S-300 tipi kompakt gövde) — Mekanikya tasarım konsepti',
    caption: 'Mekanikya tasarım konsepti · Özel teklif',
    schematicSvg: '/images/metal-forming/manuel-silindir-sac-kivirma-makinesi.svg',
    variants: [
      {
        code: '01',
        title: 'Kompakt masaüstü 3 toplu gövde (300 mm sınıfı)',
        description:
          'Ön sac besleme tablası, üstten mandallı sıkıştırma vidaları, kapalı sol dişli kutusu ve sağ yanda dikey çevirme kolu bulunan alçak profilli masaüstü düzen.',
        whatsappTopic: 'kompakt masaüstü 3 toplu gövde (300 mm sınıfı)',
      },
      {
        code: '02',
        title: 'Geniş atölye modeli ve açılabilir üst top (500–650 mm sınıfı)',
        description:
          'Tam kapatılmış silindirik sac boruların makineden rahatça çıkarılabilmesi için açılabilir üst mil kilidi ve genişletilmiş çalışma boyu değerlendirmesi.',
        whatsappTopic: 'geniş atölye modeli / açılabilir üst top',
      },
      {
        code: '03',
        title: 'Tel / çubuk kanallı ve yüzeye özel silindir seçeneği',
        description:
          'Silindir sağ ucunda entegre 3 kademeli tel/çubuk halka kıvırma kanalları ile paslanmaz veya alüminyum saclara uygun taşlanmış silindir talebi.',
        whatsappTopic: 'tel kanallı / özel taşlanmış silindir seçeneği',
      },
    ],
    references: [
      {
        label: 'ForgeTechDesigns — Desktop Sheet & Tube Rolling Machine (Ürün 14 · 3B CAD & PDF/DXF referansı)',
        url: 'https://www.etsy.com/listing/4509853191/desktop-sheet-tube-rolling-machine',
        kind: 'CAD / Teknik Çizim Referansı',
      },
      {
        label: 'Say-Mak SR Serisi — Manuel Silindir Makineleri',
        url: 'https://www.say-mak.com.tr/manuel-silindir-makineleri/sr',
        kind: 'Ürün Grubu Referansı',
      },
    ],
  },
  'manuel-boru-ve-profil-bukme-makinesi': {
    alt: 'Manuel boru ve profil bükme makinesi (TR1 tipi kademeli çift trapez plaka, flanşlı yatak ve zincir tahrikli 3 makaralı yapı) — Mekanikya tasarım konsepti',
    caption: 'Mekanikya tasarım konsepti · Özel teklif',
    schematicSvg: '/images/metal-forming/manuel-boru-ve-profil-bukme-makinesi.svg',
    variants: [
      {
        code: '01',
        title: 'TR1 tipi kademeli çift plaka ve zincir tahrikli gövde',
        description:
          'Eğimli kenarlarında alt rulo açıklığını değiştirmeye yarayan kademeli delikler, flanşlı rulman yatakları, arka zincir-dişli senkron tahriki ve üstten trapez vidalı T-kol baskısı bulunan kompakt gövde.',
        whatsappTopic: 'TR1 tipi kademeli çift plaka ve zincir tahrikli gövde',
      },
      {
        code: '02',
        title: 'Kutu profil ve lama için ayarlanabilir yan bilezikli miller',
        description:
          'Kare/dikdörtgen kutu profillerin ve lamaların büküm sırasında burkulmasını sınırlayan, mil üzerinde profil genişliğine göre ayarlanabilen kademeli çelik burç/bilezik düzeni.',
        whatsappTopic: 'kutu profil için ayarlanabilir bilezikli mil düzeni',
      },
      {
        code: '03',
        title: 'Yuvarlak boru makarası veya kalıplı dar açı büküm',
        description:
          'Yuvarlak boruların dış çapına tam oturan radüslü makara setleri veya dar yarıçaplı (0–120°) dönüşler için kalıplı boru bükme mekanizması incelemesi.',
        whatsappTopic: 'yuvarlak boru makara seti / kalıplı büküm',
      },
    ],
    references: [
      {
        label: 'TR1 Manual Tube Bender (ТР1.00000 СБ) — 3B CAD Montaj Referansı (Ürün 16 · SolidWorks / STEP)',
        url: 'https://free3d.com/3d-model/tube-bender-4949.html',
        kind: 'CAD / Teknik Çizim Referansı',
      },
      {
        label: 'Rorty Tube Bender #1 — Teknik Çizim ve İmalat Kılavuzu Referansı (Ürün 16)',
        url: 'https://rorty.net/product/tube-bender-1/',
        kind: 'CAD / Teknik Çizim Referansı',
      },
      {
        label: 'Akomac APB30 — Manuel Profil ve Boru Kıvırma Makinesi',
        url: 'https://www.akomac.com/profil-boru-kivirma-makinesi-apb30',
        kind: 'Ürün Grubu Referansı',
      },
    ],
  },
  'manuel-ferforje-spiral-bukme-makinesi': {
    alt: 'Manuel ferforje spiral bükme makinesi (SBG-30 / MPB-10 tipi alçak kare tabanlı, yatay mafsallı kollu ve parçalı spiral kalıp setli) — Mekanikya tasarım konsepti',
    caption: 'Mekanikya tasarım konsepti · Özel teklif',
    schematicSvg: '/images/metal-forming/manuel-ferforje-spiral-bukme-makinesi.svg',
    variants: [
      {
        code: '01',
        title: 'Alçak flanşlı kare taban ve yatay mafsallı bükme kolu',
        description:
          'Dört köşeden tezgâha cıvatalanan ağır hizmet kare taban, eksantrik menteşeli hızlı sıkıştırma çenesi, tırtıllı baskı ayar bileziği ve uzun düz çelik manivela kolu.',
        whatsappTopic: 'alçak kare tabanlı yatay kollu standart gövde',
      },
      {
        code: '02',
        title: '3 kademeli parçalı iç-dış spiral kalıp seti',
        description:
          'Küçük göbekten geniş ferforje kıvrımına geçebilmek için birbirini tamamlayan iç spiral çekirdek ve sökülebilir C-formlu dış spiral kalıp segmentleri.',
        whatsappTopic: '3 kademeli parçalı iç-dış spiral kalıp seti',
      },
      {
        code: '03',
        title: 'Özel motif kalıbı ve seri üretim dayaması',
        description:
          'Kapı, korkuluk ve bahçe mobilyasında kendi motif ölçünüzü standart tekrar hassasiyetiyle üretebilmek için numuneye özel kalıp segmenti geliştirme.',
        whatsappTopic: 'özel motif kalıbı geliştirme',
      },
    ],
    references: [
      {
        label: 'Cults3D — Manual Scroll Bending Machine (Ürün 30 · SBG-30 tipi 3B STEP CAD referansı)',
        url: 'https://cults3d.com/en/3d-model/tool/3d-cad-model-manual-scroll-bending-machine-for-decorative-metalwork',
        kind: 'CAD / Teknik Çizim Referansı',
      },
      {
        label: 'GizmoPlans — Scroll Bender & Picket Twister (Ürün 30 · İmalat ve montaj çizim referansı)',
        url: 'https://www.gizmoplans.com/product/scroll-bender-picket-twister/',
        kind: 'CAD / Teknik Çizim Referansı',
      },
    ],
  },
};

export const metalFormingProducts: InquiryProduct[] = [
  {
    id: 'manuel-silindir-sac-kivirma-makinesi',
    href: '/manuel-silindir-sac-kivirma-makinesi',
    title: 'Masaüstü Manuel Silindir Sac Kıvırma Makinesi',
    category: 'Metal Şekillendirme Makineleri',
    description:
      'İnce sac levhaları silindirik, konik veya kavisli formlara dönüştürmek için ön sac besleme tablalı, mandallı üst sıkıştırmalı ve tel kıvırma kanallı 3 toplu masaüstü manuel sac kıvırma makinesi. Sac kalınlığı ve genişliğinize göre özel teklif alın.',
    details: [
      'Alçak profilli 3 toplu (üç silindirli) gövde, kapalı yan dişli muhafazası ve ön sac kılavuz tablası',
      'Üstten L-mandallı sıkıştırma vidaları, arka yıldız volanlı kavis ayarı ve sağ uçta 3 tel kanalı',
      'Tezgâha veya mengeneye sabitlemeye uygun kompakt yapı; hedef çapa göre silindir değerlendirmesi',
    ],
    uses: [
      'Soba, baca ve havalandırma kanalı imalatı',
      'Kaporta, davlumbaz ve kavisli sac gövde işleri',
      'Küçük metal atölyeleri ve prototip üretimi',
    ],
    checks: [
      {
        title: 'Sac malzemesi ve kalınlık',
        text: 'DKP, galvaniz, paslanmaz veya alüminyum malzeme cinsi ile kalınlığı ve işlenecek maksimum sac genişliğini paylaşın.',
      },
      {
        title: 'Hedef silindir çapı ve kavis',
        text: 'Kıvrılacak en küçük silindir çapını veya kavis yarıçapını belirtin; silindir çapı ve açılabilir üst top ihtiyacı buna göre ele alınır.',
      },
      {
        title: 'Masaüstü yerleşim ve tel kanalı',
        text: 'Tezgâh üstü cıvatalı kullanım tercihini ve çubuk/tel halka kıvırma kanalı ihtiyacınızı ekleyin.',
      },
    ],
    fields: [
      { id: 'material', label: 'Sac malzemesi ve kalınlığı', kind: 'text', hint: 'DKP / galvaniz / paslanmaz ve kalınlık (mm)' },
      { id: 'sheetWidth', label: 'İşlenecek sac genişliği', kind: 'number', unit: 'mm', hint: 'Talep ettiğiniz çalışma genişliği (örn. 300, 500)' },
      { id: 'targetForm', label: 'Hedef çap / kavis ve kurulum tercihi', kind: 'text', hint: 'En küçük kıvırma çapı, açılabilir üst mil / tel kanalı' },
    ],
    note: 'Tasarım konsepti aşamasındadır; sabit çalışma genişliği, sac kalınlığı ve minimum kıvırma çapı bu sayfada taahhüt edilmez. Silindir paralelliği, mil dayanımı ve sıkışma güvenliği hedef parçaya göre mühendislik incelemesiyle belirlenir.',
    source: 'https://www.etsy.com/listing/4509853191/desktop-sheet-tube-rolling-machine',
  },
  {
    id: 'manuel-boru-ve-profil-bukme-makinesi',
    href: '/manuel-boru-ve-profil-bukme-makinesi',
    title: 'Manuel Boru ve Profil Bükme Makinesi',
    category: 'Metal Şekillendirme Makineleri',
    description:
      'Kutu profil, lama ve boruları yay veya halka formunda kıvırmak için kademeli delikli çift trapez yan plaka, flanşlı rulman yatakları ve zincir tahrikli alt rulolara sahip manuel boru ve profil bükme makinesi. Kesit ölçünüze göre özel teklif isteyin.',
    details: [
      'Alt rulo eksen açıklığını değiştirmeye imkân tanıyan kademeli delikli lazer kesim çift çelik yan plaka',
      'Flanşlı rulman yatakları, arka zincir-dişli senkron tahriki, üst trapez vida (T-kol) ve dikey tahrik kolu',
      'Farklı kutu profil genişliklerine ayarlanabilen mil üstü burç/bilezikler veya boru makarası seçeneği',
    ],
    uses: [
      'Sera kemeri, tente ve sundurma konstrüksiyonları',
      'Metal mobilya, korkuluk ve dekoratif halka imalatı',
      'Demir doğrama, şase ve küçük atölye işleri',
    ],
    checks: [
      {
        title: 'Boru veya profil kesiti',
        text: 'Kare/dikdörtgen kutu profil ölçülerini, lamayı veya yuvarlak boru dış çapı ile et kalınlığını paylaşın.',
      },
      {
        title: 'Hedef yarıçap ve rulo açıklığı',
        text: 'İstenen en küçük kavis yarıçapını ve parça boyunu belirtin; alt makara eksen mesafesi ve mil çapı buna göre değerlendirilir.',
      },
      {
        title: 'Bilezik / makara seti beklentisi',
        text: 'Ayarlanabilir yan dayama bilezikleriyle çoklu kutu profil mi yoksa boru çapına özel radüslü makara mı istediğinizi bildirin.',
      },
    ],
    fields: [
      { id: 'section', label: 'Malzeme, kesit ve et kalınlığı', kind: 'text', hint: 'Örn. 40×40×2 mm kutu profil, 40×20 profil veya Ø32 boru' },
      { id: 'radius', label: 'Hedef kavis yarıçapı veya halka çapı', kind: 'text', hint: 'İstenen minimum büküm yarıçapı veya kemer ölçüsü' },
      { id: 'surface', label: 'Makara / bilezik tercihi ve kullanım', kind: 'text', hint: 'Ayarlı kutu profil bileziği veya özel boru makarası' },
    ],
    note: 'Tasarım konsepti aşamasındadır; maksimum kutu profil/boru kesiti ve minimum büküm yarıçapı et kalınlığına göre değişir. Mil, zincir tahriki, flanşlı yatak ve gövde rijitliği talebinize göre değerlendirilir.',
    source: 'https://free3d.com/3d-model/tube-bender-4949.html',
  },
  {
    id: 'manuel-ferforje-spiral-bukme-makinesi',
    href: '/manuel-ferforje-spiral-bukme-makinesi',
    title: 'Manuel Ferforje Spiral Bükme Makinesi',
    category: 'Metal Şekillendirme Makineleri',
    description:
      'Demir lama, kare ve yuvarlak dolu çubukları ısıtmadan C, S ve kademeli ferforje spirallerine dönüştürmek için alçak kare tabanlı, eksantrik sıkıştırma çeneli ve parçalı spiral kalıp setli manuel ferforje bükme makinesi.',
    details: [
      'Tezgâha dört noktadan cıvatalanan alçak flanşlı kare taban ve yüksek torklu yatay mafsallı bükme kolu',
      'İç spiral çekirdek + sökülebilir dış C-spiral kalıp segmentleriyle kademeli motif büyütme yapısı',
      'Lama ucunu kaydırmadan kilitleyen menteşeli eksantrik çene ve tırtıllı baskı ayar bileziği',
    ],
    uses: [
      'Ferforje bahçe kapısı, pencere korkuluğu ve merdiven küpeştesi',
      'Metal mobilya, bahçe ekipmanı ve dekoratif tasarım atölyeleri',
      'Demir doğrama ustaları ve tekrarlı C / S motif üretimi',
    ],
    checks: [
      {
        title: 'Lama veya çubuk kesiti',
        text: 'Soğuk bükülecek düz lamanın genişlik × kalınlık ölçüsünü veya kare/yuvarlak dolu demir çapını paylaşın.',
      },
      {
        title: 'Spiral kademeleri ve dış çap',
        text: 'Küçük, orta ve büyük spiral dış ölçülerini veya mevcut C / S ferforje numunenizin fotoğrafını gönderin.',
      },
      {
        title: 'Tezgâh sabitleme ve kol dönüş alanı',
        text: 'Yatay manivela kolunun 360° rahat dönebileceği sağlam tezgâh veya dikme ayak kurulum tercihinizi belirtin.',
      },
    ],
    fields: [
      { id: 'material', label: 'Malzeme türü ve kesiti', kind: 'text', hint: 'Örn. 20×5 mm veya 30×6 mm lama, Ø10 çubuk vb.' },
      { id: 'shape', label: 'Spiral dış çapları ve motif tipi', kind: 'text', hint: 'C / S tipi ferforje, küçük-orta-büyük spiral çapları' },
      { id: 'workspace', label: 'Kalıp kademesi ve kurulum tercihi', kind: 'text', hint: '3 boy parçalı kalıp seti, tezgâh üstü veya ayaklı' },
    ],
    note: 'Tasarım konsepti aşamasındadır; soğuk bükülebilecek maksimum lama/çubuk kesiti kalıp kademesine ve malzeme akma dayanımına göre teknik incelemeyle netleştirilir.',
    source: 'https://cults3d.com/en/3d-model/tool/3d-cad-model-manual-scroll-bending-machine-for-decorative-metalwork',
  },
];

export function isMetalFormingProduct(id: string): boolean {
  return metalFormingProducts.some((product) => product.id === id);
}

export function metalFormingImage(id: string) {
  const extra = metalFormingExtras[id];
  return {
    src: `/images/metal-forming/${id}.jpg`,
    alt: extra?.alt ?? 'Mekanikya metal şekillendirme makinesi tasarım konsepti',
    caption: extra?.caption ?? 'Mekanikya tasarım konsepti · Özel teklif',
  };
}
