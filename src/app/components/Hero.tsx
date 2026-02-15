import { Phone, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/getWhatsAppUrl';

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(), '_blank');
  };

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1567748533458-bddb1377adbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwcGlwZXMlMjB3cmVuY2h8ZW58MXx8fHwxNzY2MDI4ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Herramientas de gasfitería profesional"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-blue-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex items-center justify-center mb-6">
          <img
            src="/sec.png"
            alt="Sello Certificación SEC"
            className="h-48 sm:h-64 object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Si no encuentra la imagen local, usa el logo oficial azul como respaldo
              const target = e.currentTarget;
              if (target.src.includes('sec.png')) {
                 target.src = "https://www.sec.cl/sitio-web/wp-content/themes/sec_theme/assets/img/logo_sec_header.png";
                 target.className = "h-24 sm:h-32 object-contain filter drop-shadow-lg bg-white/10 rounded-lg p-2 backdrop-blur-sm";
              }
            }}
          />
        </div>
        
        <h1 className="mb-4 text-white font-semibold fluid-h1">
          Gasfitería Profesional en Santiago
        </h1>
        
        <p className="mb-2 text-blue-100 fluid-h2">
          César Morales - Instalador Sanitario Autorizado SEC
        </p>
        
        <p className="mb-8 text-white/90 max-w-2xl mx-auto italic fluid-body">
          "Construyendo confianza desde el primer clic..."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
            aria-label="Contactar por WhatsApp"
          >
            <Phone className="w-6 h-6" />
            <span>+56 9 7960 4475</span>
          </button>
          
          <a
            href="#servicios"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg transition-all duration-300 border-2 border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white font-semibold"
            aria-label="Ver servicios"
          >
            Ver Servicios
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white">✓ Atención Rápida</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white">✓ Garantía de Trabajos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white">✓ Autorizado SEC</p>
          </div>
        </div>
      </div>
    </section>
  );
}
