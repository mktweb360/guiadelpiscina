import { ImageResponse } from "next/og";
import { categories } from "@/data/products";

export const alt = "Guía de compra y comparativa | Guía del Piscina";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return categories.map((cat) => ({ categoria: cat.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const cat = categories.find((c) => c.slug === categoria);
  const name = cat?.name ?? "Categoría";
  const icon = cat?.icon ?? "🛒";
  const description = cat?.description ?? "Guía de compra y comparativa 2025";

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

        {/* Badge */}
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.9)",
            borderRadius: "9999px",
            padding: "8px 22px",
            fontSize: "18px",
            fontWeight: "700",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          Guía de Compra 2025
        </div>

        {/* Icon */}
        <div style={{ fontSize: "72px", marginBottom: "20px" }}>{icon}</div>

        {/* Category name */}
        <div
          style={{
            fontSize: "58px",
            fontWeight: "900",
            color: "#ffffff",
            textAlign: "center",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            marginBottom: "14px",
          }}
        >
          {name}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.8)",
            textAlign: "center",
            maxWidth: "800px",
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
