import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad — Guía del Piscina",
  description: "Política de privacidad de Guía del Piscina. Información sobre el tratamiento de datos personales, Google AdSense y el programa de afiliados de Amazon.",
  alternates: { canonical: "https://www.guiadelpiscina.com/politica-de-privacidad" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
    { "@type": "ListItem", position: 2, name: "Política de privacidad", item: "https://www.guiadelpiscina.com/politica-de-privacidad" },
  ],
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Política de privacidad</h1>
        <p className="text-sm text-gray-400 mb-8">Última actualización: junio de 2025</p>

        <div className="prose">
          <h2>1. Responsable del tratamiento</h2>
          <ul>
            <li><strong>Identidad:</strong> Mkt Web 360 SLU</li>
            <li><strong>CIF:</strong> B87679304</li>
            <li><strong>Dirección postal:</strong> España</li>
            <li><strong>Correo electrónico:</strong> info@guiadelpiscina.com</li>
          </ul>

          <h2>2. Datos que recopilamos</h2>
          <p>Recopilamos los siguientes tipos de datos:</p>
          <ul>
            <li><strong>Datos de uso:</strong> Páginas visitadas, tiempo en el sitio, fuente de tráfico. Recopilados mediante Google Analytics (si das tu consentimiento).</li>
            <li><strong>Datos de contacto:</strong> Nombre, email y mensaje, cuando nos escribes a través del formulario de contacto.</li>
            <li><strong>Datos de cookies:</strong> Identificadores de sesión y preferencias. Ver nuestra Política de cookies.</li>
          </ul>

          <h2>3. Finalidad del tratamiento</h2>
          <ul>
            <li>Responder consultas enviadas a través del formulario de contacto.</li>
            <li>Analizar el uso del sitio para mejorarlo (con tu consentimiento).</li>
            <li>Mostrar publicidad personalizada a través de Google AdSense (con tu consentimiento).</li>
          </ul>

          <h2>4. Base legal</h2>
          <p>
            El tratamiento de tus datos se basa en tu consentimiento (art. 6.1.a RGPD) para el análisis y la publicidad, y en el interés legítimo (art. 6.1.f RGPD) para responder consultas.
          </p>

          <h2>5. Google AdSense</h2>
          <p>
            Este sitio web utiliza <strong>Google AdSense</strong> (Publisher ID: ca-pub-6063067965030118) para mostrar anuncios. Google utiliza cookies para personalizar los anuncios basándose en visitas anteriores a este y otros sitios web. Puedes optar por no participar en la publicidad personalizada visitando los{" "}
            <a href="https://www.google.com/settings/ads" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">
              ajustes de anuncios de Google
            </a>
            .
          </p>

          <h2>6. Programa de afiliados de Amazon</h2>
          <p>
            Participamos en el <strong>Programa de Afiliados de Amazon EU</strong>. Cuando haces clic en un enlace de Amazon y realizas una compra, Amazon puede colocar cookies en tu dispositivo. Consulta la{" "}
            <a href="https://www.amazon.es/gp/help/customer/display.html?nodeId=201909010" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">
              política de privacidad de Amazon
            </a>{" "}
            para más información.
          </p>

          <h2>7. Tus derechos</h2>
          <p>Conforme al RGPD y la LOPDGDD, tienes derecho a:</p>
          <ul>
            <li>Acceder a tus datos personales.</li>
            <li>Rectificar datos inexactos.</li>
            <li>Solicitar la supresión de tus datos.</li>
            <li>Oponerte al tratamiento o solicitar su limitación.</li>
            <li>Portabilidad de tus datos.</li>
            <li>Retirar el consentimiento en cualquier momento.</li>
          </ul>
          <p>
            Para ejercer estos derechos, escríbenos a <strong>info@guiadelpiscina.com</strong>. También puedes reclamar ante la <a href="https://www.aepd.es" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos (AEPD)</a>.
          </p>

          <h2>8. Conservación de datos</h2>
          <p>
            Los datos del formulario de contacto se conservan durante el tiempo necesario para responder tu consulta y hasta 1 año después. Los datos de análisis se conservan durante 26 meses.
          </p>
        </div>
      </div>
    </>
  );
}
