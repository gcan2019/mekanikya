import { verifiedProductImages } from '@/lib/verified-product-images';
export default function ProductImage({id,title,priority=false,image:custom,imageHidden=false}:{id:string;title:string;priority?:boolean;image?:{src:string;alt:string};imageHidden?:boolean}){
  if(imageHidden) return null;
  const image=custom ?? verifiedProductImages[id];
  if(!image) return null;
  return <figure className="catalog-photo"><img src={image.src} alt={image.alt || title} width={1200} height={900} loading={priority?'eager':'lazy'}/>{!custom && <figcaption>MISUMI kataloğundan örnek ürün düzeni</figcaption>}</figure>;
}
