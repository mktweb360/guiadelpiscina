import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre nosotros — Guía del Piscina",
  description:
    "Miguel Torres, técnico instalador de piscinas con 12 años de experiencia, es el autor detrás de Guía del Piscina. Conoce quién redacta las guías y cómo seleccionamos los productos.",
  alternates: { canonical: "https://www.guiadelpiscina.com/sobre-nosotros" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Miguel Torres",
  jobTitle: "Técnico Instalador de Piscinas",
  url: "https://www.guiadelpiscina.com/sobre-nosotros",
  description:
    "Técnico instalador de piscinas con 12 años de experiencia en instalación y mantenimiento de piscinas en España.",
  knowsAbout: [
    "mantenimiento de piscinas",
    "tratamiento del agua",
    "depuradoras",
    "cloro y pH",
    "piscinas desmontables",
    "robots limpiafondos",
    "bombas de calor para piscina",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Mkt Web 360 SLU",
    url: "https://www.guiadelpiscina.com",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mkt Web 360 SLU",
  url: "https://www.guiadelpiscina.com",
  logo: "https://www.guiadelpiscina.com/logo.png",
  description:
    "Portal especializado en mantenimiento y equipamiento de piscinas en España. Guías técnicas, comparativas de depuradoras, robots limpiafondos y productos de tratamiento del agua.",
  foundingDate: "2024",
  areaServed: { "@type": "Country", name: "España" },
  knowsAbout: [
    "mantenimiento de piscinas",
    "tratamiento del agua",
    "depuradoras de piscina",
    "robots limpiafondos",
    "piscinas desmontables",
  ],
  sameAs: [
    "https://www.instagram.com/guiadelpiscina",
    "https://www.facebook.com/guiadelpiscina",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@guiadelpiscina.com",
    availableLanguage: "Spanish",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
    { "@type": "ListItem", position: 2, name: "Sobre nosotros", item: "https://www.guiadelpiscina.com/sobre-nosotros" },
  ],
};

const expertiseTags = [
  "Mantenimiento de piscinas",
  "Tratamiento del agua",
  "Depuradoras de arena",
  "Cloración salina",
  "Robots limpiafondos",
  "pH y química del agua",
  "Piscinas desmontables",
  "Bombas de calor",
];

export default function SobreNosotrosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-sky-600">Inicio</Link>
          {" › "}
          <span className="text-gray-600">Sobre nosotros</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Sobre nosotros</h1>

        {/* Author profile card */}
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 mb-10 flex gap-5 items-start">
          {/* Avatar */}
          <div className="shrink-0 w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-white text-2xl font-extrabold select-none">
            MT
          </div>
          <div className="flex-1">
            <p className="text-xl font-bold text-gray-900">Miguel Torres</p>
            <p className="text-sky-700 font-medium text-sm mb-2">Técnico Instalador de Piscinas</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Técnico instalador de piscinas con <strong>12 años de experiencia</strong> en instalación y mantenimiento de piscinas en España. Ha trabajado en proyectos residenciales y comunitarios en toda la Península, con especialización en tratamiento del agua, sistemas de filtración y automatización de la cloración.
            </p>
            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2">
              {expertiseTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-sky-100 text-sky-800 text-xs font-semibold px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="prose max-w-none">

          {/* Section 1 */}
          <h2>Qué es GuíaDeLaPiscina.com</h2>
          <p>
            <strong>GuíaDeLaPiscina.com</strong> es un portal independiente especializado en mantenimiento y equipamiento de piscinas para el mercado español. Nuestro objetivo es ayudar a los propietarios de piscinas —tanto desmontables como de obra— a tomar decisiones de compra informadas, ahorrar tiempo y dinero, y mantener el agua en perfectas condiciones todo el año.
          </p>
          <p>
            Publicamos guías técnicas detalladas, comparativas de productos y protocolos de mantenimiento redactados desde la experiencia real en instalación y mantenimiento de piscinas, no desde la teoría. Cada artículo parte de un problema real que tienen los propietarios y ofrece una solución práctica y contrastada.
          </p>

          {/* Section 2 */}
          <h2>Criterios técnicos de selección</h2>
          <p>Cuando recomendamos un producto, seguimos siempre el mismo proceso:</p>
          <ul>
            <li>
              <strong>Análisis de especificaciones técnicas:</strong> capacidad de filtración, potencia, materiales, compatibilidad con distintos tipos de piscina y normativa aplicable en España.
            </li>
            <li>
              <strong>Evaluación de reseñas verificadas:</strong> revisamos cientos de opiniones de compradores reales en Amazon.es y otras plataformas, prestando especial atención a problemas recurrentes a medio y largo plazo.
            </li>
            <li>
              <strong>Relación calidad-precio:</strong> comparamos prestaciones frente a coste y señalamos cuándo un producto de gama alta merece la diferencia y cuándo no.
            </li>
            <li>
              <strong>Actualización periódica:</strong> revisamos nuestras comparativas al menos una vez al año para reflejar nuevos modelos, cambios de precio y actualizaciones de fabricante.
            </li>
          </ul>

          {/* Section 3 */}
          <h2>Transparencia en afiliados</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 not-prose">
            <p className="font-bold text-gray-900 mb-2">Divulgación obligatoria (afiliados)</p>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              <strong>GuíaDeLaPiscina.com</strong> participa en el <strong>Programa de Afiliados de Amazon EU</strong>, un programa diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad mediante la inclusión de enlaces a Amazon.es.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              Cuando haces clic en un enlace de Amazon en nuestro sitio y realizas una compra, podemos recibir una pequeña comisión <strong>sin coste adicional para ti</strong>. Este sistema nos permite mantener el sitio activo y publicar contenido gratuito.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Política clara:</strong> las comisiones de afiliado no influyen en nuestras valoraciones. Recomendamos los productos que consideramos técnicamente mejores para el usuario, independientemente de la comisión que generen.
            </p>
          </div>

          <h2>Publicidad</h2>
          <p>
            Mostramos anuncios a través de <strong>Google AdSense</strong> (ID: pub-6063067965030118). Estos anuncios son gestionados por Google y pueden estar personalizados según tus intereses si has dado tu consentimiento. Puedes gestionar tus preferencias en nuestra{" "}
            <Link href="/politica-de-cookies" className="text-sky-600 hover:underline">Política de cookies</Link>.
          </p>
        </div>

        {/* Company data footer */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-3">Datos de la empresa</p>
          <dl className="text-sm text-gray-600 space-y-1">
            <div className="flex gap-2">
              <dt className="font-semibold w-32 shrink-0">Empresa:</dt>
              <dd>Mkt Web 360 SLU</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold w-32 shrink-0">CIF:</dt>
              <dd>B87679304</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold w-32 shrink-0">País:</dt>
              <dd>España</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold w-32 shrink-0">Contacto:</dt>
              <dd>
                <Link href="/contacto" className="text-sky-600 hover:underline">Página de contacto</Link>
                {" · "}
                <a href="mailto:info@guiadelpiscina.com" className="text-sky-600 hover:underline">info@guiadelpiscina.com</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
