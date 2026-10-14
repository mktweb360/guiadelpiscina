import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Sobre nosotros | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Sobre nosotros", kicker: "Sobre nosotros" });
}
