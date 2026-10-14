import { ImageResponse } from "next/og";

// Imagen Open Graph común (1200×630) para guías, blog y páginas fijas.
// Cumplimiento Amazon Associates: nunca precios, valoraciones ni «más vendido».

export const ogSize = { width: 1200, height: 630 };

export function renderOgImage({ title, kicker = "Guía" }: { title: string; kicker?: string }) {
  const text = title.length > 95 ? title.slice(0, 92).trimEnd() + "…" : title;
  const fontSize = text.length > 70 ? 54 : text.length > 45 ? 62 : 70;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0284c7 0%, #075985 100%)",
          padding: "64px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "100% 100% 0 0",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ fontSize: "44px" }}>🏊</div>
          <div style={{ fontSize: "30px", fontWeight: 800, color: "#ffffff" }}>Guía del Piscina</div>
          <div
            style={{
              marginLeft: "12px",
              background: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.92)",
              borderRadius: "9999px",
              padding: "6px 20px",
              fontSize: "20px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            {kicker}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: `${fontSize}px`,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-1px",
            lineHeight: 1.12,
            maxWidth: "1040px",
          }}
        >
          {text}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "22px", color: "rgba(255,255,255,0.8)" }}>Piscinas · Jardín · Terraza</div>
          <div style={{ fontSize: "22px", color: "rgba(255,255,255,0.65)" }}>guiadelpiscina.com</div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
