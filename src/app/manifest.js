import { siteDescription, siteName, siteThemeColor } from "@/data/seo";

export default function manifest() {
  return {
    name: `${siteName} | Trường Đại học Hàng hải Việt Nam`,
    short_name: siteName,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f7fb",
    theme_color: siteThemeColor,
    orientation: "portrait",
    scope: "/",
    lang: "vi",
    categories: ["education", "university", "event"],
    icons: [
      {
        src: "/logos/logo-70-nam-200.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/logos/logo-70-nam-200.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    screenshots: [
      {
        src: "/vmu/official/home-hero.jpg",
        sizes: "1280x426",
        type: "image/jpeg",
        form_factor: "wide",
      },
    ],
  };
}
