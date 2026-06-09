import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies — Guía del Piscina",
  description: "Política de cookies de Guía del Piscina. Qué cookies utilizamos, para qué y cómo puedes gestionarlas.",
  alternates: { canonical: "https://www.guiadelpiscina.com/politica-de-cookies" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
    { "@type": "ListItem", position: 2, name: "Política de cookies", item: "https://www.guiadelpiscina.com/politica-de-cookies" },
  ],
};

export default function PoliticaCookiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Política de cookies</h1>
        <p className="text-sm text-gray-400 mb-8">Última actualización: junio de 2025</p>

        <div className="prose">
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para recordar tus preferencias, mejorar tu experiencia y mostrar publicidad relevante.
          </p>

          <h2>2. Cookies que utilizamos</h2>

          <h3>2.1 Cookies técnicas (siempre activas)</h3>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>guiadelpiscina_consent</code></td>
                <td>Guarda tus preferencias de cookies</td>
                <td>1 año</td>
              </tr>
            </tbody>
          </table>

          <h3>2.2 Cookies de publicidad (requieren consentimiento)</h3>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Propietario</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>__gads</code>, <code>__gpi</code></td>
                <td>Google</td>
                <td>Publicidad personalizada (AdSense)</td>
                <td>13 meses</td>
              </tr>
              <tr>
                <td><code>NID</code>, <code>IDE</code></td>
                <td>Google</td>
                <td>Medición y personalización de anuncios</td>
                <td>6 meses</td>
              </tr>
              <tr>
                <td><code>session-id</code>, <code>ubid-acbes</code></td>
                <td>Amazon</td>
                <td>Seguimiento de afiliados</td>
                <td>Sesión / 365 días</td>
              </tr>
            </tbody>
          </table>

          <h2>3. Cómo gestionar las cookies</h2>
          <p>
            Puedes gestionar tus preferencias de cookies en cualquier momento a través de nuestro <strong>panel de cookies</strong> (que aparece en tu primera visita) o mediante la configuración de tu navegador:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <h2>4. Cookies de terceros</h2>
          <p>
            <strong>Google AdSense</strong> (ca-pub-6063067965030118) puede instalar cookies para personalizar los anuncios. Más información en la{" "}
            <a href="https://policies.google.com/technologies/ads" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Política de publicidad de Google
            </a>
            .
          </p>
          <p>
            <strong>Amazon Associates</strong> puede instalar cookies de seguimiento cuando haces clic en nuestros enlaces de afiliado. Más información en la{" "}
            <a href="https://www.amazon.es/gp/help/customer/display.html?nodeId=201909010" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Política de privacidad de Amazon
            </a>
            .
          </p>

          <h2>5. Más información</h2>
          <p>
            Para más información sobre el tratamiento de tus datos personales, consulta nuestra{" "}
            <a href="/politica-de-privacidad" className="text-sky-600 hover:underline">
              Política de privacidad
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
