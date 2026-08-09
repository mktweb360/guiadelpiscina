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
          <Link href="/" className="flex items-center shrink-0">
            <svg viewBox="0 0 250 44" height="36" xmlns="http://www.w3.org/2000/svg" aria-label="GuíaDeLaPiscina">
              <defs>
                <linearGradient id="gp-g" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7dd3fc"/>
                  <stop offset="100%" stopColor="#0284c7"/>
                </linearGradient>
              </defs>
              <rect x="0" y="2" width="40" height="40" rx="10" fill="url(#gp-g)"/>
              <path d="M7 14 Q12 10 17 14 Q22 18 27 14 Q32 10 37 14" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M7 21 Q12 17 17 21 Q22 25 27 21 Q32 17 37 21" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M7 28 Q12 24 17 28 Q22 32 27 28 Q32 24 37 28" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <text x="50" y="30" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" fontWeight="800" fontSize="17" fill="#0369a1">GuíaDeLaPiscina</text>
              <text x="233" y="30" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" fontWeight="400" fontSize="12" fill="#94a3b8">.com</text>
            </svg>
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
