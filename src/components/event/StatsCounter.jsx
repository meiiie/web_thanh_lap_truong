'use client';

import React, { useState, useEffect } from 'react';
import './StatsCounter.css';

const statsData = [
  {
    label: 'Năm xây dựng và phát triển',
    value: 70,
    suffix: '+',
    icon: '📅'
  },
  {
    label: 'Chuyên ngành đào tạo',
    value: 50,
    suffix: '+',
    icon: '🎯'
  },
  {
    label: 'Sinh viên đã tốt nghiệp',
    value: 25000,
    suffix: '+',
    icon: '🎓'
  },
  {
    label: 'Tỷ lệ sinh viên có việc làm',
    value: 95,
    suffix: '%',
    icon: '💼'
  }
];

const StatsCounter = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector('.stats-counter');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = statsData.map((stat, index) => {
      const targetValue = stat.value;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const currentValue = Math.floor(targetValue * progress);

        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = currentValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timers[index]);
        }
      }, stepDuration);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [isVisible]);

  return (
    <section className="stats-counter vmu-section-gray">
      <div className="container">
        <div className="stats-header vmu-text-center">
          <h2 className="vmu-h2">Thống kê & Thành tựu</h2>
          <p className="vmu-body">
            Những con số ấn tượng thể hiện sự phát triển và đóng góp của 
            Trường Đại học Hàng hải Việt Nam trong 70 năm qua
          </p>
        </div>

        <div className="stats-grid vmu-grid vmu-grid-4">
          {statsData.map((stat, index) => (
            <div key={stat.label} className="stat-item vmu-card">
              <div className="stat-icon">
                <span className="icon-emoji">{stat.icon}</span>
              </div>
              <div className="stat-number">
                {counts[index]}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
