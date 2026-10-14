import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Mejores piscinas desmontables grandes para adultos | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Mejores piscinas desmontables grandes para adultos", kicker: "Guía" });
}
