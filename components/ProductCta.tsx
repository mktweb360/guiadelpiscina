import { products } from "@/data/products";
import { amazonLink } from "@/lib/amazon";
import { syncedImage } from "@/lib/amazon-sync";

/**
 * Botón de compra de una guía con la imagen del producto al lado. Busca la ficha por ASIN en el catálogo;
 * si no está, usa la imagen genérica de la categoría o ninguna y deja solo el botón.
 */
export default function ProductCta({ asin, label }: { asin: string; label: string }) {
  const p = products.find((x) => x.asin === asin || (x.offers ?? []).some((o) => o.store === "amazon" && o.asin === asin));
  const img = p ? (p.image ?? syncedImage(p) ?? `/images/products/${p.categorySlug}.jpg`) : undefined;
  return (
    <div className="not-prose my-4 flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
      {img && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={img} alt={p?.name ?? ""} width={96} height={96} loading="lazy" className="h-24 w-24 shrink-0 rounded-lg bg-gray-50 object-contain" />
      )}
      <div className="min-w-0">
        {p && <p className="mb-2 text-sm font-semibold leading-snug text-gray-800">{p.name}</p>}
        <a
          href={amazonLink(asin)}
          target="_blank"
          rel="nofollow noopener noreferrer sponsored"
          className="inline-block rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
