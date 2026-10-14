import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Las mejores sombrillas de jardín — Guía de compra | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Las mejores sombrillas de jardín — Guía de compra", kicker: "Guía" });
}
