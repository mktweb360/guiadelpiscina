import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">🏊 Guía del Piscina</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Análisis y guías de compra para piscinas, jardines y terrazas. Ayudamos a propietarios españoles a elegir los mejores productos.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Artículos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mejores-depuradoras-piscina" className="hover:text-sky-400 transition-colors">Mejores depuradoras piscina</Link></li>
              <li><Link href="/robot-limpiafondos-piscina" className="hover:text-sky-400 transition-colors">Robots limpiafondos</Link></li>
              <li><Link href="/bomba-calor-piscina" className="hover:text-sky-400 transition-colors">Bombas de calor</Link></li>
              <li><Link href="/muebles-jardin-terraza" className="hover:text-sky-400 transition-colors">Muebles de jardín</Link></li>
              <li><Link href="/pergola-terraza" className="hover:text-sky-400 transition-colors">Pérgolas</Link></li>
              <li><Link href="/sistema-riego-automatico" className="hover:text-sky-400 transition-colors">Riego automático</Link></li>
              <li><Link href="/cesped-artificial-jardin" className="hover:text-sky-400 transition-colors">Césped artificial</Link></li>
              <li><Link href="/piscina-desmontable-grande" className="hover:text-sky-400 transition-colors">Piscinas desmontables</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre-nosotros" className="hover:text-sky-400 transition-colors">Sobre nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-sky-400 transition-colors">Contacto</Link></li>
              <li><Link href="/aviso-legal" className="hover:text-sky-400 transition-colors">Aviso legal</Link></li>
              <li><Link href="/politica-de-privacidad" className="hover:text-sky-400 transition-colors">Política de privacidad</Link></li>
              <li><Link href="/politica-de-cookies" className="hover:text-sky-400 transition-colors">Política de cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-xs text-gray-500 mb-2">
            <strong>Divulgación de afiliados:</strong> guiadelpiscina.com participa en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad, publicitando e incluyendo enlaces a Amazon.es.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Guía del Piscina — guiadelpiscina.com | Mkt Web 360 SLU, CIF B87679304
          </p>
        </div>
      </div>
    </footer>
  );
}
