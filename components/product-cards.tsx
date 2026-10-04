import { ArrowUpRight } from 'lucide-react';
import { catalogItems } from '@/lib/presentation';
import type { EditableProduct } from '@/lib/site-content';
import ProductImage from './product-image';
import { hasVerifiedProductImage } from '@/lib/verified-product-images';

export default function ProductCards({ items = catalogItems }: { items?: EditableProduct[] }) {
  return (
    <div className="photo-product-grid">
      {items.map((product) => {
        const hasImage = !product.imageHidden && Boolean(product.image || hasVerifiedProductImage(product.id));
        return (
          <article
            className={'photo-product-card' + (hasImage ? '' : ' photo-product-card-no-image')}
            key={product.id}
          >
            {hasImage && (
              <a href={product.href} aria-label={product.title + ' ürününü incele'}>
                <ProductImage
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  imageHidden={product.imageHidden}
                />
              </a>
            )}
            <div className="photo-product-copy">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span className="tech-badge tech-badge-steel">{product.category}</span>
                <span className="tech-badge tech-badge-orange" style={{ fontSize: '10px', padding: '2px 6px' }}>
                  ÖZEL İMALAT
                </span>
              </div>
              <h3>
                <a href={product.href}>{product.title}</a>
              </h3>
              <a className="photo-product-link" href={product.href}>
                Teknik detay ve teklif <ArrowUpRight size={18} />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
