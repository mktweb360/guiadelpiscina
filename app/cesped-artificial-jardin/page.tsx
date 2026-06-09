import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejor césped artificial para jardín 2025 — Análisis y precios",
  description:
    "Comparativa del mejor césped artificial para jardín y terraza. Analizamos densidad, altura, calidad UV y precio por metro cuadrado.",
  keywords: "cesped artificial jardin, cesped artificial precio, cesped sintetico jardin, cesped artificial terraza",
  alternates: { canonical: "https://www.guiadelpiscina.com/cesped-artificial-jardin" },
};

const products = [
  { pos: 1, name: "Césped artificial básico 20mm", asin: "B07YXBFKLM", price: "€4,99/m²", height: "20 mm", density: "16.000 fibras/m²", uv: "Básica", feel: "Rígido", stars: "4,0/5", best: "Más económico" },
  { pos: 2, name: "Césped artificial premium 30mm natural", asin: "B08PQJKLM4", price: "€7,99/m²", height: "30 mm", density: "25.000 fibras/m²", uv: "Media", feel: "Suave", stars: "4,4/5", best: "Mejor calidad-precio" },
  { pos: 3, name: "Césped artificial 40mm bicolor", asin: "B07TKLM9NR", price: "€9,99/m²", height: "40 mm", density: "30.000 fibras/m²", uv: "Alta (10 años)", feel: "Muy suave", stars: "4,5/5", best: "Más natural" },
  { pos: 4, name: "Césped artificial 35mm para piscina", asin: "B09RTKLM8Q", price: "€11,99/m²", height: "35 mm", density: "28.000 fibras/m²", uv: "Alta + drenaje", feel: "Suave antideslizante", stars: "4,6/5", best: "Mejor para piscinas" },
  { pos: 5, name: "Césped artificial premium XL 45mm", asin: "B00MVLM4KZ", price: "€14,99/m²", height: "45 mm", density: "38.000 fibras/m²", uv: "Máxima (15 años)", feel: "Lujo", stars: "4,7/5", best: "Máxima calidad" },
];

const faqs = [
  { q: "¿Cuánto dura el césped artificial de calidad?", a: "Un césped artificial de calidad media-alta (con fibras UV+) puede durar entre 10 y 15 años con uso normal. Los factores que más afectan a la durabilidad son la exposición directa al sol (importante elegir fibras con protección UV), el tráfico y el tipo de uso (perros, niños, etc.)." },
  { q: "¿El césped artificial se calienta mucho en verano?", a: "Sí, el césped artificial puede alcanzar temperaturas de 50-70°C en días de mucho sol, notablemente más que el césped natural. Para mitigarlo: elige fibras de color más claro, instala en zonas con algo de sombra o humedece con agua cuando haga mucho calor. Las nuevas fibras con tecnología de enfriamiento pueden reducir la temperatura hasta un 20%." },
  { q: "¿Se puede instalar césped artificial uno mismo?", a: "Sí para superficies pequeñas y medianas. Necesitas preparar la base (compactar tierra, añadir arena o gravilla para el drenaje), extender el geocompuesto antihierbas, colocar el césped y fijarlo con clavos o adhesivo en los bordes. Para instalaciones grandes (más de 50 m²) o con muchos cortes, conviene contratar a un profesional." },
  { q: "¿Es el césped artificial ecológico?", a: "Esta es una pregunta con matices. El césped artificial ahorra agua (eliminando el riego) y no necesita fertilizantes ni pesticidas. Sin embargo, está fabricado de plástico, no es biodegradable y se calienta más que el natural. Para zonas donde el riego sea muy costoso (zonas áridas) o donde el mantenimiento sea problemático, puede ser la opción más sostenible." },
  { q: "¿Qué densidad de fibras debo buscar?", a: "Para jardines domésticos con uso normal: 20.000-25.000 fibras/m² es suficiente. Para zonas con tráfico intenso (niños, perros): 28.000-35.000 fibras/m². Para uso deportivo: 35.000+ fibras/m². Más fibras = más natural, más suave y más duradero." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejor césped artificial para jardín 2025 — Análisis y precios",
  description: "Comparativa del mejor césped artificial para jardín y terraza.",
  datePublished: "2025-03-28",
  dateModified: "2025-06-01",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/cesped-artificial-jardin",
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
    { "@type": "ListItem", position: 3, name: "Césped artificial jardín", item: "https://www.guiadelpiscina.com/cesped-artificial-jardin" },
  ],
};

export default function CespedArtificialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-sky-600">Inicio</Link>
          {" › "}
          <Link href="/blog" className="hover:text-sky-600">Blog</Link>
          {" › "}
          <span className="text-gray-600">Césped artificial jardín</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejor césped artificial para jardín 2025 — Análisis y precios
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 28 marzo 2025 · Actualizado: 1 junio 2025 · 11 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>
            El <strong>césped artificial</strong> ha evolucionado enormemente en los últimos años: las fibras actuales son tan realistas que cuesta distinguirlos del natural a simple vista. Sin riego, sin cortes, sin fertilizantes y verde los 365 días del año. En esta guía comparamos los <strong>mejores céspedes artificiales para jardín</strong> disponibles en Amazon España en 2025, con precios entre 5 y 15€/m².
          </p>

          <h2>Comparativa — Mejores céspedes artificiales 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio/m²</th>
                <th className="px-3 py-3 text-left">Altura</th>
                <th className="px-3 py-3 text-left">Densidad</th>
                <th className="px-3 py-3 text-left">Protec. UV</th>
                <th className="px-3 py-3 text-left">Tacto</th>
                <th className="px-3 py-3 text-left">Comprar</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-bold text-sky-600">{p.pos}</td>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 font-bold text-orange-600">{p.price}</td>
                  <td className="px-3 py-3 text-gray-600">{p.height}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.density}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.uv}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.feel}</td>
                  <td className="px-3 py-3">
                    <a href={amazonLink(p.asin)} target="_blank" rel="noopener noreferrer sponsored"
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
          <h2>¿Qué características son más importantes?</h2>

          <h3>Altura de la fibra</h3>
          <p>
            Las fibras de 20-25 mm son más cortas, con aspecto más deportivo y resistente al uso intensivo. Las de 30-45 mm tienen un aspecto más natural y suave, ideal para zonas de descanso y juego. Para terrazas, 20-25 mm suele ser suficiente; para jardines, 30-40 mm da un resultado más natural.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B07TKLM9NR")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver césped 40mm bicolor en Amazon →
            </a>
          </div>

          <h3>Densidad de fibras</h3>
          <p>
            A mayor densidad, más lleno y natural parece el césped. También es más resistente. Busca mínimo 20.000 fibras/m² para uso doméstico normal; si tienes perros o niños, prefiere 28.000+.
          </p>

          <h3>Protección UV</h3>
          <p>
            Imprescindible en zonas soleadas de España. Sin protección UV, el color amarillea en 2-3 años. Los mejores modelos llevan protección UV para 10-15 años.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B09RTKLM8Q")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver césped para zona piscina en Amazon →
            </a>
          </div>

          <h2>Cómo calcular cuánto césped artificial necesitas</h2>
          <p>Mide el largo y ancho de la zona a cubrir en metros. Multiplica para obtener los metros cuadrados. Añade un 10-15% de margen para los cortes y solapes. El césped artificial se vende por metros lineales en rollos de 2 o 4 metros de ancho.</p>

          <h2>Preguntas frecuentes</h2>
        </div>

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
            <li><Link href="/sistema-riego-automatico" className="text-sky-600 hover:underline">→ Sistemas de riego automático para jardín 2025</Link></li>
            <li><Link href="/muebles-jardin-terraza" className="text-sky-600 hover:underline">→ Mejores muebles de jardín y terraza 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
