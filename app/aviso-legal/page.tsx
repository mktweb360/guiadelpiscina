import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal — Guía del Piscina",
  description: "Aviso legal de Guía del Piscina. Información sobre el titular del sitio web, condiciones de uso y responsabilidades.",
  alternates: { canonical: "https://www.guiadelpiscina.com/aviso-legal" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
    { "@type": "ListItem", position: 2, name: "Aviso legal", item: "https://www.guiadelpiscina.com/aviso-legal" },
  ],
};

export default function AvisoLegalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Aviso legal</h1>
        <p className="text-sm text-gray-400 mb-8">Última actualización: junio de 2025</p>

        <div className="prose">
          <h2>1. Datos del titular</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de los datos del titular del sitio web:
          </p>
          <ul>
            <li><strong>Razón social:</strong> Mkt Web 360 SLU</li>
            <li><strong>CIF:</strong> B87679304</li>
            <li><strong>Domicilio social:</strong> España</li>
            <li><strong>Correo electrónico:</strong> info@guiadelpiscina.com</li>
            <li><strong>Sitio web:</strong> https://www.guiadelpiscina.com</li>
          </ul>

          <h2>2. Objeto y ámbito de aplicación</h2>
          <p>
            El presente Aviso Legal regula el acceso y uso del sitio web <strong>www.guiadelpiscina.com</strong> (en adelante, &quot;el Sitio&quot;), cuya titularidad corresponde a Mkt Web 360 SLU. El acceso y uso del Sitio implica la aceptación plena de las condiciones establecidas en este Aviso Legal.
          </p>

          <h2>3. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del Sitio (textos, imágenes, logotipos, diseño gráfico, código fuente y demás elementos) son propiedad de Mkt Web 360 SLU o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
          </p>

          <h2>4. Exclusión de responsabilidad</h2>
          <p>
            Mkt Web 360 SLU no se hace responsable de los daños y perjuicios que pudieran derivarse del uso del Sitio ni de los contenidos de los sitios web enlazados. La información publicada tiene carácter orientativo y no constituye asesoramiento profesional. Antes de realizar cualquier compra, el usuario debe verificar las condiciones actuales del producto en Amazon.es u otras plataformas.
          </p>

          <h2>5. Programa de afiliados de Amazon</h2>
          <p>
            Este sitio web participa en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad, publicitando e incluyendo enlaces a Amazon.es. Amazon y el logotipo de Amazon son marcas comerciales de Amazon.com, Inc. o de sus afiliados.
          </p>

          <h2>6. Legislación aplicable</h2>
          <p>
            Este Aviso Legal se rige por la legislación española. Para la resolución de conflictos, las partes se someten a los Juzgados y Tribunales de España, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
          </p>
        </div>
      </div>
    </>
  );
}
