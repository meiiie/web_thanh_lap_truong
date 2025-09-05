"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CounterAnimation = ({ 
  endValue, 
  duration = 2000, 
  delay = 0,
  suffix = "",
  prefix = "",
  className = "",
  animateOnScroll = true
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const startValue = 0;
    const endVal = typeof endValue === 'string' ? parseInt(endValue.replace(/\D/g, '')) : endValue;

    const animateCounter = () => {
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (endVal - startValue) * easeOutQuart);
        
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endVal);
        }
      };

      requestAnimationFrame(animate);
    };

    if (animateOnScroll) {
      // Use GSAP ScrollTrigger for better compatibility with GSAP scroll
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          setTimeout(() => {
            setIsVisible(true);
            animateCounter();
          }, delay);
        }
      });
    } else {
      // For immediate animation (like in hero-stats)
      setTimeout(() => {
        setIsVisible(true);
        animateCounter();
      }, delay);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, [endValue, duration, delay, animateOnScroll]);

  const formatValue = (value) => {
    if (typeof endValue === 'string' && endValue.includes('+')) {
      return `${value}${suffix}+`;
    }
    return `${prefix}${value}${suffix}`;
  };

  return (
    <span ref={ref} className={className}>
      {formatValue(count)}
    </span>
  );
};

export default CounterAnimation;
