import { ArrowUpRight } from 'lucide-react';
import { factoryOptionImages } from '@/lib/factory-option-images';

const guides: Record<string, {intro:string; models:[string,string,string][]; criteria:[string,string][]}> = {
  'metal-tasima-kasasi': {
    intro:'Parçanın korunması, kasaya erişim ve işletme içindeki taşıma biçimine göre düzen seçin.',
    models:[
      ['Açık üstlü kasa','Sık parça alma ve yükleme','Üstten erişilen parçalar için açık gövde. İç ölçü, parça yerleşimi ve kaldırma ekipmanının yaklaşımı birlikte belirlenir.'],
      ['Bölmeli kasa','Parçaları ayrı tutma','Farklı parçaları ayrı gözlerde düzenlemek için bölmeler. Hassas yüzeyler için temas koruması ayrıca değerlendirilebilir.'],
      ['Kapaklı kasa','İçeriği örtme','Depolama ve sevkiyatta üst kapak ihtiyacı için. Kapak açılma yönü, kilit ve yükleme alanı talebe göre ele alınır.'],
      ['Ön erişimli kasa','Yandan parça alma','Ön panel veya açılır kapakla erişim talebi için. Açıklığın ölçüsü ve kapak düzeni parçanın alınma biçimine göre planlanır.'],
      ['İstif düzenli kasa','Depo alanını kullanma','Kasaları üst üste yerleştirme ihtiyacı için. Dolu kasa ağırlığı, kat sayısı ve taban bağlantıları ayrıca değerlendirilir.'],
      ['Tekerlekli kasa','İstasyonlar arası aktarım','Elle hareket ettirilecek kasa için tutamak ve tekerlek düzeni. Toplam yük, zemin ve park etme ihtiyacı birlikte ele alınır.'],
    ],
    criteria:[
      ['İç ölçü ve parça','En büyük parçayı, bir kasadaki adedi ve korunması gereken yüzeyleri belirtin. Mevcut kasa veya parça fotoğrafı başlangıç için yeterlidir.'],
      ['Taşıma ekipmanı','Forklift, transpalet veya elle taşıma ihtiyacınızı paylaşın. Çatal girişi ve taban açıklıkları kullanılan ekipmana göre belirlenir.'],
      ['Yük ve istif','Kasanın içindeki toplam yük ile istif kat sayısını ayrı ayrı bildirin. Tekerlekli kullanımın istiflemeye uygunluğu ayrıca incelenir.'],
      ['Ortam ve erişim','İç/dış ortamı, yağ veya nem temasını ve parçaların nasıl alındığını anlatın. Gövde, kapak ve yüzey uygulaması buna göre görüşülür.'],
    ],
  },
  'talas-hurda-arabasi': {
    intro:'Toplanan malzeme kadar makinenin altındaki alan ve boşaltma yöntemi de araba düzenini belirler.',
    models:[
      ['Açık hazneli araba','Genel talaş ve hurda toplama','Atölye içindeki toplama noktaları için açık hazne. Kenar yüksekliği, tutamak ve tekerlekler kullanım alanına göre belirlenir.'],
      ['Alçak profilli araba','Makine altına yerleşim','Çıkış ağzının altında sınırlı yükseklik bulunan alanlar için. Makine altındaki açıklık ve arabayı çekmek için gereken mesafe birlikte incelenir.'],
      ['Süzme bölmeli araba','Sıvılı talaş toplama','Talaşla birlikte gelen sıvı için süzme bölmesi ve ayrı toplama alanı talebi. Sıvı türü, filtreleme ve tahliye düzeni ayrıca değerlendirilir.'],
      ['Devirme düzenli araba','Boşaltma kolaylığı','Hazneyi eğerek boşaltma ihtiyacı için. Devirme yöntemi, kilitleme ve yük dengesi projeye göre belirlenir.'],
      ['Bölmeli toplama arabası','Malzemeleri ayrı biriktirme','Farklı metal veya hurda türlerini ayrı toplamak için bölmeler. Gözlerin hacmi ve ayrı boşaltma ihtiyacı birlikte ele alınır.'],
    ],
    criteria:[
      ['Talaşın yapısı','Kısa, uzun, kıvrımlı veya keskin parçalı malzemeyi ve varsa sıvı temasını belirtin. Fotoğrafla başlayabilirsiniz.'],
      ['Hacim ve ağırlık','Toplama hacmi ile taşınacak ağırlık farklı bilgilerdir. Bildiğiniz değerleri ve yaklaşık boşaltma sıklığını paylaşın.'],
      ['Makine altı ölçüsü','Kullanılabilir en, boy ve yüksekliğin yanı sıra talaşın çıkış noktasını ve arabayı çıkaracağınız alanı gösterin.'],
      ['Boşaltma ve tahliye','Elle, devirerek veya başka ekipmanla boşaltma biçimini belirtin. Sıvı tahliyesi ve sızdırmazlık ihtiyacı ayrıca netleştirilir.'],
    ],
  },
};

export function hasFactoryGuide(id:string){return Boolean(guides[id]);}

export default function FactoryProductOptions({id}:{id:string}){
  const guide=guides[id];
  if(!guide) return null;
  return <>
    <section className="section wrap profile-cart-options" id="modeller">
      <div className="section-head"><p className="overline">DÜZEN SEÇENEKLERİ</p><h2>Kullanımınıza uygun yapıyı seçelim.</h2><p>{guide.intro}</p></div>
      <div className="profile-cart-grid">{guide.models.map(([title,tag,text])=>{
        const image=factoryOptionImages[title];
        return <article className="profile-cart-card" key={title}>
          {image && <figure className="profile-cart-image factory-option-photo"><img src={image.src} alt={image.alt} width={600} height={450} loading="lazy"/><figcaption>Örnek ürün düzeni</figcaption></figure>}
          <div className="profile-cart-copy"><p className="overline">{tag}</p><h3>{title}</h3><p>{text}</p><a className="text-link" href="#teklif">Teklif talebine geç <ArrowUpRight size={17}/></a></div>
        </article>;
      })}</div>
      <p className="small-note">Bu düzenler özel üretim talebinizi tarif etmenize yardımcı olur. Birlikte uygulanabilecek seçenekler, kapasite ve üretim uygunluğu teknik değerlendirmeyle netleşir.</p>
    </section>
    <section className="wrap profile-cart-guide" id="secim"><div className="section-head"><p className="overline">SEÇİM REHBERİ</p><h2>Fotoğraf veya numuneyle başlayabiliriz.</h2><p>Teknik çizim zorunlu değildir. Bildiğiniz bilgileri paylaşın; eksik ayrıntıları birlikte belirleyelim.</p></div><div className="profile-cart-factors">{guide.criteria.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><a className="text-link" href="/fabrika-ici-tasima">Fabrika içi taşıma ürünlerini incele <ArrowUpRight size={18}/></a></section>
  </>;
}
