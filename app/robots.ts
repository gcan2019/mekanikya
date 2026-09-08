import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: '*', allow: '/' }], sitemap: 'https://ben-ol-konveyor.gokhan1cants.chatgpt.site/sitemap.xml' };
}
