import type { MetadataRoute } from 'next';
import { catalogItems } from '@/lib/presentation';

const base = 'https://ben-ol-konveyor.gokhan1cants.chatgpt.site';

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ['', '/fabrika-ici-tasima', '/kurumsal', '/urunler', '/hizmetler/makine-restorasyonu', '/ornek-calismalar', '/ornek-calismalar/sebze-dograma-bicaklari', '/iletisim', '/konveyor-rulosu'];
  return [...fixed.map((path) => ({ url: base + path, changeFrequency: 'weekly' as const })),
    ...catalogItems.filter((item) => item.id !== 'konveyor-rulosu').map((item) => ({ url: `${base}/${item.id}`, changeFrequency: 'monthly' as const }))];
}
