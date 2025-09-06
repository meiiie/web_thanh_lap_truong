"use client";
import "./TopBar.css";

import { useRef, useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useViewTransition } from "@/hooks/useViewTransition";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

const TopBar = () => {
  const topBarRef = useRef(null);
  const { navigateWithTransition } = useViewTransition();
  let lastScrollY = 0;
  let isScrolling = false;

  useEffect(() => {
    const topBar = topBarRef.current;
    if (!topBar) return;

    const topBarHeight = topBar.offsetHeight;

    gsap.set(topBar, { y: 0 });

    const handleScroll = () => {
      if (isScrolling) return;

      isScrolling = true;
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 1 : -1;

      if (direction === 1 && currentScrollY > 50) {
        gsap.to(topBar, {
          y: -topBarHeight,
          duration: 1,
          ease: "power4.out",
        });
      } else if (direction === -1) {
        gsap.to(topBar, {
          y: 0,
          duration: 1,
          ease: "power4.out",
        });
      }

      lastScrollY = currentScrollY;

      setTimeout(() => {
        isScrolling = false;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (topBarRef.current) {
      gsap.set(topBarRef.current, { y: 0 });
    }
  });

  return (
    <div className="top-bar" ref={topBarRef}>
      <div className="top-bar-logo">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigateWithTransition("/");
          }}
        >
          <img src="/logos/Logo-truong.png" alt="Trường Đại học Hàng hải Việt Nam" />
        </a>
      </div>
      <div className="top-bar-nav">
        <nav className="top-nav-menu">
          {/* <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition("/");
            }}
            className="nav-link"
          >
            Trang chủ
          </a>
          <a
            href="/70-nam"
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition("/70-nam");
            }}
            className="nav-link"
          >
            70 Năm VMU
          </a> */}
          {/* <a
            href="/gioi-thieu"
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition("/gioi-thieu");
            }}
            className="nav-link"
          >
            Về trường
          </a> */}
          {/* <a
            href="/su-kien"
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition("/su-kien");
            }}
            className="nav-link"
          >
            Sự kiện
          </a> */}
        </nav>
      </div>
      <div className="top-bar-cta">
        <AnimatedButton label="Tham dự" route="/tham-gia" animate={false} />
      </div>
    </div>
  );
};

export default TopBar;
