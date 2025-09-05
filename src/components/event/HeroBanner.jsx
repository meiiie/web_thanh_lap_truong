'use client';

import React, { useState, useEffect } from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-01T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-banner vmu-section-primary">
      <div className="hero-banner-overlay"></div>
      <div className="container">
        <div className="hero-banner-content">
          <div className="hero-banner-header">
            <h1 className="vmu-h1 hero-title">
              Trường Đại học Hàng hải Việt Nam
            </h1>
            <h2 className="vmu-h2 hero-subtitle">
              Kỷ niệm 70 năm thành lập
            </h2>
            <p className="vmu-body hero-tagline">
              Mái trường đại dương – vững tay lái, vươn ra biển lớn
            </p>
            <p className="vmu-body-small hero-date">
              01/04/1956 - 01/04/2026
            </p>
          </div>

          <div className="countdown-section">
            <h3 className="vmu-h3 countdown-title">Đếm ngược đến ngày kỷ niệm</h3>
            <div className="countdown-timer">
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.days}</span>
                <span className="countdown-label">Ngày</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.hours}</span>
                <span className="countdown-label">Giờ</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.minutes}</span>
                <span className="countdown-label">Phút</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.seconds}</span>
                <span className="countdown-label">Giây</span>
              </div>
            </div>
          </div>

          <div className="hero-banner-actions">
            <a href="#registration" className="vmu-btn vmu-btn-accent">
              Đăng ký tham dự
            </a>
            <a href="#timeline" className="vmu-btn vmu-btn-secondary">
              Khám phá lịch sử
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
