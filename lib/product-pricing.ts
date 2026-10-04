import type { EditableProduct } from './site-content';

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
