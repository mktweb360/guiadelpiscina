import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejor clorador salino para piscina 2025 — Guía completa | Guía del Piscina",
  description:
    "Los 3 mejores cloradores salinos para piscina desmontable en 2025: Intex, Bestway y Gre. Comparativa por capacidad, producción de cloro y precio.",
  keywords:
    "mejor clorador salino piscina, clorador salino intex, clorador salino bestway, electrolisis sal piscina",
  alternates: { canonical: "https://www.guiadelpiscina.com/mejor-clorador-salino-piscina" },
  openGraph: {
    title: "Mejor clorador salino para piscina en 2025 — Comparativa completa",
    description:
      "Comparativa de los mejores cloradores salinos por capacidad, producción de cloro y precio.",
    url: "https://www.guiadelpiscina.com/mejor-clorador-salino-piscina",
  },
};

const products = [
  {
    name: "Intex 55244 — Clorador salino 4 g/h",
    asin: "B08DJ8VLD8",
    capacity: "Hasta 17.000 L",
    production: "4 g/h",
    compatible: "Piscinas Intex y Bestway",
    price: "≈70€",
  },
  {
    name: "Bestway 58678 — Clorador salino Hydrogenic 6 g/h",
    asin: "B0B69MW8C1",
    capacity: "Hasta 30.000 L",
    production: "6 g/h",
    compatible: "Piscinas Bestway",
    price: "≈100€",
  },
  {
    name: "Intex 26670 — Clorador salino ECO 12 g/h",
    asin: "B07C9JL6RZ",
    capacity: "Hasta 56.800 L",
    production: "12 g/h",
    compatible: "Piscinas Intex",
    price: "≈150€",
  },
];

const vsTable = [
  { criterio: "Coste a largo plazo", salino: "Más económico (la sal es barata)", pastillas: "Más caro cada temporada" },
  { criterio: "Irritación piel/ojos", salino: "Mínima, agua más suave", pastillas: "Mayor, sobre todo con dosis altas" },
  { criterio: "Mantenimiento", salino: "Automático, limpieza mensual de la célula", pastillas: "Manual, añadir pastillas cada pocos días" },
  { criterio: "Compatibilidad", salino: "Todos los revestimientos", pastillas: "Todos los revestimientos" },
  { criterio: "Instalación", salino: "Requiere conexión a la depuradora", pastillas: "Ninguna, se usa dosificador flotante" },
];

const saltTable = [
  { volume: "5.000 L", salt: "≈30 kg" },
  { volume: "10.000 L", salt: "≈60 kg" },
  { volume: "20.000 L", salt: "≈120 kg" },
  { volume: "30.000 L", salt: "≈180 kg" },
];

const faqs = [
  {
    q: "¿Es compatible el clorador salino con todos los tipos de piscina?",
    a: "Sí, siempre que la depuradora tenga el caudal mínimo requerido por el modelo. Consulta las especificaciones del clorador antes de comprarlo.",
  },
  {
    q: "¿Hay que añadir sal cada temporada?",
    a: "Solo hay que reponer la sal que se pierde por el vaciado y las salpicaduras. Si mantienes el agua de una temporada a otra, añade el 20-30% de la cantidad inicial.",
  },
  {
    q: "¿El clorador salino sustituye completamente al cloro en pastillas?",
    a: "Sí, en condiciones normales. En periodos de alta carga (muchos bañistas, calor extremo) puede ser necesario un tratamiento de choque puntual.",
  },
  {
    q: "¿Funciona un clorador salino con una piscina de liner?",
    a: "Sí, la cloración salina es compatible con todos los revestimientos: liner, poliéster, gresite y hormigón.",
  },
  {
    q: "¿Cuánto dura un clorador salino?",
    a: "Con mantenimiento adecuado (limpieza mensual de la célula), entre 3 y 7 años. Las células de titanio son las más duraderas.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejor clorador salino para piscina en 2025 — Comparativa completa",
  description:
    "Los 3 mejores cloradores salinos para piscina desmontable en 2025: Intex, Bestway y Gre. Comparativa por capacidad, producción de cloro y precio.",
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/mejor-clorador-salino-piscina",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.guiadelpiscina.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Mejor clorador salino piscina",
      item: "https://www.guiadelpiscina.com/mejor-clorador-salino-piscina",
    },
  ],
};

export default function CloradorSalinoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-sky-600">Inicio</Link>
          {" › "}
          <Link href="/blog" className="hover:text-sky-600">Blog</Link>
          {" › "}
          <span className="text-gray-600">Mejor clorador salino piscina</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejor clorador salino para piscina en 2025 — Comparativa completa
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 15 julio 2025 · Actualizado: 15 julio 2025 · 9 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <h2>¿Qué es un clorador salino y cómo funciona?</h2>
          <p>
            Un clorador salino es un dispositivo que produce cloro de forma natural a partir de sal común disuelta en el agua. Mediante un proceso de <strong>electrólisis</strong>, hace pasar el agua salada por una célula con placas de titanio que transforman el cloruro de sodio en <strong>cloro activo</strong>. Este cloro desinfecta el agua y, una vez cumplida su función, vuelve a convertirse en sal, en un ciclo continuo que apenas consume producto.
          </p>
          <p>
            El resultado es una piscina desinfectada de forma automática, sin pastillas que manipular ni almacenar, y con un agua mucho más suave que no irrita los ojos ni la piel. Es, con diferencia, la forma más cómoda de mantener el agua cristalina toda la temporada.
          </p>

          <h2>Ventajas del clorador salino frente al cloro tradicional</h2>
          <p>Esta es la comparativa directa entre ambos sistemas de desinfección:</p>
        </div>

        {/* Salino vs pastillas table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Criterio</th>
                <th className="px-3 py-3 text-left">Clorador salino</th>
                <th className="px-3 py-3 text-left">Cloro en pastillas</th>
              </tr>
            </thead>
            <tbody>
              {vsTable.map((row, i) => (
                <tr key={row.criterio} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{row.criterio}</td>
                  <td className="px-3 py-3 text-green-700">{row.salino}</td>
                  <td className="px-3 py-3 text-gray-600">{row.pastillas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Comparativa de los 3 mejores cloradores salinos</h2>
          <p>Estos son los tres modelos que recomendamos según el tamaño de tu piscina:</p>
        </div>

        {/* Products comparison table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Capacidad piscina</th>
                <th className="px-3 py-3 text-left">Producción Cl/h</th>
                <th className="px-3 py-3 text-left">Compatible con</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Ver en Amazon</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 text-gray-600">{p.capacity}</td>
                  <td className="px-3 py-3 text-gray-600">{p.production}</td>
                  <td className="px-3 py-3 text-gray-600">{p.compatible}</td>
                  <td className="px-3 py-3 font-bold text-orange-600">{p.price}</td>
                  <td className="px-3 py-3">
                    <a href={amazonLink(p.asin)} target="_blank" rel="nofollow noopener noreferrer sponsored"
                      className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
                      Ver precio →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSenseAd slot="7890123456" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>Intex 55244 — Para piscinas pequeñas hasta 17.000 L</h3>
          <p>
            El <strong>Intex 55244</strong> es el punto de entrada perfecto a la cloración salina. Con una producción de 4 g/h de cloro, es ideal para piscinas desmontables de hasta 17.000 litros. Es sencillo de instalar, se conecta directamente a la depuradora y su precio lo convierte en la opción más accesible para dar el salto desde las pastillas.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B08DJ8VLD8")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Intex 55244 en Amazon →
            </a>
          </div>

          <h3>Bestway Hydrogenic — Equilibrio calidad-precio</h3>
          <p>
            El <strong>Bestway 58678 Hydrogenic</strong> es la opción más equilibrada para piscinas Bestway de tamaño medio, hasta 30.000 litros. Con 6 g/h de producción, ofrece un buen margen para mantener el agua estable incluso en pleno verano, a un precio muy razonable.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B0B69MW8C1")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Bestway Hydrogenic en Amazon →
            </a>
          </div>

          <h3>Intex 26670 — Para piscinas grandes hasta 56.800 L</h3>
          <p>
            El <strong>Intex 26670 ECO</strong> es el más potente del comparativo, con 12 g/h de producción para piscinas grandes de hasta 56.800 litros. Incorpora además el sistema ECO de esterilización que mejora la calidad del agua. Es la elección para quien tiene una piscina familiar grande y quiere desinfección automática y sin preocupaciones.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B07C9JL6RZ")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Intex 26670 en Amazon →
            </a>
          </div>

          <h2>Cómo instalar un clorador salino paso a paso</h2>
          <ol>
            <li><strong>Añade la sal al agua:</strong> disuelve la cantidad recomendada (según el volumen de tu piscina) y espera a que se disuelva por completo.</li>
            <li><strong>Conecta el clorador a la depuradora:</strong> se instala en la tubería de retorno, después del filtro.</li>
            <li><strong>Configura las horas de funcionamiento:</strong> ajusta el temporizador para que trabaje en sincronía con la depuradora (habitualmente 8-12 h en verano).</li>
            <li><strong>Primera carga:</strong> deja funcionar el sistema y comprueba a las pocas horas que el nivel de cloro sube al rango 1-3 ppm.</li>
            <li><strong>Mantenimiento mensual:</strong> revisa y limpia la célula de electrólisis para retirar la cal acumulada y prolongar su vida útil.</li>
          </ol>

          <h2>¿Cuánta sal necesita mi piscina?</h2>
          <p>La cantidad de sal depende del volumen de agua. Como referencia orientativa (a razón de unos 6 g/L):</p>
        </div>

        {/* Salt table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Volumen de la piscina</th>
                <th className="px-3 py-3 text-left">Sal necesaria (inicio de temporada)</th>
              </tr>
            </thead>
            <tbody>
              {saltTable.map((row, i) => (
                <tr key={row.volume} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{row.volume}</td>
                  <td className="px-3 py-3 font-bold text-sky-600">{row.salt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <p>
            El clorador salino es solo una parte del cuidado del agua. Combínalo con una buena rutina siguiendo nuestra{" "}
            <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">
              guía de mantenimiento de piscinas desmontables
            </Link>
            .
          </p>

          <h2>Preguntas frecuentes sobre cloradores salinos</h2>
        </div>

        {/* FAQ */}
        <div className="space-y-4 my-8">
          {faqs.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>{faq.q}</span>
                <span className="text-sky-500 ml-4 shrink-0 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-600 leading-relaxed bg-gray-50">{faq.a}</div>
            </details>
          ))}
        </div>

        <AffiliateDisclosure />

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
            <li><Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">→ Agua de la piscina verde: causas y solución</Link></li>
            <li><Link href="/ph-piscina" className="text-sky-600 hover:underline">→ pH de la piscina: cómo medirlo y corregirlo</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
