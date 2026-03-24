"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function parseCounterValue(text) {
  const cleaned = text.replace(/[^\d]/g, "");
  return cleaned ? parseInt(cleaned, 10) : null;
}

function formatCounterValue(num, template) {
  const formatted = num.toLocaleString("vi-VN");
  return template.replace(/[\d.,]+/, formatted).replace(/\s+/g, (m) => m);
}

export default function PageMotion({ children, className = "" }) {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      const mm = gsap.matchMedia();
      const splitInstances = [];

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isDesktop: "(min-width: 981px)",
        },
        (context) => {
          const { reduceMotion, isDesktop } = context.conditions;
          const root = rootRef.current;

          const heroItems = gsap.utils.toArray("[data-hero]", root);
          const heroMedia = gsap.utils.toArray("[data-hero-media]", root);
          const revealItems = gsap.utils.toArray("[data-reveal]", root);
          const lineItems = gsap.utils.toArray("[data-line]", root);
          const staggerGroups = gsap.utils.toArray("[data-stagger]", root);
          const parallaxItems = gsap.utils.toArray("[data-parallax]", root);
          const counterItems = gsap.utils.toArray("[data-counter]", root);
          const scaleItems = gsap.utils.toArray("[data-scale-in]", root);
          const textRevealItems = gsap.utils.toArray("[data-text-reveal]", root);
          const clipRevealItems = gsap.utils.toArray("[data-clip-reveal]", root);

          if (reduceMotion) {
            gsap.set(
              [
                ...heroItems,
                ...heroMedia,
                ...revealItems,
                ...lineItems,
                ...scaleItems,
                ...clipRevealItems,
              ],
              { autoAlpha: 1, y: 0, scale: 1, clipPath: "none", clearProps: "all" }
            );

            staggerGroups.forEach((group) => {
              const items = group.querySelectorAll("[data-item]");
              const targets = items.length ? items : group.children;
              gsap.set(targets, { autoAlpha: 1, y: 0, scale: 1, clearProps: "all" });
            });

            gsap.set(parallaxItems, { yPercent: 0, clearProps: "all" });
            return;
          }

          /* ── Hero entrance ── */
          if (heroItems.length || heroMedia.length) {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
              heroItems,
              { autoAlpha: 0, y: 52 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 1.05,
                stagger: 0.14,
                clearProps: "opacity,visibility,transform",
              }
            ).fromTo(
              heroMedia,
              { autoAlpha: 0, y: 36, scale: 1.06 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: "back.out(1.4)",
                stagger: 0.1,
                clearProps: "opacity,visibility,transform",
              },
              0.08
            );
          }

          /* ── Text reveals (line-by-line with mask) ── */
          textRevealItems.forEach((el) => {
            const split = new SplitType(el, { types: "lines" });
            splitInstances.push(split);

            if (!split.lines || !split.lines.length) return;

            split.lines.forEach((line) => {
              const wrapper = document.createElement("span");
              wrapper.style.display = "block";
              wrapper.style.overflow = "hidden";
              wrapper.style.paddingBottom = "0.15em";
              wrapper.style.marginBottom = "-0.15em";
              line.parentNode.insertBefore(wrapper, line);
              wrapper.appendChild(line);
            });

            gsap.set(split.lines, { y: "105%" });

            const isHero = el.hasAttribute("data-hero");

            if (isHero) {
              gsap.to(split.lines, {
                y: "0%",
                duration: 0.95,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.15,
              });
            } else {
              gsap.to(split.lines, {
                y: "0%",
                duration: 0.95,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 88%",
                  once: true,
                },
              });
            }
          });

          /* ── Image clip-path reveals ── */
          clipRevealItems.forEach((el) => {
            gsap.fromTo(
              el,
              { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
              {
                clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                duration: 1.1,
                ease: "power3.inOut",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          });

          /* ── Divider lines ── */
          lineItems.forEach((item) => {
            gsap.fromTo(
              item,
              { scaleX: 0 },
              {
                scaleX: 1,
                duration: 1.1,
                ease: "power2.inOut",
                scrollTrigger: {
                  trigger: item,
                  start: "top 88%",
                  once: true,
                },
              }
            );
          });

          /* ── Scroll reveals ── */
          if (revealItems.length) {
            ScrollTrigger.batch(revealItems, {
              start: "top 84%",
              once: true,
              onEnter: (batch) => {
                gsap.fromTo(
                  batch,
                  { autoAlpha: 0, y: 44 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.92,
                    stagger: 0.1,
                    ease: "power3.out",
                    clearProps: "opacity,visibility,transform",
                    overwrite: true,
                  }
                );
              },
            });
          }

          /* ── Stagger groups ── */
          staggerGroups.forEach((group) => {
            const items = group.querySelectorAll("[data-item]");
            const targets = items.length ? items : group.children;

            gsap.fromTo(
              targets,
              { autoAlpha: 0, y: 46, scale: 0.97, rotation: 0.8 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 0.88,
                stagger: { each: 0.09, ease: "power2.out" },
                ease: "power3.out",
                clearProps: "opacity,visibility,transform",
                scrollTrigger: {
                  trigger: group,
                  start: "top 84%",
                  once: true,
                },
              }
            );
          });

          /* ── Scale-in (image cards) ── */
          if (scaleItems.length) {
            ScrollTrigger.batch(scaleItems, {
              start: "top 86%",
              once: true,
              onEnter: (batch) => {
                gsap.fromTo(
                  batch,
                  { autoAlpha: 0, scale: 0.91 },
                  {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 1.0,
                    stagger: 0.12,
                    ease: "back.out(1.3)",
                    clearProps: "opacity,visibility,transform",
                    overwrite: true,
                  }
                );
              },
            });
          }

          /* ── Counter animation ── */
          counterItems.forEach((el) => {
            const original = el.textContent;
            const numVal = parseCounterValue(original);
            if (numVal === null) return;

            const obj = { val: 0 };

            gsap.to(obj, {
              val: numVal,
              duration: numVal > 5000 ? 2.2 : 1.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
              },
              onUpdate() {
                el.textContent = formatCounterValue(Math.round(obj.val), original);
              },
              onComplete() {
                el.textContent = original;
              },
            });
          });

          /* ── Parallax (desktop only) ── */
          if (isDesktop) {
            parallaxItems.forEach((item) => {
              gsap.to(item, {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                  trigger: item.closest("[data-parallax-wrap]") || item,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2,
                },
              });
            });
          }

          /* ── SVG path drawing on scroll ── */
          const svgDrawItems = gsap.utils.toArray("[data-svg-draw]", root);
          svgDrawItems.forEach((el) => {
            const paths = el.querySelectorAll("path");
            if (!paths.length) return;
            gsap.to(paths, {
              strokeDashoffset: 0,
              duration: 2.5,
              stagger: 0.15,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            });
          });

          /* ── SVG slow rotation on scroll ── */
          const svgRotateItems = gsap.utils.toArray("[data-svg-rotate]", root);
          svgRotateItems.forEach((el) => {
            gsap.to(el, {
              rotation: 360,
              ease: "none",
              scrollTrigger: {
                trigger: el.closest("section") || el,
                start: "top bottom",
                end: "bottom top",
                scrub: 3,
              },
            });
          });

          requestAnimationFrame(() => ScrollTrigger.refresh());
        }
      );

      return () => {
        splitInstances.forEach((s) => s.revert());
        mm.revert();
      };
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
