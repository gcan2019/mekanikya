import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://mekanikya.com.tr';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/yonetim/', '/yonetim/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
