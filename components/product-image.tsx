import { verifiedProductImages } from '@/lib/verified-product-images';

export default function ProductImage({id,priority=false}:{id:string;title:string;priority?:boolean}){
  const image = verifiedProductImages[id];
  if (!image) return null;
  return <figure className="catalog-photo"><img src={image.src} alt={image.alt} width={1200} height={900} loading={priority?'eager':'lazy'}/><figcaption>MISUMI kataloğundan örnek ürün düzeni</figcaption></figure>;
}
