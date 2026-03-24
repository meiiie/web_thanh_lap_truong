import Link from "next/link";
import { siteContact, siteNavigation } from "@/data/site-content";
import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__col">
          <span className="site-footer__label">Trường</span>
          <Link href="/">Trang chủ</Link>
          <Link href="/gioi-thieu">Giới thiệu</Link>
          <Link href="/tam-nhin">Tầm nhìn</Link>
        </div>

        <div className="site-footer__col">
          <span className="site-footer__label">Sự kiện</span>
          <Link href="/su-kien">Chương trình</Link>
          <Link href="/thu-vien">Thư viện</Link>
          <Link href="/tham-gia">Tham gia</Link>
        </div>

        <div className="site-footer__col">
          <span className="site-footer__label">Liên hệ</span>
          <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
          <a href="tel:+842253829109">{siteContact.phonePrimary}</a>
          <span>{siteContact.address}</span>
        </div>

        <div className="site-footer__col">
          <span className="site-footer__label">Thông tin</span>
          <a href={siteContact.website} target="_blank" rel="noreferrer">
            vimaru.edu.vn
          </a>
          <a href={siteContact.admissionsSite} target="_blank" rel="noreferrer">
            Tuyển sinh
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© 2026 Trường Đại học Hàng hải Việt Nam</span>
        <span>HoLiLiHu — The Wiii Lab</span>
      </div>
    </footer>
  );
}
