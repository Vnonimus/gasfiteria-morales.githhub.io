import { Phone } from 'lucide-react';

export function Header() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/56979604475', '_blank');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 gap-3">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <div className="text-left">
              <p className="text-blue-600 font-semibold truncate fluid-h3">Gasfitería Full Santiago</p>
              <p className="text-gray-600 fluid-small">César Morales - Instalador SEC</p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/56979604475"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
            aria-label="Contactar por WhatsApp"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">Contactar por WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}