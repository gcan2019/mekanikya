export type ProductPriceInfo = {
  price: number;
  currency: string;
  displayPrice: string;
  sku: string;
  availability: 'in_stock' | 'preorder' | 'out_of_stock';
  availabilitySchema: string;
  leadTime: string;
};

// Ürün bazlı varsayılan tahmini başlangıç fiyatları (Google Shopping / Merchant ve Schema için zorunlu)
export const DEFAULT_PRODUCT_PRICES: Record<string, number> = {
  'talas-hurda-arabasi': 8500,
  'metal-tasima-kasasi': 5400,
  'profil-tasima-arabasi': 9800,
  'sac-levha-tasima-arabasi': 11200,
  'abkant-kalip-arabasi': 13500,
  'tekstil-tasima-arabasi': 7800,
  'rulolu-destek-sehpasi': 4200,
  'motorlu-boru-dondurme-sehpasi': 18500,
  'tup-tasima-kafesi': 6800,
  'palet-tasima-arabasi': 8200,
  'konveyor-rulosu': 850,
  'konteyner-tasima-arabasi': 9500,
  'fileli-palet-kasasi': 6200,
  'sac-stoklama-rafi': 14500,
  'forklift-catal-uzatma': 7200,
  'parca-yikama-sepeti': 4800,
  'microtrac-mini-bahce-traktoru': 89000,
  'kaynak-masasi': 16500,
  'calisma-tezgahi': 14000,
  'hidrolik-atolye-presi': 24000,
  'motosiklet-lifti': 19500,
  'fidan-burgusu': 22000,
  'dal-ogutme-makinesi': 32000,
  'damperli-tasima-kasasi': 12500,
  'fason-talasli-imalat': 1500,
  'ozel-mil-ve-saftlar': 1800,
  'bronz-ve-celik-burclar': 1200,
  'sanayi-bicaklari': 2200,
  'fason-kaynak-isleri': 2500,
  // Yeni Doğrulanmış Hedef Ürün ve Makineler (Google Shopping & Sanayi Piyasası)
  'cnc-torna-yumusak-ayak': 2650,
  'sim-racing-pedal-plakasi': 2250,
  'motosiklet-paddock-bobini': 850,
  'd28-kilitleme-pimi': 1250,
  'd28-kaynak-iskencesi': 2600,
  'd28-v-blok-kaynak-yatagi': 1850,
  'boru-kurt-agzi-aparati': 8500,
  'manuel-boru-bukme': 19500,
  'devirmeli-talas-arabasi-forklift': 21500,
  'bant-zimpara-makinesi': 22500,
  'cnc-taret-reduksiyon-kovani': 1450,
  'konik-kilit-saft-kilitleme': 850,
  'bk-bf-vidali-mil-yataklari': 1150,
  'cektirmeli-tespit-pimi-din7979': 3200,
  'forklift-varil-tasima-atasmani': 34500,
  'forklift-vinc-bomu-atasmani': 26000,
  'hidrolik-pres-rulman-cektirme-seti': 8500,
  'hidrolik-pres-mil-dogrultma-v-blok': 5500,
};

export function getProductPriceInfo(product: { id: string; price?: number; sku?: string }): ProductPriceInfo {
  const basePrice = typeof product.price === 'number' && product.price > 0
    ? product.price
    : (DEFAULT_PRODUCT_PRICES[product.id] || 5000);

  const formatted = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(basePrice);

  return {
    price: basePrice,
    currency: 'TRY',
    displayPrice: `${formatted}’den başlayan fiyatlarla`,
    sku: product.sku || `MEK-${product.id.toUpperCase()}`,
    availability: 'in_stock',
    availabilitySchema: 'https://schema.org/InStock',
    leadTime: 'Sipariş üzerine 3-5 iş gününde üretim',
  };
}
