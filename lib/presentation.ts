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
    description: 'Tüp taşıma arabaları ve sabit depolama kafesleri.',
  },
  {
    id: 'tarim-makineleri',
    title: 'Tarım, sera ve açık kaynak bahçe mekanizasyonu',
    description: 'MicroTrac mini bahçe traktörleri, hidrolik fidan burguları ve toprak işleme ataşmanları.',
  },
];

const groups: Record<string, string> = {
  'talas-hurda-arabasi': 'fabrika-tasima',
  'metal-tasima-kasasi': 'fabrika-tasima',
  'profil-tasima-arabasi': 'fabrika-tasima',
  'sac-levha-tasima-arabasi': 'fabrika-tasima',
  'abkant-kalip-arabasi': 'kalip-atolye',
  'rulolu-destek-sehpasi': 'kalip-atolye',
  'motorlu-boru-dondurme-sehpasi': 'kalip-atolye',
  'tup-tasima-kafesi': 'sektorel-guvenlik',
  'microtrac-mini-bahce-traktoru': 'tarim-makineleri',
  // İkincil / pasif ürünlerin grup referansları
  'tekstil-tasima-arabasi': 'sektorel-guvenlik',
  'konveyor-rulosu': 'kalip-atolye',
  'parca-yikama-sepeti': 'kalip-atolye',
  'sac-stoklama-rafi': 'kalip-atolye',
  'forklift-catal-uzatma': 'fabrika-tasima',
  'palet-tasima-arabasi': 'fabrika-tasima',
  'konteyner-tasima-arabasi': 'fabrika-tasima',
  'fileli-palet-kasasi': 'fabrika-tasima',
};

export const priorityOrder: string[] = [];

const allItems = [...products, ...additionalProducts];

export const catalogItems = allItems
  .filter((product): product is InquiryProduct => 'uses' in product && product.status !== 'inactive' && priorityOrder.includes(product.id))
  .map((product) => ({
    ...product,
    group: groups[product.id] || 'fabrika-tasima',
  }))
  .sort((a, b) => priorityOrder.indexOf(a.id) - priorityOrder.indexOf(b.id));
