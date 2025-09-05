'use client';

import React from 'react';
import './HistoryTimeline.css';

const timelineData = [
  {
    year: '1956',
    title: 'Thành lập trường',
    description: 'Trường Đại học Hàng hải Việt Nam được thành lập tại Hải Phòng, mở ra kỷ nguyên đào tạo nhân lực hàng hải cho đất nước.',
    icon: '🚢'
  },
  {
    year: '1960',
    title: 'Khóa sinh viên đầu tiên',
    description: 'Khóa sinh viên đầu tiên tốt nghiệp, đánh dấu bước ngoặt trong việc đào tạo thuyền viên Việt Nam.',
    icon: '🎓'
  },
  {
    year: '1975',
    title: 'Mở rộng đào tạo',
    description: 'Trường mở rộng các chuyên ngành đào tạo, bao gồm kỹ thuật hàng hải, kinh tế vận tải biển.',
    icon: '📚'
  },
  {
    year: '1985',
    title: 'Hợp tác quốc tế',
    description: 'Bắt đầu các chương trình hợp tác đào tạo với các trường hàng hải quốc tế.',
    icon: '🌍'
  },
  {
    year: '1995',
    title: 'Hiện đại hóa',
    description: 'Đầu tư cơ sở vật chất, phòng thí nghiệm hiện đại và công nghệ đào tạo tiên tiến.',
    icon: '🔬'
  },
  {
    year: '2005',
    title: 'Chuẩn quốc tế',
    description: 'Chương trình đào tạo đạt chuẩn quốc tế, được công nhận bởi các tổ chức hàng hải quốc tế.',
    icon: '🏆'
  },
  {
    year: '2015',
    title: 'Kỷ niệm 60 năm',
    description: 'Tổ chức thành công lễ kỷ niệm 60 năm thành lập trường với nhiều hoạt động ý nghĩa.',
    icon: '🎉'
  },
  {
    year: '2020',
    title: 'Đổi mới sáng tạo',
    description: 'Áp dụng công nghệ 4.0 trong đào tạo, phát triển các chương trình đào tạo trực tuyến.',
    icon: '💻'
  },
  {
    year: '2025',
    title: 'Hướng tới tương lai',
    description: 'Chuẩn bị cho kỷ niệm 70 năm với tầm nhìn trở thành trường đại học hàng hải hàng đầu khu vực.',
    icon: '🚀'
  },
  {
    year: '2026',
    title: 'Kỷ niệm 70 năm',
    description: 'Trường Đại học Hàng hải Việt Nam kỷ niệm 70 năm thành lập - một chặng đường vẻ vang.',
    icon: '🌟'
  }
];

const HistoryTimeline = () => {
  return (
    <section id="timeline" className="history-timeline vmu-section-light">
      <div className="container">
        <div className="timeline-header vmu-text-center">
          <h2 className="vmu-h2">Lịch sử 70 năm xây dựng và phát triển</h2>
          <p className="vmu-body">
            Hành trình 70 năm của Trường Đại học Hàng hải Việt Nam - từ những ngày đầu thành lập 
            đến vị thế là trường đại học hàng hải hàng đầu Việt Nam
          </p>
        </div>

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div 
              key={item.year} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content vmu-card">
                <div className="timeline-icon">
                  <span className="icon-emoji">{item.icon}</span>
                </div>
                <div className="timeline-year">{item.year}</div>
                <h3 className="vmu-h3 timeline-title">{item.title}</h3>
                <p className="vmu-body-small timeline-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
