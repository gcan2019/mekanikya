# Metal şekillendirme ailesi — kaynak ve geliştirme kaydı

Tarih: 2026-11-25. Ürünler fiyat/stok/teslim taahhüdü olmayan, talebe göre özel teklif sayfalarıdır.

## “Ürünleri Tartışalım” (6b049618-9a00-83ed-9b7a-4a1ffd4f1907) sohbetinden tamamlanan CAD ve teknik kaynaklar

Kullanıcının paylaştığı tam sohbet dökümü üzerinden daha önce erişilemeyen iki ürünün CAD bağlantıları dahil tüm araştırma kaynakları eksiksiz geri alındı:

1. **Masaüstü Manuel Silindir Sac Kıvırma Makinesi (`manuel-silindir-sac-kivirma-makinesi` — Ürün 14):**
   - CAD ve çizim paketi referansı: ForgeTechDesigns — *Desktop Sheet & Tube Rolling Machine* (Parasolid `.x_t`, PDF teknik resim, DXF): https://www.etsy.com/listing/4509853191/desktop-sheet-tube-rolling-machine
   - Ürün grubu referansı: Say-Mak SR Serisi — https://www.say-mak.com.tr/manuel-silindir-makineleri/sr

2. **Manuel Boru ve Profil Bükme Makinesi (`manuel-boru-ve-profil-bukme-makinesi` — Ürün 16):**
   - 3B CAD montaj referansı: TR1 Manual Tube Bender (SolidWorks, STEP, IGES, `.x_t`): https://free3d.com/3d-model/tube-bender-4949.html
   - İmalat kılavuzu ve teknik çizim referansı: Rorty Tube Bender #1: https://rorty.net/product/tube-bender-1/
   - Ürün grubu referansı: Akomac APB30 — https://www.akomac.com/profil-boru-kivirma-makinesi-apb30

3. **Manuel Ferforje Spiral Bükme Makinesi (`manuel-ferforje-spiral-bukme-makinesi` — Ürün 30):**
   - 3B CAD referansı: Cults3D — *Manual Scroll Bending Machine* (STEP arşivi): https://cults3d.com/en/3d-model/tool/3d-cad-model-manual-scroll-bending-machine-for-decorative-metalwork
   - Alternatif imalat çizimleri referansı: GizmoPlans — *Scroll Bender & Picket Twister*: https://www.gizmoplans.com/product/scroll-bender-picket-twister/

*Not:* Yukarıdaki üçüncü taraf CAD paketleri ve üretici sayfaları yalnızca mekanik çalışma prensibi ve ürün geliştirme araştırması referansıdır; üçüncü taraf fotoğrafları kopyalanmamış ve rakip kapasite/fiyat değerleri Mekanikya taahhüdü olarak sunulmamıştır.

## Görsel kökeni ve sunum sınırı

- Kullanıcının açık talimatıyla, sitedeki mevcut Mekanikya stüdyo kataloğu görsel diliyle (`talas-hurda-arabasi.png`: saf beyaz `#FFFFFF` stüdyo zemini, `#122d40` kurumsal çelik mavisi gövde ve perçinli `MEKANİKYA` metal plakası) uyumlu üç özgün stüdyo tasarım konsepti görseli üretildi ve `public/images/metal-forming/*.jpg` altına yerleştirildi:
  - `public/images/metal-forming/manuel-silindir-sac-kivirma-makinesi.jpg`
  - `public/images/metal-forming/manuel-boru-ve-profil-bukme-makinesi.jpg`
  - `public/images/metal-forming/manuel-ferforje-spiral-bukme-makinesi.jpg`
- Önceki şematik prensip çizimleri (`public/images/metal-forming/*.svg`) geçmiş çalışma olarak diskte korundu.
- Görseller `✓ Atölyemizden gerçek üretim / uygulama fotoğrafı` rozeti **taşımaz**; hem kartlarda hem ürün detay sayfalarında açıkça **“Mekanikya tasarım konsepti · Özel teklif”** olarak etiketlenmiştir ve stokta hazır seri üretim ürün iddiası içermez.

## Önceki yerel çalışmanın korunması

- Sehpa bileşeni (`components/roller-support-guide.tsx`), `docs/standart-urun-taslaklari.md` ve önceki katalog grup düzeltmeleri aynen korunmuştur.
- Üç metal şekillendirme makinesi Merchant feed (`app/merchant-feed.xml/route.ts`) ve varsayılan fiyat/stok/Offer şeması akışının dışında tutulmaya devam etmektedir.
