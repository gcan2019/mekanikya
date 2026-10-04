import { getCatalogItems, getBusinessContent } from '@/lib/site-content';
import { getProductPriceInfo } from '@/lib/product-pricing';
import { verifiedProductImages, hasVerifiedProductImage } from '@/lib/verified-product-images';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const [products, business] = await Promise.all([
    getCatalogItems(),
    getBusinessContent(),
  ]);

  const baseUrl = business.siteUrl || 'https://ofirma-site.ofirma.workers.dev';

  const itemsXml = products
    .filter((product) => product.status !== 'inactive')
    .map((product) => {
      const pricing = getProductPriceInfo(product);
      const link = `${baseUrl}/${product.id}`;
      
      let imagePath = product.image?.src;
      if (!imagePath && hasVerifiedProductImage(product.id)) {
        imagePath = verifiedProductImages[product.id].src;
      }
      if (!imagePath) {
        imagePath = `/images/${product.id}.png`;
      }

      const fullSrc = imagePath.startsWith('http')
        ? imagePath
        : `${baseUrl}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
      const imageUrl = fullSrc.includes('?') ? `${fullSrc}&v=mekanikya-3` : `${fullSrc}?v=mekanikya-3`;

      return `    <item>
      <g:id>${escapeXml(pricing.sku)}</g:id>
      <g:title>${escapeXml(product.title)}</g:title>
      <g:description>${escapeXml(product.description || product.title)}</g:description>
      <g:link>${escapeXml(link)}</g:link>
      <g:image_link>${escapeXml(imageUrl)}</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>${pricing.availability}</g:availability>
      <g:price>${pricing.price.toFixed(2)} TRY</g:price>
      <g:brand>Mekanikya</g:brand>
      <g:mpn>${escapeXml(pricing.sku)}</g:mpn>
      <g:google_product_category>Business &amp; Industrial &gt; Material Handling</g:google_product_category>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${escapeXml(business.name)} Ürün Kataloğu</title>
    <link>${escapeXml(baseUrl)}</link>
    <description>${escapeXml(business.name)} Endüstriyel Ekipman ve Taşıma Sistemleri Google Merchant Feed</description>
${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
