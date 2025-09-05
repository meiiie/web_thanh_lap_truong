'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  CalendarDaysIcon, 
  AcademicCapIcon, 
  TrophyIcon, 
  StarIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import './MilestoneModal.css';

const MilestoneModal = ({ isOpen, onClose, milestoneData }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) return;

    if (isOpen) {
      // Ngăn chặn cuộn body khi modal mở
      document.body.style.overflow = 'hidden';
      
      // Open animation
      gsap.set(modalRef.current, { display: 'flex' });
      gsap.fromTo(overlayRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(modalRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' }
      );
    } else {
      // Khôi phục cuộn body khi modal đóng
      document.body.style.overflow = 'unset';
      
      // Close animation
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(modalRef.current, 
        { scale: 0.8, opacity: 0, y: 50, duration: 0.3, ease: 'power2.in' },
        { onComplete: () => gsap.set(modalRef.current, { display: 'none' }) }
      );
    }
  }, [isOpen]);

  // Cleanup function để khôi phục scroll khi component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isOpen || !milestoneData) return null;

  const getColorClass = (color) => {
    switch (color) {
      case 'primary': return 'modal-primary';
      case 'secondary': return 'modal-secondary';
      case 'accent': return 'modal-accent';
      default: return 'modal-primary';
    }
  };

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'calendar': return <CalendarDaysIcon className="modal-icon-svg" />;
      case 'academic': return <AcademicCapIcon className="modal-icon-svg" />;
      case 'trophy': return <TrophyIcon className="modal-icon-svg" />;
      case 'star': return <StarIcon className="modal-icon-svg" />;
      default: return <StarIcon className="modal-icon-svg" />;
    }
  };

  return (
    <div ref={modalRef} className="milestone-modal">
      <div ref={overlayRef} className="modal-overlay" onClick={onClose}></div>
      <div className={`modal-content ${getColorClass(milestoneData.color)}`}>
        <button className="modal-close" onClick={onClose}>
          <XMarkIcon className="close-icon" />
        </button>
        
        <div className="modal-header">
          <div className="modal-icon">
            {getIcon(milestoneData.iconType || 'star')}
          </div>
          <div className="modal-year">{milestoneData.year}</div>
          <h2 className="modal-title">{milestoneData.title}</h2>
          <h3 className="modal-subtitle">{milestoneData.subtitle}</h3>
        </div>

        <div className="modal-body">
          <div className="modal-description">
            <p>{milestoneData.description}</p>
          </div>
          
          {milestoneData.achievements && milestoneData.achievements.length > 0 && (
            <div className="modal-achievements">
              <h4>Thành tựu nổi bật</h4>
              <div className="achievements-grid">
                {milestoneData.achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <div className="achievement-icon">✓</div>
                    <span className="achievement-text">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {milestoneData.image && (
            <div className="modal-image">
              <img src={milestoneData.image} alt={milestoneData.title} />
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="modal-btn modal-btn-primary" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default MilestoneModal;
