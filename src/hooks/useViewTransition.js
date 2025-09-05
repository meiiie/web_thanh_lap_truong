"use client";
import { useTransitionRouter } from "next-view-transitions";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useViewTransition = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useTransitionRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  function slideInOut() {
    // Simple and smooth slide transition
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "scale(1)",
        },
        {
          opacity: 0,
          transform: "scale(0.95)",
        },
      ],
      {
        duration: 800,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "circle(0% at 50% 50%)",
        },
        {
          clipPath: "circle(100% at 50% 50%)",
        },
      ],
      {
        duration: 800,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  function slideLeftRight() {
    // Simple horizontal slide transition
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateX(0) scale(1)",
        },
        {
          opacity: 0,
          transform: "translateX(-50px) scale(0.95)",
        },
      ],
      {
        duration: 600,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          transform: "translateX(50px) scale(0.95)",
          opacity: 0,
        },
        {
          transform: "translateX(0) scale(1)",
          opacity: 1,
        },
      ],
      {
        duration: 600,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  function fadeTransition() {
    // Simple fade transition
    document.documentElement.animate(
      [
        { opacity: 1 },
        { opacity: 0 },
      ],
      {
        duration: 400,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        duration: 400,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const navigateWithTransition = (href, options = {}) => {
    if (!isClient) return;
    
    const currentPath = window.location.pathname;
    if (currentPath === href) {
      return;
    }

    // Choose transition type based on navigation context
    let transitionType = slideInOut;
    
    // Determine transition type based on route
    if (href.includes('/70-nam') || href.includes('/blueprints')) {
      transitionType = slideLeftRight; // Horizontal slide for main content pages
    } else if (href.includes('/connect') || href.includes('/studio')) {
      transitionType = fadeTransition; // Quick fade for utility pages
    }

    router.push(href, {
      onTransitionReady: transitionType,
      ...options,
    });
  };

  const navigateWithSlide = (href, options = {}) => {
    if (!isClient) return;
    
    const currentPath = window.location.pathname;
    if (currentPath === href) {
      return;
    }

    router.push(href, {
      onTransitionReady: slideInOut,
      ...options,
    });
  };

  const navigateWithFade = (href, options = {}) => {
    if (!isClient) return;
    
    const currentPath = window.location.pathname;
    if (currentPath === href) {
      return;
    }

    router.push(href, {
      onTransitionReady: fadeTransition,
      ...options,
    });
  };

  return { 
    navigateWithTransition, 
    navigateWithSlide, 
    navigateWithFade, 
    router 
  };
};
