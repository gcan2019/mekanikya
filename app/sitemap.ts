import type { MetadataRoute } from 'next';
import { catalogItems } from '@/lib/presentation';

const base = 'https://ben-ol-konveyor.gokhan1cants.chatgpt.site';

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = [
    '',
    '/fabrika-ici-tasima',
    '/kurumsal',
    '/urunler',
    '/hizmetler',
    '/hizmetler/makine-restorasyonu',
    '/ornek-calismalar',
    '/ornek-calismalar/sebze-dograma-bicaklari',
    '/iletisim',
  ];
  return [
    ...fixed.map((path) => ({ url: base + path, changeFrequency: 'weekly' as const })),
    ...catalogItems.map((item) => ({ url: `${base}/${item.id}`, changeFrequency: 'monthly' as const })),
  ];
}
