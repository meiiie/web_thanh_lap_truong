'use client';

import React from 'react';
import './ProgramHighlights.css';

const programData = [
  {
    title: 'Kỹ thuật & Công nghệ',
    description: 'Đào tạo các chuyên ngành kỹ thuật hàng hải, công nghệ vận tải biển, kỹ thuật tàu thủy.',
    icon: '⚙️',
    count: 25,
    color: 'var(--vmu-primary)'
  },
  {
    title: 'Ngoại ngữ & Giao tiếp',
    description: 'Chương trình đào tạo tiếng Anh hàng hải, giao tiếp quốc tế, văn hóa biển.',
    icon: '🌊',
    count: 8,
    color: 'var(--vmu-secondary)'
  },
  {
    title: 'Kinh tế & Luật',
    description: 'Đào tạo quản lý vận tải biển, kinh tế biển, luật hàng hải quốc tế.',
    icon: '📊',
    count: 12,
    color: 'var(--vmu-accent)'
  },
  {
    title: 'Chương trình chất lượng cao',
    description: 'Các chương trình đào tạo theo chuẩn quốc tế, hợp tác với đối tác nước ngoài.',
    icon: '⭐',
    count: 5,
    color: 'var(--vmu-primary)'
  }
];

const ProgramHighlights = () => {
  return (
    <section className="program-highlights vmu-section-light">
      <div className="container">
        <div className="program-header vmu-text-center">
          <h2 className="vmu-h2">Ngành đào tạo & Khoa viện</h2>
          <p className="vmu-body">
            Hệ thống đào tạo đa ngành, đa lĩnh vực với chất lượng cao, 
            đáp ứng nhu cầu phát triển của ngành hàng hải Việt Nam
          </p>
        </div>

        <div className="program-grid vmu-grid vmu-grid-2">
          {programData.map((program, index) => (
            <div key={program.title} className="program-card vmu-card">
              <div className="program-icon" style={{ color: program.color }}>
                <span className="icon-emoji">{program.icon}</span>
              </div>
              <h3 className="vmu-h3 program-title">{program.title}</h3>
              <p className="vmu-body-small program-description">
                {program.description}
              </p>
              <div className="program-count">
                <span className="count-number">{program.count}</span>
                <span className="count-label">chuyên ngành</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
