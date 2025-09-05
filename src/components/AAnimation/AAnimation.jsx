"use client";

import { useRef, useEffect, useState } from 'react';
import './AAnimation.css';

const AAnimation = ({ 
  className = "", 
  size = 100,
  color = "var(--vmu-accent)",
  animateOnHover = true 
}) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentState, setCurrentState] = useState(2); // Start with o-2 visible

  useEffect(() => {
    if (!animateOnHover) return;

    const interval = setInterval(() => {
      setCurrentState(prev => {
        const states = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const currentIndex = states.indexOf(prev);
        const nextIndex = (currentIndex + 1) % states.length;
        return states[nextIndex];
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [animateOnHover]);

  const handleMouseEnter = () => {
    if (animateOnHover) {
      setIsHovered(true);
      setCurrentState(1); // Start animation from beginning
    }
  };

  const handleMouseLeave = () => {
    if (animateOnHover) {
      setIsHovered(false);
      setCurrentState(2); // Return to default state
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`a-anim ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* A-1 - Base layer */}
      <svg 
        className={`a-1 ${currentState === 1 ? 'active' : ''}`}
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
        style={{ display: currentState === 1 ? 'block' : 'none' }}
      >
        <path 
          d="M20 80 L50 20 L80 80 L70 80 L65 70 L35 70 L30 80 Z M40 60 L60 60 L50 35 Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
        />
      </svg>

      {/* A-2 - Default visible state */}
      <svg 
        className={`a-2 ${currentState === 2 ? 'active' : ''}`}
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
        style={{ display: currentState === 2 ? 'block' : 'none' }}
      >
        <path 
          d="M20 80 L50 20 L80 80 L70 80 L65 70 L35 70 L30 80 Z M40 60 L60 60 L50 35 Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
          opacity="0.8"
        />
      </svg>

      {/* A-3 - Animated state */}
      <svg 
        className={`a-3 ${currentState === 3 ? 'active' : ''}`}
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
        style={{ display: currentState === 3 ? 'block' : 'none' }}
      >
        <path 
          d="M20 80 L50 20 L80 80 L70 80 L65 70 L35 70 L30 80 Z M40 60 L60 60 L50 35 Z"
          fill={color}
          stroke={color}
          strokeWidth="3"
          opacity="0.9"
        />
      </svg>

      {/* A-4 - Glow effect */}
      <svg 
        className={`a-4 ${currentState === 4 ? 'active' : ''}`}
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
        style={{ display: currentState === 4 ? 'block' : 'none' }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path 
          d="M20 80 L50 20 L80 80 L70 80 L65 70 L35 70 L30 80 Z M40 60 L60 60 L50 35 Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
          filter="url(#glow)"
        />
      </svg>

      {/* A-5 - Outline effect */}
      <svg 
        className={`a-5 ${currentState === 5 ? 'active' : ''}`}
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
        style={{ display: currentState === 5 ? 'block' : 'none' }}
      >
        <path 
          d="M20 80 L50 20 L80 80 L70 80 L65 70 L35 70 L30 80 Z M40 60 L60 60 L50 35 Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          opacity="0.6"
        />
      </svg>

      {/* A-6 - Filled state */}
      <svg 
        className={`a-6 ${currentState === 6 ? 'active' : ''}`}
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
        style={{ display: currentState === 6 ? 'block' : 'none' }}
      >
        <path 
          d="M20 80 L50 20 L80 80 L70 80 L65 70 L35 70 L30 80 Z M40 60 L60 60 L50 35 Z"
          fill={color}
          stroke="none"
        />
      </svg>

      {/* A-7 - Dashed outline */}
      <svg 
        className={`a-7 ${currentState === 7 ? 'active' : ''}`}
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
        style={{ display: currentState === 7 ? 'block' : 'none' }}
      >
        <path 
          d="M20 80 L50 20 L80 80 L70 80 L65 70 L35 70 L30 80 Z M40 60 L60 60 L50 35 Z"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      </svg>

      {/* A-8 - Gradient fill */}
      <svg 
        className={`a-8 ${currentState === 8 ? 'active' : ''}`}
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
        style={{ display: currentState === 8 ? 'block' : 'none' }}
      >
        <defs>
          <linearGradient id="aGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: color, stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: color, stopOpacity: 0.5}} />
          </linearGradient>
        </defs>
        <path 
          d="M20 80 L50 20 L80 80 L70 80 L65 70 L35 70 L30 80 Z M40 60 L60 60 L50 35 Z"
          fill="url(#aGradient)"
          stroke={color}
          strokeWidth="1"
        />
      </svg>

      {/* A-9 - Shadow effect */}
      <svg 
        className={`a-9 ${currentState === 9 ? 'active' : ''}`}
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
        style={{ display: currentState === 9 ? 'block' : 'none' }}
      >
        <defs>
          <filter id="shadow">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor={color} floodOpacity="0.5"/>
          </filter>
        </defs>
        <path 
          d="M20 80 L50 20 L80 80 L70 80 L65 70 L35 70 L30 80 Z M40 60 L60 60 L50 35 Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
          filter="url(#shadow)"
        />
      </svg>

      {/* A-10 - Wireframe */}
      <svg 
        className={`a-10 ${currentState === 10 ? 'active' : ''}`}
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
        style={{ display: currentState === 10 ? 'block' : 'none' }}
      >
        <path 
          d="M20 80 L50 20 L80 80 L70 80 L65 70 L35 70 L30 80 Z M40 60 L60 60 L50 35 Z"
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity="0.8"
        />
      </svg>

      {/* A-11 - Final state */}
      <svg 
        className={`a-11 ${currentState === 11 ? 'active' : ''}`}
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
        style={{ display: currentState === 11 ? 'block' : 'none' }}
      >
        <path 
          d="M20 80 L50 20 L80 80 L70 80 L65 70 L35 70 L30 80 Z M40 60 L60 60 L50 35 Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
          opacity="0.7"
        />
      </svg>
    </div>
  );
};

export default AAnimation;
