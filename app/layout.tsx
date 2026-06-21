import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig } from "@/lib/seo";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata: Metadata = {
  metadataBase: new URL("https://lovequest-shindan.vercel.app"),
  title: {
    default: "ラブクエ診断 | 24問で恋愛タイプがわかる無料RPGジョブ診断",
    template: "%s | ラブクエ診断"
  },
  description: siteConfig.description,
  keywords: [
    "ラブクエ診断",
    "恋愛診断",
    "16タイプ診断",
    "恋愛タイプ診断",
    "RPGジョブ診断",
    "現代RPG風診断",
    "恋愛ジョブ"
  ],
  alternates: {
    canonical: "https://lovequest-shindan.vercel.app/"
  },
  openGraph: {
    title: "ラブクエ診断 | 24問で恋愛タイプがわかる無料RPGジョブ診断",
    description: siteConfig.description,
    url: "https://lovequest-shindan.vercel.app/",
    images: [
      {
        url: "https://lovequest-shindan.vercel.app/ogp/default-ogp.png",
        width: 1200,
        height: 630,
        alt: "ラブクエ診断 OGP画像"
      }
    ],
    siteName: siteConfig.name,
    type: "website",
    locale: "ja_JP"
  },
  twitter: {
    card: "summary_large_image",
    title: "ラブクエ診断 | 24問で恋愛タイプがわかる無料RPGジョブ診断",
    description: siteConfig.description,
    images: ["https://lovequest-shindan.vercel.app/ogp/default-ogp.png"]
  },
  verification: {
    google: "QeqUGUsDLKwIfSIaHDUB80eIPQpQwKCakMMg056Yhjw"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="fantasy-bg">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        {adsenseClient ? (
          <Script
            async
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            strategy="afterInteractive"
          />
        ) : null}
        <Header />
        <main className="relative z-10 px-4 pb-16 pt-4 sm:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
