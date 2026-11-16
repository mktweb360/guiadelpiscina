"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GUIDES } from "@/lib/guides";

/** Enlazado interno: ventana circular desde la posición del artículo, para que todos reciban enlaces entrantes. */
export default function MoreGuides({ className = "" }: { className?: string }) {
  const path = "/" + ((usePathname() ?? "/").replace(/^\/+|\/+$/g, ""));
  const idx = GUIDES.findIndex((g) => g.href === path);
  if (idx < 0) return null;
  const me = GUIDES[idx];
  const circular = [...GUIDES.slice(idx + 1), ...GUIDES.slice(0, idx)];
  const picks = [
    ...circular.filter((g) => g.category === me.category),
    ...circular.filter((g) => g.category !== me.category),
  ].slice(0, 6);
  return (
    <nav aria-label="Más guías" className={`rounded-xl border border-gray-200 bg-white p-5 ${className}`}>
      <h2 className="text-lg font-extrabold text-gray-900 mb-3">Más guías de piscina y jardín</h2>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        {picks.map((g) => (
          <li key={g.href}>
            <Link href={g.href} className="text-sm text-cyan-700 hover:text-cyan-900 hover:underline">{g.title}</Link>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm"><Link href="/blog" className="font-semibold text-cyan-700 hover:text-cyan-900">Ver todas las guías →</Link></p>
    </nav>
  );
}
