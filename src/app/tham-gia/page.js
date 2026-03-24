import Image from "next/image";

import "./contact.css";

import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Nav from "@/components/Nav/Nav";
import { siteContact } from "@/data/site-content";

const contactLinks = [
  {
    title: "Thông tin chung",
    lines: [siteContact.email, siteContact.phonePrimary, siteContact.phoneSecondary],
  },
  {
    title: "Kênh chính thức",
    lines: [siteContact.website, siteContact.admissionsSite, siteContact.facebook],
  },
  {
    title: "Địa chỉ trường",
    lines: ["484 Lạch Tray", "P. Lê Chân, TP. Hải Phòng", "Việt Nam"],
  },
  {
    title: "Ghi chú",
    lines: [
      "Microsite ưu tiên giới thiệu trường và mốc 70 năm thành lập ngày 01/04/2026.",
      siteContact.sourceNote,
    ],
  },
];

export default function Page() {
  return (
    <>
      <Nav />
      <div className="page contact">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-col">
              <div className="contact-hero-header">
                <h1>Liên hệ và kết nối cùng VMU</h1>
              </div>
              <div className="contact-copy-year">
                <h1>70 NĂM</h1>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-info">
                {contactLinks.map((block) => (
                  <div className="contact-info-block" key={block.title}>
                    <p>{block.title}</p>
                    {block.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                ))}
              </div>
              <div className="contact-img">
                <Image
                  src="/contact/contact-img.jpg"
                  alt="Không gian Trường Đại học Hàng hải Việt Nam"
                  width={1000}
                  height={667}
                  sizes="(max-width: 1000px) 100vw, 40vw"
                  priority={false}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
}
