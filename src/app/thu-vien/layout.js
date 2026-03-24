import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Thư viện",
  description:
    "Thư viện tư liệu và hình ảnh về lịch sử, cơ sở vật chất, cộng đồng và các dấu mốc phát triển của Trường Đại học Hàng hải Việt Nam.",
  path: "/thu-vien",
  image: "/archive/archive-10.jpg",
  keywords: ["thư viện ảnh VMU", "tư liệu VMU", "hình ảnh trường hàng hải"],
});

export default function ThuVienLayout({ children }) {
  return children;
}
