'use client';

import { useMemo, useState } from 'react';
import { Check, Eye, LogOut, PackagePlus, Save, Search, Settings, Trash2 } from 'lucide-react';
import type { EditableProduct, EditableSiteContent } from '@/lib/site-content';

type Props = { initialContent: EditableSiteContent; userName: string };

export default function ManagementEditor({ initialContent, userName }: Props) {
  const [content, setContent] = useState(initialContent);
  const [section, setSection] = useState<'products' | 'business'>('products');
  const [selectedId, setSelectedId] = useState(initialContent.products[0]?.id ?? '');
  const [query, setQuery] = useState('');
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  const selected = content.products.find((product) => product.id === selectedId);
  const visibleProducts = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('tr-TR');
    if (!normalized) return content.products;
    return content.products.filter((product) => `${product.title} ${product.category}`.toLocaleLowerCase('tr-TR').includes(normalized));
  }, [content.products, query]);

  function updateProduct(patch: Partial<EditableProduct>) {
    setContent((current) => ({
      ...current,
      products: current.products.map((product) => product.id === selectedId ? { ...product, ...patch } : product),
    }));
    setSaveState('idle');
  }

  function addProduct() {
    const stamp = Date.now().toString().slice(-7);
    const id = `yeni-urun-${stamp}`;
    const next: EditableProduct = {
      id,
      href: `/${id}`,
      title: 'Yeni ürün ailesi',
      category: 'Özel üretim',
      description: 'Ürün açıklamasını buraya yazın.',
      details: ['Özel ölçü talebi'],
      uses: ['Fabrika ve atölye kullanımı'],
      checks: [{ title: 'İhtiyacınızı paylaşın', text: 'Ölçü, yük ve kullanım koşullarını birlikte değerlendirelim.' }],
      fields: [{ id: 'request', label: 'Talep ayrıntıları', kind: 'text', hint: 'Ölçü ve kullanım bilgisini yazın' }],
      note: 'Teknik özellikler kullanım bilgileriyle birlikte netleştirilir.',
      source: '',
      status: 'inactive',
      group: 'fabrika-tasima',
    };
    setContent((current) => ({ ...current, products: [...current.products, next] }));
    setSelectedId(id);
    setSection('products');
    setSaveState('idle');
  }

  function removeSelected() {
    if (!selected || !window.confirm(`“${selected.title}” ürününü listeden kaldırmak istediğinize emin misiniz?`)) return;
    const remaining = content.products.filter((product) => product.id !== selected.id);
    setContent((current) => ({ ...current, products: remaining }));
    setSelectedId(remaining[0]?.id ?? '');
    setSaveState('idle');
  }

  async function save() {
    setSaveState('saving');
    try {
      const response = await fetch('/api/yonetim/content', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (!response.ok) throw new Error('save_failed');
      setSaveState('saved');
    } catch {
      setSaveState('error');
    }
  }

  return (
    <main id="main" className="management-app">
      <header className="management-toolbar">
        <div>
          <span className="management-mark">o.</span>
          <div><strong>Site yönetimi</strong><small>{userName}</small></div>
        </div>
        <nav aria-label="Yönetim işlemleri">
          <a href="/" target="_blank"><Eye size={17} /> Siteyi görüntüle</a>
          <a href="/signout-with-chatgpt?return_to=/" target="_top"><LogOut size={17} /> Çıkış</a>
          <button type="button" onClick={save} disabled={saveState === 'saving'}>
            {saveState === 'saved' ? <Check size={18} /> : <Save size={18} />}
            {saveState === 'saving' ? 'Kaydediliyor…' : saveState === 'saved' ? 'Kaydedildi' : 'Değişiklikleri kaydet'}
          </button>
        </nav>
      </header>

      {saveState === 'error' && <div className="management-error">Değişiklikler kaydedilemedi. Bağlantınızı kontrol edip tekrar deneyin.</div>}

      <div className="management-workspace">
        <aside className="management-sidebar">
          <button className={section === 'products' ? 'active' : ''} onClick={() => setSection('products')}><PackagePlus size={18} /> Ürünler</button>
          <button className={section === 'business' ? 'active' : ''} onClick={() => setSection('business')}><Settings size={18} /> Firma bilgileri</button>
          {section === 'products' && (
            <>
              <label className="management-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ürün ara" /></label>
              <div className="management-product-list">
                {visibleProducts.map((product) => (
                  <button key={product.id} className={selectedId === product.id ? 'selected' : ''} onClick={() => setSelectedId(product.id)}>
                    <span>{product.title}</span><small>{product.status === 'inactive' ? 'Gizli' : 'Yayında'}</small>
                  </button>
                ))}
              </div>
              <button className="management-add" onClick={addProduct}><PackagePlus size={17} /> Yeni ürün ekle</button>
            </>
          )}
        </aside>

        <section className="management-editor">
          {section === 'business' ? (
            <BusinessForm content={content} onChange={(business) => { setContent((current) => ({ ...current, business })); setSaveState('idle'); }} />
          ) : selected ? (
            <ProductForm product={selected} onChange={updateProduct} onDelete={removeSelected} />
          ) : (
            <div className="management-empty"><PackagePlus size={30} /><h1>Henüz ürün yok</h1><button onClick={addProduct}>İlk ürünü ekle</button></div>
          )}
        </section>
      </div>
    </main>
  );
}

function BusinessForm({ content, onChange }: { content: EditableSiteContent; onChange: (business: EditableSiteContent['business']) => void }) {
  const business = content.business;
  const set = (key: keyof typeof business, value: string) => onChange({ ...business, [key]: value });
  return <div className="management-form"><div className="management-form-head"><div><p className="overline">FİRMA BİLGİLERİ</p><h1>İletişim ve marka</h1><p>Buradaki bilgiler site genelindeki iletişim alanlarında kullanılır.</p></div></div><div className="management-fields"><Field label="Firma adı"><input value={business.name} onChange={(e) => set('name', e.target.value)} /></Field><Field label="Telefonda görünen numara"><input value={business.phoneDisplay} onChange={(e) => set('phoneDisplay', e.target.value)} /></Field><Field label="Telefon bağlantısı"><input value={business.phone} onChange={(e) => set('phone', e.target.value)} /></Field><Field label="WhatsApp numarası"><input value={business.whatsapp} onChange={(e) => set('whatsapp', e.target.value)} /></Field><Field label="Adres" wide><textarea rows={4} value={business.address} onChange={(e) => set('address', e.target.value)} /></Field></div></div>;
}

function ProductForm({ product, onChange, onDelete }: { product: EditableProduct; onChange: (patch: Partial<EditableProduct>) => void; onDelete: () => void }) {
  return <div className="management-form"><div className="management-form-head"><div><p className="overline">ÜRÜN DÜZENLE</p><h1>{product.title}</h1><p>Başlık, açıklama ve görünürlüğü değiştirebilirsiniz.</p></div><label className="management-visibility"><input type="checkbox" checked={product.status !== 'inactive'} onChange={(e) => onChange({ status: e.target.checked ? 'active' : 'inactive' })} /><span>{product.status === 'inactive' ? 'Sitede gizli' : 'Sitede yayında'}</span></label></div><div className="management-fields"><Field label="Ürün başlığı" wide><input value={product.title} onChange={(e) => onChange({ title: e.target.value })} /></Field><Field label="Kategori"><input value={product.category} onChange={(e) => onChange({ category: e.target.value })} /></Field><Field label="Sayfa adresi" hint="Yeni ürün eklenirken otomatik oluşturulur"><input value={product.id} readOnly /></Field><Field label="Kısa açıklama" wide><textarea rows={5} value={product.description} onChange={(e) => onChange({ description: e.target.value })} /></Field><Field label="Öne çıkan özellikler" wide hint="Her satıra bir özellik yazın"><textarea rows={5} value={product.details.join('\n')} onChange={(e) => onChange({ details: e.target.value.split('\n') })} /></Field><Field label="Kullanım alanları" wide hint="Her satıra bir kullanım alanı yazın"><textarea rows={5} value={product.uses.join('\n')} onChange={(e) => onChange({ uses: e.target.value.split('\n') })} /></Field><Field label="Teknik not" wide><textarea rows={4} value={product.note} onChange={(e) => onChange({ note: e.target.value })} /></Field></div><div className="management-danger"><button onClick={onDelete}><Trash2 size={17} /> Bu ürünü kaldır</button></div></div>;
}

function Field({ label, hint, wide, children }: { label: string; hint?: string; wide?: boolean; children: React.ReactNode }) {
  return <label className={wide ? 'management-field wide' : 'management-field'}><span>{label}</span>{children}{hint && <small>{hint}</small>}</label>;
}
