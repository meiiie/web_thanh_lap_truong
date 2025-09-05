'use client';

import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    eventType: 'all'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          organization: '',
          message: '',
          eventType: 'all'
        });
      }, 3000);
    }, 2000);
  };

  const validateForm = () => {
    return formData.fullName && formData.email && formData.phone;
  };

  if (submitStatus === 'success') {
    return (
      <section id="registration" className="registration-form vmu-section-light">
        <div className="container">
          <div className="success-message vmu-text-center">
            <div className="success-icon">✅</div>
            <h2 className="vmu-h2">Đăng ký thành công!</h2>
            <p className="vmu-body">
              Cảm ơn bạn đã đăng ký tham dự sự kiện kỷ niệm 70 năm thành lập 
              Trường Đại học Hàng hải Việt Nam. Chúng tôi sẽ liên hệ với bạn sớm nhất.
            </p>
            <button 
              onClick={() => setSubmitStatus(null)}
              className="vmu-btn vmu-btn-primary"
            >
              Đăng ký thêm
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="registration-form vmu-section-light">
      <div className="container">
        <div className="form-header vmu-text-center">
          <h2 className="vmu-h2">Đăng ký tham dự sự kiện</h2>
          <p className="vmu-body">
            Hãy đăng ký để nhận thông tin chi tiết và cập nhật mới nhất về 
            sự kiện kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam
          </p>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit} className="registration-form-content">
            <div className="form-grid vmu-grid vmu-grid-2">
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Họ và tên <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Nhập họ và tên đầy đủ"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Số điện thoại <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="0123456789"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="organization" className="form-label">
                  Tổ chức/Công ty
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Tên tổ chức hoặc công ty"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="eventType" className="form-label">
                  Loại sự kiện quan tâm
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="all">Tất cả sự kiện</option>
                  <option value="ceremony">Lễ kỷ niệm chính thức</option>
                  <option value="exhibition">Triển lãm thành tựu</option>
                  <option value="seminar">Hội thảo khoa học</option>
                  <option value="alumni">Gặp gỡ cựu sinh viên</option>
                  <option value="openhouse">Ngày mở cửa</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message" className="form-label">
                  Lời nhắn (tùy chọn)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Nhập lời nhắn hoặc yêu cầu đặc biệt..."
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div className="form-actions vmu-text-center">
              <button
                type="submit"
                className="vmu-btn vmu-btn-primary"
                disabled={!validateForm() || isSubmitting}
              >
                {isSubmitting ? 'Đang gửi...' : 'Đăng ký tham dự'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
