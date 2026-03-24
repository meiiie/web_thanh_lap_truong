"use client";

import "./Footer.css";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  RiFacebookCircleLine,
  RiGlobalLine,
  RiGraduationCapLine,
  RiMailLine,
} from "react-icons/ri";

import { siteContact, siteNavigation } from "@/data/site-content";
import { siteCopyright } from "@/data/seo";
import { useViewTransition } from "@/hooks/useViewTransition";
import Copy from "../Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const externalLinks = [
  {
    href: siteContact.website,
    label: "Website chính thức",
    icon: <RiGlobalLine />,
  },
  {
    href: siteContact.admissionsSite,
    label: "Tuyển sinh VMU",
    icon: <RiGraduationCapLine />,
  },
  {
    href: siteContact.facebook,
    label: "Facebook VMU",
    icon: <RiFacebookCircleLine />,
  },
  {
    href: `mailto:${siteContact.email}`,
    label: "Email VMU",
    icon: <RiMailLine />,
  },
];

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
                <h2>
                  Đào tạo nguồn nhân lực chất lượng cao cho ngành hàng hải Việt Nam.
                </h2>
              </Copy>
            </div>
          </div>
          <div className="footer-meta-col">
            <div className="footer-nav-links">
              <Copy delay={0.1}>
                {siteNavigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      navigateWithTransition(item.href);
                    }}
                  >
                    <h3>{item.label}</h3>
                  </a>
                ))}
              </Copy>
            </div>
          </div>
        </div>
        <div className="container footer-socials">
          <div className="footer-meta-col">
            <div className="footer-socials-wrapper" ref={socialIconsRef}>
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  className="icon"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-meta-col">
            <Copy delay={0.1}>
              <p className="footer-source-note">{siteContact.sourceNote}</p>
            </Copy>
          </div>
        </div>
      </div>
      <div className="footer-outro">
        <div className="container">
          <div className="footer-header">
            <img
              src="/logos/vimaru-logo.svg"
              alt="VIMARU — Trường Đại học Hàng hải Việt Nam"
            />
          </div>
          <div className="footer-copyright">
            <p>{siteContact.address}</p>
            <p>
              Điện thoại: {siteContact.phonePrimary} / {siteContact.phoneSecondary}
              {" | "}Email: {siteContact.email}
            </p>
            <p>{siteCopyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
