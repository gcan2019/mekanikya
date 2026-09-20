import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { catalogItems } from '@/lib/presentation';
import { business } from '@/lib/catalog';
import ProductCards from '@/components/product-cards';
export const metadata:Metadata={title:'Fabrika İçi Taşıma ve Malzeme Yönetimi | ofirma',description:'Talaş ve hurda arabaları, metal taşıma kasaları, profil, boru, sac ve levha taşıma çözümleri. Numune veya fotoğrafla özel ölçü teklif alın.',alternates:{canonical:business.siteUrl+'/fabrika-ici-tasima'}};
export default function Factory(){return <main id="main">
<section className="page-banner"><div className="wrap"><p className="overline">OFİRMA / FABRİKA İÇİ TAŞIMA</p><h1>Malzemeye göre taşıma,<br/>üretime göre düzen.</h1><p>Üretim artığından metal parçaya, uzun profilden sac ve panele kadar. Taşıdığınız malzemeyi ve çalışma alanını anlatın; uygun düzeni birlikte seçelim.</p></div></section>
<section className="wrap company-products"><div className="company-section-heading"><div><p className="overline">ÜRÜN SEÇENEKLERİ</p><h2>Ne taşımak istiyorsunuz?</h2></div></div><ProductCards items={catalogItems.filter(p=>p.group==='fabrika-tasima')}/></section>
<section className="company-about"><div className="wrap"><p className="overline">TAŞIMA DÜZENLERİ</p><h2>Günlük işinize uygun seçenekler.</h2><div className="factory-options">{[
['Metal parçalar','Açık, ön erişimli, istiflenebilir veya tekerlekli metal kasa düzenleri. Bölme, kapak ve forklift cebi ihtiyaca göre değerlendirilir.','metal-tasima-kasasi'],
['Uzun malzemeler','Modüler bölmeler, açık platform ve iki yandan tutamak seçenekleri. Profilin boyu ve yükleme yönü destek düzenini belirler.','profil-tasima-arabasi'],
['Üretim artıkları','Tezgâh altı toplama, devirmeli boşaltma ve sıvı tahliyesi seçenekleri; talaş türüne ve yerleşime göre değerlendirilir.','talas-hurda-arabasi'],
['Sac, levha ve paneller','Dikey bölmeler veya yüzey korumalı destekler. Malzeme boyutu ve üretim istasyonuna yaklaşma yönüne göre düzenlenir.','sac-levha-tasima-arabasi']
].map(([title,text,id])=><article key={id}><h3>{title}</h3><p>{text}</p><a className="text-link" href={'/'+id}>Seçenekleri incele <ArrowUpRight size={18}/></a></article>)}</div></div></section>
<section className="wrap profile-cart-guide factory-guide"><p className="overline">TAŞIMA VE DEPOLAMAYI BİRLİKTE PLANLAYIN</p><h2>Malzeme beklerken de düzenli kalsın.</h2><div className="profile-cart-factors">{[
['Uzun malzeme rafları','Boru ve profiller için kollu raf veya istiflenebilir taşıyıcı düzeni değerlendirilebilir. Malzeme boyu, destek aralığı, kat başına yük ve yükleme ekipmanı birlikte belirlenir.'],
['Kalıp ve ağır parçalar','Çıkarılabilir tablalı raf ve taşıma arabası, parçanın depodan çalışma noktasına aktarımı için birlikte ele alınır. Raf yerleşimi ve zemine bağlantı projeye göre değerlendirilir.'],
['Tekerlek ve zemin','Düz beton, eşik, yağlı veya ıslak alan bilgisini paylaşın. Tekerlek çapı, malzemesi, yönlendirme ve fren ihtiyacı çalışma koşullarına göre seçilir.'],
['Ölçü ve toplam yük','Taşınan malzemenin yanı sıra kasa veya palet ağırlığını da düşünün. Yükseklik, ağırlık dağılımı ve en dar geçiş ölçüsü tasarım için önemlidir.']
].map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
<section className="service-cta"><div className="wrap"><h2>Fotoğraf veya numuneyle başlayabiliriz.</h2><p>Teknik çizim şart değil. Mevcut ekipmanın, taşıdığınız parçanın ve çalışma alanının fotoğrafını paylaşın. Merzifon–Amasya merkezli; Samsun, Çorum ve Tokat çevresindeki taleplerinizi birlikte değerlendirelim.</p><a className="cta light" href={'https://wa.me/'+business.whatsapp+'?text='+encodeURIComponent('Merhaba ofirma, fabrika içi taşıma ve depolama ihtiyacım için bilgi almak istiyorum.')} target="_blank" rel="noopener noreferrer">WhatsApp ile ihtiyacınızı paylaşın <ArrowUpRight size={18}/></a></div></section>
</main>;}
