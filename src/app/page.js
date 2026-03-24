
"use client";
import "./index.css";
import "./preloader.css";
import { useRef, useState, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import CustomEase from "gsap/CustomEase";
// import { useGSAP } from "@gsap/react";
// import { useLenis } from "lenis/react";

import dynamic from "next/dynamic";
import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import VimaruTitle from "@/components/VimaruTitle/VimaruTitle";
import CounterAnimation from "@/components/CounterAnimation/CounterAnimation";
import ClientOnly from "@/components/ClientOnly/ClientOnly";
import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";

// Lazy-load heavy below-fold components for faster initial page load
const Timeline = dynamic(() => import("@/components/Timeline/Timeline"), { ssr: false });
const AnniversaryProgram = dynamic(() => import("@/components/AnniversaryProgram/AnniversaryProgram"), { ssr: false });
// FeaturedAchievements removed — overlaps with Timeline, causes 3D transform lag
// const CommunityVoices = dynamic(() => import("@/components/CommunityVoices/CommunityVoices"), { ssr: false });
const GalleryCallout = dynamic(() => import("@/components/GalleryCallout/GalleryCallout"), { ssr: false });


let isInitialLoad = true;
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function Home() {
  const tagsRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(false);
  const [loaderAnimating, setLoaderAnimating] = useState(false);
  const [isClient, setIsClient] = useState(false);
  // const lenis = useLenis();

  // Client-side check
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  // useEffect(() => {
  //   if (!isClient || !lenis) return;
  //   if (loaderAnimating) {
  //     lenis.stop();
  //   } else {
  //     lenis.start();
  //   }
  // }, [isClient, lenis, loaderAnimating]);

  // GSAP Smooth Scroll for homepage
  useEffect(() => {
    if (!isClient) return;

    // Enable GSAP smooth scroll for homepage
    gsap.config({
      force3D: true,
      autoSleep: 60,
      nullTargetWarn: false
    });

    // Smooth scroll with GSAP
    gsap.to(window, {
      duration: 0.1,
      ease: "none",
      scrollTo: { y: 0 },
      immediateRender: true
    });

  }, [isClient]);

  useEffect(() => {
    if (showPreloader) {
      // Fix A: Respect prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setShowPreloader(false);
        setLoaderAnimating(false);
        isInitialLoad = false;
        return;
      }

      setLoaderAnimating(true);

      // Simplified preloader — text reveal only, ~2.5s total
      // Skip counter animation (unreliable with clip-path overflow)
      gsap.set(".counter", { display: "none" });
      gsap.set(".spinner", { opacity: 1 });
      gsap.set(".intro-logo", { opacity: 0 });
      gsap.set(".word h1", { y: "120%" });
      gsap.set(".divider", { scaleY: 0 });

      const tl = gsap.timeline({
        delay: 0.5,
        defaults: { ease: "power2.out" },
      });

      // Phase 1: Spinner → Text reveal (~1.2s)
      tl.to(".spinner", { opacity: 0, duration: 0.3 })
        .to(".intro-logo", { opacity: 1, duration: 0.4 })
        .to(".word h1", { y: "0%", duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.2")
        .to(".divider", { scaleY: 1, duration: 0.5, ease: "power2.inOut" }, "-=0.35");

      // Phase 2: Hold + text exit (~0.8s)
      tl.to({}, { duration: 0.4 })
        .to("#word-1 h1", { y: "100%", duration: 0.4, ease: "power2.in" })
        .to("#word-2 h1", { y: "-100%", duration: 0.4, ease: "power2.in" }, "-=0.4")
        .to(".divider", { opacity: 0, duration: 0.2 }, "-=0.2");

      // Phase 3: Blocks exit — reveal hero (~0.6s)
      tl.to(".block", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.inOut",
        onStart: () => {
          const heroImg = document.querySelector(".hero-main-bg img");
          if (heroImg) gsap.to(heroImg, { scale: 1, duration: 1.2, ease: "power2.out" });
        },
        onComplete: () => {
          const loaderEl = document.querySelector(".loader");
          if (loaderEl) {
            gsap.to(loaderEl, {
              opacity: 0, duration: 0.3,
              onComplete: () => { setShowPreloader(false); setLoaderAnimating(false); }
            });
          } else {
            setShowPreloader(false); setLoaderAnimating(false);
          }
        },
      });

      // Cleanup: kill the master timeline if component unmounts during animation
      return () => {
        tl.kill();
      };
    }
  }, [showPreloader]);

  useEffect(() => {
      if (!tagsRef.current) return;

      const tags = tagsRef.current.querySelectorAll(".what-we-do-tag");
      gsap.set(tags, { opacity: 0, x: -40 });

      const st = ScrollTrigger.create({
        trigger: tagsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(tags, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }),
      });

      // Fix B: Clean up ScrollTrigger on unmount
      return () => {
        if (st) st.kill();
      };
  }, []);

  return (
    <>
      {showPreloader && (
        <div className="loader">
          <div className="overlay">
            <div className="block"></div>
            <div className="block"></div>
          </div>
          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1>
                <span>Trường Đại học</span>
              </h1>
            </div>
            <div className="word" id="word-2">
              <h1>Hàng hải Việt Nam</h1>
            </div>
          </div>
          <div className="divider"></div>
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
          <div className="counter">
            <div className="count">
              <div className="digit">
                <h1>0</h1>
              </div>
              <div className="digit">
                <h1>0</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>7</h1>
              </div>
              <div className="digit">
                <h1>0</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>9</h1>
              </div>
            </div>
          </div>
        </div>
      )}
      <Nav />
      
      {/* Hero Main Section */}
      <section className="hero-main">
        <div className="hero-main-bg">
          <Image src="/vmu/official/home-hero.jpg" alt="VMU Campus - Trường Đại học Hàng hải Việt Nam" fill priority sizes="100vw" style={{objectFit: 'cover'}} />
        </div>
        <div className="hero-main-overlay"></div>
        <div className="hero-main-content">
          <VimaruTitle
            delay={0.85}
            showPreloader={showPreloader}
          />
        </div>
        {/* Wave: Hero → Countdown */}
        <svg className="wave-divider wave-divider--hero" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,60 Q360,20 720,50 Q1080,80 1440,35 L1440,80 L0,80Z" fill="var(--vmu-primary)" />
        </svg>
      </section>

      {/* Coming Section - commented out, redundant with Countdown */}
      {/*
      <section className="coming-section">
        <div className="coming-bg"></div>
        <div className="coming-content">
          <div className="coming-logo">
            <img src="/logos/vimaru-logo.svg" alt="VMU Logo" />
          </div>
          <Copy animateOnScroll={true} delay={showPreloader ? 10.1 : 0.95}>
            <h2 className="coming-text">Coming<br/>April 1<br/>2026</h2>
          </Copy>
          <div className="coming-platforms">
            <div className="coming-platform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Việt Nam</span>
            </div>
            <div className="coming-platform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Hải Phòng</span>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Countdown Section */}
      <section className="countdown-section">
        <div className="countdown-bg-pattern"></div>
        <div className="countdown-content">
          <div className="countdown-header">
            <Copy animateOnScroll={true} delay={showPreloader ? 10.15 : 1}>
              <h1 className="countdown-main-title">Trường Đại Học Hàng Hải Việt Nam</h1>
              <h2 className="countdown-subtitle">Kỷ Niệm 70 Năm</h2>
            </Copy>
          </div>
          
          <CountdownTimer />
          
          <Copy animateOnScroll={true} delay={showPreloader ? 10.2 : 1.05}>
            <p className="countdown-message">
              Chúng ta sẽ cùng nhau khám phá những cột mốc lịch sử, thành tựu 
              nổi bật và tầm nhìn tương lai của trường.
            </p>
          </Copy>
          
          <div className="countdown-buttons-container">
            <div className="hero-buttons">
              <AnimatedButton
                label="Khám phá lịch sử"
                route="/thu-vien"
                animateOnScroll={true}
                delay={showPreloader ? 10.3 : 1.15}
              />
              <AnimatedButton
                label="Đăng ký tham gia"
                route="/tham-gia"
                animateOnScroll={true}
                delay={showPreloader ? 10.45 : 1.3}
                secondary={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wave: Countdown → Stats */}
      <div className="wave-divider-wrap wave-divider-wrap--blue">
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 L0,30 Q240,60 480,35 Q720,10 960,40 Q1200,60 1440,25 L1440,0Z" fill="var(--vmu-primary)" />
        </svg>
      </div>

      {/* Hero Stats */}
      <section className="hero-stats">
        <div className="hero-stats-bg-pattern"></div>
        <div className="container">
          <div className="stat">
            <div className="stat-count">
              <h2>
                <CounterAnimation
                  endValue="70"
                  duration={1800}
                  delay={100}
                  className="counter-number"
                  animateOnScroll={true}
                />
              </h2>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-info">
              <p>Năm lịch sử</p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-count">
              <h2>
                <CounterAnimation
                  endValue="1956"
                  duration={2000}
                  delay={200}
                  className="counter-number"
                  animateOnScroll={true}
                />
              </h2>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-info">
              <p>Năm khai giảng</p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-count">
              <h2>
                <CounterAnimation
                  endValue="Gần 1.000"
                  duration={1500}
                  delay={300}
                  className="counter-number"
                  animateOnScroll={true}
                />
              </h2>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-info">
              <p>Cán bộ, giảng viên</p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-count">
              <h2>
                <CounterAnimation
                  endValue="20.000+"
                  duration={1800}
                  delay={400}
                  className="counter-number"
                  animateOnScroll={true}
                />
              </h2>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-info">
              <p>Sinh viên</p>
            </div>
          </div>
        </div>
      </section>



      {/* Wave: Stats → Timeline */}
      <div className="wave-divider-wrap wave-divider-wrap--light">
        <svg className="wave-divider" viewBox="0 0 1440 50" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,50 Q180,15 360,30 Q540,50 720,20 Q900,0 1080,25 Q1260,45 1440,15 L1440,50Z" fill="var(--vmu-white)" opacity="0.5" />
          <path d="M0,50 Q200,25 400,38 Q600,50 800,28 Q1000,10 1200,32 Q1350,45 1440,22 L1440,50Z" fill="var(--vmu-white)" />
        </svg>
      </div>

      {/* Lịch sử và cột mốc */}
      <Timeline />

      {/* Chương trình kỷ niệm */}
      <AnniversaryProgram />

      {/* Thành tựu nổi bật - removed: overlaps Timeline + causes 3D lag */}

      {/* Tiếng nói từ cộng đồng */}
      {/* <CommunityVoices /> */}

      {/* Thư viện hình ảnh */}
      <GalleryCallout />

      {/* Call to Action */}
      <CTAWindow
        img="/vmu/official/event-1.jpg"
        header="Tham gia kỷ niệm 70 năm"
        callout="Cùng chúng tôi kỷ niệm một cột mốc quan trọng"
        description="Đăng ký tham gia các hoạt động kỷ niệm 70 năm thành lập trường Đại học Hàng hải Việt Nam. Hãy để lại thông tin để nhận thông báo về các sự kiện sắp tới."
      />
      
      <ConditionalFooter />
    </>
  );
}
