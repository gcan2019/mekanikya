# ofirma

Özel ölçü konveyör rulosu için ürün sayfası, ölçü rehberi ve WhatsApp teklif formu.

## Geliştirme

`npm install`, `npm run dev`, `npm run build`.

- `lib/catalog.ts`: Marka, iletişim ve ürün verileri.
- `app/page.tsx`: Genişletilebilir ürün kataloğu.
- `app/konveyor-rulosu/page.tsx`: Bağımsız ürün sayfası, ölçü rehberi ve sayfaya özel arama başlığı.
- `app/quote-form.tsx`: WhatsApp akışı.
- `lib/quote.ts`: Teklif mesajı ve doğrulama.
- `app/globals.css`: Mobil ve masaüstü tasarım.
- `lib/additional-products.ts`: Altı taşıma/depolama ürünü, kaynakları ve ürüne özel soru tanımları.
- `app/[product]/page.tsx`: Veriyle oluşturulan ürün sayfaları ve sayfaya özel başlıklar.
- `components/product-inquiry.tsx`: Ürüne özgü WhatsApp formu.
- `lib/product-inquiry.ts`: Ürün taleplerinin doğrulanması ve mesaj üretimi.
- `tests/quote.test.mjs`: Teklif mesajı ve giriş doğrulaması; `node --test tests/quote.test.mjs` ile çalışır (Node 24).

Form verisi sunucuda saklanmaz. WhatsApp bağlantısı hazırlanır; kullanıcı gönderir. Fotoğraf ve teknik resim WhatsApp'ta eklenir.

Teklif formu mil ucu, mevcut rulo tipi, taşınan ürünün toplam ağırlığı ve çalışma ortamını isteğe bağlı toplar. Mesaj sayfada görülebilir ve kopyalanabilir; açılır pencere engellenirse kalıcı WhatsApp bağlantısı kullanılabilir. Form değişince önceki taslak kaldırılır.

Yeni ürün araştırmaları üst çalışma klasöründeki `veriler/firsatlar.json` dosyasında tutulur. Doğrulanmış ürünler için katalog ve sayfalar genişletilir. Araştırma adayları satışta olan ürünler olarak gösterilmez.

Kullanıcının diğer ürünleri ekleme talebiyle profil arabası, abkant kalıp arabası, sac rafı, tekstil arabası, forklift çatal uzatma ve tüp kafesi için ayrı teklif sayfaları eklendi. Kapasite, stok, sertifika veya teslim süresi uydurulmadı. Yeni ürün sayfası için `additional-products.ts` kaydı eklemek yeterlidir; kaynak ve teknik sorular ürünle birlikte tutulur.

Tüm mesaj testleri: `node --test tests/*.test.mjs`. Yeni formlarda `read_product_inquiry` WebMCP aracı destek varsa mevcut formu okur; gönderim yapmaz. Destekleyen tarayıcı doğrulama bağlamı olmadığı için bu entegrasyon çalışma zamanında doğrulanmadı.

WebMCP `read_quote_draft` destekleyen tarayıcılarda mevcut formu okur; mesaj göndermez. Bu ortamda destekleyen doğrulama bağlamı bulunmadığından WebMCP çalışma zamanı doğrulaması yapılmadı.
