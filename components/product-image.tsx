import { verifiedProductImages } from '@/lib/verified-product-images';
import { isMetalFormingProduct, metalFormingImage } from '@/lib/metal-forming-products';

export default function ProductImage({
  id,
  title,
  priority = false,
  image: custom,
  imageHidden = false,
  verified,
}: {
  id: string;
  title: string;
  priority?: boolean;
  image?: { src: string; alt: string; caption?: string; verified?: boolean };
  imageHidden?: boolean;
  verified?: boolean;
}) {
  if (imageHidden) return null;
  const image = custom ?? (isMetalFormingProduct(id) ? metalFormingImage(id) : verifiedProductImages[id]);
  if (!image) return null;
  const isVerified = verified ?? (custom ? custom.verified === true : false);
  const isMisumi = !custom && Boolean(verifiedProductImages[id]);
  const captionText = 'caption' in image && typeof image.caption === 'string' ? image.caption : image.alt;
  return (
    <figure className="catalog-photo">
      <img src={image.src} alt={image.alt || title} width={1200} height={900} loading={priority ? 'eager' : 'lazy'} />
      {isVerified && <figcaption className="verified-badge">✓ Atölyemizden gerçek üretim / uygulama fotoğrafı</figcaption>}
      {!isVerified && isMisumi && <figcaption>Mekanikya örnek ürün düzeni</figcaption>}
      {!isVerified && !isMisumi && captionText && captionText !== title && <figcaption>{captionText}</figcaption>}
    </figure>
  );
}

