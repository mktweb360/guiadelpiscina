import type { MetadataRoute } from "next";
import { categories, products } from "@/data/products";

const BASE_URL = "https://www.guiadelpiscina.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${BASE_URL}`, lastModified: "2025-06-09", changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/blog`, lastModified: "2025-06-09", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/sobre-nosotros`, lastModified: "2025-06-01", changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/contacto`, lastModified: "2025-06-01", changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${BASE_URL}/aviso-legal`, lastModified: "2025-06-01", changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/politica-de-privacidad`, lastModified: "2025-06-01", changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/politica-de-cookies`, lastModified: "2025-06-01", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const articles = [
    { url: `${BASE_URL}/mejores-depuradoras-piscina`, lastModified: "2025-06-01", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/robot-limpiafondos-piscina`, lastModified: "2025-06-01", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/bomba-calor-piscina`, lastModified: "2025-06-09", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/muebles-jardin-terraza`, lastModified: "2025-06-01", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/pergola-terraza`, lastModified: "2025-06-01", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/sistema-riego-automatico`, lastModified: "2025-06-01", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/cesped-artificial-jardin`, lastModified: "2025-06-01", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/piscina-desmontable-grande`, lastModified: "2025-06-09", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/mantenimiento-piscina-desmontable`, lastModified: "2025-07-01", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/agua-piscina-verde`, lastModified: "2025-07-05", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/ph-piscina`, lastModified: "2025-07-10", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/mejor-clorador-salino-piscina`, lastModified: "2025-07-15", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/mejores-tumbonas-jardin`, lastModified: "2025-07-15", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/mejor-manguera-riego-jardin`, lastModified: "2025-07-15", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/escalera-piscina-desmontable`, lastModified: "2025-07-15", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/cubierta-piscina-desmontable`, lastModified: "2025-07-15", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/piscina-desmontable-grande-adultos`, lastModified: "2025-07-15", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/mejores-sombrillas-jardin`, lastModified: "2025-07-15", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const storeRoot = [
    { url: `${BASE_URL}/tienda`, lastModified: "2025-06-09", changeFrequency: "weekly" as const, priority: 0.9 },
  ];

  const storeCategories = categories.map((cat) => ({
    url: `${BASE_URL}/tienda/${cat.slug}`,
    lastModified: "2025-06-09",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const storeProducts = products.map((p) => ({
    url: `${BASE_URL}/tienda/${p.categorySlug}/${p.slug}`,
    lastModified: "2025-06-09",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articles, ...storeRoot, ...storeCategories, ...storeProducts];
}
