"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const endVal = typeof endValue === 'string' ? parseInt(endValue.replace(/\D/g, '')) : endValue;
  // Show final value immediately — no "0" flash
  const [count, setCount] = useState(endVal);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const animateCounter = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    // Reset to 0, then animate up
    setCount(0);
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(endVal * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endVal);
      }
    };

    requestAnimationFrame(animate);
  }, [endVal, duration, hasAnimated]);

  useEffect(() => {
    if (!ref.current) return;

    let st;

    if (animateOnScroll) {
      st = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 90%",
        once: true,
        onEnter: () => {
          setTimeout(animateCounter, delay);
        }
      });
    } else {
      const timer = setTimeout(animateCounter, delay);
      return () => clearTimeout(timer);
    }

    return () => {
      if (st) st.kill();
    };
  }, [animateOnScroll, delay, animateCounter]);

  // When animation done (or initial), show original endValue string
  // During animation, show numeric count
  const displayValue = () => {
    if (!hasAnimated || count === endVal) {
      // Show original string as-is (preserves "Gần 1.000", "20.000+", etc.)
      return typeof endValue === 'string' ? endValue : `${prefix}${endVal}${suffix}`;
    }
    // During animation — format number
    const hasDot = typeof endValue === 'string' && endValue.includes('.');
    const hasPlus = typeof endValue === 'string' && endValue.includes('+');
    const hasPrefix = typeof endValue === 'string' && endValue.match(/^[^\d]+/);

    let formatted = hasDot ? count.toLocaleString('vi-VN') : `${count}`;
    if (hasPlus) formatted += '+';
    if (hasPrefix) formatted = hasPrefix[0] + formatted;
    return `${prefix}${formatted}${suffix}`;
  };

  return (
    <span ref={ref} className={className}>
      {displayValue()}
    </span>
  );
};

export default CounterAnimation;
