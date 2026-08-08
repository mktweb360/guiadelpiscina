import { ImageResponse } from "next/og";

export const alt = "Guía del Piscina — Piscinas, Jardín y Terraza";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
            height: "120px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "100% 100% 0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "-5%",
            right: "-5%",
            height: "80px",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "100% 100% 0 0",
          }}
        />

        {/* Icon */}
        <div style={{ fontSize: "80px", marginBottom: "24px" }}>🏊</div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "900",
            color: "#ffffff",
            textAlign: "center",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Guía del Piscina
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "26px",
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            fontWeight: "400",
          }}
        >
          Piscinas · Jardín · Terraza
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
