export type VerifiedProductImage = {
  src: string;
  alt: string;
};

// Mekanikya ürün görsel referansları
export const verifiedProductImages: Record<string, VerifiedProductImage> = {
  'metal-tasima-kasasi': {
    src: '/images/factory-options/misumi-metal-open.jpg',
    alt: 'Mekanikya açık üstlü metal kasa örneği',
  },
  'talas-hurda-arabasi': {
    src: '/images/factory-options/misumi-sakae-scrap.jpg',
    alt: 'Mekanikya açık hazneli talaş arabası örneği',
  },
  'profil-tasima-arabasi': {
    src: '/images/factory-options/misumi-profile-modular.jpg',
    alt: 'Mekanikya modüler uzun malzeme taşıma arabası örneği',
  },
  'sac-levha-tasima-arabasi': {
    src: '/images/factory-options/misumi-sheet-multi-slot.jpg',
    alt: 'Mekanikya çok bölmeli sac ve panel taşıma arabası örneği',
  },
  'tekstil-tasima-arabasi': {
    src: '/images/factory-options/misumi-textile-mesh-cage.jpg',
    alt: 'Mekanikya tel kafesli tekstil ve taşıma arabası örneği',
  },
  'rulolu-destek-sehpasi': {
    src: '/images/factory-options/misumi-roller-single-stand.jpg',
    alt: 'Mekanikya tek rulolu yükseklik ayarlı destek sehpası örneği',
  },
  'tup-tasima-kafesi': {
    src: '/images/factory-options/misumi-cylinder-single-cart.jpg',
    alt: 'Mekanikya paslanmaz çelik tüp taşıma arabası örneği',
  },
  'microtrac-mini-bahce-traktoru': {
    src: '/images/microtrac.jpg',
    alt: 'Mekanikya MicroTrac mini bahçe ve sera traktörü prototip çalışması',
  },
};

export function hasVerifiedProductImage(id: string) {
  return Boolean(verifiedProductImages[id]);
}
