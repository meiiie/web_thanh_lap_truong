
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

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import VimaruTitle from "@/components/VimaruTitle/VimaruTitle";
import CounterAnimation from "@/components/CounterAnimation/CounterAnimation";
import ClientOnly from "@/components/ClientOnly/ClientOnly";
import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";
import Timeline from "@/components/Timeline/Timeline";
import AnniversaryProgram from "@/components/AnniversaryProgram/AnniversaryProgram";
import FeaturedAchievements from "@/components/FeaturedAchievements/FeaturedAchievements";
import CommunityVoices from "@/components/CommunityVoices/CommunityVoices";
import GalleryCallout from "@/components/GalleryCallout/GalleryCallout";


let isInitialLoad = true;
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function Home() {
  const tagsRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
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
      setLoaderAnimating(true);
      
      // Master timeline cho toàn bộ preloader
      const masterTl = gsap.timeline({
        delay: 0.5,
        defaults: {
          ease: "power2.out",
        },
      });

      // Phase 1: Loading Counter (00 -> ẩn -> 26 -> ẩn -> 65 -> ẩn -> 98 -> ẩn -> 99)
      const counts = document.querySelectorAll(".count");
      const countDuration = 0.6;
      const countDelay = 1.2; // Tăng delay để có thời gian ẩn
      
      // Bắt đầu với tất cả counts ẩn
      gsap.set(counts, { opacity: 0, scale: 0.8 });
      gsap.set(counts, { y: "20px" });
      
      // Hiển thị từng count một cách tuần tự với ẩn hoàn toàn
      counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");
        
        // Bắt đầu với digits ẩn
        gsap.set(digits, { y: "120%" });
        
        // Timeline cho từng count
        const countTl = gsap.timeline({
          delay: index * countDelay,
        });
        
        // Hiển thị count với animation mượt mà
        countTl.to(count, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: countDuration,
          ease: "power2.out"
        });
        
        // Animation digits từ dưới lên
        countTl.to(digits, {
          y: "0%",
          duration: countDuration * 0.8,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.3");
        
        // Giữ count hiển thị một chút
        countTl.to({}, { duration: 0.3 });
        
        // Ẩn count hiện tại hoàn toàn (trừ count cuối cùng)
        if (index < counts.length - 1) {
          countTl.to(count, {
            opacity: 0,
            scale: 0.8,
            y: "-20px",
            duration: countDuration * 0.5,
            ease: "power2.in"
          });
        }
      });

      // Phase 2: Counter fade out (ẩn count cuối cùng)
      masterTl.to(".count", {
        opacity: 0,
        scale: 0.8,
        y: "-20px",
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in"
      }, counts.length * countDelay + 0.5);

      // Phase 3: Spinner fade out
      masterTl.to(".spinner", {
        opacity: 0,
        duration: 0.4,
      }, "-=0.2");

      // Phase 4: Text reveal ("Trường Đại học Hàng hải Việt Nam")
      masterTl.to(".intro-logo", {
        opacity: 1,
        duration: 0.5,
      }, "-=0.1");

      masterTl.to(".word h1", {
        y: "0%",
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.3");

      // Phase 5: Divider animation
      masterTl.to(".divider", {
        scaleY: "100%",
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");

      // Phase 6: Text exit animation
      masterTl.to("#word-1 h1", {
        y: "100%",
        duration: 0.6,
        delay: 0.3,
        ease: "power2.in"
      });

      masterTl.to("#word-2 h1", {
        y: "-100%",
        duration: 0.6,
        ease: "power2.in"
      }, "-=0.6");

      // Phase 7: Divider fade out
      masterTl.to(".divider", {
        opacity: 0,
        duration: 0.3,
        delay: 0.2,
      }, "-=0.3");

      // Phase 8: Block exit animation
      masterTl.to(".block", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.8,
        stagger: 0.1,
        delay: 0.3,
        onStart: () => {
          // Animation cho hero background image
          const heroImg = document.querySelector(".hero-main-bg img");
          if (heroImg) {
            gsap.to(heroImg, { scale: 1, duration: 1.5, ease: "power2.out" });
          }
        },
        onComplete: () => {
          // Ẩn hoàn toàn preloader
          gsap.to(".loader", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              setShowPreloader(false);
              setLoaderAnimating(false);
            }
          });
        },
      }, "-=0.4");
    }
  }, [showPreloader]);

  useEffect(() => {
      if (!tagsRef.current) return;

      const tags = tagsRef.current.querySelectorAll(".what-we-do-tag");
      gsap.set(tags, { opacity: 0, x: -40 });

      ScrollTrigger.create({
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
                <h1>2</h1>
              </div>
              <div className="digit">
                <h1>7</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>6</h1>
              </div>
              <div className="digit">
                <h1>5</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>8</h1>
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
          <img src="/home/hero.jpg" alt="VMU Campus" />
        </div>
        <div className="hero-main-overlay"></div>
        <div className="hero-main-content">
          <VimaruTitle 
            delay={0.85} 
            showPreloader={showPreloader}
          />
        </div>
      </section>

      {/* Coming Section */}
      <section className="coming-section">
        <div className="coming-bg"></div>
        <div className="coming-content">
          <div className="coming-logo">
            <img src="/logos/vimaru-logo.svg" alt="VMU Logo" />
          </div>
          <Copy animateOnScroll={false} delay={showPreloader ? 10.1 : 0.95}>
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

      {/* Countdown Section */}
      <section className="countdown-section">
        <div className="countdown-bg-pattern"></div>
        <div className="countdown-content">
          <div className="countdown-header">
            <Copy animateOnScroll={false} delay={showPreloader ? 10.15 : 1}>
              <h1 className="countdown-main-title">Trường Đại Học Hàng Hải Việt Nam</h1>
              <h2 className="countdown-subtitle">Kỷ Niệm 70 Năm</h2>
            </Copy>
          </div>
          
          <CountdownTimer />
          
          <Copy animateOnScroll={false} delay={showPreloader ? 10.2 : 1.05}>
            <p className="countdown-message">
              Chúng ta sẽ cùng nhau khám phá những cột mốc lịch sử, thành tựu 
              nổi bật và tầm nhìn tương lai của trường.
            </p>
          </Copy>
          
          <div className="countdown-buttons-container">
            <div className="hero-buttons">
              <AnimatedButton
                label="Khám phá lịch sử"
                route="/70-nam"
                animateOnScroll={false}
                delay={showPreloader ? 10.3 : 1.15}
              />
              <AnimatedButton
                label="Đăng ký tham gia"
                route="/connect"
                animateOnScroll={false}
                delay={showPreloader ? 10.45 : 1.3}
                secondary={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Stats */}
      <section className="hero-stats">
        <div className="hero-stats-bg-pattern"></div>
        <div className="container">
          <div className="stat">
            <div className="stat-count">
              <h2>
                <CounterAnimation 
                  endValue="70" 
                  duration={2000} 
                  delay={200}
                  className="counter-number"
                  animateOnScroll={false}
                />
              </h2>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-info">
              <p>Năm thành lập</p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-count">
              <h2>
                <CounterAnimation 
                  endValue="1956" 
                  duration={2500} 
                  delay={400}
                  className="counter-number"
                  animateOnScroll={false}
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
                  endValue="50+" 
                  duration={1800} 
                  delay={600}
                  className="counter-number"
                  animateOnScroll={false}
                />
              </h2>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-info">
              <p>Chuyên ngành đào tạo</p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-count">
              <h2>
                <CounterAnimation 
                  endValue="25K+" 
                  duration={2200} 
                  delay={800}
                  className="counter-number"
                  animateOnScroll={false}
                />
              </h2>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-info">
              <p>Cựu sinh viên</p>
            </div>
          </div>
        </div>
      </section>



      {/* Lịch sử và cột mốc */}
      <Timeline />

      {/* Chương trình kỷ niệm */}
      <AnniversaryProgram />

      {/* Thành tựu nổi bật */}
      <FeaturedAchievements />

      {/* Tiếng nói từ cộng đồng */}
      <CommunityVoices />

      {/* Thư viện hình ảnh */}
      <GalleryCallout />

      {/* Call to Action */}
      <CTAWindow
        img="/home/home-cta-window.jpg"
        header="Tham gia kỷ niệm 70 năm"
        callout="Cùng chúng tôi kỷ niệm một cột mốc quan trọng"
        description="Đăng ký tham gia các hoạt động kỷ niệm 70 năm thành lập trường Đại học Hàng hải Việt Nam. Hãy để lại thông tin để nhận thông báo về các sự kiện sắp tới."
      />
      
      <ConditionalFooter />
    </>
  );
}
