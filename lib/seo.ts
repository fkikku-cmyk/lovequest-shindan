import type { Metadata } from "next";

export const siteConfig = {
  name: "ラブクエ診断",
  description:
    "24問であなたの恋愛ジョブがわかる、現代RPG風の無料16タイプ恋愛診断サイトです。",
  defaultOgImage: "/ogp/default-ogp.png"
};

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "http://127.0.0.1:3000").replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
  type = "website"
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name}のOGP画像`
        }
      ],
      type,
      locale: "ja_JP"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
