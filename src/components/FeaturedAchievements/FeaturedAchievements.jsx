'use client';
import React, { memo, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Copy from '../Copy/Copy';
import featuredAchievementsContent from './featured-achievements-content';
import './FeaturedAchievements.css';

const FeaturedAchievements = memo(() => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Check if GSAP is available
    if (!gsap || !ScrollTrigger) {
      console.warn('GSAP or ScrollTrigger not available, using fallback');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const featuredAchievementCards = gsap.utils.toArray(".featured-achievement-card");

    featuredAchievementCards.forEach((featuredAchievementCard, index) => {
      // Chỉ áp dụng hiệu ứng 3D cho các card không phải cuối cùng
      if (index < featuredAchievementCards.length - 1) {
        const featuredAchievementCardInner = featuredAchievementCard.querySelector(
          ".featured-achievement-card-inner"
        );

        const isMobile = window.innerWidth <= 1000;

        gsap.fromTo(
          featuredAchievementCardInner,
          {
            y: "0%",
            z: 0,
            rotationX: 0,
          },
          {
            y: "-50%",
            z: -250,
            rotationX: 45,
            scrollTrigger: {
              trigger: featuredAchievementCards[index + 1],
              start: isMobile ? "top 85%" : "top 100%",
              end: "top -75%",
              scrub: 0.5, // Smooth scrub for GSAP scroll
              pin: featuredAchievementCard,
              pinSpacing: false,
              invalidateOnRefresh: true,
              refreshPriority: 1, // Higher priority for GSAP scroll
            },
          }
        );

        // Chỉ áp dụng after-opacity cho các card không phải cuối cùng
        gsap.to(featuredAchievementCardInner, {
          "--after-opacity": 1,
          scrollTrigger: {
            trigger: featuredAchievementCards[index + 1],
            start: "top 75%",
            end: "top 0%",
            scrub: 0.5, // Smooth scrub for GSAP scroll
            invalidateOnRefresh: true,
            refreshPriority: 1, // Higher priority for GSAP scroll
          },
        });
      } else {
        // Card cuối cùng - không áp dụng hiệu ứng 3D và after-opacity
        const featuredAchievementCardInner = featuredAchievementCard.querySelector(
          ".featured-achievement-card-inner"
        );
        
        // Đảm bảo card cuối cùng luôn hiển thị đúng
        gsap.set(featuredAchievementCardInner, {
          y: "0%",
          z: 0,
          rotationX: 0,
          "--after-opacity": 0,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="featured-achievements">
      <div className="container">
        <div className="section-header">
          <Copy delay={0.1}>
            <h2>Thành tựu nổi bật</h2>
            <p>Những dự án nghiên cứu và đóng góp quan trọng trong 70 năm qua</p>
          </Copy>
        </div>
        
        {featuredAchievementsContent.map((achievement, index) => (
          <div 
            key={index} 
            className={`featured-achievement-card ${achievement.title.includes('Quyết định 1901') ? 'special-achievement' : ''}`}
          >
            <div className="featured-achievement-card-inner">
              <div className="featured-achievement-card-content">
                <div className="featured-achievement-card-info">
                  <p>{achievement.info}</p>
                </div>
                <div className="featured-achievement-card-content-main">
                  <div className="featured-achievement-card-title">
                    <h2>{achievement.title}</h2>
                  </div>
                  <div className="featured-achievement-card-description">
                    <p className="lg">{achievement.description}</p>
                  </div>
                </div>
              </div>
              <div className="featured-achievement-card-img">
                <img src={achievement.image} alt={achievement.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

FeaturedAchievements.displayName = 'FeaturedAchievements';

export default FeaturedAchievements;
