import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Agua piscina verde: causas y solución definitiva | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Agua piscina verde: causas y solución definitiva", kicker: "Guía" });
}
