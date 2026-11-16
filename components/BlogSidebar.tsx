"use client";

import AdSenseAd from "@/components/AdSenseAd";
import ArticleToc from "@/components/ArticleToc";
import { useArticleHeadings } from "@/components/ArticleTocAuto";
import MktPromo from "@/components/MktPromo";

/**
 * Barra lateral de los artículos (solo escritorio): índice de anclas generado desde los h2,
 * CTA a la tienda, hueco de AdSense (inactivo hasta la aprobación) y una promo de Mkt Web 360.
 */
export default function BlogSidebar({ ctaHref, ctaText }: { ctaHref?: string; ctaText?: string }) {
  const items = useArticleHeadings();
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-6 space-y-5 max-h-[calc(100vh-3rem)] overflow-y-auto pr-1">
        <ArticleToc items={items} variant="side" />
        {ctaHref && ctaText && (
          <div className="rounded-xl bg-sky-50 border border-sky-100 p-5 text-center">
            <p className="text-sm font-semibold text-sky-800 mb-3">¿Buscas el mejor producto?</p>
            <a href={ctaHref} className="inline-flex items-center gap-1 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm px-4 py-2 rounded-xl transition-colors">
              {ctaText}
            </a>
          </div>
        )}
        <AdSenseAd placement="lateral" />
        <MktPromo />
      </div>
    </aside>
  );
}
