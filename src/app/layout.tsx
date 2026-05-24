import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Денис Загоровський — Student Software Engineer",
    template: "%s | Денис Загоровський"
  },
  description:
    "Сучасне портфоліо студента-програміста Дениса Загоровського: навички, освіта, проєкти та контакти.",
  keywords: [
    "Денис Загоровський",
    "Denys Zahorovskyi",
    "portfolio",
    "software engineering",
    "React",
    "Next.js",
    "TypeScript",
    "Житомирська політехніка"
  ],
  authors: [{ name: siteConfig.fullNameUk }],
  creator: siteConfig.fullNameUk,
  alternates: {
    canonical: siteConfig.baseUrl
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    alternateLocale: "en_US",
    url: siteConfig.baseUrl,
    title: "Денис Загоровський — Student Software Engineer",
    description:
      "Портфоліо студента спеціальності Інженерія програмного забезпечення з фокусом на modern frontend та backend foundations.",
    siteName: "Denys Zahorovskyi Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Денис Загоровський — Student Software Engineer",
    description:
      "Сучасне портфоліо з проєктами, навичками та контактами."
  },
  robots: {
    index: true,
    follow: true
  },
  manifest: "/mysiteportfolio2/site.webmanifest"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
