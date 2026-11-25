import { ArrowRight, Cog, FileCode, Wrench } from 'lucide-react';
import type { EditableProduct } from '@/lib/site-content';
import { categories } from '@/lib/presentation';

const categoryIcons = {
  'metal-sekillendirme-makineleri': Wrench,
  'talasli-imalat': Cog,
  'tersine-muhendislik-restorasyon': FileCode,
  'atolye-ekipman': Wrench,
} as const;

export default function CategoryCards({ items }: { items: EditableProduct[] }) {
  return (
    <div className="category-card-grid">
      {categories.map((category, index) => {
        const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
        const count = items.filter((item) => item.group === category.id).length;

        return (
          <a className="category-card" href={category.id === 'metal-sekillendirme-makineleri' ? '/' + category.id : '/urunler#' + category.id} key={category.id}>
            <div className="category-card-icon">
              <Icon size={26} />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p className="overline">ANA ÜRÜN GRUBU</p>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <div className="category-card-footer">
              <span>{count} alt ürün ve teklif sayfası</span>
              <ArrowRight size={18} />
            </div>
          </a>
        );
      })}
    </div>
  );
}
