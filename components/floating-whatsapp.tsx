import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsapp({ whatsapp }: { whatsapp: string }) {
  if (!whatsapp) return null;
  return (
    <a
      href={
        'https://wa.me/' +
        whatsapp +
        '?text=' +
        encodeURIComponent('Merhaba Mekanikya, imalat / parça ihtiyacım için fotoğraf ve bilgi paylaşmak istiyorum.')
      }
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Mekanikya WhatsApp hattı ile hızlı teklif ve fotoğraf paylaşımı"
    >
      <MessageCircle size={22} />
      <span>WhatsApp Teklif / Fotoğraf</span>
    </a>
  );
}
