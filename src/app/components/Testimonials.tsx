import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    location: 'Las Condes',
    text: 'Excelente servicio. César llegó puntual, trabajó muy limpio y dejó todo funcionando perfectamente. Instaló mi calefón nuevo con certificación SEC. 100% recomendado.',
    rating: 5
  },
  {
    name: 'Roberto Sánchez',
    location: 'Providencia',
    text: 'Muy profesional y responsable. Solucionó una fuga de agua que otros no pudieron reparar. El precio fue justo y el trabajo impecable.',
    rating: 5
  },
  {
    name: 'Andrea Muñoz',
    location: 'Ñuñoa',
    text: 'Rápido, eficiente y honesto. Me explicó todo el proceso y las opciones disponibles. Quedé muy satisfecha con la instalación de mi termo eléctrico.',
    rating: 5
  },
  {
    name: 'Luis Pérez',
    location: 'Maipú',
    text: 'Destapó mi alcantarillado en menos tiempo del esperado. Muy buen trato y excelente trabajo. Sin duda lo llamaré nuevamente si necesito algo.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="mb-3 sm:mb-4 text-gray-900 font-semibold fluid-h2">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto fluid-body">
            La confianza de nuestros clientes es nuestro mayor respaldo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 sm:p-8 border border-blue-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic fluid-body">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-blue-100 pt-4">
                <p className="text-gray-900 fluid-small">{testimonial.name}</p>
                <p className="text-gray-500 fluid-small">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-yellow-50 border-2 border-yellow-200 rounded-lg px-5 sm:px-6 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-gray-900 text-sm sm:text-base">5.0 Promedio de Satisfacción</p>
              <p className="text-gray-600 text-xs sm:text-sm">Basado en más de 100 trabajos realizados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
