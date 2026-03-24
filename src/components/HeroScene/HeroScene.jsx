"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import ShipSilhouette from "@/components/svg/ShipSilhouette";
import WaveDivider from "@/components/svg/WaveDivider";
import "./HeroScene.css";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScene({
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
  stats,
  bgImage,
}) {
  const sceneRef = useRef(null);

  useGSAP(
    () => {
      if (!sceneRef.current) return;

      const mm = gsap.matchMedia();
      const splits = [];

      mm.add(
        { reduceMotion: "(prefers-reduced-motion: reduce)" },
        (ctx) => {
          if (ctx.conditions.reduceMotion) {
            gsap.set(
              ".hero-scene__kicker, .hero-scene__title, .hero-scene__lead, .hero-scene__actions, .hero-stat",
              { autoAlpha: 1, y: 0, clearProps: "all" }
            );
            gsap.set(".hero-scene__ship path", { strokeDashoffset: 0 });
            return;
          }

          /* ── Title: cinematic line-by-line reveal ── */
          const titleEl = sceneRef.current.querySelector(".hero-scene__title");
          let titleSplitOk = false;
          if (titleEl) {
            gsap.set(titleEl, { autoAlpha: 1 });
            try {
              const split = new SplitType(titleEl, { types: "lines" });
              splits.push(split);
              if (split.lines?.length) {
                split.lines.forEach((line) => {
                  const mask = document.createElement("span");
                  mask.style.display = "block";
                  mask.style.overflow = "hidden";
                  mask.style.paddingBottom = "0.1em";
                  line.parentNode.insertBefore(mask, line);
                  mask.appendChild(line);
                });
                gsap.set(split.lines, { y: "105%" });
                titleSplitOk = true;
              }
            } catch (e) {
              titleSplitOk = false;
            }
          }

          /* ── Ship SVG: subtle draw ── */
          const paths = gsap.utils.toArray(".hero-scene__ship path");
          gsap.to(paths, {
            strokeDashoffset: 0,
            duration: 3.2,
            stagger: 0.18,
            ease: "power2.inOut",
            delay: 0.4,
          });

          /* ── Content entrance timeline ── */
          const tl = gsap.timeline({
            delay: 0.2,
            defaults: { ease: "power4.out" },
          });

          // Kicker fades in first
          tl.fromTo(
            ".hero-scene__kicker",
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 0.7 }
          );

          // Title reveal
          if (titleSplitOk && titleEl) {
            const lines = titleEl.querySelectorAll(".line");
            tl.to(
              lines,
              { y: "0%", duration: 0.9, stagger: 0.12, ease: "power3.out" },
              "-=0.3"
            );
          } else if (titleEl) {
            tl.fromTo(
              titleEl,
              { autoAlpha: 0, y: 30 },
              { autoAlpha: 1, y: 0, duration: 1.0 },
              "-=0.3"
            );
          }

          // Lead text fades in
          tl.fromTo(
            ".hero-scene__lead",
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
            "-=0.4"
          );

          // Actions
          tl.fromTo(
            ".hero-scene__actions",
            { autoAlpha: 0, y: 14 },
            { autoAlpha: 1, y: 0, duration: 0.6 },
            "-=0.4"
          );

          // Stats stagger
          tl.fromTo(
            ".hero-stat",
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.06 },
            "-=0.3"
          );

          /* ── Parallax BG (subtle) ── */
          gsap.to(".hero-scene__bg img", {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: sceneRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          });

          /* ── Wave float (living water) ── */
          gsap.to(".hero-scene__wave svg", {
            x: -20,
            duration: 7,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        }
      );

      return () => {
        splits.forEach((s) => s.revert());
        mm.revert();
      };
    },
    { scope: sceneRef }
  );

  return (
    <section ref={sceneRef} className="hero-scene">
      <div className="hero-scene__bg">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <ShipSilhouette className="hero-scene__ship" strokeWidth={1} />

      <div className="hero-scene__content">
        <span className="hero-scene__kicker">{eyebrow}</span>
        <h1 className="hero-scene__title">{title}</h1>
        <p className="hero-scene__lead">{lead}</p>

        <div className="hero-scene__actions">
          <Link href={primaryCta.href} className="hero-scene__btn">
            {primaryCta.label}
          </Link>
          <Link href={secondaryCta.href} className="hero-scene__btn">
            {secondaryCta.label}
          </Link>
        </div>

        {stats && (
          <div className="hero-scene__stats">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat__value" data-counter>
                  {s.value}
                </span>
                <span className="hero-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="hero-scene__wave">
        <WaveDivider color="var(--surface-50, #F8F9FA)" />
      </div>
    </section>
  );
}
