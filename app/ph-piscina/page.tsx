import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "pH piscina: valores ideales, cómo medirlo y corregirlo | Guía del Piscina",
  description:
    "Todo sobre el pH de la piscina: rango ideal (7,2-7,6), cómo medirlo con tiras o medidor digital, cómo subir o bajar el pH y qué pasa si está fuera de rango.",
  keywords:
    "ph piscina, ph ideal piscina, bajar ph piscina, subir ph piscina, medidor ph piscina",
  alternates: { canonical: "https://www.guiadelpiscina.com/ph-piscina" },
  openGraph: {
    title: "pH de la piscina: qué es, cómo medirlo y cómo corregirlo en 2025",
    description:
      "Rango ideal del pH, cómo medirlo con tiras o medidor digital y cómo subirlo o bajarlo correctamente.",
    url: "https://www.guiadelpiscina.com/ph-piscina",
  },
};

// Productos enlazados en Amazon.es
const products = {
  tiras: "B08GL2QL9S",
  medidor: "B0DCNWPPQK",
  phMinus: "B07C2XJLMW",
  phPlus: "B074FV73LX",
};

const phTable = [
  { range: "< 7,0", label: "Muy ácido", effect: "Agua corrosiva e irritante: daña liner, juntas y equipos metálicos." },
  { range: "7,0 – 7,2", label: "Bajo", effect: "El cloro está muy activo, pero el agua puede irritar ojos y piel." },
  { range: "7,2 – 7,6", label: "IDEAL", effect: "Eficacia óptima del cloro, agua cómoda y materiales protegidos." },
  { range: "7,6 – 8,0", label: "Alto", effect: "El cloro empieza a perder eficacia como desinfectante." },
  { range: "> 8,0", label: "Muy alto", effect: "Cloro casi inactivo, precipitación de cal y agua turbia." },
];

const faqs = [
  {
    q: "¿Cuál es el pH ideal de una piscina?",
    a: "Entre 7,2 y 7,6. En este rango el cloro es eficaz, el agua es cómoda para los bañistas y los materiales de la piscina no sufren daños.",
  },
  {
    q: "¿Con qué frecuencia hay que medir el pH?",
    a: "Al menos dos veces por semana en temporada alta. También después de lluvias intensas, uso elevado o cualquier tratamiento químico.",
  },
  {
    q: "¿Por qué sube solo el pH de la piscina?",
    a: "Las piscinas tienden a subir el pH de forma natural por la desgasificación del CO₂, el efecto del sol y la adición de ciertos productos como el cloro granulado o las pastillas. Es normal tener que corregirlo regularmente.",
  },
  {
    q: "¿Puedo usar vinagre para bajar el pH de la piscina?",
    a: "No es recomendable. El vinagre no está formulado para piscinas, puede afectar al liner y al sistema de filtración, y no tiene la concentración adecuada. Usa siempre pH minus específico para piscinas.",
  },
  {
    q: "¿Qué pasa si me baño con el pH muy alto?",
    a: "El agua con pH alto (>8,0) puede causar irritación en ojos y piel, y el cloro pierde eficacia como desinfectante. Además, puede precipitar la cal y enturbiar el agua. Siempre corrige el pH antes de bañarte si está fuera de rango.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "pH de la piscina: qué es, cómo medirlo y cómo corregirlo en 2025",
  description:
    "Todo sobre el pH de la piscina: rango ideal (7,2-7,6), cómo medirlo con tiras o medidor digital, cómo subir o bajar el pH y qué pasa si está fuera de rango.",
  datePublished: "2025-07-10",
  dateModified: "2025-07-10",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/ph-piscina",
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
      name: "pH piscina",
      item: "https://www.guiadelpiscina.com/ph-piscina",
    },
  ],
};

export default function PhPiscinaPage() {
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
          <span className="text-gray-600">pH piscina</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          pH de la piscina: qué es, cómo medirlo y cómo corregirlo en 2025
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 10 julio 2025 · Actualizado: 10 julio 2025 · 9 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <h2>¿Qué es el pH y por qué es tan importante en una piscina?</h2>
          <p>
            El pH es la medida de la acidez o alcalinidad del agua en una escala del <strong>0 al 14</strong>, donde 7 es neutro. Por debajo de 7 el agua es ácida y por encima, alcalina. Para una piscina, el rango ideal está entre <strong>7,2 y 7,6</strong>, ligeramente por encima del neutro.
          </p>
          <p>
            ¿Por qué importa tanto? Porque el pH condiciona absolutamente todo lo demás. Un pH fuera de rango hace que el <strong>cloro pierda eficacia</strong> (puedes estar echando cloro sin que desinfecte), provoca <strong>irritación de ojos y piel</strong>, y a largo plazo <strong>daña el liner, las juntas y los equipos</strong> de la piscina. Controlar el pH es, junto con el cloro, la base de toda la química del agua.
          </p>

          <h2>Tabla de referencia — Efectos del pH en la piscina</h2>
        </div>

        {/* pH effects table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Valor de pH</th>
                <th className="px-3 py-3 text-left">Nivel</th>
                <th className="px-3 py-3 text-left">Efecto en la piscina</th>
              </tr>
            </thead>
            <tbody>
              {phTable.map((row, i) => (
                <tr
                  key={row.range}
                  className={row.label === "IDEAL" ? "bg-green-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-3 py-3 font-bold text-gray-900">{row.range}</td>
                  <td className={`px-3 py-3 font-semibold ${row.label === "IDEAL" ? "text-green-700" : "text-sky-600"}`}>
                    {row.label}
                  </td>
                  <td className="px-3 py-3 text-gray-600">{row.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Cómo medir el pH de tu piscina</h2>
          <p>Tienes dos métodos principales, uno más económico y otro más preciso. Ambos son válidos; la elección depende de cuánto te importe la exactitud.</p>

          <h3>Tiras reactivas (económico, rápido)</h3>
          <p>
            Las tiras reactivas son la forma más rápida y barata de medir el pH. Sumerges una tira en el agua durante unos segundos, la sacas y comparas el color resultante con la escala impresa en el bote. Las tiras «7 en 1» miden además cloro, alcalinidad, dureza y otros parámetros de una sola vez.
          </p>
          <p>
            Su limitación es la <strong>precisión</strong>: la lectura por color es aproximada y depende de la luz y de tu apreciación. Son perfectas para el control rutinario, pero menos fiables en el límite del rango.
          </p>
        </div>

        <div className="not-prose my-4">
          <a href={amazonLink(products.tiras)} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
            Ver EASYTEST 150 Tiras Reactivas 7 en 1 en Amazon →
          </a>
        </div>

        <div className="prose">
          <h3>Medidor digital (más preciso)</h3>
          <p>
            Un medidor de pH digital ofrece una lectura numérica exacta (por ejemplo, 7,4) en lugar de una aproximación por color. Es la opción ideal si te tomas en serio el mantenimiento o si tu piscina da problemas recurrentes. A cambio, requiere <strong>calibración periódica</strong> con soluciones patrón y un mínimo mantenimiento del electrodo (mantenerlo húmedo y limpio).
          </p>
        </div>

        <div className="not-prose my-4">
          <a href={amazonLink(products.medidor)} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
            Ver Flintronic Medidor pH Digital en Amazon →
          </a>
        </div>

        <AdSenseAd slot="6789012345" />

        <div className="prose">
          <h2>Cómo bajar el pH (pH alto)</h2>
          <p>
            Si tu pH está por encima de 7,6, necesitas bajarlo con un producto <strong>pH minus</strong> (normalmente bisulfato sódico en granulado o ácido diluido en líquido).
          </p>
          <ul>
            <li><strong>Dosis orientativa:</strong> unos 10-20 mL de producto líquido por m³ para bajar 0,2 puntos. Ajusta siempre según las instrucciones del fabricante.</li>
            <li><strong>Procedimiento:</strong> con la depuradora en marcha, vierte el producto en la zona de retorno del agua, espera unas 2 horas para que se homogenice y vuelve a medir.</li>
          </ul>
        </div>

        <div className="not-prose my-4">
          <a href={amazonLink(products.phMinus)} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
            Ver NortemBio Pool pH- Minus 5L en Amazon →
          </a>
        </div>

        <div className="prose">
          <h2>Cómo subir el pH (pH bajo)</h2>
          <p>
            Si el pH está por debajo de 7,2, necesitas subirlo con un producto <strong>pH plus</strong> (carbonato o bicarbonato sódico en granulado).
          </p>
          <ul>
            <li><strong>Dosis orientativa:</strong> unos 20-30 g por m³ para subir 0,2 puntos.</li>
            <li><strong>Procedimiento:</strong> disuelve el granulado en un cubo con agua de la piscina y viértelo de forma uniforme por toda la superficie, con la depuradora en marcha.</li>
          </ul>
        </div>

        <div className="not-prose my-4">
          <a href={amazonLink(products.phPlus)} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
            Ver NortemBio Pool pH+ Plus 5kg en Amazon →
          </a>
        </div>

        <div className="prose">
          <h2>Relación entre pH y cloro: por qué debes ajustar el pH primero</h2>
          <p>
            El pH y el cloro están directamente relacionados. La proporción de cloro que permanece en su forma <strong>activa</strong> (el que realmente desinfecta) depende del pH:
          </p>
          <ul>
            <li>A <strong>pH 7,0</strong>, el cloro libre activo ronda el <strong>75%</strong>, pero el agua resulta irritante.</li>
            <li>A <strong>pH 7,5</strong>, el cloro activo es de aproximadamente el <strong>50%</strong>: el equilibrio ideal.</li>
            <li>A <strong>pH 8,0</strong>, el cloro activo cae hasta el <strong>20%</strong>: estás desperdiciando la mayor parte del producto.</li>
          </ul>
          <p>
            <strong>Regla práctica:</strong> ajusta siempre el pH antes de añadir cloro o cualquier otro tratamiento. Si echas cloro con el pH alto, gran parte no servirá para nada.
          </p>

          <h2>Cada cuánto hay que medir el pH</h2>
          <ul>
            <li>Como mínimo, <strong>2 veces por semana</strong> en temporada alta.</li>
            <li>Después de una <strong>lluvia intensa</strong>, que diluye y altera el equilibrio del agua.</li>
            <li>Tras <strong>baños con mucha gente</strong>, que aportan materia orgánica.</li>
          </ul>
          <p>
            El control del pH forma parte de una rutina más amplia. Encuentra el resto de pasos en nuestra{" "}
            <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">
              guía de mantenimiento de piscinas desmontables
            </Link>
            .
          </p>

          <h2>Preguntas frecuentes sobre el pH de la piscina</h2>
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
            <li><Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">→ Agua de la piscina verde: causas y solución</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
            <li><Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">→ Las 5 mejores depuradoras para piscina 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
