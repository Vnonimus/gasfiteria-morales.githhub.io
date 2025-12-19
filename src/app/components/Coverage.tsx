import { MapPin, Clock, CheckCircle } from 'lucide-react';

const coverageAreas = [
  'Las Condes',
  'Providencia',
  'Vitacura',
  'Lo Barnechea',
  'Ñuñoa',
  'La Reina',
  'Peñalolén',
  'Macul',
  'San Joaquín',
  'La Florida',
  'Maipú',
  'Pudahuel',
  'Cerrillos',
  'Estación Central',
  'Santiago Centro',
  'Independencia',
  'Recoleta',
  'Huechuraba',
  'Quilicura',
  'Renca',
  'Cerro Navia',
  'Lo Prado',
  'Quinta Normal',
  'San Miguel'
];

export function Coverage() {
  return (
    <section className="section bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
          </div>
          <h2 className="mb-3 sm:mb-4 text-gray-900 font-semibold fluid-h2">Cobertura en Santiago</h2>
          <p className="text-gray-600 max-w-2xl mx-auto fluid-body">
            Atención en todas las comunas de Santiago y alrededores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Coverage Map/Visual */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 border border-gray-200">
              <h3 className="mb-4 sm:mb-6 text-gray-900 flex items-center gap-2 text-base sm:text-lg font-semibold">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                Comunas que Atendemos
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3">
                {coverageAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700 bg-blue-50 rounded-lg px-3 py-2 hover:bg-blue-100 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-5 sm:mt-6 p-4 bg-blue-600 text-white rounded-lg">
                <p className="flex items-center gap-2 text-sm sm:text-base">
                  <MapPin className="w-5 h-5" />
                  <span>¿No ves tu comuna? Contáctanos, podemos llegar a otras zonas de Santiago</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="space-y-5 sm:space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 text-base sm:text-lg font-semibold">Horario</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Lun - Sáb</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                08:00 - 20:00 hrs
              </p>
              <p className="text-sm text-gray-500 mt-2">
                * Emergencias: Consultar disponibilidad
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-5 sm:p-6 text-white">
              <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold">Atención Inmediata</h4>
              <p className="mb-3 sm:mb-4 text-blue-100 text-sm sm:text-base">
                ¿Necesitas un gasfitero ahora? Contáctanos y te atenderemos lo más pronto posible
              </p>
              <button
                onClick={() => window.open('https://wa.me/56979604475', '_blank')}
                className="w-full bg-white text-blue-600 py-2.5 sm:py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contactar Ahora
              </button>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                <h4 className="text-gray-900 text-base sm:text-lg font-semibold">Garantía</h4>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Todos nuestros trabajos incluyen garantía por escrito
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
