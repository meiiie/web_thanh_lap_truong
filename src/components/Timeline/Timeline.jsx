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

      // Cache device checks once (avoid repeated layout reflow)
      const mobile = isMobile();
      const tablet = isTablet();

      // Simplified reveal — only transform + opacity (GPU composited)
      const createRevealTimeline = (elem) => {
        let x = 0, y = mobile ? 30 : 60;

        if(elem.classList.contains("gs_reveal_fromLeft")) {
          x = mobile ? -30 : -60;
          y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
          x = mobile ? 30 : 60;
          y = 0;
        }

        gsap.fromTo(elem,
          { x, y, autoAlpha: 0 },
          { x: 0, y: 0, autoAlpha: 1, duration: mobile ? 0.6 : 0.8, ease: "power2.out", overwrite: "auto" }
        );
      };

      // Simplified feature reveal — fewer tweens, only transform+opacity
      const revealFeature = (item) => {
        const isLeft = item.classList.contains("features__item--left");
        const dir = isLeft ? -1 : 1;
        const dist = mobile ? 30 : 50;

        gsap.fromTo(item,
          { x: dir * dist, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: mobile ? 0.6 : 0.8, ease: "power2.out" }
        );
      };

      // Hover handled by CSS only — no GSAP needed for hover
      // (boxShadow animation causes paint, not composited)

      const hide = (elem) => {
        gsap.set(elem, { autoAlpha: 0 });
      };

      // Set initial states
      gsap.set(".features__item", { opacity: 0 });

      // Reveal animations — once: true, no re-trigger
      gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        hide(elem);
        ScrollTrigger.create({
          trigger: elem,
          start: mobile ? "top 92%" : "top 85%",
          once: true,
          onEnter: () => createRevealTimeline(elem),
        });
      });

      // Feature items — once: true, simplified
      gsap.utils.toArray(".features__item").forEach(function(item) {
        gsap.set(item, { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: item,
          start: mobile ? "top 88%" : "top 82%",
          once: true,
          onEnter: () => revealFeature(item),
        });
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

      // Track ScrollTriggers created by this component for targeted cleanup
      const timelineScrollTriggers = ScrollTrigger.getAll().filter(trigger => {
        const triggerEl = trigger.trigger;
        return triggerEl && (
          triggerEl.closest('.features') ||
          triggerEl.classList?.contains('gs_reveal') ||
          triggerEl.classList?.contains('features__item')
        );
      });

      return () => {
        timelineScrollTriggers.forEach(trigger => trigger.kill());
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
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