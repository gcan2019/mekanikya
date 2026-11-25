import type { InquiryProduct } from './additional-products';

export const metalFormingCategory = 'metal-sekillendirme-makineleri';
export const metalFormingProducts: InquiryProduct[] = [
  {
    id: 'manuel-ferforje-spiral-bukme-makinesi',
    href: '/manuel-ferforje-spiral-bukme-makinesi',
    title: 'Manuel Ferforje Spiral Bükme Makinesi',
    category: 'Metal Şekillendirme Makineleri',
    description: 'Ferforje ve dekoratif metal parçalar için manuel spiral bükme makinesi talebinizi değerlendirelim. Parça şekli ve malzemenize göre özel teklif isteyin.',
    details: ['Manuel spiral şekillendirme için proje değerlendirmesi', 'İstenen desene göre kalıp ve sabitleme ihtiyacının belirlenmesi', 'Fotoğraf, numune veya çizim üzerinden teklif talebi'],
    uses: ['Ferforje atölyeleri', 'Kapı ve korkuluk imalatı', 'Dekoratif metal ve mobilya işleri'],
    checks: [
      { title: 'Malzeme ve kesit', text: 'İşlenecek lama veya çubuğun malzeme türünü ve kesit ölçülerini paylaşın.' },
      { title: 'Spiral ve desen', text: 'İstediğiniz spiral biçimini, dış ölçüsünü ve varsa örnek parçanın fotoğrafını gönderin.' },
      { title: 'Çalışma düzeni', text: 'Tezgâha sabitleme, kol hareket alanı ve kullanım sıklığı birlikte değerlendirilir.' },
    ],
    fields: [
      { id: 'material', label: 'Malzeme türü ve kesiti', kind: 'text', hint: 'Lama / çubuk, malzeme ve bildiğiniz ölçüler' },
      { id: 'shape', label: 'Spiral biçimi ve hedef ölçüsü', kind: 'text', hint: 'C / S biçimi, dış ölçü veya örnek parça' },
      { id: 'workspace', label: 'Tezgâh ve kullanım ihtiyacı', kind: 'text', hint: 'Sabitleme yeri, kullanım sıklığı, kalıp ihtiyacı' },
    ],
    note: 'Talebe göre özel üretim için değerlendirilen bir ürün fikridir. Nihai tasarım, malzeme uygunluğu ve bükme kapasitesi teknik incelemeyle belirlenir.',
    source: 'https://cults3d.com/en/3d-model/tool/3d-cad-model-manual-scroll-bending-machine-for-decorative-metalwork',
  },
  {
    id: 'manuel-silindir-sac-kivirma-makinesi',
    href: '/manuel-silindir-sac-kivirma-makinesi',
    title: 'Manuel Silindir Sac Kıvırma Makinesi',
    category: 'Metal Şekillendirme Makineleri',
    description: 'Silindirik ve kavisli sac parçalar için manuel sac kıvırma makinesi talebi. Sac türü, çalışma genişliği ve hedef forma göre özel teklif alın.',
    details: ['Manuel sac kıvırma ihtiyacına göre proje değerlendirmesi', 'Sac ve hedef kavise göre silindir düzeninin ele alınması', 'Atölye yerleşimine göre sabitleme ve kullanım değerlendirmesi'],
    uses: ['Sac işleme atölyeleri', 'Havalandırma ve kanal işleri', 'Makine gövdesi ve kavisli parça imalatı'],
    checks: [
      { title: 'Sac malzemesi', text: 'Malzeme cinsi, kalınlığı ve işlenecek genişlik teklif değerlendirmesinin başlangıcıdır.' },
      { title: 'Hedef form', text: 'Silindir çapı veya kavis ölçüsüyle birlikte varsa teknik resim ya da fotoğraf paylaşın.' },
      { title: 'Atölye yerleşimi', text: 'Parça giriş ve çıkış alanı, tezgâh yüksekliği ve kullanım sıklığını belirtin.' },
    ],
    fields: [
      { id: 'material', label: 'Sac malzemesi ve kalınlığı', kind: 'text', hint: 'Malzeme türü ve bildiğiniz kalınlık' },
      { id: 'sheetWidth', label: 'İşlenecek sac genişliği', kind: 'number', unit: 'mm', hint: 'Talep ettiğiniz çalışma genişliği' },
      { id: 'targetForm', label: 'Hedef çap / kavis ve kullanım', kind: 'text', hint: 'İstenen parça formu, kullanım sıklığı ve yerleşim' },
    ],
    note: 'Çalışma genişliği, sac kalınlığı ve en küçük kıvırma çapı bu sayfada taahhüt edilmez. Uygunluk, malzeme ve hedef parçaya göre ayrıca değerlendirilir.',
    source: 'https://www.say-mak.com.tr/manuel-silindir-makineleri/sr',
  },
  {
    id: 'manuel-boru-ve-profil-bukme-makinesi',
    href: '/manuel-boru-ve-profil-bukme-makinesi',
    title: 'Manuel Boru ve Profil Bükme Makinesi',
    category: 'Metal Şekillendirme Makineleri',
    description: 'Boru ve profilleri yay veya halka biçiminde şekillendirme ihtiyacınız için manuel bükme makinesi talebi. Kesit ve hedef yarıçapa göre özel teklif isteyin.',
    details: ['Manuel yay ve halka bükme için proje değerlendirmesi', 'Boru / profil kesitine göre makara ihtiyacının belirlenmesi', 'Malzeme ve hedef forma göre teknik uygunluk incelemesi'],
    uses: ['Metal konstrüksiyon atölyeleri', 'Mobilya ve dekoratif metal işleri', 'Sera ve kavisli yapı elemanları'],
    checks: [
      { title: 'Boru veya profil', text: 'Malzeme cinsini, dış ölçüleri ve et kalınlığını paylaşın. Her kesit için uygunluk ayrıca incelenir.' },
      { title: 'Büküm geometrisi', text: 'Hedef yarıçap veya halka çapını, parça boyunu ve varsa çizimi belirtin.' },
      { title: 'Yüzey ve makara', text: 'Yüzey hassasiyeti, kesit deformasyonu beklentisi ve makara seçenekleri teklif aşamasında ele alınır.' },
    ],
    fields: [
      { id: 'section', label: 'Malzeme, kesit ve et kalınlığı', kind: 'text', hint: 'Yuvarlak boru / kare profil ve bildiğiniz ölçüler' },
      { id: 'radius', label: 'Hedef yarıçap veya halka çapı', kind: 'text', hint: 'İstenen kavis veya halka ölçüsü' },
      { id: 'surface', label: 'Parça boyu ve yüzey beklentisi', kind: 'text', hint: 'İşlenecek boy, yüzey hassasiyeti ve kullanım sıklığı' },
    ],
    note: 'Bükme kapasitesi, minimum yarıçap ve her profil tipine uygunluk doğrulanmış değildir. Nihai makara ve gövde tasarımı talebe göre değerlendirilir.',
    source: 'https://www.akomac.com/profil-boru-kivirma-makinesi-apb30',
  },
];

export function isMetalFormingProduct(id: string): boolean {
  return metalFormingProducts.some((product) => product.id === id);
}

export function metalFormingImage(id: string) {
  return { src: `/images/metal-forming/${id}.svg`, alt: 'Temsilî prensip çizimi — üretilmiş ürün veya doğrulanmış CAD modeli değildir.' };
}
