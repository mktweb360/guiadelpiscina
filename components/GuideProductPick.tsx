import Link from "next/link";
import { products, type Product } from "@/data/products";
import { amazonLink } from "@/lib/amazon";

/**
 * Productos de products.ts por slug, descartando los que no existen o están marcados `unavailable`.
 * Así una guía nunca enlaza a un producto retirado aunque su slug siga escrito en la página.
 */
export function availableBySlug(slugs: string[]): Product[] {
  return slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p) && !p?.unavailable);
}

/** Ficha breve de producto para guías de temporada: sin precio, sin valoraciones y sin distintivos. */
export default function GuideProductPick({ product, note }: { product: Product; note: string }) {
  const href = `/tienda/${product.categorySlug}/${product.slug}`;
  const img = product.image ?? `/images/products/${product.categorySlug}.jpg`;
  const specs = Object.entries(product.specs).slice(0, 3);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      <Link href={href} className="block overflow-hidden bg-gray-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={product.name} className="w-full h-40 object-cover" loading="lazy" />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-base leading-tight mb-2">
          <Link href={href} className="hover:text-sky-700">{product.name}</Link>
        </h3>
        <p className="text-gray-600 text-sm mb-3">{note}</p>
        {specs.length > 0 && (
          <ul className="text-xs text-gray-500 space-y-1 mb-4 flex-1">
            {specs.map(([k, v]) => (
              <li key={k}><span className="font-semibold text-gray-700">{k}:</span> {v}</li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2 mt-auto">
          <a
            href={amazonLink(product.asin)}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors"
          >
            Ver en Amazon →
          </a>
          <Link
            href={href}
            className="inline-block border border-sky-600 text-sky-700 hover:bg-sky-50 text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            Ver ficha
          </Link>
        </div>
      </div>
    </div>
  );
}
