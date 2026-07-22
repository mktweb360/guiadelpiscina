import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejor cubierta para piscina desmontable 2025 — Guía completa | Guía del Piscina",
  description:
    "Las mejores cubiertas y cobertores para piscina desmontable en 2025. Comparativa de cobertores de invierno, cobertores solares y mantas térmicas de burbuja.",
  keywords:
    "cubierta piscina desmontable, cobertor piscina, cobertor solar piscina, manta termica piscina",
  alternates: { canonical: "https://www.guiadelpiscina.com/cubierta-piscina-desmontable" },
  openGraph: {
    title: "Mejor cubierta para piscina desmontable en 2025 — Comparativa completa",
    description:
      "Cobertores de invierno, cobertores solares y mantas térmicas: comparativa para piscina desmontable.",
    url: "https://www.guiadelpiscina.com/cubierta-piscina-desmontable",
  },
};

const products = [
  {
    name: "Bestway 58292 — Cobertor de invierno PE 360 cm",
    asin: "B00N5UOAYO",
    type: "Cobertor de invierno",
    diameter: "360 cm",
    material: "Polietileno (PE)",
    fn: "Proteger el agua (invernada)",
    price: "≈18€",
  },
  {
    name: "Bestway 58242 — Cobertor solar de burbujas 360 cm",
    asin: "B00FQD5FSS",
    type: "Cobertor solar",
    diameter: "360 cm",
    material: "Polietileno con burbujas",
    fn: "Calentar el agua",
    price: "≈12€",
  },
  {
    name: "Intex 28031 — Cobertor Metal Frame vinilo 366 cm",
    asin: "B0055CIC26",
    type: "Cobertor de protección",
    diameter: "366 cm",
    material: "Vinilo azul",
    fn: "Protección diaria",
    price: "≈20€",
  },
];

const faqs = [
  {
    q: "¿Se puede dejar el cobertor puesto mientras la bomba de calor funciona?",
    a: "Sí, es lo más eficiente. La bomba de calor calienta el agua y el cobertor retiene ese calor. La combinación puede ahorrar hasta un 70% en costes de calefacción.",
  },
  {
    q: "¿Cuánto dura un cobertor de burbujas para piscina?",
    a: "Entre 1 y 3 temporadas según la calidad y el uso. El UV degrada el plástico con el tiempo. Guárdalo en un lugar oscuro y seco cuando no lo uses para alargar su vida.",
  },
  {
    q: "¿Puedo bañarme con el cobertor puesto?",
    a: "No. El cobertor debe retirarse completamente antes del baño y no debe haber nadie en el agua mientras se coloca o retira.",
  },
  {
    q: "¿El cobertor sirve también para seguridad infantil?",
    a: "Los cobertores estándar de PE o burbujas NO son seguros para niños. Si necesitas seguridad infantil, necesitas una cubierta de seguridad homologada con capacidad de soporte de peso, que es un producto diferente.",
  },
  {
    q: "¿Cómo limpio el cobertor de piscina?",
    a: "Con agua a presión y un poco de jabón neutro. Aclara bien y deja secar completamente antes de guardarlo. Nunca lo guardes húmedo: favorece la aparición de moho.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejor cubierta para piscina desmontable en 2025 — Comparativa completa",
  description:
    "Las mejores cubiertas y cobertores para piscina desmontable en 2025. Comparativa de cobertores de invierno, cobertores solares y mantas térmicas de burbuja.",
  datePublished: "2025-07-20",
  dateModified: "2025-07-20",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/cubierta-piscina-desmontable",
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
      name: "Cubierta piscina desmontable",
      item: "https://www.guiadelpiscina.com/cubierta-piscina-desmontable",
    },
  ],
};

export default function CubiertaPiscinaPage() {
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
          <span className="text-gray-600">Cubierta piscina desmontable</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejor cubierta para piscina desmontable en 2025 — Comparativa completa
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 20 julio 2025 · Actualizado: 20 julio 2025 · 9 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <h2>Tipos de cubierta para piscina — ¿cuál necesitas?</h2>
          <p>
            No todas las cubiertas hacen lo mismo. Antes de comprar, conviene saber qué necesitas: proteger el agua, calentarla o guardarla durante el invierno. Estos son los tres tipos principales:
          </p>

          <h3>Cobertor de invierno — Para proteger el agua cuando no usas la piscina</h3>
          <p>
            Fabricado en PE o PVC ligero, con agujeros de drenaje y cuerda perimetral para fijarlo. Protege el agua de hojas, suciedad y lluvia cuando la piscina no está en uso, pero <strong>no retiene el calor</strong>. Es la opción básica para la protección diaria y para la invernada.
          </p>

          <h3>Cobertor solar de burbujas — Para calentar el agua</h3>
          <p>
            Un film de polietileno con burbujas de aire que crea un <strong>efecto invernadero</strong>: puede subir la temperatura del agua entre 4 y 6 °C aprovechando el sol. Además, reduce drásticamente la evaporación, lo que ahorra agua y productos químicos. Es la opción ideal para alargar la temporada sin gastar en energía.
          </p>

          <h3>Manta isotérmica — La más eficiente para alargar la temporada</h3>
          <p>
            Fabricada en espuma de polietileno de celda cerrada de 400 micras, retiene el calor generado durante el día e impide que se pierda por la noche. Usada junto a una <strong>bomba de calor</strong> es la combinación más eficaz: la bomba calienta y la manta conserva.
          </p>

          <h2>Comparativa de los 3 mejores cobertores para piscina</h2>
          <p>Estos son los tres cobertores que recomendamos según lo que necesites:</p>
        </div>

        {/* Products comparison table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Tipo</th>
                <th className="px-3 py-3 text-left">Diámetro</th>
                <th className="px-3 py-3 text-left">Material</th>
                <th className="px-3 py-3 text-left">Función principal</th>
                <th className="px-3 py-3 text-left">Ver</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 text-gray-600">{p.type}</td>
                  <td className="px-3 py-3 text-gray-600">{p.diameter}</td>
                  <td className="px-3 py-3 text-gray-600">{p.material}</td>
                  <td className="px-3 py-3 text-gray-600">{p.fn}</td>
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

        <AdSenseAd slot="1122334455" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>Bestway 58292 — El cobertor de invierno más vendido</h3>
          <p>
            El <strong>Bestway 58292</strong> es el cobertor de invierno de referencia para piscinas redondas de 360 cm. Su material de PE resistente, los agujeros de drenaje y la cuerda perimetral lo hacen fácil de colocar y muy eficaz para mantener el agua limpia durante los meses de no uso. Imbatible por su precio.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B00N5UOAYO")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Bestway 58292 en Amazon →
            </a>
          </div>

          <h3>Bestway 58242 — El cobertor solar más económico</h3>
          <p>
            El <strong>Bestway 58242</strong> es un cobertor solar de burbujas para piscinas de 360 cm. Aprovecha el sol para subir la temperatura del agua varios grados y reduce la evaporación nocturna. Por muy poco dinero, alarga la temporada de baño de forma notable.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B00FQD5FSS")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Bestway 58242 en Amazon →
            </a>
          </div>

          <h3>Intex 28031 — Compatible con piscinas Metal Frame</h3>
          <p>
            El <strong>Intex 28031</strong> es el cobertor de vinilo azul diseñado específicamente para las piscinas Intex Metal Frame de 366 cm. Su ajuste a medida y su material resistente lo convierten en la mejor opción si tu piscina es de la marca Intex.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B0055CIC26")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Intex 28031 en Amazon →
            </a>
          </div>

          <h2>Cómo elegir la cubierta correcta para tu piscina</h2>
          <ol>
            <li><strong>Mide el diámetro exacto de tu piscina.</strong> La cubierta debe ser igual o ligeramente mayor que la piscina para cubrirla por completo.</li>
            <li><strong>Decide el uso principal:</strong> protección diaria, calentamiento del agua o invernada. Cada objetivo tiene su tipo de cubierta.</li>
            <li><strong>Comprueba la compatibilidad de marca:</strong> Intex y Bestway tienen medidas y sistemas de sujeción diferentes. Elige el cobertor de tu misma marca cuando sea posible.</li>
          </ol>

          <h2>Ventajas de cubrir la piscina cuando no la usas</h2>
          <ul>
            <li><strong>Reduce el consumo de cloro hasta un 50%:</strong> menos evaporación significa menos pérdida de desinfectante.</li>
            <li><strong>Mantiene el agua más limpia:</strong> menos hojas, polvo e insectos que filtrar.</li>
            <li><strong>Ahorra en calefacción:</strong> un cobertor solar puede sustituir parcialmente a una{" "}
              <Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">bomba de calor</Link>.</li>
          </ul>
          <p>
            La cubierta es una pieza más del cuidado del agua. Combínala con una buena rutina siguiendo nuestra{" "}
            <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">
              guía de mantenimiento de piscinas desmontables
            </Link>
            .
          </p>

          <h2>Preguntas frecuentes sobre cubiertas de piscina</h2>
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
            <li><Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">→ Bomba de calor para piscina: las mejores opciones</Link></li>
            <li><Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">→ Mejores piscinas desmontables grandes 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
