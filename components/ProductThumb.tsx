import Link from "next/link";
import type { Product } from "@/data/products";
import { syncedImage } from "@/lib/amazon-sync";

/** Imagen de la ficha: propia, oficial de Amazon sincronizada o, como último recurso, la de su categoría. */
export function productImageSrc(product: Product): string {
  return product.image ?? syncedImage(product) ?? `/images/products/${product.categorySlug}.jpg`;
}

/** Miniatura enlazada a la ficha para tarjetas de listado. Caja de altura fija para no mover la maquetación. */
export default function ProductThumb({ product }: { product: Product }) {
  return (
    <Link href={`/tienda/${product.categorySlug}/${product.slug}`} className="mb-3 block overflow-hidden rounded-lg bg-gray-50" tabIndex={-1}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={productImageSrc(product)} alt={product.name} width={400} height={160} loading="lazy" className="h-40 w-full object-contain" />
    </Link>
  );
}
