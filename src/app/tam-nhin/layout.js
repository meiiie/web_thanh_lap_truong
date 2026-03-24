import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Tầm nhìn",
  description:
    "Tầm nhìn 2030 - 2045 của VMU với định hướng phát triển thành trung tâm đào tạo và nghiên cứu hàng hải, kinh tế biển có năng lực cạnh tranh trong khu vực.",
  path: "/tam-nhin",
  image: "/sample-space/hero.jpg",
  keywords: ["tầm nhìn VMU", "chiến lược 2030 2045", "phát triển kinh tế biển"],
});

export default function TamNhinLayout({ children }) {
  return children;
}
