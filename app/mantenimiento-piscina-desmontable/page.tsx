import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mantenimiento piscina desmontable: guía paso a paso 2025 | Guía del Piscina",
  description:
    "Todo lo que necesitas saber para mantener tu piscina desmontable limpia y en perfecto estado: control de pH, cloro, limpieza del filtro, invernada y productos imprescindibles.",
  keywords:
    "mantenimiento piscina desmontable, clorador salino piscina, ph piscina, cloro piscina, invernar piscina",
  alternates: { canonical: "https://www.guiadelpiscina.com/mantenimiento-piscina-desmontable" },
  openGraph: {
    title: "Cómo mantener una piscina desmontable — Guía completa 2025",
    description:
      "Control de pH, cloro, limpieza del filtro, invernada y productos imprescindibles para tu piscina desmontable.",
    url: "https://www.guiadelpiscina.com/mantenimiento-piscina-desmontable",
  },
};

const products = [
  {
    name: "Intex 55244 — Clorador salino 4 g/h",
    asin: "B08DJ8VLD8",
    capacity: "Hasta 17.000 L",
    production: "4 g/h de cloro",
    price: "≈149€",
  },
  {
    name: "Intex 26670 — Clorador salino ECO 12 g/h",
    asin: "B07C9JL6RZ",
    capacity: "Hasta 56.800 L",
    production: "12 g/h de cloro",
    price: "≈279€",
  },
  {
    name: "Bestway 58678 — Clorador salino Hydrogenic 6 g/h",
    asin: "B0B69MW8C1",
    capacity: "Hasta 30.000 L",
    production: "6 g/h de cloro",
    price: "≈229€",
  },
];

const waterParams = [
  { param: "pH", ideal: "7,2 – 7,6", note: "El más importante: condiciona la eficacia del cloro." },
  { param: "Cloro libre", ideal: "1 – 3 ppm", note: "Desinfectante activo que elimina algas y bacterias." },
  { param: "Alcalinidad total", ideal: "80 – 120 ppm", note: "Estabiliza el pH y evita oscilaciones bruscas." },
  { param: "Sal (clorador salino)", ideal: "4 – 6 g/L", note: "Solo si usas electrólisis salina." },
];

const faqs = [
  {
    q: "¿Con qué frecuencia hay que cambiar el agua de una piscina desmontable?",
    a: "Cada 1-2 temporadas si el mantenimiento es correcto. Con buen filtrado y desinfección, el agua dura toda la temporada sin necesidad de vaciarla.",
  },
  {
    q: "¿Cuánta sal necesita una piscina para el clorador salino?",
    a: "Entre 4 y 6 gramos por litro de agua, según el modelo. Una piscina de 10.000 litros necesita entre 40 y 60 kg de sal al inicio de temporada.",
  },
  {
    q: "¿Puedo usar el mismo cloro para piscinas enterradas y desmontables?",
    a: "Sí, los productos son los mismos. La diferencia está en la dosis, que se calcula por el volumen de agua.",
  },
  {
    q: "¿Cada cuánto hay que limpiar el filtro de cartucho?",
    a: "Cada 1-2 semanas durante la temporada. Cuando el flujo de agua baja visiblemente, es señal de que el cartucho necesita limpieza o sustitución.",
  },
  {
    q: "¿Qué hago si el agua de mi piscina se pone turbia?",
    a: "Primero mide el pH y el cloro. Si el pH está fuera de rango, corrígelo. Si el cloro está bajo, aplica un tratamiento de choque. Si persiste, puede ser falta de filtración.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo mantener una piscina desmontable — Guía completa 2025",
  description:
    "Todo lo que necesitas saber para mantener tu piscina desmontable limpia y en perfecto estado: control de pH, cloro, limpieza del filtro, invernada y productos imprescindibles.",
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/mantenimiento-piscina-desmontable",
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
      name: "Mantenimiento piscina desmontable",
      item: "https://www.guiadelpiscina.com/mantenimiento-piscina-desmontable",
    },
  ],
};

export default function MantenimientoPiscinaPage() {
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
          <span className="text-gray-600">Mantenimiento piscina desmontable</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Cómo mantener una piscina desmontable — Guía completa 2025
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 1 julio 2025 · Actualizado: 1 julio 2025 · 10 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <h2>Por qué el mantenimiento es la clave de una piscina sana</h2>
          <p>
            Una piscina desmontable puede durar muchos años en perfecto estado o convertirse en un problema en cuestión de días. La diferencia está en el <strong>mantenimiento</strong>. Sin una rutina básica, el agua se transforma rápidamente en un caldo de cultivo para algas y bacterias: se enturbia, se vuelve verde y deja de ser segura para bañarse.
          </p>
          <p>
            La buena noticia es que mantener una piscina desmontable no requiere apenas esfuerzo. Con una rutina de unos <strong>15 minutos a la semana</strong> —medir el agua, ajustar el químico, limpiar el filtro— tu piscina se mantendrá cristalina toda la temporada. En esta guía te explicamos paso a paso todo lo que necesitas, desde los parámetros del agua hasta la preparación para el invierno.
          </p>

          <h2>Los parámetros clave del agua</h2>
          <p>
            Mantener el agua equilibrada se reduce a controlar cuatro parámetros. Estos son los valores ideales que debes buscar:
          </p>
        </div>

        {/* Water params table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Parámetro</th>
                <th className="px-3 py-3 text-left">Valor ideal</th>
                <th className="px-3 py-3 text-left">Por qué importa</th>
              </tr>
            </thead>
            <tbody>
              {waterParams.map((p, i) => (
                <tr key={p.param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{p.param}</td>
                  <td className="px-3 py-3 font-bold text-sky-600">{p.ideal}</td>
                  <td className="px-3 py-3 text-gray-600">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <p>
            Para medirlos tienes dos opciones: las <strong>tiras reactivas</strong> (económicas y rápidas, sumerges una tira y comparas colores) o un <strong>medidor digital</strong> (más preciso y fiable, ideal si te tomas el mantenimiento en serio). Con medir dos veces por semana es suficiente en verano.
          </p>

          <h2>Rutina semanal de mantenimiento</h2>
          <p>Esta es la rutina que deberías seguir cada semana durante la temporada de baño:</p>
          <ol>
            <li><strong>Medir el pH y el cloro</strong> con tiras reactivas o medidor digital.</li>
            <li><strong>Ajustar si es necesario:</strong> corrige el pH con pH+ o pH−, y añade cloro si está por debajo de 1 ppm.</li>
            <li><strong>Limpiar las paredes</strong> con un cepillo de piscina para desprender la suciedad adherida antes de que se convierta en algas.</li>
            <li><strong>Limpiar o sustituir el filtro</strong> (cartucho o retrolavado de arena, según tu sistema).</li>
            <li><strong>Vaciar la cesta del skimmer</strong> si tu piscina tiene uno, para retirar hojas e insectos.</li>
            <li><strong>Revisar el clorador salino</strong> (si lo usas): comprobar el nivel de sal y que las placas de electrólisis estén limpias.</li>
          </ol>
          <p>
            El paso 2 es el que más te ahorra un <strong>clorador salino</strong>: al generar cloro de forma automática y continua, mantiene la desinfección estable sin que tengas que estar añadiendo pastillas manualmente.
          </p>

          <h2>El clorador salino: la alternativa al cloro químico</h2>
          <p>
            Un clorador salino (o electrolizador) es un dispositivo que produce cloro a partir de sal común disuelta en el agua. Mediante un proceso de <strong>electrólisis</strong>, transforma la sal (cloruro de sodio) en cloro activo que desinfecta el agua, y este cloro vuelve a convertirse en sal en un ciclo continuo. El resultado: desinfección constante con un consumo mínimo de sal.
          </p>
          <p><strong>Ventajas frente al cloro en pastillas:</strong></p>
          <ul>
            <li>Sin manipular pastillas ni almacenar productos químicos agresivos.</li>
            <li>Menos irritación de ojos y piel: el agua resulta mucho más suave.</li>
            <li>Más económico a largo plazo: la sal es muy barata y dura toda la temporada.</li>
            <li>Desinfección automática y estable, con menos riesgo de que el agua se ponga verde.</li>
          </ul>
        </div>

        {/* Salt chlorinator comparison table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Capacidad piscina</th>
                <th className="px-3 py-3 text-left">Producción Cl</th>
                <th className="px-3 py-3 text-left">Precio aprox.</th>
                <th className="px-3 py-3 text-left">Ver en Amazon</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 text-gray-600">{p.capacity}</td>
                  <td className="px-3 py-3 text-gray-600">{p.production}</td>
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

        <div className="not-prose my-4 flex flex-wrap gap-3">
          <a href={amazonLink("B08DJ8VLD8")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
            Ver Intex 55244 en Amazon →
          </a>
          <a href={amazonLink("B07C9JL6RZ")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
            Ver Intex 26670 ECO en Amazon →
          </a>
          <a href={amazonLink("B0B69MW8C1")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
            Ver Bestway 58678 en Amazon →
          </a>
        </div>

        <AdSenseAd slot="4567890123" />

        <div className="prose">
          <h2>Limpieza del filtro: cartucho vs arena</h2>
          <p>
            El filtro es el pulmón de la piscina: sin una filtración correcta, ningún químico mantendrá el agua limpia. El mantenimiento depende del tipo:
          </p>
          <ul>
            <li>
              <strong>Filtro de cartucho:</strong> límpialo cada 2 semanas retirando el cartucho y enjuagándolo a fondo con la manguera. Sustitúyelo al menos una vez por temporada, o antes si notas que el caudal de agua ha bajado de forma notable.
            </li>
            <li>
              <strong>Filtro de arena:</strong> realiza un <strong>retrolavado</strong> (backwash) semanal para expulsar la suciedad acumulada, y cambia la arena de sílex cada 5 años aproximadamente. La arena filtra mejor y es más cómoda a largo plazo, ideal para piscinas medianas y grandes.
            </li>
          </ul>

          <h2>Cómo preparar la piscina para el invierno</h2>
          <p>
            Si vas a mantener la piscina montada durante el invierno (invernada activa), sigue estos pasos al final de la temporada para reencontrarla en buen estado en primavera:
          </p>
          <ol>
            <li><strong>Limpieza final:</strong> cepilla paredes y fondo y aspira toda la suciedad.</li>
            <li><strong>Tratamiento de choque:</strong> aplica una dosis alta de cloro para eliminar cualquier resto de algas o bacterias.</li>
            <li><strong>Bajar el nivel de agua:</strong> por debajo de los skimmers y boquillas para evitar daños por heladas.</li>
            <li><strong>Proteger el filtro:</strong> vacíalo, límpialo y guárdalo en un lugar seco y protegido del frío.</li>
            <li><strong>Cubierta de invierno:</strong> coloca una cubierta específica para evitar que caigan hojas y suciedad y para frenar la proliferación de algas.</li>
          </ol>
          <p>
            Una buena cubierta es la mejor inversión para la invernada. Te contamos cuáles elegir en nuestra{" "}
            <Link href="/cubierta-piscina-desmontable" className="text-sky-600 hover:underline">
              guía de cubiertas para piscina desmontable
            </Link>
            .
          </p>

          <h2>Preguntas frecuentes sobre el mantenimiento de piscinas desmontables</h2>
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
            <li><Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">→ Agua de la piscina verde: causas y solución paso a paso</Link></li>
            <li><Link href="/ph-piscina" className="text-sky-600 hover:underline">→ pH de la piscina: cómo medirlo y corregirlo</Link></li>
            <li><Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">→ Mejores piscinas desmontables grandes 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
