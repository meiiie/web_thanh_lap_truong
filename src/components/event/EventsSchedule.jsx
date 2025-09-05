'use client';

import React from 'react';
import './EventsSchedule.css';

const eventsData = [
  {
    date: '01/04/2026',
    time: '08:00 - 12:00',
    title: 'Lễ kỷ niệm chính thức',
    location: 'Hội trường lớn - Trường ĐH Hàng hải Việt Nam',
    description: 'Lễ kỷ niệm 70 năm thành lập trường với sự tham dự của lãnh đạo Bộ, thành phố và đại diện các đối tác.',
    type: 'Lễ chính'
  },
  {
    date: '01/04/2026',
    time: '14:00 - 17:00',
    title: 'Triển lãm thành tựu 70 năm',
    location: 'Sảnh chính và các phòng trưng bày',
    description: 'Triển lãm các thành tựu, nghiên cứu và dự án tiêu biểu của trường trong 70 năm qua.',
    type: 'Triển lãm'
  },
  {
    date: '02/04/2026',
    time: '09:00 - 11:00',
    title: 'Hội thảo khoa học',
    location: 'Phòng hội thảo A',
    description: 'Hội thảo khoa học "Phát triển bền vững ngành hàng hải Việt Nam" với các chuyên gia trong và ngoài nước.',
    type: 'Hội thảo'
  },
  {
    date: '02/04/2026',
    time: '14:00 - 16:00',
    title: 'Gặp gỡ cựu sinh viên',
    location: 'Sân trường và khu vực cà phê',
    description: 'Buổi gặp gỡ, giao lưu giữa cựu sinh viên các khóa và sinh viên hiện tại.',
    type: 'Giao lưu'
  },
  {
    date: '03/04/2026',
    time: '08:00 - 17:00',
    title: 'Ngày mở cửa',
    location: 'Toàn bộ khuôn viên trường',
    description: 'Mở cửa cho công chúng tham quan, tìm hiểu về trường và các ngành đào tạo.',
    type: 'Mở cửa'
  }
];

const EventsSchedule = () => {
  return (
    <section id="schedule" className="events-schedule vmu-section-primary">
      <div className="container">
        <div className="schedule-header vmu-text-center">
          <h2 className="vmu-h2">Lịch trình sự kiện</h2>
          <p className="vmu-body">
            Chương trình chi tiết các hoạt động kỷ niệm 70 năm thành lập 
            Trường Đại học Hàng hải Việt Nam
          </p>
        </div>

        <div className="schedule-container">
          {eventsData.map((event, index) => (
            <div key={index} className="event-item">
              <div className="event-date">
                <div className="date-day">{event.date.split('/')[0]}</div>
                <div className="date-month">{event.date.split('/')[1]}</div>
                <div className="date-year">{event.date.split('/')[2]}</div>
              </div>
              
              <div className="event-content">
                <div className="event-header">
                  <h3 className="event-title">{event.title}</h3>
                  <span className="event-type">{event.type}</span>
                </div>
                
                <div className="event-details">
                  <div className="event-time">
                    <span className="time-icon">🕐</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="event-location">
                    <span className="location-icon">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="schedule-cta vmu-text-center">
          <p className="vmu-body">
            Đăng ký tham dự để nhận thông tin chi tiết và cập nhật mới nhất về sự kiện
          </p>
          <a href="#registration" className="vmu-btn vmu-btn-accent">
            Đăng ký ngay
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSchedule;
