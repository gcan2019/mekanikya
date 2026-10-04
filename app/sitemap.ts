import type { MetadataRoute } from 'next';
import { getCatalogItems, getBusinessContent } from '@/lib/site-content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [business, catalog] = await Promise.all([
    getBusinessContent(),
    getCatalogItems(),
  ]);

  const base = 'https://mekanikya.com.tr';

  const fixed = [
    '',
    '/fabrika-ici-tasima',
    '/kurumsal',
    '/urunler',
    '/hizmetler',
    '/hizmetler/makine-restorasyonu',
    '/hizmetler/tersine-muhendislik-ve-teknik-cizim',
    '/ornek-calismalar',
    '/ornek-calismalar/sebze-dograma-bicaklari',
    '/iletisim',
    '/iade-politikasi',
  ];

  const now = new Date();

  return [
    ...fixed.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1.0 : 0.8,
    })),
    ...catalog
      .filter((item) => item.status !== 'inactive')
      .map((item) => ({
        url: `${base}/${item.id}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      })),
  ];
}
