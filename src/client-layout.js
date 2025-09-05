"use client";
import { useEffect, useState } from "react";

import { ReactLenis } from "lenis/react";
import { ViewTransitions } from "next-view-transitions";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientLayout({ children, topBar }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [useLenis, setUseLenis] = useState(true);

  useEffect(() => {
    setIsClient(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    // Register GSAP plugins
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Check if we're on homepage - disable Lenis for full GSAP scroll
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      setUseLenis(false);
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Simple and effective smooth scroll settings
  const scrollSettings = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: isMobile ? true : false,
    touchMultiplier: 2,
    infinite: false,
    lerp: 0.1,
    wheelMultiplier: 1,
    orientation: "vertical",
    smoothWheel: true,
    syncTouch: true,
    normalizeWheel: true,
    autoResize: true,
    // Minimal prevent to avoid conflicts with GSAP ScrollTrigger
    prevent: (node) => {
      return node.classList.contains('gs_reveal') || 
             node.classList.contains('featured-achievement-card') ||
             node.classList.contains('timeline-item') ||
             node.classList.contains('features__item') ||
             node.classList.contains('community-voice-content');
    }
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
