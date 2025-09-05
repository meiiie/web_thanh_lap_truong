'use client';

import React from 'react';
import './GallerySection.css';

const galleryData = [
  {
    title: 'Nghiên cứu Hàng hải',
    category: 'Nghiên cứu',
    image: '/events/research.jpg'
  },
  {
    title: 'Đào tạo Thuyền viên',
    category: 'Đào tạo',
    image: '/events/training.jpg'
  },
  {
    title: 'Công nghệ Vận tải Biển',
    category: 'Công nghệ',
    image: '/events/technology.jpg'
  },
  {
    title: 'Hợp tác Quốc tế',
    category: 'Hợp tác',
    image: '/events/cooperation.jpg'
  },
  {
    title: 'Cơ sở Vật chất',
    category: 'Cơ sở',
    image: '/events/facilities.jpg'
  },
  {
    title: 'Sinh viên Tốt nghiệp',
    category: 'Sinh viên',
    image: '/events/graduation.jpg'
  }
];

const testimonialsData = [
  {
    name: 'Nguyễn Văn A',
    role: 'Cựu sinh viên khóa 2010',
    company: 'Công ty Vận tải Biển ABC',
    content: 'Trường Đại học Hàng hải Việt Nam đã trang bị cho tôi kiến thức vững chắc và kỹ năng thực hành cần thiết để thành công trong ngành hàng hải.',
    avatar: '/events/avatar-1.jpg'
  },
  {
    name: 'Trần Thị B',
    role: 'Sinh viên năm cuối',
    company: 'Khoa Kỹ thuật Hàng hải',
    content: 'Môi trường học tập tại VMU rất chuyên nghiệp, giảng viên tận tâm và cơ sở vật chất hiện đại giúp tôi phát triển toàn diện.',
    avatar: '/events/avatar-2.jpg'
  },
  {
    name: 'Lê Văn C',
    role: 'Đối tác doanh nghiệp',
    company: 'Tập đoàn Hàng hải XYZ',
    content: 'VMU là đối tác đào tạo tin cậy, cung cấp nguồn nhân lực chất lượng cao cho ngành hàng hải Việt Nam.',
    avatar: '/events/avatar-3.jpg'
  }
];

const GallerySection = () => {
  return (
    <section className="gallery-section vmu-section-light">
      <div className="container">
        <div className="gallery-header vmu-text-center">
          <h2 className="vmu-h2">Gallery & Testimonials</h2>
          <p className="vmu-body">
            Những hình ảnh đẹp và lời chia sẻ từ cộng đồng VMU
          </p>
        </div>

        <div className="gallery-grid vmu-grid vmu-grid-3">
          {galleryData.map((item, index) => (
            <div key={item.title} className="gallery-item">
              <div className="gallery-image">
                <div className="image-placeholder">
                  <span className="placeholder-text">{item.category}</span>
                </div>
              </div>
              <div className="gallery-overlay">
                <h3 className="gallery-title">{item.title}</h3>
                <span className="gallery-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-section">
          <h3 className="vmu-h3 testimonials-title">Tiếng nói từ cộng đồng</h3>
          <div className="testimonials-grid vmu-grid vmu-grid-3">
            {testimonialsData.map((testimonial, index) => (
              <div key={testimonial.name} className="testimonial-card vmu-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <div className="avatar-placeholder">
                      <span className="avatar-text">{testimonial.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
