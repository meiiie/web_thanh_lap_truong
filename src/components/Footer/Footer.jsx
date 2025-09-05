"use client";
import "./Footer.css";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useViewTransition } from "@/hooks/useViewTransition";
import Copy from "../Copy/Copy";

import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiDribbbleLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { navigateWithTransition } = useViewTransition();
  const socialIconsRef = useRef(null);

  useGSAP(
    () => {
      if (!socialIconsRef.current) return;

      const icons = socialIconsRef.current.querySelectorAll(".icon");
      gsap.set(icons, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: socialIconsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(icons, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: -0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: socialIconsRef }
  );

  return (
    <div className="footer">
      <div className="footer-meta">
        <div className="container footer-meta-header">
          <div className="footer-meta-col">
            <div className="footer-meta-block">
              <div className="footer-meta-logo">
                <Copy delay={0.1}>
                  <h3 className="lg">Trường Đại học Hàng hải Việt Nam</h3>
                </Copy>
              </div>
              <Copy delay={0.2}>
                <h2>Đào tạo nguồn nhân lực chất lượng cao cho ngành hàng hải Việt Nam.</h2>
              </Copy>
            </div>
          </div>
          <div className="footer-meta-col">
            <div className="footer-nav-links">
              <Copy delay={0.1}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/");
                  }}
                >
                  <h3>Trang chủ</h3>
                </a>
                <a
                  href="/gioi-thieu"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/gioi-thieu");
                  }}
                >
                  <h3>Về trường</h3>
                </a>
                <a
                  href="/su-kien"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/su-kien");
                  }}
                >
                  <h3>Sự kiện</h3>
                </a>
                <a
                  href="/tam-nhin"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/tam-nhin");
                  }}
                >
                  <h3>Tầm nhìn</h3>
                </a>
                <a
                  href="/thu-vien"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/thu-vien");
                  }}
                >
                  <h3>Thư viện</h3>
                </a>
                <a
                  href="/tham-gia"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/tham-gia");
                  }}
                >
                  <h3>Tham dự</h3>
                </a>
              </Copy>
            </div>
          </div>
        </div>
        <div className="container footer-socials">
          <div className="footer-meta-col">
            <div className="footer-socials-wrapper" ref={socialIconsRef}>
              <div className="icon">
                <RiLinkedinBoxLine />
              </div>
              <div className="icon">
                <RiInstagramLine />
              </div>
              <div className="icon">
                <RiDribbbleLine />
              </div>
              <div className="icon">
                <RiYoutubeLine />
              </div>
            </div>
          </div>
          <div className="footer-meta-col">
            <Copy delay={0.1}>
              <p>
                Chúng tôi tin rằng giáo dục không chỉ là truyền đạt kiến thức mà còn là 
                xây dựng nền tảng vững chắc cho tương lai của mỗi sinh viên.
              </p>
            </Copy>
          </div>
        </div>
      </div>
      <div className="footer-outro">
        <div className="container">
          <div className="footer-header">
            <img src="/logos/vimaru-logo.svg" alt="Trường Đại học Hàng hải Việt Nam" />
          </div>
          <div className="footer-copyright">
            <p>
              Địa chỉ: 484 Lạch Tray, Ngô Quyền, Hải Phòng
            </p>
            <p>Điện thoại: 0225.3.747.024 | Email: info@vimaru.edu.vn</p>
            <p>Bản quyền &copy; 2025 The Wiii Lab</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
