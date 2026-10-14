import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Mejores muebles de jardín y terraza — Guía completa | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Mejores muebles de jardín y terraza — Guía completa", kicker: "Guía" });
}
