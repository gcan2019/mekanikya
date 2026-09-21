import { ArrowUpRight } from 'lucide-react';
import { catalogItems } from '@/lib/presentation';
import type { EditableProduct } from '@/lib/site-content';
import ProductImage from './product-image';
import { hasVerifiedProductImage } from '@/lib/verified-product-images';
export default function ProductCards({items=catalogItems}:{items?:EditableProduct[]}){return <div className="photo-product-grid">{items.map(product=><article className={'photo-product-card'+((!product.imageHidden && Boolean(product.image || hasVerifiedProductImage(product.id)))?'':' photo-product-card-no-image')} key={product.id}>{(!product.imageHidden && Boolean(product.image || hasVerifiedProductImage(product.id)))&&<a href={product.href} aria-label={product.title+' ürününü incele'}><ProductImage id={product.id} title={product.title} image={product.image} imageHidden={product.imageHidden}/></a>}<div className="photo-product-copy"><p>{product.category}</p><h3><a href={product.href}>{product.title}</a></h3><a className="photo-product-link" href={product.href}>Ürünü incele <ArrowUpRight size={18}/></a></div></article>)}</div>;}
