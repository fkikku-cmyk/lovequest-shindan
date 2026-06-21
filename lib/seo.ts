import type { Metadata } from "next";

export const siteConfig = {
  name: "ラブクエ診断",
  url: "https://lovequest-shindan.vercel.app",
  description:
    "ラブクエ診断は、24問で恋愛タイプがわかる無料の恋愛診断サイトです。16タイプの恋愛ジョブで、あなたの恋愛傾向を現代RPG風に楽しく診断できます。",
  defaultOgImage: "/ogp/default-ogp.png"
};

export function getSiteUrl() {
  const configuredUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  if (configuredUrl && configuredUrl === siteConfig.url) {
    return configuredUrl;
  }

  return siteConfig.url;
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return null;
  }

  const withProtocol = value.startsWith("http://") || value.startsWith("https://") ? value : `https://${value}`;

  try {
    const url = new URL(withProtocol);
    return url.origin.replace(/\/$/, "");
  } catch {
    return null;
  }
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
      canonical: absoluteUrl(path)
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl(image),
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
      images: [absoluteUrl(image)]
    }
  };
}
