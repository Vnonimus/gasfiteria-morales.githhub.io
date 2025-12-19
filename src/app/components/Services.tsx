import { Flame, Droplets, Wrench, ShieldCheck, CircleCheck } from 'lucide-react';

const services = [
  {
    icon: Flame,
    title: 'Instalación de Calefón y Termos',
    description: 'Instalación profesional de calefones y termos eléctricos con certificación SEC. Trabajos garantizados y seguros.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    image: 'https://images.unsplash.com/photo-1661348540993-9b1a4fcb4ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGhlYXRlciUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjYwMjYyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Droplets,
    title: 'Reparación de Fugas',
    description: 'Detección y reparación de fugas de agua y gas. Servicio rápido y eficiente para evitar daños mayores.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    image: 'https://images.unsplash.com/photo-1720889589894-497c4f4f569e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGxlYWslMjBwaXBlfGVufDF8fHx8MTc2NjAyOTMwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: ShieldCheck,
    title: 'Redes bajo Normativa',
    description: 'Instalación de redes de agua y gas según normativas vigentes. Certificación SEC incluida.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    image: 'https://images.unsplash.com/photo-1751486289950-5c4898a4c773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHBpcGVzJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc2NjAyOTMwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Wrench,
    title: 'Destapes y Mantención',
    description: 'Destape de cañerías, alcantarillado y mantención preventiva de sistemas sanitarios.',
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    image: 'https://images.unsplash.com/photo-1654440122140-f1fc995ddb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFpbiUyMGNsZWFuaW5nJTIwcGx1bWJlcnxlbnwxfHx8fDE3NjYwMjkzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: CircleCheck,
    title: 'Gasfitería en General',
    description: 'Todo tipo de trabajos de gasfitería: reparaciones, instalaciones, cambios y mejoras para tu hogar o negocio.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
    image: 'https://images.unsplash.com/photo-1553265381-674034b34554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwZmF1Y2V0JTIwcmVwYWlyfGVufDF8fHx8MTc2NjAyOTYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Services() {
  return (
    <section id="servicios" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="mb-3 sm:mb-4 text-gray-900 font-semibold fluid-h2">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto fluid-body">
            Ofrecemos servicios profesionales de gasfitería con la más alta calidad y garantía. 
            Todos nuestros trabajos cumplen con las normativas SEC vigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 group"
              >
                {/* Imagen del servicio */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Icono flotante sobre la imagen */}
                  <div className={`absolute bottom-4 left-4 w-12 h-12 sm:w-14 sm:h-14 ${service.bgColor} rounded-lg flex items-center justify-center shadow-lg`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.color}`} />
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-5 sm:p-6">
                  <h3 className="mb-2 sm:mb-3 text-gray-900 font-semibold fluid-h3">{service.title}</h3>
                  <p className="text-gray-600 fluid-body">
                    {service.description}
                  </p>

                  {/* CTA button */}
                  <button 
                    onClick={() => window.open('https://wa.me/56979604475', '_blank')}
                    className="mt-3 sm:mt-4 text-blue-600 hover:text-blue-700 flex items-center gap-2 group/btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                    aria-label={`Solicitar cotización de ${service.title}`}
                  >
                    <span>Solicitar cotización</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-block bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg">
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <ShieldCheck className="w-5 h-5" />
              <span>Todos nuestros trabajos incluyen certificación SEC</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}