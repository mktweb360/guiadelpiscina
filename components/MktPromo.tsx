"use client";

import { usePathname } from "next/navigation";
import { pickPromo, promoUrl } from "@/lib/promo";

/** Promoción propia de Mkt Web 360 (una por página, según la ruta). */
export default function MktPromo({ className = "" }: { className?: string }) {
  const slug = (usePathname() ?? "/").replace(/^\/+|\/+$/g, "") || "inicio";
  const promo = pickPromo(slug);
  const href = promoUrl(promo, "guiadelpiscina.com", slug);
  return (
    <aside aria-label="Mkt Web 360" className={`rounded-xl border border-violet-100 bg-violet-50/60 p-4 ${className}`}>
      <p className="text-[11px] font-bold uppercase tracking-wide text-violet-700 mb-1">Mkt Web 360 · Nuestra agencia</p>
      <p className="text-sm font-bold text-gray-900 mb-1">{promo.title}</p>
      <p className="text-xs text-gray-600 leading-relaxed mb-3">{promo.text}</p>
      <a href={href} target="_blank" rel="noopener" className="text-sm font-semibold text-violet-700 hover:text-violet-900">{promo.cta} →</a>
    </aside>
  );
}
