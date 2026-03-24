import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Tham gia",
  description:
    "Thông tin liên hệ và đầu mối kết nối dành cho khách mời, cựu sinh viên, đối tác và người quan tâm tới lễ kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam.",
  path: "/tham-gia",
  image: "/contact/contact-img.jpg",
  keywords: ["tham gia sự kiện VMU", "liên hệ VMU", "kết nối cựu sinh viên"],
});

export default function ThamGiaLayout({ children }) {
  return children;
}
