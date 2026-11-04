export type VerifiedProductImage = {
  src: string;
  alt: string;
};

// Mekanikya ürün görsel referansları
export const verifiedProductImages: Record<string, VerifiedProductImage> = {
  // Atölye & Tezgah
  'kaynak-masasi': {
    src: '/images/kaynak-masasi.png',
    alt: 'Mekanikya D28 delikli 3D kaynak ve fikstür masası',
  },
  'calisma-tezgahi': {
    src: '/images/calisma-tezgahi.png',
    alt: 'Mekanikya ağır hizmet mengeneli kalıpçı ve montaj çalışma tezgahı',
  },
  'hidrolik-atolye-presi': {
    src: '/images/hidrolik-atolye-presi.png',
    alt: 'Mekanikya ağır hizmet hidrolik atölye presi',
  },
  'motosiklet-lifti': {
    src: '/images/motosiklet-lifti.png',
    alt: 'Mekanikya hidrolik motosiklet ve ATV bakım lifti',
  },
  'rulolu-destek-sehpasi': {
    src: '/images/rulolu-destek-sehpasi.png',
    alt: 'Mekanikya rulolu malzeme ve profil destek sehpası',
  },
  'abkant-kalip-arabasi': {
    src: '/images/abkant-kalip-arabasi.png',
    alt: 'Mekanikya abkant büküm kalıp taşıma ve saklama arabası',
  },
  'parca-yikama-sepeti': {
    src: '/images/parca-yikama-sepeti.png',
    alt: 'Mekanikya paslanmaz parça yıkama ve daldırma sepeti',
  },
  'sac-stoklama-rafi': {
    src: '/images/sac-stoklama-rafi.png',
    alt: 'Mekanikya kollu ve çekmeceli sac depolama rafı',
  },

  // Tarım & Bahçe
  'fidan-burgusu': {
    src: '/images/fidan-burgusu.png',
    alt: 'Mekanikya traktör arkası hidrolik fidan dikim çukuru burgusu',
  },
  'dal-ogutme-makinesi': {
    src: '/images/dal-ogutme-makinesi.png',
    alt: 'Mekanikya ağır hizmet dal öğütme ve budama artığı parçalama makinesi',
  },
  'damperli-tasima-kasasi': {
    src: '/images/damperli-tasima-kasasi.png',
    alt: 'Mekanikya traktör arkası mekanik damperli taşıma kasası',
  },
  'microtrac-mini-bahce-traktoru': {
    src: '/images/microtrac.jpg',
    alt: 'Mekanikya MicroTrac mini bahçe ve sera traktörü prototip çalışması',
  },

  // Fason & Mühendislik
  'fason-talasli-imalat': {
    src: '/images/fason-talasli-imalat.png',
    alt: 'Mekanikya CNC torna ve freze fason talaşlı imalat parçaları',
  },
  'ozel-mil-ve-saftlar': {
    src: '/images/ozel-mil-ve-saftlar.png',
    alt: 'Mekanikya hassas CNC torna transmisyon milleri ve kademeli şaft imalatı',
  },
  'bronz-ve-celik-burclar': {
    src: '/images/bronz-ve-celik-burclar.png',
    alt: 'Mekanikya fosfor bronz ve çelik burç, flanş ve rulman yatakları',
  },
  'sanayi-bicaklari': {
    src: '/images/sanayi-bicaklari.png',
    alt: 'Mekanikya özel sanayi, gıda doğrama ve kesim bıçakları imalatı ve bileme',
  },
  'fason-kaynak-isleri': {
    src: '/images/fason-kaynak-isleri.png',
    alt: 'Mekanikya fason gazaltı ve TIG kaynaklı şasi konstrüksiyon imalatı',
  },

  // Fabrika İçi Taşıma
  'talas-hurda-arabasi': {
    src: '/images/talas-hurda-arabasi.png',
    alt: 'Mekanikya sıvı tahliyeli devirmeli talaş ve hurda arabası',
  },
  'sac-levha-tasima-arabasi': {
    src: '/images/sac-levha-tasima-arabasi.png',
    alt: 'Mekanikya A-tipi çok bölmeli sac ve levha taşıma arabası',
  },
  'metal-tasima-kasasi': {
    src: '/images/metal-tasima-kasasi.png',
    alt: 'Mekanikya forklift uyumlu istiflenebilir metal kasa',
  },
  'profil-tasima-arabasi': {
    src: '/images/profil-tasima-arabasi.png',
    alt: 'Mekanikya modüler profil ve boru taşıma arabası',
  },
  'forklift-catal-uzatma': {
    src: '/images/forklift-catal-uzatma.png',
    alt: 'Mekanikya ağır hizmet çelik forklift çatal uzatma kılıfı',
  },
  'tup-tasima-kafesi': {
    src: '/images/tup-tasima-kafesi.png',
    alt: 'Mekanikya İSG uyumlu sanayi tüp taşıma ve depolama kafesi',
  },
  'tekstil-tasima-arabasi': {
    src: '/images/tekstil-tasima-arabasi.png',
    alt: 'Mekanikya tel kafesli tekstil ve kumaş taşıma arabası',
  },

  // Yeni Doğrulanmış Hedef Ürün ve Makineler (Google Shopping & Sanayi Piyasası)
  'cnc-torna-yumusak-ayak': {
    src: '/images/cnc-torna-yumusak-ayak.png',
    alt: 'Mekanikya 8 inç CNC torna yumuşak ayak takımı 3lü set (Kitagawa B-208 uyumlu 1.5mm x 60°)',
  },
  'sim-racing-pedal-plakasi': {
    src: '/images/sim-racing-pedal-plakasi.png',
    alt: 'Mekanikya CNC alüminyum sim-racing evrensel pedal ve el freni montaj adaptör plakası',
  },
  'motosiklet-paddock-bobini': {
    src: '/images/motosiklet-paddock-bobini.png',
    alt: 'Mekanikya CNC alüminyum ve Kestamid motosiklet arka paddock sehpa kaldırma takozu M8 M6',
  },
  'd28-kilitleme-pimi': {
    src: '/images/d28-kilitleme-pimi.png',
    alt: 'Mekanikya D28 modüler kaynak masası bilyeli hızlı kilitleme pimi',
  },
  'd28-kaynak-iskencesi': {
    src: '/images/fason-kaynak-isleri.png',
    alt: 'Mekanikya D28 delikli kaynak masası T-bar vidalı sıkma işkencesi',
  },
  'd28-v-blok-kaynak-yatagi': {
    src: '/images/kaynak-masasi.png',
    alt: 'Mekanikya D28 & D16 V-blok boru ve profil kaynak prizması',
  },
  'boru-kurt-agzi-aparati': {
    src: '/images/motorlu-boru-dondurme-sehpasi.png',
    alt: 'Mekanikya matkap uyumlu boru kurtağzı açma aparatı bihol testereli',
  },
  'manuel-boru-bukme': {
    src: '/images/fason-kaynak-isleri.png',
    alt: 'Mekanikya 3 valsli manuel profil ve boru bükme makinesi',
  },
  'devirmeli-talas-arabasi-forklift': {
    src: '/images/talas-hurda-arabasi.png',
    alt: 'Mekanikya sıvı tahliyeli ve forklift cepli devirmeli talaş arabası',
  },
  'bant-zimpara-makinesi': {
    src: '/images/calisma-tezgahi.png',
    alt: 'Mekanikya 50x2000 mm tezgah tipi metal bant zımpara ve çapak alma makinesi',
  },
  'cnc-taret-reduksiyon-kovani': {
    src: '/images/ozel-mil-ve-saftlar.png',
    alt: 'Mekanikya CNC torna taret redüksiyon kovanı ve mors konik adaptörü',
  },
  'konik-kilit-saft-kilitleme': {
    src: '/images/bronz-ve-celik-burclar.png',
    alt: 'Mekanikya kamasız şaft kilitleme konik bilezik elemanları',
  },
  'bk-bf-vidali-mil-yataklari': {
    src: '/images/ozel-mil-ve-saftlar.png',
    alt: 'Mekanikya BK12 BF12 vidalı mil sabit ve serbest uç yatakları takımı',
  },
  'cektirmeli-tespit-pimi-din7979': {
    src: '/images/ozel-mil-ve-saftlar.png',
    alt: 'Mekanikya DIN 7979 içten dişli hava kanallı çektirmeli tespit pimleri',
  },
  'forklift-varil-tasima-atasmani': {
    src: '/images/metal-tasima-kasasi.png',
    alt: 'Mekanikya forklift otomatik mekanik varil taşıma ataşmanı',
  },
  'forklift-vinc-bomu-atasmani': {
    src: '/images/forklift-catal-uzatma.png',
    alt: 'Mekanikya forklift teleskopik vinç bomu kolu ataşmanı',
  },
  'hidrolik-pres-rulman-cektirme-seti': {
    src: '/images/hidrolik-atolye-presi.png',
    alt: 'Mekanikya hidrolik pres kademeli burç ve rulman çektirme takımı',
  },
  'hidrolik-pres-mil-dogrultma-v-blok': {
    src: '/images/hidrolik-atolye-presi.png',
    alt: 'Mekanikya hidrolik pres mil doğrultma V-blok ve baskı ucu takımı',
  },
};

export function hasVerifiedProductImage(id: string) {
  return Boolean(verifiedProductImages[id]);
}

