import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Giới thiệu",
  description:
    "Hồ sơ giới thiệu Trường Đại học Hàng hải Việt Nam: lịch sử từ năm 1956, vị thế trường trọng điểm quốc gia, thành tựu, lĩnh vực đào tạo và bản sắc gắn với kinh tế biển.",
  path: "/gioi-thieu",
  image: "/vmu/official/event-3.jpg",
  keywords: ["giới thiệu VMU", "lịch sử VMU", "hồ sơ trường"],
});

export default function GioiThieuLayout({ children }) {
  return children;
}
