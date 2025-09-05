'use client';
import React, { useEffect, useRef, memo, useMemo, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { vmuTimelineData } from "@/data/vmu-timeline-data";
import MilestoneModal from "../MilestoneModal/MilestoneModal";
import "./Timeline.css";

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Timeline = memo(() => {
  const timelineRef = useRef(null);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoize timeline data to prevent re-renders
  const memoizedTimelineData = useMemo(() => vmuTimelineData, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    if (!timelineRef.current) return;

    // Check if GSAP is available
    if (!gsap || !ScrollTrigger) {
      console.warn('GSAP or ScrollTrigger not available, using fallback');
      return;
    }

    try {
      // Mobile detection and optimization
      const isMobile = () => {
        return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      };

      const isTablet = () => {
        return window.innerWidth > 768 && window.innerWidth <= 1024;
      };

      // Performance optimization for mobile
      const optimizeForMobile = () => {
        if (isMobile()) {
          gsap.config({
            force3D: true,
            nullTargetWarn: false
          });
          document.body.classList.add('mobile-device');
        }
        
        if (isTablet()) {
          document.body.classList.add('tablet-device');
        }
      };

      optimizeForMobile();

      // Advanced Timeline-based reveal system with mobile optimization
      const createRevealTimeline = (elem, direction = 1) => {
        const mobile = isMobile();
        const tablet = isTablet();
        
        const tl = gsap.timeline({ 
          defaults: {
            duration: mobile ? 0.8 : tablet ? 1.0 : 1.25, 
            ease: mobile ? "power2.out" : "expo.out",
            overwrite: "auto"
          }
        });

        let x = 0, y = direction * (mobile ? 50 : 100);
        
        if(elem.classList.contains("gs_reveal_fromLeft")) {
          x = mobile ? -50 : -100;
          y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
          x = mobile ? 50 : 100;
          y = 0;
        }

        // Set initial state
        gsap.set(elem, { x: x, y: y, autoAlpha: 0 });
        
        // Create reveal animation
        tl.to(elem, {
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: mobile ? "power2.out" : "expo.out"
        });

        return tl;
      };

      // Feature item timeline with staggered children and mobile optimization
      const createFeatureTimeline = (item) => {
        const mobile = isMobile();
        const tablet = isTablet();
        
        const tl = gsap.timeline({
          defaults: { 
            duration: mobile ? 0.6 : tablet ? 0.7 : 0.8, 
            ease: "power2.out" 
          }
        });

        const image = item.querySelector(".features__image");
        const content = item.querySelector(".features__content");
        const title = item.querySelector(".features__title");
        const description = item.querySelector(".features__description");

        // Determine animation direction with mobile optimization
        const isLeft = item.classList.contains("features__item--left");
        const imageX = isLeft ? (mobile ? -50 : -100) : (mobile ? 50 : 100);
        const contentX = isLeft ? (mobile ? 50 : 100) : (mobile ? -50 : -100);

        // Animate main containers
        tl.fromTo(image, 
          { x: imageX, opacity: 0, scale: mobile ? 0.95 : 0.9 },
          { x: 0, opacity: 1, scale: 1, duration: mobile ? 0.8 : 1 }
        )
        .fromTo(content,
          { x: contentX, opacity: 0 },
          { x: 0, opacity: 1, duration: mobile ? 0.8 : 1 },
          mobile ? "-=0.5" : "-=0.7"
        );

        // Stagger child elements with mobile optimization
        tl.fromTo([title, description],
          { y: mobile ? 20 : 30, opacity: 0 },
          { y: 0, opacity: 1, duration: mobile ? 0.5 : 0.6, stagger: mobile ? 0.1 : 0.2 },
          mobile ? "-=0.3" : "-=0.5"
        );

        return tl;
      };

      // Card hover timeline with mobile optimization
      const createCardHoverTimeline = (card) => {
        const mobile = isMobile();
        const tablet = isTablet();
        
        const tl = gsap.timeline({ paused: true });
        const img = card.querySelector('.features__img');
        
        // Different hover effects for mobile vs desktop
        if (mobile) {
          // Simplified hover for mobile (touch devices)
          tl.to(card, {
            scale: 1.02,
            y: -5,
            boxShadow: "0 10px 20px rgba(30, 58, 138, 0.2)",
            borderColor: "var(--vmu-secondary)",
            duration: 0.2,
            ease: "power2.out"
          });
        } else {
          // Full hover effects for desktop
          tl.to(card, {
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 40px rgba(30, 58, 138, 0.3)",
            borderColor: "var(--vmu-secondary)",
            duration: 0.3,
            ease: "power2.out"
          })
          .to(img, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
          }, 0);
        }

        return tl;
      };

      const hide = (elem) => {
        gsap.set(elem, { autoAlpha: 0 });
      };

      // Set initial states
      gsap.set(".features__item", { opacity: 0 });

      // Individual reveal animations with ScrollTrigger
      gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        hide(elem);
        
        ScrollTrigger.create({
          trigger: elem,
          start: isMobile() ? "top 90%" : "top 85%",
          end: isMobile() ? "bottom 10%" : "bottom 15%",
          once: false, // Allow multiple triggers
          refreshPriority: 1, // Higher priority for GSAP scroll
          onEnter: function() { 
            const tl = createRevealTimeline(elem);
            tl.play();
          }, 
          onEnterBack: function() { 
            // Keep the element visible when scrolling back up
            gsap.set(elem, { autoAlpha: 1, x: 0, y: 0 });
          }
        });
      });

      // Feature items with advanced timeline
      gsap.utils.toArray(".features__item").forEach(function(item) {
        const featureTL = createFeatureTimeline(item);
        
        ScrollTrigger.create({
          trigger: item,
          start: isMobile() ? "top 85%" : "top 80%",
          end: isMobile() ? "bottom 15%" : "bottom 20%",
          once: false, // Allow multiple triggers
          refreshPriority: 1, // Higher priority for GSAP scroll
          onEnter: function() { 
            featureTL.play();
          },
          onEnterBack: function() { 
            // Keep the timeline at its end state when scrolling back up
            featureTL.progress(1);
          }
        });
      });

      // Card hover effects with touch support
      gsap.utils.toArray(".features__card").forEach(function(card) {
        const hoverTL = createCardHoverTimeline(card);
        
        if (isMobile()) {
          // Touch events for mobile
          card.addEventListener('touchstart', () => hoverTL.play());
          card.addEventListener('touchend', () => hoverTL.reverse());
        } else {
          // Mouse events for desktop
          card.addEventListener('mouseenter', () => hoverTL.play());
          card.addEventListener('mouseleave', () => hoverTL.reverse());
        }
      });

      // Handle window resize for responsive behavior
      let resizeTimeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 250);
      };
      
      window.addEventListener('resize', handleResize);

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        window.removeEventListener('resize', handleResize);
      };
    } catch (error) {
      console.error('Timeline Animation Error:', error);
    }
  }, [memoizedTimelineData]);

  return (
    <div className="content">
      <div className="content__hero">
        <h1 className="content__heading gs_reveal">🚢 70 Năm Hành Trình Đại Dương</h1>
        <p className="content__subtitle gs_reveal">Trường Đại học Hàng hải Việt Nam (1956 - 2026)</p>
      </div>
      
      <div className="features" ref={timelineRef}>
        {memoizedTimelineData.map((milestone, index) => (
          <div 
            key={milestone.year} 
            className={`features__item ${index % 2 === 0 ? 'features__item--left' : 'features__item--right'} gs_reveal ${index % 2 === 0 ? 'gs_reveal_fromLeft' : 'gs_reveal_fromRight'} ${milestone.isSpecial ? 'special-milestone' : ''}`}
            data-year={milestone.year}
          >
            <div className="features__image">
              <div className="features__card">
                <img 
                  className="features__img" 
                  src={milestone.image || `https://via.placeholder.com/500x375/003e80/ffffff?text=${milestone.year}`} 
                  alt={milestone.title}
                />
                {milestone.isSpecial && (
                  <div className="special-overlay">
                    <span className="special-badge">⭐ Cột mốc đặc biệt</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="features__content">
              <h2 className="features__title gs_reveal">{milestone.title}</h2>
              <p className="features__description gs_reveal">
                {milestone.description}
              </p>

              {milestone.achievements && milestone.achievements.length > 0 && (
                <div className="timeline-achievements gs_reveal">
                  {milestone.achievements.slice(0, 3).map((achievement, idx) => (
                    <span key={idx} className="achievement-tag">
                      {achievement}
                    </span>
                  ))}
                </div>
              )}

              {milestone.isSpecial && (
                <div className="special-highlight gs_reveal">
                  <div className="highlight-content">
                    <h4>Quyết định 1901/QĐ-TTg</h4>
                    <p>Trường trọng điểm quốc gia về đào tạo hàng hải</p>
                  </div>
                </div>
              )}

              <button 
                className="timeline-btn gs_reveal"
                onClick={() => {
                  setSelectedMilestone(milestone);
                  setIsModalOpen(true);
                }}
              >
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Milestone Modal */}
      {isModalOpen && selectedMilestone && (
        <MilestoneModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedMilestone(null);
          }}
          milestoneData={selectedMilestone}
        />
      )}
    </div>
  );
});

Timeline.displayName = 'Timeline';

export default Timeline;