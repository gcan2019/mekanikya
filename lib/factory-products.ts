import type { InquiryProduct } from './additional-products';
export const factoryProducts:InquiryProduct[] = [
  {
    "id": "palet-tasima-arabasi",
    "href": "/palet-tasima-arabasi",
    "title": "Palet taşıma arabası",
    "category": "Fabrika içi taşıma ve malzeme yönetimi",
    "description": "Paleti yüküyle birlikte üretim ve depo arasında hareket ettirmek için ölçüye uygun tekerlekli şase. Tutamak, fren ve palet oturma düzenini birlikte belirleyelim.",
    "details": [
      "Açık palet şasesi",
      "Tutamaklı taşıyıcı",
      "Frenli tekerlek düzeni"
    ],
    "uses": [
      "Üretim hattına palet besleme",
      "Depo içi kısa mesafe aktarım",
      "Sevkiyat hazırlama"
    ],
    "checks": [
      {
        "title": "Paletin tabanı",
        "text": "Paletin enini, boyunu ve taban ayaklarının yerleşimini paylaşın. Şasenin paleti taşıdığı noktaları buna göre belirleyelim."
      },
      {
        "title": "Hareket ve duruş",
        "text": "Düz ilerleme, dar alanda dönüş ve park etme ihtiyacını belirtin. Sabit/döner tekerlekler, tutamak ve fren birlikte seçilir."
      },
      {
        "title": "Yük dağılımı",
        "text": "Palet dahil toplam yükü, yük yüksekliğini ve koridor koşullarını değerlendirelim. Kapasite projeye göre belirlenir."
      }
    ],
    "fields": [
      {
        "id": "detail0",
        "label": "Palet ölçüsü ve taban yapısı",
        "kind": "text",
        "hint": "Bildiğiniz bilgiyi yazın; boş bırakabilirsiniz"
      },
      {
        "id": "detail1",
        "label": "Palet dahil toplam yük",
        "kind": "number",
        "unit": "kg",
        "hint": "Biliyorsanız toplam ağırlığı belirtin"
      },
      {
        "id": "detail2",
        "label": "Tutamak / fren tercihi",
        "kind": "text",
        "hint": "Bildiğiniz bilgiyi yazın; boş bırakabilirsiniz"
      },
      {
        "id": "detail3",
        "label": "Geçiş genişliği ve zemin",
        "kind": "text",
        "hint": "Bildiğiniz bilgiyi yazın; boş bırakabilirsiniz"
      }
    ],
    "note": "Görseller örnek ürün düzenlerini gösterir. Ölçü, malzeme, yük kapasitesi ve kullanım uygunluğu talebinize göre netleştirilir.",
    "source": "https://jp.misumi-ec.com/vona2/detail/223006605127/"
  },
  {
    "id": "konteyner-tasima-arabasi",
    "href": "/konteyner-tasima-arabasi",
    "title": "Konteyner ve kasa taşıma arabası",
    "category": "Fabrika içi taşıma ve malzeme yönetimi",
    "description": "Parça kasalarını yerden alıp üretim istasyonları arasında taşımaya uygun kompakt alt araba. Sabit veya ayarlanabilir şaseyi kullandığınız kasaya göre değerlendirelim.",
    "details": [
      "Sabit ölçülü alt şase",
      "Ayarlanabilir çerçeve talebi",
      "Kasa tabanına uygun oturma"
    ],
    "uses": [
      "Montaj istasyonları",
      "Küçük parça depoları",
      "Kasa ve kutu toplama alanları"
    ],
    "checks": [
      {
        "title": "Kasa uyumu",
        "text": "Kasanın dış taban ölçüsünü ve alt yüzeyinin fotoğrafını paylaşın. Kasanın kaymasını sınırlayan köşe ve kenar düzeni buna göre planlanır."
      },
      {
        "title": "İstif ve erişim",
        "text": "Birlikte taşınacak kasa adedini ve toplam yüksekliği belirtin. İstif kararlılığı ile operatörün erişimi birlikte değerlendirilir."
      },
      {
        "title": "Ortam ve tekerlek",
        "text": "Yağ, nem, yıkama ve zemin koşullarını anlatın. Gövde malzemesi ve tekerlek seçimi kullanım ortamına göre netleşir."
      }
    ],
    "fields": [
      {
        "id": "detail0",
        "label": "Kasa dış taban ölçüsü",
        "kind": "text",
        "hint": "Bildiğiniz bilgiyi yazın; boş bırakabilirsiniz"
      },
      {
        "id": "detail1",
        "label": "Toplam yük",
        "kind": "number",
        "unit": "kg",
        "hint": "Biliyorsanız toplam ağırlığı belirtin"
      },
      {
        "id": "detail2",
        "label": "Kasa adedi ve istif yüksekliği",
        "kind": "text",
        "hint": "Bildiğiniz bilgiyi yazın; boş bırakabilirsiniz"
      },
      {
        "id": "detail3",
        "label": "Sabit / ayarlı şase tercihi",
        "kind": "text",
        "hint": "Bildiğiniz bilgiyi yazın; boş bırakabilirsiniz"
      }
    ],
    "note": "Görseller örnek ürün düzenlerini gösterir. Ölçü, malzeme, yük kapasitesi ve kullanım uygunluğu talebinize göre netleştirilir.",
    "source": "https://jp.misumi-ec.com/vona2/fs_logistics/T2046000000/T2046010000/T2046010300/?Page=1"
  },
  {
    "id": "fileli-palet-kasasi",
    "href": "/fileli-palet-kasasi",
    "title": "Fileli ve katlanabilir palet kasası",
    "category": "Fabrika içi taşıma ve malzeme yönetimi",
    "description": "Parçaların görülebildiği tel örgülü kasa; sabit, katlanabilir veya tekerlekli düzen seçenekleri. Göz açıklığını, erişim kapağını ve istif ihtiyacını parçanıza göre ele alalım.",
    "details": [
      "Sabit veya katlanabilir gövde",
      "Tekerlekli / ayaklı taban",
      "Ön erişim kapağı talebi"
    ],
    "uses": [
      "Metal parça depolama",
      "Üretim içi parça aktarımı",
      "Geri dönüşlü sevkiyat kasaları"
    ],
    "checks": [
      {
        "title": "Parça ve göz açıklığı",
        "text": "En küçük parçanın ölçüsünü ve yüzey hassasiyetini paylaşın. Tel örgü aralığı, taban ve ayırıcı ihtiyacı parçaya göre belirlenir."
      },
      {
        "title": "Katlama ve kapak",
        "text": "Boş kasaları katlayarak saklama veya ön kapaktan parça alma ihtiyacınızı belirtin. Menteşe ve kilit düzenini kullanım sıklığına göre değerlendirelim."
      },
      {
        "title": "Taşıma ve istif",
        "text": "Forklift, transpalet veya elle hareket seçeneklerini belirtin. Tekerlekli kullanım ile dolu istifleme uygunluğu ayrıca değerlendirilir."
      }
    ],
    "fields": [
      {
        "id": "detail0",
        "label": "Kasa iç ölçüsü",
        "kind": "text",
        "hint": "Bildiğiniz bilgiyi yazın; boş bırakabilirsiniz"
      },
      {
        "id": "detail1",
        "label": "Kasa başına toplam yük",
        "kind": "number",
        "unit": "kg",
        "hint": "Biliyorsanız toplam ağırlığı belirtin"
      },
      {
        "id": "detail2",
        "label": "En küçük parça / göz açıklığı",
        "kind": "text",
        "hint": "Bildiğiniz bilgiyi yazın; boş bırakabilirsiniz"
      },
      {
        "id": "detail3",
        "label": "Katlama, kapak ve istif ihtiyacı",
        "kind": "text",
        "hint": "Bildiğiniz bilgiyi yazın; boş bırakabilirsiniz"
      }
    ],
    "note": "Görseller örnek ürün düzenlerini gösterir. Ölçü, malzeme, yük kapasitesi ve kullanım uygunluğu talebinize göre netleştirilir.",
    "source": "https://jp.misumi-ec.com/vona2/fs_logistics/T2215000000/T2215170000/?CategorySpec=SP100147743%3A%3Ab"
  }
];
