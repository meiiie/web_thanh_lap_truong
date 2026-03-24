'use client';
import React, { useState, useEffect, memo } from 'react';

const CountdownTimer = memo(() => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isClient, setIsClient] = useState(false);
  const [hasExpired, setHasExpired] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const targetDate = new Date('2026-04-01T00:00:00');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setHasExpired(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [isClient]);

  if (hasExpired) {
    return (
      <div className="countdown-timer-container">
        <div className="countdown-celebration">
          <h2 style={{ fontSize: '2rem', textAlign: 'center', color: 'var(--vmu-gold, #c8a951)' }}>
            Chào mừng kỷ niệm 70 năm!
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="countdown-timer-container">
      <div className="countdown-timer">
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.days}</div>
          <div className="countdown-label">Ngày</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.hours}</div>
          <div className="countdown-label">Giờ</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.minutes}</div>
          <div className="countdown-label">Phút</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.seconds}</div>
          <div className="countdown-label">Giây</div>
        </div>
      </div>
    </div>
  );
});

CountdownTimer.displayName = 'CountdownTimer';

export default CountdownTimer;
