import { siteLastModified, siteUrl } from "@/data/seo";

const routes = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
    images: ["/vmu/official/home-hero.jpg"],
  },
  {
    path: "/gioi-thieu",
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/vmu/official/event-3.jpg"],
  },
  {
    path: "/su-kien",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/vmu/official/event-1.jpg"],
  },
  {
    path: "/tam-nhin",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/sample-space/hero.jpg"],
  },
  {
    path: "/thu-vien",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/archive/archive-10.jpg"],
  },
  {
    path: "/tham-gia",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/contact/contact-img.jpg"],
  },
];

export default function sitemap() {
  return routes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified: siteLastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: route.images.map((image) => new URL(image, siteUrl).toString()),
  }));
}
