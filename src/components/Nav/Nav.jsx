"use client";

import "./Nav.css";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitType from "split-type";

import { siteContact } from "@/data/site-content";
import MenuBtn from "../MenuBtn/MenuBtn";
import { useViewTransition } from "@/hooks/useViewTransition";

const readableLink = (value) =>
  value.replace(/^https?:\/\//, "").replace(/\/$/, "");

const Nav = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const menuRef = useRef(null);
  const isInitializedRef = useRef(false);
  const splitTextRefs = useRef([]);

  const { navigateWithTransition } = useViewTransition();

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  useLayoutEffect(() => {
    if (!menuRef.current) return;

    const menu = menuRef.current;

    splitTextRefs.current.forEach((split) => {
      if (split.revert) split.revert();
    });
    splitTextRefs.current = [];

    gsap.set(menu, {
      clipPath: "circle(0% at 50% 50%)",
      pointerEvents: "none",
    });

    const textElements = menu.querySelectorAll("h2, p");

    textElements.forEach((element) => {
      const split = SplitType.create(element, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
      });

      gsap.set(split.lines, { y: "120%" });
      split.lines.forEach((line) => {
        line.style.pointerEvents = "auto";
      });

      splitTextRefs.current.push(split);
    });

    isInitializedRef.current = true;

    return () => {
      splitTextRefs.current.forEach((split) => {
        if (split.revert) split.revert();
      });
      splitTextRefs.current = [];
      isInitializedRef.current = false;
    };
  }, []);

  const animateMenu = useCallback((open) => {
    if (!menuRef.current) return;

    const menu = menuRef.current;
    setIsAnimating(true);

    if (open) {
      document.body.classList.add("menu-open");

      gsap.to(menu, {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power3.out",
        duration: 1.35,
        onStart: () => {
          menu.style.pointerEvents = "all";
          splitTextRefs.current.forEach((split, index) => {
            gsap.to(split.lines, {
              y: "0%",
              stagger: 0.05,
              delay: 0.28 + index * 0.06,
              duration: 0.9,
              ease: "power4.out",
            });
          });
        },
        onComplete: () => {
          setIsAnimating(false);
        },
      });
      return;
    }

    const textTimeline = gsap.timeline({
      onStart: () => {
        gsap.to(menu, {
          clipPath: "circle(0% at 50% 50%)",
          ease: "power3.out",
          duration: 0.85,
          delay: 0.4,
          onComplete: () => {
            menu.style.pointerEvents = "none";
            splitTextRefs.current.forEach((split) => {
              gsap.set(split.lines, { y: "120%" });
            });
            document.body.classList.remove("menu-open");
            setIsAnimating(false);
            setIsNavigating(false);
          },
        });
      },
    });

    splitTextRefs.current.forEach((split, index) => {
      textTimeline.to(
        split.lines,
        {
          y: "-120%",
          stagger: 0.03,
          delay: index * 0.03,
          duration: 0.7,
          ease: "power3.out",
        },
        0
      );
    });
  }, []);

  useEffect(() => {
    if (isInitializedRef.current) {
      animateMenu(isOpen);
    }
  }, [animateMenu, isOpen]);

  const toggleMenu = useCallback(() => {
    if (!isAnimating && isInitializedRef.current && !isNavigating) {
      setIsOpen((prev) => !prev);
    }
  }, [isAnimating, isNavigating]);

  const handleLinkClick = useCallback(
    (event, href) => {
      event.preventDefault();

      const currentPath = window.location.pathname;
      if (currentPath === href) {
        if (isOpen) {
          setIsOpen(false);
        }
        return;
      }

      if (isNavigating) return;

      setIsNavigating(true);
      navigateWithTransition(href);
    },
    [isNavigating, isOpen, navigateWithTransition]
  );

  return (
    <div>
      <MenuBtn isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="menu" ref={menuRef}>
        <div className="menu-wrapper">
          <div className="col col-1">
            <div className="links">
              <div className="link">
                <a href="/" onClick={(event) => handleLinkClick(event, "/")}>
                  <h2>Trang chủ</h2>
                </a>
              </div>
              <div className="link">
                <a
                  href="/gioi-thieu"
                  onClick={(event) => handleLinkClick(event, "/gioi-thieu")}
                >
                  <h2>Giới thiệu</h2>
                </a>
              </div>
              <div className="link">
                <a
                  href="/su-kien"
                  onClick={(event) => handleLinkClick(event, "/su-kien")}
                >
                  <h2>Sự kiện</h2>
                </a>
              </div>
              <div className="link">
                <a
                  href="/tam-nhin"
                  onClick={(event) => handleLinkClick(event, "/tam-nhin")}
                >
                  <h2>Tầm nhìn</h2>
                </a>
              </div>
              <div className="link">
                <a
                  href="/thu-vien"
                  onClick={(event) => handleLinkClick(event, "/thu-vien")}
                >
                  <h2>Thư viện</h2>
                </a>
              </div>
              <div className="link">
                <a
                  href="/tham-gia"
                  onClick={(event) => handleLinkClick(event, "/tham-gia")}
                >
                  <h2>Tham gia</h2>
                </a>
              </div>
            </div>
          </div>
          <div className="col col-2">
            <div className="socials">
              <div className="sub-col">
                <div className="menu-meta">
                  <p>Liên hệ</p>
                  <p>{siteContact.email}</p>
                  <p>{siteContact.phonePrimary}</p>
                  <p>{siteContact.phoneSecondary}</p>
                </div>
                <div className="menu-meta">
                  <p>Địa chỉ trường</p>
                  <p>484 Lạch Tray</p>
                  <p>P. Lê Chân, TP. Hải Phòng</p>
                </div>
              </div>
              <div className="sub-col">
                <div className="menu-meta">
                  <p>Kênh chính thức</p>
                  <p>{readableLink(siteContact.website)}</p>
                  <p>{readableLink(siteContact.admissionsSite)}</p>
                  <p>{readableLink(siteContact.facebook)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
