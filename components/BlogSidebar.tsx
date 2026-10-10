"use client";

import AdSenseAd from "@/components/AdSenseAd";

/**
 * Sidebar temático para artículos del blog.
 * Solo visible en desktop (hidden lg:block).
 * Contiene: 1 anuncio vertical AdSense (no intrusivo) + espacio para CTA.
 */
export default function BlogSidebar({ ctaHref, ctaText }: {
  ctaHref?: string;
  ctaText?: string;
}) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-6 space-y-6">
        <AdSenseAd placement="lateral" />
        {ctaHref && ctaText && (
          <div className="rounded-xl bg-sky-50 border border-sky-100 p-5 text-center">
            <p className="text-sm font-semibold text-sky-800 mb-3">¿Buscas el mejor producto?</p>
            <a
              href={ctaHref}
              className="inline-flex items-center gap-1 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm px-4 py-2 rounded-xl transition-colors"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}
