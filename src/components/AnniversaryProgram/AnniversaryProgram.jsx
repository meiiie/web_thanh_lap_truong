'use client';
import React, { memo } from 'react';
import Copy from '../Copy/Copy';
import { 
  CalendarDaysIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

const AnniversaryProgram = memo(() => {
  return (
    <section className="anniversary-program">
      <div className="container">
        <div className="section-header">
          <Copy delay={0.1}>
            <h2>Chương trình kỷ niệm 70 năm</h2>
            <p>Những hoạt động đặc biệt trong năm kỷ niệm</p>
          </Copy>
        </div>
        <div className="program-grid">
          <div className="program-item">
            <div className="program-icon">
              <CalendarDaysIcon className="icon" />
            </div>
            <h3>Lễ kỷ niệm chính thức</h3>
            <p>Ngày 01/04/2026 với sự tham gia của toàn thể cán bộ, sinh viên</p>
          </div>
          <div className="program-item">
            <div className="program-icon">
              <AcademicCapIcon className="icon" />
            </div>
            <h3>Triển lãm thành tựu</h3>
            <p>Trưng bày những thành tựu nghiên cứu và đào tạo nổi bật</p>
          </div>
          <div className="program-item">
            <div className="program-icon">
              <UserGroupIcon className="icon" />
            </div>
            <h3>Hội thảo quốc tế</h3>
            <p>Trao đổi kinh nghiệm với các đối tác quốc tế</p>
          </div>
          <div className="program-item">
            <div className="program-icon">
              <SparklesIcon className="icon" />
            </div>
            <h3>Gala dinner</h3>
            <p>Bữa tiệc gặp gỡ và giao lưu giữa các thế hệ</p>
          </div>
        </div>
      </div>
    </section>
  );
});

AnniversaryProgram.displayName = 'AnniversaryProgram';

export default AnniversaryProgram;
