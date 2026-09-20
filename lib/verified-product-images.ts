export type VerifiedProductImage = {
  src: string;
  alt: string;
};

// Yalnızca resmî MISUMI ürün sayfasıyla doğrulanmış ana ürün görselleri.
export const verifiedProductImages: Record<string, VerifiedProductImage> = {
  'metal-tasima-kasasi': {
    src: '/images/factory-options/misumi-metal-open.jpg',
    alt: 'MISUMI kataloğundaki TRUSCO VJ-453 açık üstlü metal kasa örneği',
  },
  'talas-hurda-arabasi': {
    src: '/images/factory-options/misumi-sakae-scrap.jpg',
    alt: 'MISUMI kataloğundaki Sakae açık hazneli talaş arabası örneği',
  },
  'profil-tasima-arabasi': {
    src: '/images/factory-options/misumi-profile-modular.jpg',
    alt: 'MISUMI kataloğundaki SUS GFM-439 modüler uzun malzeme taşıma arabası örneği',
  },
  'sac-levha-tasima-arabasi': {
    src: '/images/factory-options/misumi-sheet-multi-slot.jpg',
    alt: 'MISUMI kataloğundaki KAISER 927565/927566 çok bölmeli sac ve panel taşıma arabası örneği',
  },
  'tekstil-tasima-arabasi': {
    src: '/images/factory-options/misumi-textile-mesh-cage.jpg',
    alt: 'MISUMI kataloğundaki Ishikawa Seisakusho tel kafesli tekstil ve çamaşırhane taşıma arabası örneği',
  },
  'rulolu-destek-sehpasi': {
    src: '/images/factory-options/misumi-roller-single-stand.jpg',
    alt: 'MISUMI kataloğundaki ESCO ve RIDGID tek rulolu yükseklik ayarlı destek sehpası örneği',
  },
  'tup-tasima-kafesi': {
    src: '/images/factory-options/misumi-cylinder-single-cart.jpg',
    alt: 'MISUMI kataloğundaki TRUSCO ASUB-70 paslanmaz çelik tüp taşıma arabası örneği',
  },
};

export function hasVerifiedProductImage(id: string) {
  return Boolean(verifiedProductImages[id]);
}
