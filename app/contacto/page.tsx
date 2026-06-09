import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Guía del Piscina",
  description: "Contacta con el equipo de Guía del Piscina para consultas, colaboraciones o sugerencias.",
  alternates: { canonical: "https://www.guiadelpiscina.com/contacto" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
    { "@type": "ListItem", position: 2, name: "Contacto", item: "https://www.guiadelpiscina.com/contacto" },
  ],
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contacto</h1>
        <p className="text-gray-500 mb-8">
          ¿Tienes alguna pregunta, sugerencia o propuesta de colaboración? Escríbenos y te responderemos en menos de 48 horas.
        </p>

        <div className="bg-sky-50 border border-sky-100 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Información de contacto</h2>
          <p className="text-gray-700 mb-1">
            <strong>Empresa:</strong> Mkt Web 360 SLU
          </p>
          <p className="text-gray-700 mb-1">
            <strong>CIF:</strong> B87679304
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@guiadelpiscina.com" className="text-sky-600 hover:underline">
              info@guiadelpiscina.com
            </a>
          </p>
          <p className="text-gray-700">
            <strong>Web:</strong>{" "}
            <a href="https://www.guiadelpiscina.com" className="text-sky-600 hover:underline">
              www.guiadelpiscina.com
            </a>
          </p>
        </div>

        <form className="space-y-5" action="mailto:info@guiadelpiscina.com" method="get">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Motivo del contacto"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="body"
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Enviar mensaje
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-4">
          Al enviar este formulario aceptas nuestra política de privacidad. No compartiremos tus datos con terceros.
        </p>
      </div>
    </>
  );
}
