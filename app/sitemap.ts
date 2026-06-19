import type { MetadataRoute } from "next";
import { resultList } from "@/data/results";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/quiz",
  "/types",
  "/about",
  "/privacy",
  "/contact",
  "/terms",
  "/disclaimer"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  })) satisfies MetadataRoute.Sitemap;

  const typePages = resultList.flatMap((result) => [
    {
      url: absoluteUrl(`/types/${result.code}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: absoluteUrl(`/result/${result.code}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }
  ]);

  return [...pages, ...typePages];
}
