import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import type { Product } from "@/data/products";


const CATEGORY_IMAGES: Record<string, string> = {
  "productos-quimicos": "/images/products/productos-quimicos.jpg",
  "bombas-filtros": "/images/products/bombas-filtros.jpg",
  "limpiafondos": "/images/products/limpiafondos.jpg",
  "accesorios": "/images/products/accesorios.jpg",
};

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const imgSrc = CATEGORY_IMAGES[product.categorySlug] ?? "/images/products/accesorios.jpg";
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <a href={amazonLink(product.asin)} target="_blank" rel="noopener noreferrer sponsored" className="block overflow-hidden bg-gray-50">
        <img src={imgSrc} alt={product.name} className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
      </a>
      {product.badge && (
        <div className="bg-cyan-600 text-white text-xs font-bold px-3 py-1 text-center">
          {product.badge}
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        {product.isHealth && (
          <div className="bg-cyan-50 border border-cyan-100 rounded-lg px-3 py-2 text-xs text-cyan-800 mb-3">
            🩺 Consulta con tu veterinario antes de cambiar la alimentación o tratamiento.
          </div>
        )}
        <h3 className="font-bold text-gray-900 text-base leading-tight mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-5 flex-1">{product.shortDescription}</p>
        <div className="space-y-2">
          <a
            href={amazonLink(product.asin)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-2.5 px-4 rounded-xl text-center transition-colors"
          >
            Ver precio en Amazon →
          </a>
          <Link
            href={`/tienda/${product.categorySlug}/${product.slug}`}
            className="block w-full border border-cyan-200 hover:border-cyan-400 text-cyan-700 font-semibold text-sm py-2 px-4 rounded-xl text-center transition-colors"
          >
            Ver análisis completo
          </Link>
        </div>
      </div>
    </div>
  );
}
