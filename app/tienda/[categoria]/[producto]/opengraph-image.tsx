import { ImageResponse } from "next/og";
import { products, getProductBySlug } from "@/data/products";

export const alt = "Análisis y opinión | Guía del Piscina";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ categoria: p.categorySlug, producto: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ categoria: string; producto: string }>;
}) {
  const { producto } = await params;
  const product = getProductBySlug(producto);
  const name = product?.name ?? "Producto";
  const description = product?.shortDescription ?? "Análisis y opinión 2025";
  const badge = product?.badge;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0284c7 0%, #075985 100%)",
          padding: "60px",
        }}
      >
        {/* Water wave decoration */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "100% 100% 0 0",
          }}
        />

        {/* Badge row */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "32px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.9)",
              borderRadius: "9999px",
              padding: "8px 22px",
              fontSize: "17px",
              fontWeight: "700",
            }}
          >
            Análisis 2025
          </div>
          {badge && (
            <div
              style={{
                background: "#f97316",
                color: "#ffffff",
                borderRadius: "9999px",
                padding: "8px 22px",
                fontSize: "17px",
                fontWeight: "700",
              }}
            >
              {badge}
            </div>
          )}
        </div>

        {/* Product name */}
        <div
          style={{
            fontSize: name.length > 40 ? "42px" : "54px",
            fontWeight: "900",
            color: "#ffffff",
            textAlign: "center",
            letterSpacing: "-0.5px",
            lineHeight: 1.15,
            marginBottom: "20px",
            maxWidth: "960px",
          }}
        >
          {name}
        </div>

        {/* Short description */}
        <div
          style={{
            fontSize: "21px",
            color: "rgba(255,255,255,0.78)",
            textAlign: "center",
            maxWidth: "820px",
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            right: "40px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          guiadelpiscina.com
        </div>
      </div>
    ),
    { ...size }
  );
}
