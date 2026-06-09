import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre nosotros — Guía del Piscina",
  description:
    "Conoce al equipo detrás de Guía del Piscina y cómo trabajamos para darte los mejores análisis de productos para piscinas, jardín y terraza.",
  alternates: { canonical: "https://www.guiadelpiscina.com/sobre-nosotros" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
    { "@type": "ListItem", position: 2, name: "Sobre nosotros", item: "https://www.guiadelpiscina.com/sobre-nosotros" },
  ],
};

export default function SobreNosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Sobre nosotros</h1>

        <div className="prose">
          <p>
            <strong>Guía del Piscina</strong> es un portal independiente de análisis y guías de compra especializado en productos para piscinas, jardín y terraza. Nuestro objetivo es ayudar a los propietarios españoles a tomar decisiones de compra informadas, ahorrando tiempo y dinero.
          </p>

          <h2>Quiénes somos</h2>
          <p>
            Somos un equipo de apasionados del jardín y las piscinas con experiencia en instalación, mantenimiento y análisis de productos. Llevamos años probando equipos, leyendo especificaciones técnicas y comparando precios para ofrecer recomendaciones honestas y útiles.
          </p>

          <h2>Cómo trabajamos</h2>
          <p>Nuestro proceso de análisis sigue siempre estos pasos:</p>
          <ul>
            <li><strong>Investigación exhaustiva:</strong> Analizamos las especificaciones técnicas, comparamos con la competencia y consultamos normativas vigentes.</li>
            <li><strong>Lectura de reseñas reales:</strong> Revisamos cientos de opiniones verificadas de compradores en Amazon y otras plataformas.</li>
            <li><strong>Comparación de precios:</strong> Monitoreamos la evolución de precios para informar sobre el mejor momento de compra.</li>
            <li><strong>Actualización periódica:</strong> Revisamos nuestros artículos al menos una vez al año para asegurar que la información sigue siendo relevante.</li>
          </ul>

          <h2>Divulgación de afiliados</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
            <p>
              <strong>Guía del Piscina</strong> participa en el <strong>Programa de Afiliados de Amazon EU</strong>, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad, publicitando e incluyendo enlaces a Amazon.es.
            </p>
            <p>
              Esto significa que cuando haces clic en un enlace de Amazon en nuestro sitio y realizas una compra, podemos recibir una pequeña comisión <strong>sin coste adicional para ti</strong>. Este sistema nos permite mantener el sitio activo y seguir publicando contenido gratuito.
            </p>
            <p>
              Nuestra política es clara: <strong>las comisiones de afiliado no influyen en nuestras valoraciones</strong>. Recomendamos los productos que consideramos mejores para el usuario, independientemente de la comisión que generen.
            </p>
          </div>

          <h2>Publicidad</h2>
          <p>
            Mostramos anuncios a través de <strong>Google AdSense</strong> (ID: pub-6063067965030118). Estos anuncios son gestionados por Google y pueden estar personalizados según tus intereses si has dado tu consentimiento. Puedes gestionarlo en nuestra{" "}
            <Link href="/politica-de-cookies" className="text-sky-600 hover:underline">Política de cookies</Link>.
          </p>

          <h2>Responsable del sitio</h2>
          <p>
            Este sitio es propiedad de <strong>Mkt Web 360 SLU</strong>, con CIF B87679304, con domicilio social en España. Para cualquier consulta, puedes contactarnos a través de nuestra{" "}
            <Link href="/contacto" className="text-sky-600 hover:underline">página de contacto</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
