'use client';

import React from 'react';
import './InternationalPartners.css';

const partnersData = [
  {
    name: 'Tàu huấn luyện VMU Việt-Hàn',
    description: 'Tàu huấn luyện hiện đại với trang thiết bị tiên tiến, phục vụ đào tạo thực hành cho sinh viên.',
    image: '/events/training-ship.jpg',
    category: 'Cơ sở vật chất'
  },
  {
    name: 'Phòng thí nghiệm Hàng hải',
    description: 'Hệ thống phòng thí nghiệm hiện đại với các thiết bị mô phỏng hàng hải tiên tiến.',
    image: '/events/maritime-lab.jpg',
    category: 'Nghiên cứu'
  },
  {
    name: 'Đối tác Quốc tế',
    description: 'Hợp tác với các trường đại học hàng hải hàng đầu thế giới trong đào tạo và nghiên cứu.',
    image: '/events/international-partners.jpg',
    category: 'Hợp tác'
  },
  {
    name: 'Campus Hải Phòng',
    description: 'Khuôn viên trường rộng rãi, hiện đại với đầy đủ tiện nghi học tập và sinh hoạt.',
    image: '/events/campus.jpg',
    category: 'Cơ sở vật chất'
  }
];

const InternationalPartners = () => {
  return (
    <section className="international-partners vmu-section-gray">
      <div className="container">
        <div className="partners-header vmu-text-center">
          <h2 className="vmu-h2">Hợp tác Quốc tế & Cơ sở vật chất</h2>
          <p className="vmu-body">
            Những cơ sở vật chất hiện đại và mối quan hệ hợp tác quốc tế 
            giúp nâng cao chất lượng đào tạo và nghiên cứu
          </p>
        </div>

        <div className="partners-grid vmu-grid vmu-grid-2">
          {partnersData.map((partner, index) => (
            <div key={partner.name} className="partner-card vmu-card">
              <div className="partner-image">
                <div className="image-placeholder">
                  <span className="placeholder-text">{partner.category}</span>
                </div>
              </div>
              <div className="partner-content">
                <h3 className="vmu-h3 partner-title">{partner.name}</h3>
                <p className="vmu-body-small partner-description">
                  {partner.description}
                </p>
                <div className="partner-category">
                  <span className="category-tag">{partner.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalPartners;
