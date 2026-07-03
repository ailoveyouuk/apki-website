import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/product", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/case-studies", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/quality-compliance", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/company", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/modern-slavery-statement", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
