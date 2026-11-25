import { products } from './catalog';
import { additionalProducts, type InquiryProduct } from './additional-products';

export const categories = [
  {
    id: 'metal-sekillendirme-makineleri',
    title: 'Metal Şekillendirme Makineleri',
    description: 'Ferforje spiral bükme, silindir sac kıvırma ve boru / profil bükme için talebe göre değerlendirilen manuel makine çözümleri.',
  },
  {
    id: 'talasli-imalat',
    title: 'Talaşlı İmalat & Hassas Parçalar (Torna, Freze, CNC)',
    description: 'Özel transmisyon milleri, kademeli şaftlar, fosfor bronz ve çelik burçlar, flanşlar ve CNC fason parça işleme.',
  },
  {
    id: 'tersine-muhendislik-restorasyon',
    title: 'Tersine Mühendislik, CAD Modelleme & Bıçak / Parça Yenileme',
    description: 'Kırık veya aşınmış numuneden ölçü alma, 3D CAD modelleme, teknik resim ve sanayi / gıda bıçakları yenileme.',
  },
  {
    id: 'atolye-ekipman',
    title: 'Atölye Tezgahları ve İmalat Destek Ekipmanları',
    description: '3D delikli kaynak masaları, ağır hizmet kalıpçı tezgahları, talaş arabaları ve kaynak pozisyonerleri.',
  },
];

const groups: Record<string, string> = {
  'manuel-ferforje-spiral-bukme-makinesi': 'metal-sekillendirme-makineleri',
  'manuel-silindir-sac-kivirma-makinesi': 'metal-sekillendirme-makineleri',
  'manuel-boru-ve-profil-bukme-makinesi': 'metal-sekillendirme-makineleri',
  // Talaşlı İmalat
  'fason-talasli-imalat': 'talasli-imalat',
  'ozel-mil-ve-saftlar': 'talasli-imalat',
  'bronz-ve-celik-burclar': 'talasli-imalat',

  // Tersine Mühendislik & Restorasyon
  'sanayi-bicaklari': 'tersine-muhendislik-restorasyon',

  // Atölye Ekipmanları & Kaynak
  'kaynak-masasi': 'atolye-ekipman',
  'calisma-tezgahi': 'atolye-ekipman',
  'talas-hurda-arabasi': 'atolye-ekipman',
  'sac-levha-tasima-arabasi': 'atolye-ekipman',
  'rulolu-destek-sehpasi': 'atolye-ekipman',
  'motorlu-boru-dondurme-sehpasi': 'atolye-ekipman',
  'fason-kaynak-isleri': 'atolye-ekipman',

  // Yeni Doğrulanmış Ürünler & Makineler
  'cnc-torna-yumusak-ayak': 'talasli-imalat',
  'sim-racing-pedal-plakasi': 'talasli-imalat',
  'motosiklet-paddock-bobini': 'talasli-imalat',
  'd28-kilitleme-pimi': 'atolye-ekipman',
  'd28-kaynak-iskencesi': 'atolye-ekipman',
  'd28-v-blok-kaynak-yatagi': 'atolye-ekipman',
  'boru-kurt-agzi-aparati': 'atolye-ekipman',
  'manuel-boru-bukme': 'atolye-ekipman',
  'devirmeli-talas-arabasi-forklift': 'atolye-ekipman',
  'bant-zimpara-makinesi': 'atolye-ekipman',
  'cnc-taret-reduksiyon-kovani': 'talasli-imalat',
  'konik-kilit-saft-kilitleme': 'talasli-imalat',
  'bk-bf-vidali-mil-yataklari': 'talasli-imalat',
  'cektirmeli-tespit-pimi-din7979': 'talasli-imalat',
  'forklift-varil-tasima-atasmani': 'atolye-ekipman',
  'forklift-vinc-bomu-atasmani': 'atolye-ekipman',
  'hidrolik-pres-rulman-cektirme-seti': 'atolye-ekipman',
  'hidrolik-pres-mil-dogrultma-v-blok': 'atolye-ekipman',
};

export const priorityOrder: string[] = [
  'manuel-ferforje-spiral-bukme-makinesi',
  'manuel-silindir-sac-kivirma-makinesi',
  'manuel-boru-ve-profil-bukme-makinesi',
  'cnc-torna-yumusak-ayak',
  'd28-kilitleme-pimi',
  'sim-racing-pedal-plakasi',
  'motosiklet-paddock-bobini',
  'sac-levha-tasima-arabasi',
  'fason-talasli-imalat',
  'ozel-mil-ve-saftlar',
  'bronz-ve-celik-burclar',
  'sanayi-bicaklari',
  'kaynak-masasi',
  'calisma-tezgahi',
  'fason-kaynak-isleri',
  'talas-hurda-arabasi',
  'rulolu-destek-sehpasi',
  'motorlu-boru-dondurme-sehpasi',
  'd28-kilitleme-pimi',
  'd28-kaynak-iskencesi',
  'd28-v-blok-kaynak-yatagi',
  'boru-kurt-agzi-aparati',
  'manuel-boru-bukme',
  'devirmeli-talas-arabasi-forklift',
  'bant-zimpara-makinesi',
  'cnc-taret-reduksiyon-kovani',
  'konik-kilit-saft-kilitleme',
  'bk-bf-vidali-mil-yataklari',
  'cektirmeli-tespit-pimi-din7979',
  'forklift-varil-tasima-atasmani',
  'forklift-vinc-bomu-atasmani',
  'hidrolik-pres-rulman-cektirme-seti',
  'hidrolik-pres-mil-dogrultma-v-blok',
];

const allItems = [...products, ...additionalProducts];

export const catalogItems = allItems
  .filter((product): product is InquiryProduct => 'uses' in product && product.status !== 'inactive' && priorityOrder.includes(product.id))
  .map((product) => ({
    ...product,
    group: groups[product.id] || 'talasli-imalat',
  }))
  .sort((a, b) => priorityOrder.indexOf(a.id) - priorityOrder.indexOf(b.id));
