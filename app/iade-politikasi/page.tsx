import type { Metadata } from 'next';
import { getBusinessContent } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'İade ve İptal Politikası | Mekanikya',
  description: 'Mekanikya ürün teslimatı, cayma hakkı, iade koşulları ve değişim prosedürleri.',
};

export default async function IadePolitikasiPage() {
  const business = await getBusinessContent();

  return (
    <main id="main">
      <div className="wrap product-breadcrumb">
        <a href="/">Ana Sayfa</a>
        <span>/</span>
        <span>İade ve İptal Politikası</span>
      </div>

      <section className="wrap" style={{ maxWidth: '840px', margin: '40px auto', lineHeight: '1.7', color: '#1e293b' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '24px', color: '#0f172a' }}>
          İade ve Değişim Politikası
        </h1>
        
        <p style={{ fontSize: '1.05rem', color: '#475569', marginBottom: '28px' }}>
          <strong>Mekanikya</strong> olarak müşteri memnuniyeti ve ürün kalitesi önceliğimizdir. Aşağıda standart ürünlerimiz ve özel imalat siparişleriniz için geçerli iade, değişim ve cayma koşulları yer almaktadır.
        </p>

        <article style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>
              1. Cayma Hakkı ve İade Süresi
            </h2>
            <p>
              Müşterilerimiz, standart (stoklu) ürünler için teslimat tarihinden itibaren <strong>14 gün</strong> içerisinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin cayma hakkını kullanabilir ve iade talebinde bulunabilir.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>
              2. Özel Ölçü ve İsteğe Bağlı İmalat İstisnası
            </h2>
            <p>
              6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği uyarınca; <em>alıcının istekleri veya açıkça kişisel ihtiyaçları doğrultusunda hazırlanan, özel ölçü ve projeye göre imal edilen ürünlerde</em> cayma ve keyfi iade hakkı geçerli değildir. Ancak ürünün teknik resme veya mutabık kalınan ölçülere uymaması ya da kusurlu olması durumunda ücretsiz düzeltme veya değişim güvencesi sağlanır.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>
              3. Hasarlı ve Kusurlu Ürünler
            </h2>
            <p>
              Taşıma / nakliye esnasında hasar görmüş veya üretim hatası bulunan ürünlerde kargo teslim tutanağı ile birlikte tarafımıza bilgi verilmesi halinde ürün derhal <strong>ücretsiz olarak yenisiyle değiştirilir</strong> veya gerekli teknik düzeltme atölyemizde ivedilikle gerçekleştirilir. Bu durumda tüm nakliye masrafları firmamıza aittir.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>
              4. İade Kargo Ücreti
            </h2>
            <p>
              Kusurlu veya hatalı ürünlerin iadesinde kargo/ambar ücreti <strong>Mekanikya</strong> tarafından karşılanır. Kusursuz standart ürünlerin keyfi iadelerinde nakliye ve kargo bedeli alıcıya aittir.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>
              5. İade ve Değişim Başvurusu
            </h2>
            <p>
              İade veya değişim sürecini başlatmak için ürün görselleri veya talep detayınızla birlikte bizimle iletişime geçebilirsiniz:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px' }}>
              <li><strong>Telefon &amp; WhatsApp:</strong> {business.phoneDisplay}</li>
              <li><strong>E-posta:</strong> {business.email || 'info@mekanikya.com'}</li>
              <li><strong>İade / İmalat Adresi:</strong> {business.address}</li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}
