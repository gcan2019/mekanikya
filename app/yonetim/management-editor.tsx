'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  Check,
  ChevronRight,
  Eye,
  FileText,
  HelpCircle,
  Image as ImageIcon,
  Layers,
  ListPlus,
  LogOut,
  MessageSquare,
  PackagePlus,
  Plus,
  RotateCcw,
  Save,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Trash2,
  UploadCloud,
  Wrench,
} from 'lucide-react';
import type {
  EditableBusiness,
  EditableCaseStudy,
  EditableProduct,
  EditableSiteContent,
  ProductImageItem,
  ProductImageRole,
  ProductOptionItem,
} from '@/lib/site-content';
import ProductImage from '@/components/product-image';
import { getDefaultProductOptions } from '@/lib/default-product-options';

type Props = { initialContent: EditableSiteContent; userName: string };
type ProductTab = 'general' | 'images' | 'fields' | 'options' | 'checks';

export default function ManagementEditor({ initialContent, userName }: Props) {
  const [dirty, setDirty] = useState(false);
  useEffect(() => {
    const guard = (event: BeforeUnloadEvent) => {
      if (dirty) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', guard);
    return () => window.removeEventListener('beforeunload', guard);
  }, [dirty]);

  const [content, setContent] = useState(initialContent);
  const [activeSection, setActiveSection] = useState<'products' | 'caseStudies' | 'business'>('products');
  const [selectedProductId, setSelectedProductId] = useState(initialContent.products[0]?.id ?? '');
  const [selectedCaseId, setSelectedCaseId] = useState(initialContent.caseStudies?.[0]?.id ?? 'sebze-dograma-bicaklari');
  const [productTab, setProductTab] = useState<ProductTab>('general');
  const [productQuery, setProductQuery] = useState('');
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [saveMessage, setSaveMessage] = useState('');

  const selectedProduct = content.products.find((p) => p.id === selectedProductId);
  const selectedCase = content.caseStudies?.find((c) => c.id === selectedCaseId);

  const visibleProducts = useMemo(() => {
    const q = productQuery.trim().toLocaleLowerCase('tr-TR');
    if (!q) return content.products;
    return content.products.filter((p) =>
      `${p.title} ${p.category} ${p.id}`.toLocaleLowerCase('tr-TR').includes(q),
    );
  }, [content.products, productQuery]);

  function markDirty() {
    setDirty(true);
    setSaveState('idle');
    setSaveMessage('');
  }

  function updateProduct(patch: Partial<EditableProduct>) {
    setContent((cur) => ({
      ...cur,
      products: cur.products.map((p) => (p.id === selectedProductId ? { ...p, ...patch } : p)),
    }));
    markDirty();
  }

  function moveProduct(index: number, direction: 'up' | 'down') {
    const target = direction === 'up' ? index - 1 : index + 1;
    if (target < 0 || target >= content.products.length) return;
    const nextList = [...content.products];
    const [moved] = nextList.splice(index, 1);
    nextList.splice(target, 0, moved);
    const reordered = nextList.map((item, idx) => ({ ...item, sortOrder: idx + 1 }));
    setContent((cur) => ({ ...cur, products: reordered }));
    markDirty();
  }

  function addProduct() {
    const stamp = Date.now().toString().slice(-6);
    const id = `yeni-urun-${stamp}`;
    const next: EditableProduct = {
      id,
      href: `/${id}`,
      title: 'Yeni Ürün Ailesi',
      category: 'Özel İmalat',
      description: 'Ürün kısa tanıtımını buraya yazın. Ölçü, malzeme ve kullanım şartlarına göre üretilir.',
      details: ['İşletmenize özel ölçü ve taşıma kapasitesi', 'Mukavemetli çelik şase ve kaliteli rulmanlı tekerlekler'],
      uses: ['Fabrika içi hat besleme', 'Atölye ve depo istifleme'],
      checks: [
        { title: 'Ölçü ve Taşıma Yükü', text: 'En, boy, yükseklik ve taşınacak azami ağırlığı belirtin.' },
        { title: 'Çalışma Ortamı', text: 'Zemin durumu, koridor genişliği ve kullanım sıklığını paylaşın.' },
      ],
      fields: [
        { id: 'olculer', label: 'İstenen ölçüler (En x Boy x Yükseklik)', kind: 'text', hint: 'Örn: 1000x800x900 mm' },
        { id: 'tasima_yuku', label: 'Taşınacak yaklaşık yük', kind: 'number', unit: 'kg', hint: 'Örn: 500' },
        { id: 'ortam_bilgisi', label: 'Kullanım alanı / Özel şartlar', kind: 'text', hint: 'Örn: Islak zemin, talaşlı atölye' },
      ],
      note: 'Tüm ölçü ve detaylar numune, çizim veya teknik değerlendirme sonrasında kesinleştirilir.',
      source: '',
      status: 'inactive',
      group: 'fabrika-tasima',
      sortOrder: content.products.length + 1,
    };
    setContent((cur) => ({ ...cur, products: [...cur.products, next] }));
    setSelectedProductId(id);
    setActiveSection('products');
    setProductTab('general');
    markDirty();
  }

  function removeProduct(id: string) {
    const p = content.products.find((item) => item.id === id);
    if (!p) return;
    if (!window.confirm(`“${p.title}” ürününü silmek istediğinize emin misiniz?`)) return;
    const remaining = content.products.filter((item) => item.id !== id);
    setContent((cur) => ({ ...cur, products: remaining }));
    setSelectedProductId(remaining[0]?.id ?? '');
    markDirty();
  }

  function updateCaseStudy(patch: Partial<EditableCaseStudy>) {
    const list = content.caseStudies ?? [];
    setContent((cur) => ({
      ...cur,
      caseStudies: list.map((c) => (c.id === selectedCaseId ? { ...c, ...patch } : c)),
    }));
    markDirty();
  }

  function addCaseStudy() {
    const stamp = Date.now().toString().slice(-5);
    const id = `calisma-${stamp}`;
    const next: EditableCaseStudy = {
      id,
      title: 'Yeni Örnek Çalışma',
      category: 'Makine Revizyonu',
      summary: 'Yapılan revizyon, yedek parça üretimi veya saha uygulamasının kısa özeti.',
      problem: 'Müşterimizin karşılaştığı teknik problem veya aşınma durumu.',
      solution: 'Uygulanan tersine mühendislik, talaşlı imalat veya revizyon adımları.',
      result: 'Çalışma sonrası elde edilen verim ve sağlanan kazanım.',
      status: 'active',
      sortOrder: (content.caseStudies?.length ?? 0) + 1,
    };
    setContent((cur) => ({ ...cur, caseStudies: [...(cur.caseStudies ?? []), next] }));
    setSelectedCaseId(id);
    setActiveSection('caseStudies');
    markDirty();
  }

  function removeCaseStudy(id: string) {
    const cs = content.caseStudies?.find((c) => c.id === id);
    if (!cs) return;
    if (!window.confirm(`“${cs.title}” örnek çalışmasını silmek istediğinize emin misiniz?`)) return;
    const remaining = (content.caseStudies ?? []).filter((c) => c.id !== id);
    setContent((cur) => ({ ...cur, caseStudies: remaining }));
    setSelectedCaseId(remaining[0]?.id ?? '');
    markDirty();
  }

  async function save() {
    setSaveState('saving');
    setSaveMessage('');
    try {
      const response = await fetch('/api/yonetim/content', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (!response.ok) throw new Error('Kaydetme isteği başarısız oldu.');
      setSaveState('saved');
      setDirty(false);
      setSaveMessage('Tüm değişiklikler başarıyla kaydedildi.');
    } catch {
      setSaveState('error');
      setSaveMessage('Değişiklikler kaydedilemedi. Lütfen bağlantınızı kontrol edip tekrar deneyin.');
    }
  }

  return (
    <main id="main" className="management-app">
      <header className="management-toolbar">
        <div>
          <span className="management-mark">M</span>
          <div>
            <strong>Mekanikya / ofirma Yönetim Paneli</strong>
            <small>Giriş Yapan: {userName} {dirty && <span style={{ color: '#ffb396', fontWeight: 700 }}>• Kaydedilmemiş Değişiklikler Var</span>}</small>
          </div>
        </div>
        <nav aria-label="Yönetim İşlemleri">
          <a href="/" target="_blank" rel="noreferrer">
            <Eye size={17} /> Siteyi Gör
          </a>
          <a href="/signout-with-chatgpt?return_to=/" target="_top">
            <LogOut size={17} /> Çıkış
          </a>
          <button type="button" onClick={save} disabled={saveState === 'saving'}>
            {saveState === 'saved' ? <Check size={18} /> : <Save size={18} />}
            {saveState === 'saving' ? 'Kaydediliyor…' : saveState === 'saved' ? 'Kaydedildi!' : 'Değişiklikleri Kaydet'}
          </button>
        </nav>
      </header>

      {saveMessage && (
        <div className={saveState === 'error' ? 'management-error' : 'management-saved-banner'} style={saveState === 'saved' ? { background: '#e9f7ef', color: '#166534', padding: '12px 28px', borderBottom: '1px solid #bbf7d0', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' } : undefined}>
          {saveState === 'saved' && <Check size={16} />}
          {saveMessage}
        </div>
      )}

      <div className="management-workspace">
        {/* SOL MENÜ / KENAR ÇUBUĞU */}
        <aside className="management-sidebar">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '18px' }}>
            <button
              className={activeSection === 'products' ? 'active' : ''}
              onClick={() => setActiveSection('products')}
            >
              <PackagePlus size={18} /> Ürün Aileleri ({content.products.length})
            </button>
            <button
              className={activeSection === 'caseStudies' ? 'active' : ''}
              onClick={() => setActiveSection('caseStudies')}
            >
              <Sparkles size={18} /> Örnek Çalışmalar ({content.caseStudies?.length ?? 0})
            </button>
            <button
              className={activeSection === 'business' ? 'active' : ''}
              onClick={() => setActiveSection('business')}
            >
              <Settings size={18} /> Site & İletişim Ayarları
            </button>
          </div>

          {activeSection === 'products' && (
            <>
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '14px', marginBottom: '8px' }}>
                <label className="management-search">
                  <Search size={16} />
                  <input
                    value={productQuery}
                    onChange={(e) => setProductQuery(e.target.value)}
                    placeholder="Ürünlerde ara…"
                  />
                </label>
              </div>

              <div className="management-product-list">
                {visibleProducts.map((p, idx) => {
                  const isSelected = selectedProductId === p.id;
                  const isInactive = p.status === 'inactive';
                  return (
                    <div
                      key={p.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: isSelected ? '#fff3ed' : '#ffffff',
                        border: isSelected ? '1px solid #e9b29e' : '1px solid #e2e8f0',
                        borderRadius: '4px',
                        marginBottom: '4px',
                        overflow: 'hidden',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedProductId(p.id)}
                        style={{
                          flex: 1,
                          padding: '10px 12px',
                          border: 0,
                          background: 'transparent',
                          textAlign: 'left',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ fontSize: '13px', fontWeight: isSelected ? 700 : 500, color: '#1a2f3f' }}>
                          {p.title}
                        </div>
                        <div style={{ fontSize: '11px', color: isInactive ? '#94a3b8' : '#0d6832', display: 'flex', gap: '6px', alignItems: 'center' }}>
                          <span>{p.category}</span>
                          <span>•</span>
                          <span>{isInactive ? 'Gizli' : 'Yayında'}</span>
                        </div>
                      </button>
                      <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '4px' }}>
                        <button
                          type="button"
                          title="Yukarı Taşı"
                          disabled={idx === 0}
                          onClick={(e) => { e.stopPropagation(); moveProduct(idx, 'up'); }}
                          style={{ border: 0, background: 'transparent', padding: '2px', cursor: 'pointer', opacity: idx === 0 ? 0.3 : 0.8 }}
                        >
                          <ArrowUp size={13} />
                        </button>
                        <button
                          type="button"
                          title="Aşağı Taşı"
                          disabled={idx === visibleProducts.length - 1}
                          onClick={(e) => { e.stopPropagation(); moveProduct(idx, 'down'); }}
                          style={{ border: 0, background: 'transparent', padding: '2px', cursor: 'pointer', opacity: idx === visibleProducts.length - 1 ? 0.3 : 0.8 }}
                        >
                          <ArrowDown size={13} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="management-add" onClick={addProduct} style={{ marginTop: '14px', width: '100%' }}>
                <Plus size={17} /> Yeni Ürün Ailesi Ekle
              </button>
            </>
          )}

          {activeSection === 'caseStudies' && (
            <>
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '14px', marginBottom: '8px' }}>
                <div className="management-product-list">
                  {(content.caseStudies ?? []).map((cs) => {
                    const isSelected = selectedCaseId === cs.id;
                    return (
                      <button
                        key={cs.id}
                        type="button"
                        className={isSelected ? 'selected' : ''}
                        onClick={() => setSelectedCaseId(cs.id)}
                        style={{ textAlign: 'left', padding: '10px 12px' }}
                      >
                        <span style={{ fontWeight: isSelected ? 700 : 500 }}>{cs.title}</span>
                        <small style={{ color: cs.status === 'inactive' ? '#94a3b8' : '#0d6832' }}>
                          {cs.category} • {cs.status === 'inactive' ? 'Taslak/Gizli' : 'Yayında'}
                        </small>
                      </button>
                    );
                  })}
                </div>
                <button className="management-add" onClick={addCaseStudy} style={{ marginTop: '14px', width: '100%' }}>
                  <Plus size={17} /> Yeni Örnek Çalışma Ekle
                </button>
              </div>
            </>
          )}
        </aside>

        {/* SAĞ PANEL / DÜZENLEME ALANI */}
        <section className="management-editor">
          {activeSection === 'products' && selectedProduct && (
            <div className="management-form">
              {/* ÜRÜN ÜST BAŞLIK & DURUM */}
              <div className="management-form-head" style={{ borderBottom: '0', paddingBottom: '16px' }}>
                <div>
                  <p className="overline" style={{ margin: 0, color: '#d9532c', fontSize: '12px', letterSpacing: '0.08em' }}>
                    ÜRÜN YÖNETİMİ • {selectedProduct.category}
                  </p>
                  <h1 style={{ fontSize: '26px', margin: '4px 0 6px', color: '#102b3d' }}>{selectedProduct.title}</h1>
                  <p style={{ margin: 0, color: '#687d8a', fontSize: '13px' }}>
                    URL: <code style={{ background: '#e2e8f0', padding: '2px 6px', borderRadius: '3px' }}>/{selectedProduct.id}</code>
                  </p>
                </div>
                <label className="management-visibility" style={{ cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={selectedProduct.status !== 'inactive'}
                    onChange={(e) => updateProduct({ status: e.target.checked ? 'active' : 'inactive' })}
                  />
                  <span>{selectedProduct.status === 'inactive' ? 'Sitede Gizli' : 'Sitede Yayında'}</span>
                </label>
              </div>

              {/* SEKMELER */}
              <div style={{ display: 'flex', borderBottom: '1px solid #cbd8e0', background: '#f8fafc', padding: '0 24px', gap: '6px', flexWrap: 'wrap' }}>
                <TabButton active={productTab === 'general'} onClick={() => setProductTab('general')} icon={<FileText size={16} />} title="Temel Bilgiler" />
                <TabButton active={productTab === 'images'} onClick={() => setProductTab('images')} icon={<ImageIcon size={16} />} title={`Görseller (${(selectedProduct.gallery?.length ?? 0) + (selectedProduct.image ? 1 : 0) || 'Varsayılan'})`} />
                <TabButton active={productTab === 'fields'} onClick={() => setProductTab('fields')} icon={<MessageSquare size={16} />} title={`Teklif Formu & WhatsApp (${selectedProduct.fields.length})`} />
                <TabButton
                  active={productTab === 'options'}
                  onClick={() => setProductTab('options')}
                  icon={<Layers size={16} />}
                  title={`Modeller & Varyasyonlar (${(selectedProduct.options && selectedProduct.options.length > 0 ? selectedProduct.options : getDefaultProductOptions(selectedProduct.id)).length})`}
                />
                <TabButton active={productTab === 'checks'} onClick={() => setProductTab('checks')} icon={<Wrench size={16} />} title={`Teknik Bilgiler (${selectedProduct.checks.length})`} />
              </div>

              {/* SEKME İÇERİKLERİ */}
              <div style={{ padding: '24px 34px' }}>
                {productTab === 'general' && (
                  <ProductGeneralTab product={selectedProduct} onChange={updateProduct} />
                )}

                {productTab === 'images' && (
                  <ProductImagesTab product={selectedProduct} onChange={updateProduct} />
                )}

                {productTab === 'fields' && (
                  <ProductFieldsTab product={selectedProduct} onChange={updateProduct} />
                )}

                {productTab === 'options' && (
                  <ProductOptionsTab product={selectedProduct} onChange={updateProduct} />
                )}

                {productTab === 'checks' && (
                  <ProductChecksTab product={selectedProduct} onChange={updateProduct} />
                )}
              </div>

              {/* TEHLİKELİ ALAN / SİLME */}
              <div className="management-danger" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                <button type="button" onClick={() => removeProduct(selectedProduct.id)}>
                  <Trash2 size={17} /> Bu Ürün Ailesini Tamamen Sil
                </button>
              </div>
            </div>
          )}

          {activeSection === 'caseStudies' && selectedCase && (
            <CaseStudyForm
              caseStudy={selectedCase}
              onChange={updateCaseStudy}
              onDelete={() => removeCaseStudy(selectedCase.id)}
            />
          )}

          {activeSection === 'business' && (
            <BusinessSettingsForm
              business={content.business}
              onChange={(b) => {
                setContent((cur) => ({ ...cur, business: b }));
                markDirty();
              }}
            />
          )}
        </section>
      </div>
    </main>
  );
}

function TabButton({ active, onClick, icon, title }: { active: boolean; onClick: () => void; icon: React.ReactNode; title: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        padding: '12px 14px',
        background: active ? '#ffffff' : 'transparent',
        border: '1px solid transparent',
        borderBottomColor: active ? '#ffffff' : 'transparent',
        marginBottom: '-1px',
        color: active ? '#d9532c' : '#475569',
        fontWeight: active ? 700 : 500,
        fontSize: '13px',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        cursor: 'pointer',
        borderTop: active ? '2px solid #d9532c' : '2px solid transparent',
        borderLeft: active ? '1px solid #cbd8e0' : 'none',
        borderRight: active ? '1px solid #cbd8e0' : 'none',
      }}
    >
      {icon} {title}
    </button>
  );
}

/* =========================================================================
   1. GENEL BİLGİLER SEKMESİ
   ========================================================================= */
function ProductGeneralTab({ product, onChange }: { product: EditableProduct; onChange: (patch: Partial<EditableProduct>) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
        <Field label="Ürün Başlığı">
          <input
            value={product.title}
            onChange={(e) => onChange({ title: e.target.value })}
            placeholder="Örn: Metal Taşıma Kasası"
          />
        </Field>
        <Field label="Kategori">
          <input
            value={product.category}
            onChange={(e) => onChange({ category: e.target.value })}
            placeholder="Örn: Fabrika İçi Taşıma"
          />
        </Field>
      </div>

      <Field label="Kısa Açıklama (Ürün Kartında ve Başlık Altında Görünen Metin)" wide>
        <textarea
          rows={3}
          value={product.description}
          onChange={(e) => onChange({ description: e.target.value })}
          placeholder="İmalat ve atölye koşullarına uygun, özel ölçülerde üretilen..."
        />
      </Field>

      <Field
        label="Öne Çıkan Özellikler (Maddeler)"
        hint="Her satıra bir özellik yazın. Müşteriye ürünün avantajlarını madde madde aktarır."
        wide
      >
        <textarea
          rows={4}
          value={product.details.join('\n')}
          onChange={(e) => onChange({ details: e.target.value.split('\n').map((s) => s.trim()).filter(Boolean) })}
          placeholder="Ağır sanayi tipi sağlam çelik profil şase&#10;Forklift cebi veya transpalet uyumlu taban&#10;İsteğe bağlı tekerlekli veya istiflenebilir yapı"
        />
      </Field>

      <Field
        label="İlgili Kullanım Alanları"
        hint="Her satıra bir alan yazın. Ürün sayfasının altında etiket olarak görünür."
        wide
      >
        <textarea
          rows={3}
          value={product.uses.join('\n')}
          onChange={(e) => onChange({ uses: e.target.value.split('\n').map((s) => s.trim()).filter(Boolean) })}
          placeholder="Talaşlı İmalat Atölyeleri&#10;Pres ve Lazer Kesim Hatları&#10;Döküm ve Kalıp Depoları"
        />
      </Field>

      <Field
        label="Teknik Dipnot"
        hint="Sayfanın teknik kontrol maddelerinin hemen altında yer alan açıklayıcı not."
        wide
      >
        <textarea
          rows={2}
          value={product.note ?? ''}
          onChange={(e) => onChange({ note: e.target.value })}
          placeholder="Teknik özellikler ve ek aksesuarlar projenin kullanım bilgileriyle birlikte netleştirilir."
        />
      </Field>
    </div>
  );
}

/* =========================================================================
   2. GÖRSEL YÖNETİMİ SEKMESİ (Tekil/Çoklu Görsel, Rol, Doğrulama Durumu)
   ========================================================================= */
function ProductImagesTab({ product, onChange }: { product: EditableProduct; onChange: (patch: Partial<EditableProduct>) => void }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [manualUrl, setManualUrl] = useState('');
  const [manualAlt, setManualAlt] = useState('');

  const gallery = product.gallery ?? [];
  const hasCustomPrimary = Boolean(product.image);

  async function handleFileUpload(file: File, verified = false, role: ProductImageRole = 'both') {
    if (file.size > 5 * 1024 * 1024) {
      setError('En fazla 5 MB büyüklüğünde bir görsel seçin.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch('/api/yonetim/upload', { method: 'POST', body: form });
      const data = (await res.json()) as { src?: string; error?: string };
      if (!res.ok || !data.src) throw new Error(data.error || 'Görsel yüklenemedi.');

      const newImage: ProductImageItem = {
        src: data.src,
        alt: `${product.title} görseli`,
        role,
        verified,
        sortOrder: gallery.length + 1,
      };

      const updatedGallery = [...gallery, newImage];
      // Eğer ana görsel henüz ayarlanmamışsa bu yeni görseli ana görsel yap
      const newPrimary = product.image ? product.image : { src: data.src, alt: `${product.title} görseli`, verified };
      onChange({
        gallery: updatedGallery,
        image: newPrimary,
        imageHidden: false,
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Yükleme başarısız.');
    } finally {
      setBusy(false);
    }
  }

  function addManualImage() {
    if (!manualUrl.trim()) return;
    const newImage: ProductImageItem = {
      src: manualUrl.trim(),
      alt: manualAlt.trim() || `${product.title} görseli`,
      role: 'both',
      verified: true,
      sortOrder: gallery.length + 1,
    };
    const updatedGallery = [...gallery, newImage];
    const newPrimary = product.image ? product.image : { src: newImage.src, alt: newImage.alt, verified: true };
    onChange({ gallery: updatedGallery, image: newPrimary, imageHidden: false });
    setManualUrl('');
    setManualAlt('');
  }

  function setAsPrimary(img: ProductImageItem) {
    onChange({
      image: { src: img.src, alt: img.alt, verified: img.verified },
      imageHidden: false,
    });
  }

  function removeGalleryImage(index: number) {
    const next = [...gallery];
    const removed = next.splice(index, 1)[0];
    const reordered = next.map((it, i) => ({ ...it, sortOrder: i + 1 }));

    // Eğer silinen görsel şu anki ana görsel ise ana görseli ilk görsele geçir
    let newImage = product.image;
    if (product.image?.src === removed.src) {
      newImage = reordered[0] ? { src: reordered[0].src, alt: reordered[0].alt, verified: reordered[0].verified } : undefined;
    }
    onChange({ gallery: reordered, image: newImage });
  }

  function moveGalleryImage(index: number, direction: 'up' | 'down') {
    const target = direction === 'up' ? index - 1 : index + 1;
    if (target < 0 || target >= gallery.length) return;
    const next = [...gallery];
    const [moved] = next.splice(index, 1);
    next.splice(target, 0, moved);
    onChange({ gallery: next.map((it, i) => ({ ...it, sortOrder: i + 1 })) });
  }

  function updateGalleryItem(index: number, patch: Partial<ProductImageItem>) {
    const next = gallery.map((item, i) => (i === index ? { ...item, ...patch } : item));
    // Eğer ana görsel güncelleniyorsa product.image da güncellensin
    let newImage = product.image;
    if (product.image && product.image.src === gallery[index].src) {
      newImage = {
        ...product.image,
        alt: patch.alt ?? product.image.alt,
        verified: patch.verified ?? product.image.verified,
      };
    }
    onChange({ gallery: next, image: newImage });
  }

  function restoreOriginalDefaults() {
    if (!window.confirm('Özel yüklenen görsel ayarları kaldırılıp sistemin başlangıçtaki varsayılan / MISUMI görseline dönülecektir. Onaylıyor musunuz?')) return;
    onChange({ image: undefined, gallery: undefined, imageHidden: false });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* MEVCUT AKTİF GÖRSEL KARTI */}
      <div style={{ background: '#f8fafc', border: '1px solid #cbd8e0', borderRadius: '6px', padding: '18px 20px' }}>
        <h3 style={{ fontSize: '15px', margin: '0 0 10px', color: '#102b3d' }}>
          Mevcut Sitede Görünen Ana Görsel
        </h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: '220px', height: '160px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {product.imageHidden ? (
              <p style={{ fontSize: '12px', color: '#64748b' }}>Görsel Gizlendi</p>
            ) : (
              <ProductImage id={product.id} title={product.title} image={product.image} imageHidden={product.imageHidden} />
            )}
          </div>
          <div style={{ flex: 1, minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '13px' }}>
              <strong>Görsel Tipi: </strong>
              {product.image?.verified ? (
                <span style={{ color: '#0d6832', fontWeight: 600 }}>✓ Doğrulanmış Atölye Fotoğrafı</span>
              ) : hasCustomPrimary ? (
                <span style={{ color: '#475569' }}>Özel Yüklenen / Teknik Çizim</span>
              ) : (
                <span style={{ color: '#0369a1' }}>MISUMI Kataloğu Referans Görseli (Varsayılan)</span>
              )}
            </div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>
              {product.image?.alt ? `Alt Metin: “${product.image.alt}”` : 'Alt Metin: Ürün başlığı'}
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => onChange({ imageHidden: !product.imageHidden })}
                style={{ padding: '6px 12px', fontSize: '12px', border: '1px solid #cbd8e0', background: '#fff', borderRadius: '4px', cursor: 'pointer' }}
              >
                {product.imageHidden ? 'Görseli Göster' : 'Görseli Sitede Gizle'}
              </button>
              {(hasCustomPrimary || gallery.length > 0) && (
                <button
                  type="button"
                  onClick={restoreOriginalDefaults}
                  style={{ padding: '6px 12px', fontSize: '12px', border: '1px solid #fecaca', background: '#fff1f2', color: '#991b1b', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Varsayılan Görsele Geri Dön
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* YENİ GÖRSEL EKLEME ALANI */}
      <div style={{ border: '2px dashed #94a3b8', borderRadius: '6px', padding: '20px', textAlign: 'center', background: '#fdfdfe' }}>
        <UploadCloud size={32} style={{ color: '#d9532c', margin: '0 auto 8px' }} />
        <h4 style={{ margin: '0 0 4px', fontSize: '15px', color: '#102b3d' }}>Bilgisayarınızdan Yeni Görsel Yükleyin</h4>
        <p style={{ margin: '0 0 14px', fontSize: '12px', color: '#64748b' }}>JPG, PNG veya WebP • En fazla 5 MB</p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#d9532c', color: '#fff', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: busy ? 'not-allowed' : 'pointer' }}>
            <UploadCloud size={16} />
            {busy ? 'Yükleniyor…' : '✓ Atölye Üretim Fotoğrafı Yükle'}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              disabled={busy}
              style={{ display: 'none' }}
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void handleFileUpload(f, true);
                e.target.value = '';
              }}
            />
          </label>

          <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#475569', color: '#fff', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 500, cursor: busy ? 'not-allowed' : 'pointer' }}>
            <UploadCloud size={16} />
            {busy ? 'Yükleniyor…' : 'Teknik Çizim / Katalog Görseli Yükle'}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              disabled={busy}
              style={{ display: 'none' }}
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void handleFileUpload(f, false);
                e.target.value = '';
              }}
            />
          </label>
        </div>

        {error && <p style={{ color: '#b91c1c', fontSize: '13px', marginTop: '10px' }}>{error}</p>}

        {/* VEYA MEVCUT URL İLE EKLE */}
        <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '12px', color: '#64748b' }}>veya Görsel URL'si:</span>
          <input
            style={{ padding: '6px 10px', fontSize: '12px', border: '1px solid #cbd8e0', borderRadius: '4px', width: '240px' }}
            placeholder="/images/ornek.jpg"
            value={manualUrl}
            onChange={(e) => setManualUrl(e.target.value)}
          />
          <input
            style={{ padding: '6px 10px', fontSize: '12px', border: '1px solid #cbd8e0', borderRadius: '4px', width: '180px' }}
            placeholder="Görsel açıklaması (Alt text)"
            value={manualAlt}
            onChange={(e) => setManualAlt(e.target.value)}
          />
          <button
            type="button"
            onClick={addManualImage}
            style={{ padding: '6px 12px', fontSize: '12px', background: '#0284c7', color: '#fff', border: 0, borderRadius: '4px', cursor: 'pointer' }}
          >
            Listeye Ekle
          </button>
        </div>
      </div>

      {/* GÖRSELLER LİSTESİ / GALERİ YÖNETİMİ */}
      <div>
        <h3 style={{ fontSize: '16px', margin: '0 0 12px', color: '#102b3d' }}>
          Ürünün Görsel Galerisi ({gallery.length} Görsel)
        </h3>
        {gallery.length === 0 ? (
          <p style={{ fontSize: '13px', color: '#64748b', fontStyle: 'italic' }}>
            Henüz ek bir galeri görseli eklenmedi. Ürününüzün atölyedeki imalat fotoğraflarını yukarıdan ekleyebilirsiniz.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {gallery.map((img, idx) => {
              const isCurrentPrimary = product.image?.src === img.src;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    background: '#fff',
                    border: isCurrentPrimary ? '2px solid #d9532c' : '1px solid #e2e8f0',
                    borderRadius: '6px',
                    padding: '12px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ width: '80px', height: '65px', borderRadius: '4px', overflow: 'hidden', background: '#f1f5f9', flexShrink: 0 }}>
                    <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div style={{ flex: 1, minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                      {isCurrentPrimary && (
                        <span style={{ background: '#d9532c', color: '#fff', fontSize: '11px', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>
                          ★ Ana Görsel
                        </span>
                      )}
                      <label style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={img.verified === true}
                          onChange={(e) => updateGalleryItem(idx, { verified: e.target.checked })}
                        />
                        <span style={{ color: img.verified ? '#0d6832' : '#64748b', fontWeight: img.verified ? 600 : 400 }}>
                          {img.verified ? '✓ Atölye Üretim Fotoğrafı' : 'Teknik Çizim / Referans'}
                        </span>
                      </label>
                    </div>

                    <input
                      style={{ padding: '6px 10px', fontSize: '12px', border: '1px solid #cbd8e0', borderRadius: '4px', width: '100%' }}
                      value={img.alt}
                      onChange={(e) => updateGalleryItem(idx, { alt: e.target.value })}
                      placeholder="Görsel açıklaması (Google aramaları ve ekran okuyucular için)"
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {!isCurrentPrimary && (
                      <button
                        type="button"
                        onClick={() => setAsPrimary(img)}
                        style={{ padding: '6px 10px', fontSize: '12px', border: '1px solid #cbd8e0', background: '#f8fafc', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        Ana Görsel Yap
                      </button>
                    )}
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => moveGalleryImage(idx, 'up')}
                      title="Yukarı Taşı"
                      style={{ padding: '6px', border: '1px solid #e2e8f0', background: '#fff', borderRadius: '4px', cursor: idx === 0 ? 'not-allowed' : 'pointer', opacity: idx === 0 ? 0.3 : 1 }}
                    >
                      <ArrowUp size={14} />
                    </button>
                    <button
                      type="button"
                      disabled={idx === gallery.length - 1}
                      onClick={() => moveGalleryImage(idx, 'down')}
                      title="Aşağı Taşı"
                      style={{ padding: '6px', border: '1px solid #e2e8f0', background: '#fff', borderRadius: '4px', cursor: idx === gallery.length - 1 ? 'not-allowed' : 'pointer', opacity: idx === gallery.length - 1 ? 0.3 : 1 }}
                    >
                      <ArrowDown size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(idx)}
                      title="Görseli Sil"
                      style={{ padding: '6px', border: '1px solid #fecaca', background: '#fff1f2', color: '#b91c1c', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   3. TEKLİF FORMU ALANLARI & WHATSAPP ENTEGRASYONU SEKMESİ
   ========================================================================= */
function ProductFieldsTab({ product, onChange }: { product: EditableProduct; onChange: (patch: Partial<EditableProduct>) => void }) {
  const fields = product.fields;

  function addField() {
    const nextIndex = fields.length + 1;
    const id = `ozel_alan_${nextIndex}`;
    const newField = {
      id,
      label: `Teknik Soru / Ölçü ${nextIndex}`,
      kind: 'text' as const,
      hint: 'Müşterinin yazacağı bilgi örneği',
      unit: '',
    };
    onChange({ fields: [...fields, newField] });
  }

  function updateField(index: number, patch: Partial<(typeof fields)[number]>) {
    const next = fields.map((f, i) => (i === index ? { ...f, ...patch } : f));
    onChange({ fields: next });
  }

  function removeField(index: number) {
    if (!window.confirm('Bu teklif sorusunu kaldırmak istediğinize emin misiniz?')) return;
    const next = [...fields];
    next.splice(index, 1);
    onChange({ fields: next });
  }

  function moveField(index: number, direction: 'up' | 'down') {
    const target = direction === 'up' ? index - 1 : index + 1;
    if (target < 0 || target >= fields.length) return;
    const next = [...fields];
    const [moved] = next.splice(index, 1);
    next.splice(target, 0, moved);
    onChange({ fields: next });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <ShieldCheck size={20} style={{ color: '#16a34a', flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong style={{ fontSize: '13px', color: '#15803d' }}>Otomatik WhatsApp Teklif Formatı</strong>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#166534', lineHeight: 1.5 }}>
            Burada tanımladığınız her alan, ürün sayfasındaki teklif formuna otomatik eklenir ve müşteri formu doldurduğunda WhatsApp mesaj taslağına başlığı ve birimiyle birlikte dahil edilir.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '15px', margin: 0, color: '#102b3d' }}>
          Teklif Formu Soruları / İstenen Ölçüler ({fields.length} Alan)
        </h3>
        <button
          type="button"
          onClick={addField}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#d9532c', color: '#fff', border: 0, padding: '7px 14px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
        >
          <Plus size={16} /> Yeni Soru / Alan Ekle
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {fields.map((f, idx) => (
          <div
            key={idx}
            style={{
              background: '#fff',
              border: '1px solid #cbd8e0',
              borderRadius: '6px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>
                {idx + 1}. Alan Sorusı (ID: <code>{f.id}</code>)
              </span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  type="button"
                  disabled={idx === 0}
                  onClick={() => moveField(idx, 'up')}
                  style={{ padding: '4px 8px', border: '1px solid #e2e8f0', background: '#fff', borderRadius: '4px', cursor: idx === 0 ? 'not-allowed' : 'pointer', opacity: idx === 0 ? 0.3 : 1 }}
                >
                  <ArrowUp size={14} />
                </button>
                <button
                  type="button"
                  disabled={idx === fields.length - 1}
                  onClick={() => moveField(idx, 'down')}
                  style={{ padding: '4px 8px', border: '1px solid #e2e8f0', background: '#fff', borderRadius: '4px', cursor: idx === fields.length - 1 ? 'not-allowed' : 'pointer', opacity: idx === fields.length - 1 ? 0.3 : 1 }}
                >
                  <ArrowDown size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => removeField(idx)}
                  style={{ padding: '4px 8px', border: '1px solid #fecaca', background: '#fff1f2', color: '#b91c1c', borderRadius: '4px', cursor: 'pointer' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                  Soru / Alan Etiketi
                </label>
                <input
                  style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #cbd8e0', borderRadius: '4px' }}
                  value={f.label}
                  onChange={(e) => updateField(idx, { label: e.target.value })}
                  placeholder="Örn: Kasa iç ölçüleri"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                  Cevap Tipi
                </label>
                <select
                  style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #cbd8e0', borderRadius: '4px', background: '#fff' }}
                  value={f.kind}
                  onChange={(e) => updateField(idx, { kind: e.target.value as 'text' | 'number' })}
                >
                  <option value="text">Metin / Açıklama</option>
                  <option value="number">Sayısal Değer</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                  Birim (Opsiyonel)
                </label>
                <input
                  style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #cbd8e0', borderRadius: '4px' }}
                  value={f.unit ?? ''}
                  onChange={(e) => updateField(idx, { unit: e.target.value || undefined })}
                  placeholder="mm, kg, adet…"
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                İpucu Metni (Placeholder)
              </label>
              <input
                style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #cbd8e0', borderRadius: '4px' }}
                value={f.hint ?? ''}
                onChange={(e) => updateField(idx, { hint: e.target.value || undefined })}
                placeholder="Örn: Örneğin 1200 x 800 mm veya standart Euro palet ölçüsü"
              />
            </div>
          </div>
        ))}
      </div>

      {/* WHATSAPP CANLI MESAJ ÖNİZLEMESİ */}
      <div style={{ background: '#f8fafc', border: '1px solid #cbd8e0', borderRadius: '6px', padding: '16px' }}>
        <h4 style={{ margin: '0 0 8px', fontSize: '13px', color: '#102b3d' }}>
          📱 WhatsApp Mesaj Taslağı Canlı Önizlemesi
        </h4>
        <pre style={{ margin: 0, padding: '12px', background: '#1e293b', color: '#e2e8f0', borderRadius: '4px', fontSize: '12px', whiteSpace: 'pre-wrap', lineHeight: 1.6, fontFamily: 'monospace' }}>
{`Merhaba ofirma, ${product.title.toLocaleLowerCase('tr-TR')} için teklif almak istiyorum.
Ad / Firma: Örnek Sanayi Ltd.
Talep edilen ürün adedi: 5
${fields.map((f) => `${f.label}: [Müşterinin Girdiği Değer]${f.unit ? ' ' + f.unit : ''}`).join('\n')}
Ek bilgiler: Talaşlı imalat hattında kullanılacak.
Numune: Ürünü göndereceğim numuneye göre üretmenizi istiyorum.`}
        </pre>
      </div>
    </div>
  );
}

/* =========================================================================
   4. MODELLER & DÜZEN SEÇENEKLERİ (VARYASYONLAR) SEKMESİ
   ========================================================================= */
function ProductOptionsTab({ product, onChange }: { product: EditableProduct; onChange: (patch: Partial<EditableProduct>) => void }) {
  const options = (product.options && product.options.length > 0)
    ? product.options
    : getDefaultProductOptions(product.id);
  const [uploadingIdx, setUploadingIdx] = useState<number | null>(null);
  const [uploadError, setUploadError] = useState<string>('');

  function addOption() {
    const nextIdx = options.length + 1;
    const newOpt: ProductOptionItem = {
      title: `Model / Seçenek ${nextIdx}`,
      subtitle: 'ÖZEL İMALAT',
      desc: 'Bu düzen seçeneğinin atölye veya fabrika içindeki kullanım amacı ve teknik özellikleri.',
      isCustomRequest: true,
    };
    onChange({ options: [...options, newOpt] });
  }

  function updateOption(index: number, patch: Partial<ProductOptionItem>) {
    const next = options.map((opt, i) => (i === index ? { ...opt, ...patch } : opt));
    onChange({ options: next });
  }

  function removeOption(index: number) {
    if (!window.confirm(`“${options[index]?.title || 'Bu modeli'}” silmek istediğinize emin misiniz?`)) return;
    const next = [...options];
    next.splice(index, 1);
    onChange({ options: next });
  }

  function moveOption(index: number, direction: 'up' | 'down') {
    const target = direction === 'up' ? index - 1 : index + 1;
    if (target < 0 || target >= options.length) return;
    const next = [...options];
    const [moved] = next.splice(index, 1);
    next.splice(target, 0, moved);
    onChange({ options: next });
  }

  function restoreDefaults() {
    if (!window.confirm(`“${product.title}” için tüm modelleri sistemin varsayılan teknik modellerine ve MISUMI referans görsellerine döndürmek istediğinize emin misiniz? Yapılan özel düzen değişiklikleri sıfırlanacaktır.`)) return;
    onChange({ options: getDefaultProductOptions(product.id) });
  }

  async function handleOptionImageUpload(index: number, file: File) {
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Görsel en fazla 5 MB olabilir.');
      return;
    }
    setUploadingIdx(index);
    setUploadError('');
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch('/api/yonetim/upload', { method: 'POST', body: form });
      const data = (await res.json()) as { src?: string; error?: string };
      if (!res.ok || !data.src) throw new Error(data.error || 'Görsel yüklenemedi.');
      updateOption(index, {
        image: { src: data.src, alt: options[index]?.title || `${product.title} modeli` },
      });
    } catch (e) {
      setUploadError(e instanceof Error ? e.message : 'Görsel yükleme başarısız.');
    } finally {
      setUploadingIdx(null);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* ÜST BAŞLIK & BUTONLAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h3 style={{ fontSize: '16px', margin: 0, color: '#102b3d' }}>
            Düzen Seçenekleri / Alt Modeller ({options.length} Model)
          </h3>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b', maxWidth: '650px', lineHeight: 1.5 }}>
            Ürün detay sayfasındaki “DÜZEN SEÇENEKLERİ” bölümünde müşterinin ihtiyacına uygun yapıyı seçmesini sağlayan teknik model kartlarıdır. Başlık, açıklama, rozet ve görsel bilgilerini buradan düzenleyebilirsiniz.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={restoreDefaults}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff', color: '#475569', border: '1px solid #cbd8e0', padding: '7px 14px', borderRadius: '4px', fontSize: '13px', fontWeight: 500, cursor: 'pointer' }}
            title="Sistemin başlangıçtaki katalog modellerine ve görsellerine döner"
          >
            <RotateCcw size={15} /> Varsayılan Modelleri Geri Yükle
          </button>
          <button
            type="button"
            onClick={addOption}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#d9532c', color: '#fff', border: 0, padding: '7px 14px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
          >
            <Plus size={16} /> Yeni Model Ekle
          </button>
        </div>
      </div>

      {uploadError && (
        <div style={{ padding: '10px 14px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '4px', color: '#b91c1c', fontSize: '13px' }}>
          {uploadError}
        </div>
      )}

      {options.length === 0 ? (
        <div style={{ padding: '36px 20px', background: '#f8fafc', border: '1px dashed #cbd8e0', borderRadius: '6px', textAlign: 'center' }}>
          <Layers size={32} style={{ color: '#94a3b8', margin: '0 auto 10px' }} />
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#334155', margin: '0 0 4px' }}>
            Henüz Tanımlanmış Model Bulunmuyor
          </p>
          <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px' }}>
            Yeni bir alt model ekleyebilir veya sistemdeki varsayılan teknik modelleri tek tıkla yükleyebilirsiniz.
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={restoreDefaults}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: '#fff', border: '1px solid #cbd8e0', borderRadius: '4px', fontSize: '13px', cursor: 'pointer' }}
            >
              <RotateCcw size={15} /> Varsayılan Modelleri Yükle
            </button>
            <button
              type="button"
              onClick={addOption}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: '#d9532c', color: '#fff', border: 0, borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
            >
              <Plus size={16} /> Sıfırdan Yeni Model Ekle
            </button>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {options.map((opt, idx) => {
            const hasImage = Boolean(opt.image?.src);
            const isUploading = uploadingIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  border: '1px solid #cbd8e0',
                  borderRadius: '6px',
                  padding: '16px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                }}
              >
                {/* KART BAŞLIĞI & EYLEMLER */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#102b3d' }}>
                      #{idx + 1} {opt.title}
                    </span>
                    {opt.isCustomRequest ? (
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#d9532c', background: '#fff3ed', padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.04em' }}>
                        ÖZEL ÜRETİM TALEBİ
                      </span>
                    ) : opt.subtitle ? (
                      <span style={{ fontSize: '11px', fontWeight: 600, color: '#475569', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>
                        {opt.subtitle}
                      </span>
                    ) : null}
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => moveOption(idx, 'up')}
                      title="Yukarı Taşı"
                      style={{ padding: '5px 8px', border: '1px solid #e2e8f0', background: '#fff', borderRadius: '4px', cursor: idx === 0 ? 'not-allowed' : 'pointer', opacity: idx === 0 ? 0.3 : 1 }}
                    >
                      <ArrowUp size={14} />
                    </button>
                    <button
                      type="button"
                      disabled={idx === options.length - 1}
                      onClick={() => moveOption(idx, 'down')}
                      title="Aşağı Taşı"
                      style={{ padding: '5px 8px', border: '1px solid #e2e8f0', background: '#fff', borderRadius: '4px', cursor: idx === options.length - 1 ? 'not-allowed' : 'pointer', opacity: idx === options.length - 1 ? 0.3 : 1 }}
                    >
                      <ArrowDown size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeOption(idx)}
                      title="Bu Modeli Sil"
                      style={{ padding: '5px 8px', border: '1px solid #fecaca', background: '#fff1f2', color: '#b91c1c', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                {/* KART GÖVDESİ: GÖRSEL KONTROLLERİ VE FORM ALANLARI */}
                <div style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: '18px', alignItems: 'start' }}>
                  {/* SOL: GÖRSEL ÖNİZLEME VE YÜKLEME */}
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Model Görseli
                    </label>
                    <div
                      style={{
                        width: '170px',
                        height: '125px',
                        background: '#f8fafc',
                        border: '1px solid #cbd8e0',
                        borderRadius: '4px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      {hasImage ? (
                        <img
                          src={opt.image?.src}
                          alt={opt.image?.alt || opt.title}
                          style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#fff' }}
                        />
                      ) : (
                        <div style={{ textAlign: 'center', padding: '10px' }}>
                          <ImageIcon size={26} style={{ color: '#94a3b8', margin: '0 auto 4px' }} />
                          <span style={{ fontSize: '11px', color: '#94a3b8', display: 'block' }}>Görselsiz Model</span>
                        </div>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '6px' }}>
                      <label
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          width: '100%',
                          padding: '5px 8px',
                          fontSize: '11px',
                          fontWeight: 600,
                          background: '#fff',
                          border: '1px solid #cbd8e0',
                          borderRadius: '4px',
                          cursor: isUploading ? 'not-allowed' : 'pointer',
                          color: '#1e293b',
                        }}
                      >
                        <UploadCloud size={13} style={{ color: '#d9532c' }} />
                        {isUploading ? 'Yükleniyor…' : 'Fotoğraf Yükle'}
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/webp"
                          disabled={isUploading}
                          style={{ display: 'none' }}
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f) void handleOptionImageUpload(idx, f);
                            e.target.value = '';
                          }}
                        />
                      </label>
                      {hasImage && (
                        <button
                          type="button"
                          onClick={() => updateOption(idx, { image: undefined })}
                          style={{ width: '100%', padding: '4px 6px', fontSize: '11px', color: '#94a3b8', background: 'transparent', border: 0, cursor: 'pointer', textAlign: 'center' }}
                        >
                          Görseli Kaldır
                        </button>
                      )}
                    </div>
                  </div>

                  {/* SAĞ: METİN ALANLARI */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                          Model Başlığı
                        </label>
                        <input
                          style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #cbd8e0', borderRadius: '4px' }}
                          value={opt.title}
                          onChange={(e) => updateOption(idx, { title: e.target.value })}
                          placeholder="Örn: Açık üstlü kasa"
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                          Rozet / Vurgu Metni
                        </label>
                        <input
                          style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #cbd8e0', borderRadius: '4px' }}
                          value={opt.subtitle ?? ''}
                          onChange={(e) => updateOption(idx, { subtitle: e.target.value })}
                          placeholder="Örn: Sık parça alma ve yükleme"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                          Görsel Dosya Yolu (URL)
                        </label>
                        <input
                          style={{ width: '100%', padding: '8px 10px', fontSize: '12px', border: '1px solid #cbd8e0', borderRadius: '4px', fontFamily: 'monospace' }}
                          value={opt.image?.src ?? ''}
                          onChange={(e) =>
                            updateOption(idx, {
                              image: e.target.value ? { src: e.target.value, alt: opt.image?.alt || opt.title } : undefined,
                            })
                          }
                          placeholder="/images/factory-options/misumi-..."
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                          Görsel Alt Metni (Açıklama)
                        </label>
                        <input
                          style={{ width: '100%', padding: '8px 10px', fontSize: '12px', border: '1px solid #cbd8e0', borderRadius: '4px' }}
                          value={opt.image?.alt ?? ''}
                          onChange={(e) =>
                            updateOption(idx, {
                              image: opt.image?.src ? { src: opt.image.src, alt: e.target.value } : undefined,
                            })
                          }
                          placeholder="MISUMI kataloğundan örnek..."
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                        Model Açıklaması
                      </label>
                      <textarea
                        rows={2}
                        style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #cbd8e0', borderRadius: '4px', resize: 'vertical', lineHeight: 1.5 }}
                        value={opt.desc}
                        onChange={(e) => updateOption(idx, { desc: e.target.value })}
                        placeholder="Bu modelin kullanım amacı, koruma özellikleri ve atölye içi avantajları..."
                      />
                    </div>

                    <div>
                      <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#334155', cursor: 'pointer', userSelect: 'none' }}>
                        <input
                          type="checkbox"
                          checked={opt.isCustomRequest === true}
                          onChange={(e) => updateOption(idx, { isCustomRequest: e.target.checked })}
                        />
                        <span>Bu model kartında kırmızı/turuncu <strong>“ÖZEL ÜRETİM TALEBİ”</strong> rozeti göster</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   5. TEKNİK BİLGİLER / KONTROLLER SEKMESİ
   ========================================================================= */
function ProductChecksTab({ product, onChange }: { product: EditableProduct; onChange: (patch: Partial<EditableProduct>) => void }) {
  const checks = product.checks;

  function addCheck() {
    const nextIdx = checks.length + 1;
    const newCheck = {
      title: `Teknik Kriter 0${nextIdx}`,
      text: 'Müşterinin sipariş veya teklif öncesi paylaşması gereken teknik ayrıntı.',
    };
    onChange({ checks: [...checks, newCheck] });
  }

  function updateCheck(index: number, patch: Partial<(typeof checks)[number]>) {
    const next = checks.map((c, i) => (i === index ? { ...c, ...patch } : c));
    onChange({ checks: next });
  }

  function removeCheck(index: number) {
    if (!window.confirm('Bu teknik kriteri silmek istediğinize emin misiniz?')) return;
    const next = [...checks];
    next.splice(index, 1);
    onChange({ checks: next });
  }

  function moveCheck(index: number, direction: 'up' | 'down') {
    const target = direction === 'up' ? index - 1 : index + 1;
    if (target < 0 || target >= checks.length) return;
    const next = [...checks];
    const [moved] = next.splice(index, 1);
    next.splice(target, 0, moved);
    onChange({ checks: next });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontSize: '15px', margin: 0, color: '#102b3d' }}>
            Teknik Kontrol Maddeleri ({checks.length} Madde)
          </h3>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>
            Sayfada “TEKNİK BİLGİLER • İhtiyacınıza göre değerlendirelim” başlığı altında numaralı olarak sıralanır.
          </p>
        </div>
        <button
          type="button"
          onClick={addCheck}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#d9532c', color: '#fff', border: 0, padding: '7px 14px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
        >
          <Plus size={16} /> Yeni Madde Ekle
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {checks.map((chk, idx) => (
          <div
            key={idx}
            style={{
              background: '#fff',
              border: '1px solid #cbd8e0',
              borderRadius: '6px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#d9532c' }}>
                Madde 0{idx + 1}
              </span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  type="button"
                  disabled={idx === 0}
                  onClick={() => moveCheck(idx, 'up')}
                  style={{ padding: '4px 8px', border: '1px solid #e2e8f0', background: '#fff', borderRadius: '4px', cursor: idx === 0 ? 'not-allowed' : 'pointer', opacity: idx === 0 ? 0.3 : 1 }}
                >
                  <ArrowUp size={14} />
                </button>
                <button
                  type="button"
                  disabled={idx === checks.length - 1}
                  onClick={() => moveCheck(idx, 'down')}
                  style={{ padding: '4px 8px', border: '1px solid #e2e8f0', background: '#fff', borderRadius: '4px', cursor: idx === checks.length - 1 ? 'not-allowed' : 'pointer', opacity: idx === checks.length - 1 ? 0.3 : 1 }}
                >
                  <ArrowDown size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => removeCheck(idx)}
                  style={{ padding: '4px 8px', border: '1px solid #fecaca', background: '#fff1f2', color: '#b91c1c', borderRadius: '4px', cursor: 'pointer' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>

            <Field label="Madde Başlığı">
              <input
                value={chk.title}
                onChange={(e) => updateCheck(idx, { title: e.target.value })}
                placeholder="Örn: İç Ölçü ve Parça Ebadı"
              />
            </Field>

            <Field label="Açıklama" wide>
              <textarea
                rows={2}
                value={chk.text}
                onChange={(e) => updateCheck(idx, { text: e.target.value })}
                placeholder="Örn: Taşınacak en büyük parçayı ve bir seferde taşınacak adedi belirtin..."
              />
            </Field>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================================
   6. ÖRNEK ÇALIŞMALAR (CASE STUDIES) FORMU
   ========================================================================= */
function CaseStudyForm({
  caseStudy,
  onChange,
  onDelete,
}: {
  caseStudy: EditableCaseStudy;
  onChange: (patch: Partial<EditableCaseStudy>) => void;
  onDelete: () => void;
}) {
  const [busy, setBusy] = useState(false);

  async function handleCoverUpload(file: File) {
    if (file.size > 5 * 1024 * 1024) return;
    setBusy(true);
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch('/api/yonetim/upload', { method: 'POST', body: form });
      const data = (await res.json()) as { src?: string };
      if (data.src) {
        onChange({ coverImage: { src: data.src, alt: caseStudy.title } });
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="management-form">
      <div className="management-form-head">
        <div>
          <p className="overline" style={{ color: '#d9532c' }}>ÖRNEK ÇALIŞMA DÜZENLE</p>
          <h1 style={{ fontSize: '26px', margin: '4px 0 6px', color: '#102b3d' }}>{caseStudy.title}</h1>
          <p style={{ margin: 0, color: '#687d8a', fontSize: '13px' }}>
            URL: <code style={{ background: '#e2e8f0', padding: '2px 6px', borderRadius: '3px' }}>/ornek-calismalar/{caseStudy.id}</code>
          </p>
        </div>
        <label className="management-visibility" style={{ cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={caseStudy.status !== 'inactive'}
            onChange={(e) => onChange({ status: e.target.checked ? 'active' : 'inactive' })}
          />
          <span>{caseStudy.status === 'inactive' ? 'Sitede Gizli' : 'Sitede Yayında'}</span>
        </label>
      </div>

      <div className="management-fields">
        <Field label="Çalışma Başlığı" wide>
          <input
            value={caseStudy.title}
            onChange={(e) => onChange({ title: e.target.value })}
            placeholder="Örn: Sebze doğrama makinesi bıçak yenileme"
          />
        </Field>

        <Field label="Kategori">
          <input
            value={caseStudy.category}
            onChange={(e) => onChange({ category: e.target.value })}
            placeholder="Örn: Makine Restorasyonu / Numuneden İmalat"
          />
        </Field>

        <Field label="Sayfa Kodu (Slug)" hint="Değiştirilmemesi önerilir">
          <input value={caseStudy.id} readOnly />
        </Field>

        <Field label="Kapak Görseli URL'si" wide>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              style={{ flex: 1 }}
              value={caseStudy.coverImage?.src ?? ''}
              onChange={(e) =>
                onChange({
                  coverImage: e.target.value ? { src: e.target.value, alt: caseStudy.title } : undefined,
                })
              }
              placeholder="/images/calisma-sebze-dograma/bicak-seti.jpg"
            />
            <label style={{ padding: '9px 14px', background: '#475569', color: '#fff', borderRadius: '4px', fontSize: '12px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              {busy ? 'Yükleniyor…' : 'Görsel Yükle'}
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void handleCoverUpload(f);
                }}
              />
            </label>
          </div>
        </Field>

        <Field label="Kısa Özet (Listede ve Başlık Altında Görünen Metin)" wide>
          <textarea
            rows={3}
            value={caseStudy.summary}
            onChange={(e) => onChange({ summary: e.target.value })}
            placeholder="Yapılan işlemin kısa açıklaması..."
          />
        </Field>

        <Field label="Problem / Karşılaşılan İhtiyaç" wide>
          <textarea
            rows={3}
            value={caseStudy.problem ?? ''}
            onChange={(e) => onChange({ problem: e.target.value })}
            placeholder="Müşterinin getirdiği arızalı/aşınmış parça veya tesis içi ihtiyaç..."
          />
        </Field>

        <Field label="Uygulanan Çözüm / Üretim Adımları" wide>
          <textarea
            rows={3}
            value={caseStudy.solution ?? ''}
            onChange={(e) => onChange({ solution: e.target.value })}
            placeholder="Numuneden çizim çıkarıldı, uygun malzeme seçildi ve talaşlı imalatı yapıldı..."
          />
        </Field>

        <Field label="Elde Edilen Sonuç" wide>
          <textarea
            rows={2}
            value={caseStudy.result ?? ''}
            onChange={(e) => onChange({ result: e.target.value })}
            placeholder="Makine yeniden çalışır hale getirildi ve yüksek maliyetten tasarruf sağlandı..."
          />
        </Field>
      </div>

      <div className="management-danger" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
        <button type="button" onClick={onDelete}>
          <Trash2 size={17} /> Bu Örnek Çalışmayı Sil
        </button>
      </div>
    </div>
  );
}

/* =========================================================================
   7. FİRMA & İLETİŞİM AYARLARI FORMU
   ========================================================================= */
function BusinessSettingsForm({
  business,
  onChange,
}: {
  business: EditableBusiness;
  onChange: (b: EditableBusiness) => void;
}) {
  const set = (key: keyof EditableBusiness, value: string) => onChange({ ...business, [key]: value });

  return (
    <div className="management-form">
      <div className="management-form-head">
        <div>
          <p className="overline" style={{ color: '#d9532c' }}>SİTE VE İLETİŞİM BİLGİLERİ</p>
          <h1 style={{ fontSize: '26px', margin: '4px 0 6px', color: '#102b3d' }}>Marka & İletişim Ayarları</h1>
          <p style={{ margin: 0, color: '#687d8a', fontSize: '13px' }}>
            Buradaki bilgiler site genelindeki butonlarda, WhatsApp bağlantılarında ve alt bilgi (footer) alanında kullanılır.
          </p>
        </div>
      </div>

      <div className="management-fields">
        <Field label="Firma / Marka Adı">
          <input value={business.name} onChange={(e) => set('name', e.target.value)} />
        </Field>

        <Field label="İletişim E-Posta Adresi">
          <input value={business.email ?? 'info@ofirma.com'} onChange={(e) => set('email', e.target.value)} />
        </Field>

        <Field label="Telefonda Görünen Numara" hint="Ziyaretçinin sitede okuyacağı format">
          <input value={business.phoneDisplay} onChange={(e) => set('phoneDisplay', e.target.value)} />
        </Field>

        <Field label="Telefon Bağlantısı" hint="Tıklandığında aranacak doğrudan numara (tel: formatı)">
          <input value={business.phone} onChange={(e) => set('phone', e.target.value)} />
        </Field>

        <Field label="WhatsApp Numarası" hint="Ülke koduyla boşluksuz yazın (Örn: 905321234567)">
          <input value={business.whatsapp} onChange={(e) => set('whatsapp', e.target.value)} />
        </Field>

        <Field label="Çalışma Saatleri">
          <input value={business.workingHours ?? 'Pazartesi – Cumartesi 08:30 – 18:30'} onChange={(e) => set('workingHours', e.target.value)} />
        </Field>

        <Field label="Üst Menü Buton Metni">
          <input value={business.headerCtaText ?? 'Teklif Talebi'} onChange={(e) => set('headerCtaText', e.target.value)} />
        </Field>

        <Field label="Fiziksel Atölye ve İletişim Adresi" wide hint="100. Yıl Sanayi Sitesi gerçek adresimiz">
          <textarea rows={3} value={business.address} onChange={(e) => set('address', e.target.value)} />
        </Field>
      </div>
    </div>
  );
}

function Field({ label, hint, wide, children }: { label: string; hint?: string; wide?: boolean; children: React.ReactNode }) {
  return (
    <label className={wide ? 'management-field wide' : 'management-field'}>
      <span>{label}</span>
      {children}
      {hint && <small>{hint}</small>}
    </label>
  );
}
