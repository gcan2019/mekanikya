import type { MetadataRoute } from 'next';
import { catalogItems } from '@/lib/presentation';

const base = 'https://ben-ol-konveyor.gokhan1cants.chatgpt.site';

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ['', '/kurumsal', '/urunler', '/iletisim', '/konveyor-rulosu'];
  return [...fixed.map((path) => ({ url: base + path, changeFrequency: 'weekly' as const })),
    ...catalogItems.filter((item) => item.id !== 'roller').map((item) => ({ url: `${base}/${item.id}`, changeFrequency: 'monthly' as const }))];
}
