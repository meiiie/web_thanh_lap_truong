"use client";
import { useEffect, useState } from "react";

import { ReactLenis } from "lenis/react";
import { ViewTransitions } from "next-view-transitions";

export default function ClientLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sử dụng default settings để tránh hydration mismatch
  const scrollSettings = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
    lerp: 0.1,
    wheelMultiplier: 1,
    orientation: "vertical",
    smoothWheel: true,
    syncTouch: true,
  };

  return (
    <ViewTransitions>
      <ReactLenis root options={scrollSettings}>
        {children}
      </ReactLenis>
    </ViewTransitions>
  );
}
