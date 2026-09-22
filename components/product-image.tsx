import { verifiedProductImages } from '@/lib/verified-product-images';

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
  image?: { src: string; alt: string; verified?: boolean };
  imageHidden?: boolean;
  verified?: boolean;
}) {
  if (imageHidden) return null;
  const image = custom ?? verifiedProductImages[id];
  if (!image) return null;
  const isVerified = verified ?? (custom ? custom.verified === true : false);
  const isMisumi = !custom && Boolean(verifiedProductImages[id]);
  return (
    <figure className="catalog-photo">
      <img src={image.src} alt={image.alt || title} width={1200} height={900} loading={priority ? 'eager' : 'lazy'} />
      {isVerified && <figcaption style={{ color: '#0d6832', fontWeight: 600 }}>✓ Atölyemizden gerçek üretim / uygulama fotoğrafı</figcaption>}
      {!isVerified && isMisumi && <figcaption>MISUMI kataloğundan örnek ürün düzeni</figcaption>}
      {!isVerified && !isMisumi && image.alt && image.alt !== title && <figcaption>{image.alt}</figcaption>}
    </figure>
  );
}

