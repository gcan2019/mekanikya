import { products } from './catalog';
import { additionalProducts, type InquiryProduct } from './additional-products';

export const categories = [
  {
    id: 'fabrika-tasima',
    title: 'Fabrika ve atölye içi taşıma arabaları',
    description: 'Talaş ve hurda arabaları, metal taşıma kasaları, profil ve sac taşıma arabaları.',
  },
  {
    id: 'kalip-atolye',
    title: 'Kalıp, profil ve işleme destek ekipmanları',
    description: 'Abkant kalıp taşıma arabaları ve rulolu boru/profil destek sehpaları.',
  },
  {
    id: 'sektorel-guvenlik',
    title: 'Sektörel ve iş güvenliği taşıma çözümleri',
    description: 'Tekstil ve kumaş taşıma arabaları, tüp taşıma arabaları ve sabit depolama kafesleri.',
  },
];

const groups: Record<string, string> = {
  'talas-hurda-arabasi': 'fabrika-tasima',
  'metal-tasima-kasasi': 'fabrika-tasima',
  'profil-tasima-arabasi': 'fabrika-tasima',
  'sac-levha-tasima-arabasi': 'fabrika-tasima',
  'abkant-kalip-arabasi': 'kalip-atolye',
  'rulolu-destek-sehpasi': 'kalip-atolye',
  'tekstil-tasima-arabasi': 'sektorel-guvenlik',
  'tup-tasima-kafesi': 'sektorel-guvenlik',
  // İkincil / pasif ürünlerin grup referansları
  'konveyor-rulosu': 'kalip-atolye',
  'parca-yikama-sepeti': 'kalip-atolye',
  'sac-stoklama-rafi': 'kalip-atolye',
  'forklift-catal-uzatma': 'fabrika-tasima',
  'palet-tasima-arabasi': 'fabrika-tasima',
  'konteyner-tasima-arabasi': 'fabrika-tasima',
  'fileli-palet-kasasi': 'fabrika-tasima',
};

export const priorityOrder = [
  'talas-hurda-arabasi',
  'metal-tasima-kasasi',
  'profil-tasima-arabasi',
  'sac-levha-tasima-arabasi',
  'abkant-kalip-arabasi',
  'tekstil-tasima-arabasi',
  'rulolu-destek-sehpasi',
  'tup-tasima-kafesi',
];

const allItems = [...products, ...additionalProducts];

export const catalogItems = allItems
  .filter((product): product is InquiryProduct => 'uses' in product && product.status !== 'inactive' && priorityOrder.includes(product.id))
  .map((product) => ({
    ...product,
    group: groups[product.id] || 'fabrika-tasima',
  }))
  .sort((a, b) => priorityOrder.indexOf(a.id) - priorityOrder.indexOf(b.id));
