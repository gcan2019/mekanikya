# ofirma — Ortak Çalışma Kuralları (ChatGPT, Antigravity & OpenCode Ajanları)

Bu klasör mevcut ofirma sitesinin ana çalışma kopyasıdır.
- Ana proje kökü: `C:\Users\DELL\.codex\.chatgpt-projects\g-p-6a903f8fbc88819194eb6b0434a37eab\firsat-sitesi`
- Site uygulama klasörü: `C:\Users\DELL\.codex\.chatgpt-projects\g-p-6a903f8fbc88819194eb6b0434a37eab\firsat-sitesi\site\uygulama`

Bu proje ana geliştiriciler (**ChatGPT ajanı** ve **Antigravity**) ile OpenCode yardımcı uzman ajanları tarafından ortak geliştirilmektedir. Amaç: Bir ajan çalışmayı bıraktığında diğerinin aynı klasör ve aynı Git çalışma alanı üzerinden güvenli biçimde kaldığı yerden devam edebilmesidir.

### Ajan Rolleri ve Görev Dağılımı:
- **ChatGPT:** Ana geliştirici / koordinatör. Mimari kararlar, koordinasyon ve genel kod geliştirme.
- **Antigravity:** Ana geliştirici / yerel uygulama / görsel QA. Yerel çalıştırma, tarayıcı/görsel denetimleri, doğrudan dosya işlemleri.
- **OpenCode researcher:** Salt-okunur araştırma uzmanı. Web, ürün kataloğu ve teknik kaynak incelemesi.
- **OpenCode reviewer:** Salt-okunur kod inceleme, git diff ve regresyon denetim uzmanı.
- **OpenCode developer:** Gerektiğinde devreye giren yardımcı geliştirici. Yalnızca açık talimatla kod değişikliği yapar.

Tüm ajanlar aşağıdaki kalıcı kurallara istisnasız uymak zorundadır:

## 1. Göreve Başlama Adımları
Her ajan yeni bir göreve başlamadan önce sırasıyla:
- `AGENTS.md` dosyasını okur.
- `ORTAK-CALISMA.md` dosyasını okur ve güncel bağlamı anlar.
- `git status --short` çalıştırarak çalışma alanındaki dosya durumunu kontrol eder.
- Gerekliyse ilgili dosyalardaki mevcut `git diff` çıktısını inceler.
- Önceki ajanın commit edilmemiş değişikliklerini kendi çalışması sanmaz; bu değişiklikleri korur ve üzerine inşa eder.

## 2. Tek Fiziksel Klasör Kullanımı
- Tüm ajanlar aynı fiziksel proje klasörünü (`site/uygulama`) kullanır.
- Ayrı site kopyası oluşturulmaz.
- Yeni veya paralel bir proje klasörü açılmaz.
- Kullanıcı açıkça talep etmedikçe git worktree, branch veya başka bir kopya üretilmez.

## 3. Commit Edilmemiş Değişiklikleri Koruma
- Başka ajanın yaptığı değişiklikler izinsiz revert edilmez.
- `git checkout`, `git restore`, `git reset`, `clean`, zorlayıcı silme veya geri alma komutları kullanıcı açıkça istemedikçe kesinlikle çalıştırılmaz.
- Bir dosyada önceden mevcut değişiklik varsa önce diff incelenir, önceki işlev bozulmadan ilerlenir.

## 4. Eşzamanlı Çalışma Yapmama (Çakışma Önleme)
- Diğer ajanın aktif çalıştığı bilinen bir dosyayı değiştirmeden önce `ORTAK-CALISMA.md` içindeki durum kontrol edilir.
- Bir ajan aktif görev yürütürken diğer ajan aynı dosyaları paralel olarak değiştirmez.
- Salt-okunur yardımcı ajanlar (`OpenCode researcher` ve `OpenCode reviewer`), dosya değiştirmedikleri için yazan ana ajanlarla (ChatGPT veya Antigravity) paralel olarak çalışabilir.
- Kod yazabilen yardımcı ajan (`OpenCode developer`), ana geliştiricilerle (ChatGPT veya Antigravity) aynı anda veya aynı dosya üzerinde eşzamanlı çalıştırılamaz.
- Çakışma ihtimali varsa önce kullanıcı koordinasyonuna veya ortak çalışma kaydına göre hareket edilir.

## 5. Çalışma Sahipliği ve Durum Bildirimi
- Göreve başlayan ajan `ORTAK-CALISMA.md` içindeki **"AKTİF ÇALIŞMA DURUMU"** bölümüne kendini (ChatGPT, Antigravity veya OpenCode developer), başladığı görevi ve durumunu (`çalışıyor`) yazar.
- Görev bittiğinde bu alanı `beklemede` durumuna getirir ve devir teslim kaydı bırakır.
- Böylece ajanlar birbirinin yarım işini yanlışlıkla ezmez.

## 6. Görev Sonu Devir Teslim Kaydı
Her görev sonunda `ORTAK-CALISMA.md` dosyasının altındaki "Görev teslim kaydı" bölümüne şu başlıkları içeren bir kayıt düşülür:
- **Tarih:**
- **Çalışan ajan:** (ChatGPT, Antigravity veya OpenCode developer)
- **Görev:**
- **Tamamlananlar:**
- **Değiştirilen dosyalar:**
- **Oluşturulan yeni dosyalar:**
- **Doğrulama / build sonucu:**
- **Açık kalan işler:**
- **Yayınlama durumu:** (Yayınlandı / Yayınlanmadı)
- **Commit / push durumu:** (Yapıldı / Yapılmadı)
- **Diğer ajana notlar:**

## 7. Ortak Hafıza Bütünlüğü
- `ORTAK-CALISMA.md` ortak hafıza ve devir teslim kütüğüdür; güncel durum açık ve kısa tutulur.
- Eski kayıtlar sebepsiz yere silinmez.
- Yeni başlayan ajan yalnızca bu dosyayı, `AGENTS.md`'yi ve Git durumunu okuyarak tüm bağlamı kavrayabilmelidir.

## 8. Yayınlama, Commit ve Deploy Kısıtı
- Kullanıcı açıkça istemedikçe:
  - `git commit` yapılmaz.
  - `git push` yapılmaz.
  - Deploy veya hosting yayını yapılmaz.
  - Canlı/production ortamına dokunulmaz.
- Kullanıcının kararı: Yayınlama ve deploy en son yapılacaktır.

## 9. Yerel Build ve Geliştirme Sunucuları
- Yerel build (`vinext build`) ve dev sunucusu (`vinext dev`) gerektiğinde doğrulamak için kullanılabilir.
- Doğrulama bittikten sonra gereksiz çalışan geliştirme sunucuları kapatılır (arka planda port açık bırakılmaz).
- `output/`, `tsconfig.tsbuildinfo` ve benzeri derleme artıkları/geçici dosyalar gerçek proje kaynaklarıyla karıştırılmaz; kullanıcı istemedikçe zorla silinmez.

## 10. Araştırma ve Üçüncü Taraf Referanslar
- Ürün düzenlerine eklenecek örnek görseller yalnızca doğrulanmış üretici/ürün sayfalarından (örn. MISUMI) alınır; yapay zekayla üretilmiş görsel veya alakasız ürünler (küçük plastik kutu, pano vb.) eklenmez.
- Kaynakta doğrulanmayan model, yük kapasitesi veya sertifika kesin bilgi olarak sunulmaz. Referans ürün ofirma üretimi gibi tanıtılmaz.
- Görsel üzerindeki orijinal üretici filigranları kaldırılmaz.
- Üçüncü taraf görsellerin yerel geliştirme/referans amaçlı kullanımı ile halka açık yayındaki kullanımı ayrılmalıdır; yayınlama öncesinde telif/lisans uygunluğu ayrıca kontrol edilmelidir.

## 11. Güvenlik ve Dış İletişim Sınırları
- `.env*`, kimlik bilgileri, `.git` ayarları ve `.openai/hosting.json` dosyaları okunmaz, değiştirilmez ve dış hizmetlere aktarılmaz.
- Üst proje içindeki `sources/` salt okunur referanstır; çalışma `site/uygulama` klasörüyle sınırlıdır.
- Kullanıcıya bildirmeden dışarı mesaj gönderilmez, harcama/ödeme yapılmaz ve yetkisiz paket/araç kurulmaz.

## 12. OpenCode Yardımcı Ajanları ve Model Kuralları
- **Ajan Tanımları:** OpenCode yardımcı uzman ajanları `.opencode/agents/` klasörü altında Markdown dosyaları (`researcher.md`, `reviewer.md`, `developer.md`) olarak tanımlanmıştır.
- **Çalıştırma Modu (`mode: all`):** OpenCode 1.18.31 CLI üzerinden hem doğrudan `opencode run --agent <isim>` komutuyla çağrılabilmeleri hem de TUI/alt-ajan olarak kullanılabilmeleri için ajan başlıklarında `mode: all` tanımlıdır (`mode: subagent` doğrudan CLI çağrılarını engeller).
- **Aktif Modeller:** Şu anda üç yardımcı ajan da yerel `ollama/qwen2.5-coder:7b` modeline ayarlıdır ve yerel GPU hızlandırmasıyla çalışmaktadır.
- **OpenCode Developer Başlama Kuralları:**
  - `OpenCode developer` bir göreve başlamadan önce sırasıyla `AGENTS.md`, `ORTAK-CALISMA.md` ve `git status --short` çıktısını mutlaka inceler.
  - Mevcut commit edilmemiş değişiklikleri kesinlikle korur ve üzerine inşa eder.
  - `git reset`, `git restore`, `git checkout` veya zorlayıcı silme komutlarını asla çalıştırmaz.
  - Kullanıcı açıkça talep etmedikçe `git commit`, `git push`, deploy veya yayınlama yapmaz.
- **Bulut Model ve Fallback Kısıtı:**
  - OpenCode'un otomatik bulut -> Ollama fallback mekanizması **yoktur**.
  - Bu nedenle aktif aboneliği/bağlantısı doğrulanmamış hiçbir bulut model adı (`github-copilot/*`, `openai/*`, `anthropic/*` vb.) ajan yapılandırma dosyalarına doğrudan yazılmamalıdır; aksi halde oturumlar hata vererek çalışmayı durdurur.

---
*Bu dosya işletim sistemi erişim engeli değil, tüm ajanların uyumla çalışmasını sağlayan bağlayıcı çalışma yönergesidir.*
