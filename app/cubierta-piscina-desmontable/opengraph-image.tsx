import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Mejor cubierta para piscina desmontable — Guía completa | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Mejor cubierta para piscina desmontable — Guía completa", kicker: "Guía" });
}
