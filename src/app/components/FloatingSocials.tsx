import { Facebook, Instagram, Phone } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/getWhatsAppUrl';

export function FloatingSocials() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-100">
      <a
        href="https://www.facebook.com/gasfiteriafullsantiago"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1877F2] text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg"
        aria-label="Facebook"
      >
        <Facebook className="w-6 h-6" />
      </a>
      <a
        href="https://www.instagram.com/gasfiteriafullsantiago"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-[#FFD600] via-[#FF0100] to-[#D300C5] text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg"
        aria-label="Instagram"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg"
        aria-label="WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
