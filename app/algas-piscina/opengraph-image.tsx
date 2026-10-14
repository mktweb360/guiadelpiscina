import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Algas en la piscina: cómo eliminarlas y evitar que vuelvan | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Algas en la piscina: cómo eliminarlas y evitar que vuelvan", kicker: "Guía" });
}
