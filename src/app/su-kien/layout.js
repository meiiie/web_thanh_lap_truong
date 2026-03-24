import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Sự kiện",
  description:
    "Thông tin chương trình lễ kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam ngày 01/04/2026: lịch trình, điểm nhấn nội dung và các hoạt động kết nối cộng đồng VMU.",
  path: "/su-kien",
  image: "/vmu/official/event-1.jpg",
  keywords: ["sự kiện VMU 70 năm", "lịch trình 01 04 2026", "kỷ niệm 70 năm VMU"],
});

export default function SuKienLayout({ children }) {
  return children;
}
