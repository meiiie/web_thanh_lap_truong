"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Preloader.css";

let hasPlayedOnce = false;

export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(!hasPlayedOnce);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!visible || !rootRef.current) return;

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const counts = gsap.utils.toArray(".preloader__count");
      const countDuration = 0.55;
      const countDelay = 1.0;

      gsap.set(counts, { opacity: 0, scale: 0.85 });

      counts.forEach((count, i) => {
        const digits = count.querySelectorAll(".preloader__digit span");
        gsap.set(digits, { y: "120%" });

        const tl = gsap.timeline({ delay: 0.4 + i * countDelay });

        tl.to(count, {
          opacity: 1,
          scale: 1,
          duration: countDuration,
          ease: "power2.out",
        })
          .to(
            digits,
            {
              y: "0%",
              duration: countDuration * 0.8,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.25"
          )
          .to({}, { duration: 0.25 });

        if (i < counts.length - 1) {
          tl.to(count, {
            opacity: 0,
            scale: 0.85,
            y: -18,
            duration: countDuration * 0.45,
            ease: "power2.in",
          });
        }
      });

      const master = gsap.timeline({
        delay: 0.4 + counts.length * countDelay + 0.3,
        defaults: { ease: "power2.out" },
      });

      master
        .to(".preloader__count", {
          opacity: 0,
          scale: 0.85,
          y: -18,
          duration: 0.35,
          stagger: 0.04,
          ease: "power2.in",
        })
        .to(".preloader__spinner-ring", { opacity: 0, duration: 0.3 }, "-=0.15")
        .to(".preloader__logo", { opacity: 1, duration: 0.45 }, "-=0.1")
        .to(
          ".preloader__word span",
          {
            y: "0%",
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .to(
          ".preloader__divider",
          { scaleY: 1, duration: 0.55, ease: "power2.inOut" },
          "-=0.35"
        )
        .to("#preloader-w1 h1", {
          y: "100%",
          duration: 0.5,
          delay: 0.25,
          ease: "power2.in",
        })
        .to(
          "#preloader-w2 h1",
          { y: "-100%", duration: 0.5, ease: "power2.in" },
          "-=0.5"
        )
        .to(".preloader__divider", { opacity: 0, duration: 0.25 }, "-=0.25")
        .to(".preloader__block", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.75,
          stagger: 0.08,
          delay: 0.15,
          ease: "power3.inOut",
          onComplete: () => {
            hasPlayedOnce = true;
            setVisible(false);
            document.body.style.overflow = "";
            onComplete?.();
          },
        });
    }, rootRef);

    return () => ctx.revert();
  }, [visible, onComplete]);

  if (!visible) return null;

  return (
    <div ref={rootRef} className="preloader" aria-hidden="true">
      <div className="preloader__overlay">
        <div className="preloader__block" />
        <div className="preloader__block" />
      </div>

      <div className="preloader__logo">
        <div className="preloader__word" id="preloader-w1">
          <span>Trường Đại học</span>
        </div>
        <div className="preloader__word" id="preloader-w2">
          <span>Hàng hải Việt Nam</span>
        </div>
      </div>

      <div className="preloader__divider" />

      <div className="preloader__spinner">
        <div className="preloader__spinner-ring" />
      </div>

      <div className="preloader__counter">
        {["01", "27", "65", "98"].map((num) => (
          <div key={num} className="preloader__count">
            {num.split("").map((d, i) => (
              <div key={i} className="preloader__digit">
                <span>{d}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
