import "./globals.css";
import "./vmu-colors.css";

import ClientLayout from "@/client-layout";
import ClientOnly from "@/components/ClientOnly/ClientOnly";
import StructuredData from "@/components/StructuredData/StructuredData";
import TopBar from "@/components/TopBar/TopBar";
import {
  defaultOgImage,
  siteCopyright,
  siteCreator,
  siteDescription,
  siteKeywords,
  siteLanguage,
  siteLocale,
  siteName,
  sitePublisher,
  siteThemeColor,
  siteTitle,
  siteUrl,
} from "@/data/seo";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: siteKeywords,
  authors: [{ name: siteCreator }],
  creator: siteCreator,
  publisher: sitePublisher,
  category: "education",
  classification: "Education",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: siteLocale,
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [defaultOgImage.url],
  },
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "default",
  },
  other: {
    copyright: siteCopyright,
    "content-language": siteLanguage,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteThemeColor,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout
          topBar={
            <ClientOnly>
              <TopBar />
            </ClientOnly>
          }
        >
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
