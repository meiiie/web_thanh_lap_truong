"use client";

import { useEffect, useState } from "react";

import { ReactLenis } from "lenis/react";
import { ViewTransitions } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientLayout({ children, topBar }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [useLenis, setUseLenis] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    const updateLayoutMode = () => {
      const mobile = window.innerWidth <= 1000;
      const shouldUseLenis =
        pathname !== "/" && !mobile && !coarsePointerQuery.matches;

      setIsMobile(mobile);
      setUseLenis(shouldUseLenis);
    };

    updateLayoutMode();

    window.addEventListener("resize", updateLayoutMode);
    coarsePointerQuery.addEventListener?.("change", updateLayoutMode);

    return () => {
      window.removeEventListener("resize", updateLayoutMode);
      coarsePointerQuery.removeEventListener?.("change", updateLayoutMode);
    };
  }, [pathname]);

  const scrollSettings = {
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 1.15,
    infinite: false,
    lerp: 0.1,
    wheelMultiplier: 1,
    orientation: "vertical",
    smoothWheel: true,
    syncTouch: false,
    normalizeWheel: !isMobile,
    autoResize: true,
  };

  return (
    <ViewTransitions>
      {useLenis ? (
        <ReactLenis root options={scrollSettings}>
          <div className="lenis-wrapper">
            {topBar}
            {children}
          </div>
        </ReactLenis>
      ) : (
        <div className="gsap-scroll-wrapper">
          {topBar}
          {children}
        </div>
      )}
    </ViewTransitions>
  );
}
