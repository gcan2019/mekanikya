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
- `tests/quote.test.mjs`: Teklif mesajı ve giriş doğrulaması; `node --test tests/quote.test.mjs` ile çalışır (Node 24).

Form verisi sunucuda saklanmaz. WhatsApp bağlantısı hazırlanır; kullanıcı gönderir. Fotoğraf ve teknik resim WhatsApp'ta eklenir.

Teklif formu mil ucu, mevcut rulo tipi, taşınan ürünün toplam ağırlığı ve çalışma ortamını isteğe bağlı toplar. Mesaj sayfada görülebilir ve kopyalanabilir; açılır pencere engellenirse kalıcı WhatsApp bağlantısı kullanılabilir. Form değişince önceki taslak kaldırılır.

Yeni ürün araştırmaları üst çalışma klasöründeki `veriler/firsatlar.json` dosyasında tutulur. Doğrulanmış ürünler için katalog ve sayfalar genişletilir. Araştırma adayları satışta olan ürünler olarak gösterilmez.

WebMCP `read_quote_draft` destekleyen tarayıcılarda mevcut formu okur; mesaj göndermez. Bu ortamda destekleyen doğrulama bağlamı bulunmadığından WebMCP çalışma zamanı doğrulaması yapılmadı.
