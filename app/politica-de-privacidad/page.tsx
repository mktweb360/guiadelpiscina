import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Política de privacidad — Guía del Piscina" },
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
        <p className="text-sm text-gray-400 mb-8">Última actualización: octubre de 2026</p>

        <div className="prose">
          <h2>1. Responsable del tratamiento</h2>
          <ul>
            <li><strong>Identidad:</strong> Mkt Web 360 SLU</li>
            <li><strong>CIF:</strong> B87679304</li>
            <li><strong>Dirección postal:</strong> España</li>
            <li><strong>Correo electrónico:</strong> info@guiadelpiscina.com</li>
            <li><strong>Datos del titular:</strong> <a href="/aviso-legal" className="text-sky-600 hover:underline">Aviso legal</a></li>
          </ul>

          <h2>2. Datos que recopilamos</h2>
          <p>Recopilamos los siguientes tipos de datos:</p>
          <ul>
            <li><strong>Datos de uso:</strong> Páginas visitadas, clics en enlaces a Amazon, fuente de tráfico, navegador y dispositivo. Recopilados mediante Google Analytics 4, con cookies solo si das tu consentimiento (ver apartado 5).</li>
            <li><strong>Datos de contacto:</strong> Nombre, email y mensaje, cuando nos escribes a través del <a href="/contacto" className="text-sky-600 hover:underline">formulario de contacto</a>.</li>
            <li><strong>Datos de cookies:</strong> Identificadores de sesión y preferencias. Ver nuestra <a href="/politica-de-cookies" className="text-sky-600 hover:underline">Política de cookies</a>.</li>
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

          <h2>5. Analítica web: Google Analytics 4</h2>
          <p>
            Usamos Google Analytics 4, un servicio de Google Ireland Limited, para medir de forma agregada las visitas, las páginas vistas y los clics en los enlaces de afiliado a Amazon (registramos la URL del enlace y la página en la que se pulsa), con el fin de saber qué contenidos resultan útiles y mejorarlos.
          </p>
          <ul>
            <li><strong>Base legal:</strong> tu consentimiento (art. 6.1.a RGPD), que das o rechazas en el mensaje de consentimiento de Google y puedes retirar en cualquier momento desde «Preferencias de cookies» en el pie de página.</li>
            <li><strong>Datos tratados:</strong> identificador online de la cookie de analítica, dirección IP (Google Analytics 4 la trunca o anonimiza y no la almacena completa) y datos de navegación y del dispositivo (páginas vistas, enlaces pulsados, navegador, sistema operativo y tipo de dispositivo).</li>
            <li><strong>Sin consentimiento:</strong> no se instalan cookies de analítica; Google Analytics solo recibe señales sin cookies y sin identificadores persistentes.</li>
            <li><strong>Conservación:</strong> los datos de usuario y de eventos se conservan en Google Analytics hasta 14 meses.</li>
            <li><strong>Transferencias internacionales:</strong> los datos pueden ser tratados por Google LLC en EE. UU.; la transferencia está amparada en el Marco de Privacidad de Datos UE-EE. UU. y en las cláusulas contractuales tipo de la Comisión Europea.</li>
          </ul>

          <h2>6. Google AdSense</h2>
          <p>
            Este sitio web utiliza <strong>Google AdSense</strong> (Publisher ID: ca-pub-6063067965030118) para mostrar anuncios. Google utiliza cookies para personalizar los anuncios basándose en visitas anteriores a este y otros sitios web. Puedes optar por no participar en la publicidad personalizada visitando los{" "}
            <a href="https://www.google.com/settings/ads" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">
              ajustes de anuncios de Google
            </a>
            .
          </p>

          <h2>7. Programa de afiliados de Amazon</h2>
          <p>
            Participamos en el <strong>Programa de Afiliados de Amazon EU</strong>. Cuando haces clic en un enlace de Amazon y realizas una compra, Amazon puede colocar cookies en tu dispositivo. Consulta la{" "}
            <a href="https://www.amazon.es/gp/help/customer/display.html?nodeId=201909010" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">
              política de privacidad de Amazon
            </a>{" "}
            para más información.
          </p>

          <h2>8. Tus derechos</h2>
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

          <h2>9. Conservación de datos</h2>
          <p>
            Los datos del formulario de contacto se conservan el tiempo necesario para responder y, después, durante los plazos legales de prescripción. Los datos de análisis (Google Analytics 4) se conservan hasta 14 meses.
          </p>
        </div>
      </div>
    </>
  );
}
