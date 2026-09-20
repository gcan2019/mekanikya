import { ArrowUpRight } from 'lucide-react';
import { catalogItems } from '@/lib/presentation';
import ProductImage from './product-image';
import { hasVerifiedProductImage } from '@/lib/verified-product-images';
export default function ProductCards({items=catalogItems}:{items?:typeof catalogItems}){return <div className="photo-product-grid">{items.map(product=><article className={'photo-product-card'+(hasVerifiedProductImage(product.id)?'':' photo-product-card-no-image')} key={product.id}>{hasVerifiedProductImage(product.id)&&<a href={product.href} aria-label={product.title+' ürününü incele'}><ProductImage id={product.id} title={product.title}/></a>}<div className="photo-product-copy"><p>{product.category}</p><h3><a href={product.href}>{product.title}</a></h3><a className="photo-product-link" href={product.href}>Ürünü incele <ArrowUpRight size={18}/></a></div></article>)}</div>;}
