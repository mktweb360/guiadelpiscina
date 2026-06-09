import Link from "next/link";

const navLinks = [
  { href: "/tienda", label: "Tienda" },
  { href: "/blog", label: "Blog" },
  { href: "/mejores-depuradoras-piscina", label: "Depuradoras" },
  { href: "/robot-limpiafondos-piscina", label: "Robots" },
  { href: "/bomba-calor-piscina", label: "Bombas de calor" },
  { href: "/muebles-jardin-terraza", label: "Jardín" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
];

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-sky-600 shrink-0">
            <span className="text-2xl">🏊</span>
            <span>Guía del Piscina</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1 overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/blog"
            className="md:hidden px-4 py-2 bg-sky-500 text-white rounded-lg text-sm font-semibold"
          >
            Artículos
          </Link>
        </div>
      </div>
    </header>
  );
}
