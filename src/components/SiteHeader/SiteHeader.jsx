"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteNavigation } from "@/data/site-content";
import "./SiteHeader.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__shell">
        <Link href="/" className="site-header__brand" aria-label="Trang chủ VMU">
          <span className="site-header__logo">
            <Image
              src="/logos/Logo-truong.png"
              alt="Logo Trường Đại học Hàng hải Việt Nam"
              fill
              sizes="48px"
              className="site-header__logo-image"
            />
          </span>
          <span className="site-header__brand-copy">
            <span className="site-header__eyebrow">VMU 70 Năm</span>
            <strong>Trường Đại học Hàng hải Việt Nam</strong>
          </span>
        </Link>

        <nav className="site-header__nav" aria-label="Điều hướng chính">
          {siteNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <span className="site-header__date">01.04.2026</span>
          <Link href="/tham-gia" className="site-header__cta">
            Kết nối
          </Link>
          <button
            type="button"
            className={`site-header__toggle ${isOpen ? "is-open" : ""}`}
            aria-expanded={isOpen}
            aria-controls="site-mobile-menu"
            aria-label="Mở điều hướng"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="site-mobile-menu"
        className={`site-header__mobile ${isOpen ? "is-open" : ""}`}
      >
        <div className="site-header__mobile-inner">
          <p className="site-header__mobile-label">Điều hướng chính</p>
          {siteNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/tham-gia" className="site-header__mobile-cta">
            Đi tới Tham gia
          </Link>
        </div>
      </div>
    </header>
  );
}
