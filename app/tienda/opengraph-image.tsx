import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Tienda — Los mejores productos para tu piscina y jardín | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Tienda — Los mejores productos para tu piscina y jardín", kicker: "Tienda" });
}
