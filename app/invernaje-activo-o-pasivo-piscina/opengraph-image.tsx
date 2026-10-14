import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Invernaje activo o pasivo en la piscina: cuál elegir y cómo hacerlo (2026) | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Invernaje activo o pasivo en la piscina: cuál elegir y cómo hacerlo (2026)", kicker: "Guía" });
}
