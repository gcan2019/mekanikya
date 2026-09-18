# ofirma ortak çalışma kaydı

## Koordinasyon

- Koordinatör: bu Codex sohbeti.
- Aktif uygulama geliştiricisi: yok; dış ajan uygulaması kullanıcıdan bekleniyor.
- Durum: devre hazır. Henüz dış ajana erişim verilmedi veya görev başlatılmadı.
- Çalışma yöntemi: tek seferde tek yazan ajan. Diğer ajanlar inceleme yapabilir. Bu kayıt otomatik kilit değildir.
- Yayınlama: kullanıcı en sona bıraktı; şu an yalnızca yerel geliştirme.

## İşletme ve amaç

Marka ofirma. Telefon 0530 206 87 14, WhatsApp 905302068714.
Adres: Kümbet Hatun Mahallesi, 100. Yıl Sanayi Sitesi, 5. Blok No: 321/A, 05300 Merzifon / Amasya.
Özel üretim taşıma ve depolama ekipmanları; parça çizimi, onarımı ve makine restorasyonu. Müşteri ölçü bilmese de fotoğraf veya numuneyle talep oluşturabilmeli.

## Mevcut durum

Fabrika içi taşıma ailesinde metal kasa, talaş/hurda arabası, profil arabası, palet arabası, konteyner arabası, fileli palet kasası, sac/levha arabası ve tüp kafesi bulunuyor.
Metal kasada altı, talaş arabasında beş düzen kartı mevcut. Profil arabasının ayrıntılı modeli mevcut.
Son doğrulanmış MISUMI görselleri: açık üstlü kasa, ön erişimli kasa ve açık hazneli talaş arabası. Diğer üretici kaynaklı üç görselin kart eşleştirmesi kaldırıldı; dosyalar geçmiş çalışma olarak diskte olabilir, tekrar bağlanmamalı.
Son değişiklikler yayınlanmadı. Canlı site yerel kopyadan eski olabilir.

## Sıradaki sınırlı görev

Metal taşıma kasası sayfasını MISUMI kaynaklarıyla tamamla:
1. Açık üstlü ve ön erişimli kartların mevcut görsellerini koru.
2. İstifli kasa ve tekerlekli altlıklı kasa için ürün sayfası/görsel eşleşmesini doğrula; uygun görsel bulunursa ekle.
3. Bölmeli ve kapaklı büyük sac kasa için birebir eşleşme bulunamazsa mevcut teklif seçeneğini açıkça özel üretim talebi olarak ayır. Sırf kartı doldurmak için plastik kutu veya küçük takım çantası kullanma.
4. Görselin desteklemediği teknik özellikleri yazma. Kaynak bağlantıları ve varsa eksiklerin listesini bu nota ekle.
5. Teklif bağlantıları ve derlemeyi kontrol et. Yayınlama yapma.

## Doğrulanmış kaynaklar

- TRUSCO Mini Cargo VJ-453 sac kasa, VJ-455 çıkarılabilir ön panel; VJ-46C/VJ-66C ayrı taşıma altlığı: https://jp.misumi-ec.com/vona2/detail/223005075778/
- Sakae talaş arabası: https://jp.misumi-ec.com/vona2/detail/223005151458/ — tahliye musluğu var; süzme bölmesi doğrulanmadı.
- Teimo tekerlekli kasa: https://jp.misumi-ec.com/vona2/detail/223012818502/ — tel örgülü, sac kasa ile birebir eşdeğer değil.
- Sugiyasu devirme arabası: https://jp.misumi-ec.com/vona2/detail/223005075138/

## İlgili dosyalar

- `components/factory-product-options.tsx`: metal ve talaş düzen kartları.
- `lib/factory-option-images.ts`: doğrulanmış gerçek görsel eşleştirmeleri.
- `public/images/factory-options/`: görsel dosyaları.
- `app/[product]/page.tsx`: ortak ürün sayfası ve ek teklif alanı.
- `lib/additional-products.ts`, `lib/factory-products.ts`: ürün bilgileri.
- `components/product-inquiry.tsx`, `lib/product-inquiry.ts`: WhatsApp mesaj taslağı. Form siteye kayıt yapmaz; mesajı müşteri gönderir.
- `app/globals.css`: mevcut görsel dil ve mobil düzen.

## Çalıştırma ve kontrol

Stack: React 19, Vinext, Vite; mevcut kilit dosyasını koruyun.
Standart: `npm run dev`, `npm run build`.
Bu bilgisayarda önceki oturumda npm PATH üzerinde bulunamadı. Mevcut bağımlılıklarla PowerShell alternatifi: `& './node_modules/.bin/vinext.cmd' dev --host 127.0.0.1 --port 3000` ve `& './node_modules/.bin/vinext.cmd' build`.
Önce mevcut localhost:3000 sunucusunu kontrol edin; ikinci sunucu başlatmayın.
Son çalışma sırasında derleme başarılı ve metal kasa sayfası HTTP 200 döndü. Bu, sonraki değişiklikler için yeniden kontrolün yerine geçmez.
`output/` ve `tsconfig.tsbuildinfo` mevcut yerel dosyalardır; site kaynak teslimine dahil edilmedi. `node_modules`, ortam dosyaları ve derleme çıktıları yedeğe dahil edilmez.

## Görev teslim kaydı

Her ajan buraya tarih, görev, değiştirdiği dosyalar, kontrol sonucu ve kalan eksikleri eklemeli. İş bitince aktif geliştirici alanını boşaltmalı.
