"use client";
import "./contact.css";
import { useEffect } from "react";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";

const page = () => {
  useEffect(() => {
    // Error handling cho trang connect
    const handleError = (event) => {
      console.error('Connect page error:', event);
    };

    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <>
      <Nav />
      <div className="page contact">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-col">
              <div className="contact-hero-header">
                <h1>Liên hệ tới VMU</h1>
              </div>
              <div className="contact-copy-year">
                <h1>70 NĂM</h1>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-info">
                <div className="contact-info-block">
                  <p>Thông tin kỷ niệm 70 năm</p>
                  <p>70nam@vimaru.edu.vn</p>
                  <p>0225.3.747.024</p>
                </div>
                <div className="contact-info-block">
                  <p>Tuyển sinh & Đào tạo</p>
                  <p>tuyensinh@vimaru.edu.vn</p>
                  <p>0225.3.747.024</p>
                </div>
                <div className="contact-info-block">
                  <p>Địa chỉ trường</p>
                  <p>484 Lạch Tray</p>
                  <p>Ngô Quyền, Hải Phòng</p>
                  <p>Việt Nam</p>
                </div>
                <div className="contact-info-block">
                  <p>Kết nối VMU</p>
                  <p>Facebook: VMU Official</p>
                  <p>YouTube: VMU Channel</p>
                  <p>LinkedIn: Vietnam Maritime University</p>
                </div>
              </div>
              <div className="contact-img">
                <img
                  src="/contact/contact-img.jpg"
                  alt="Trường Đại học Hàng hải Việt Nam"
                  onError={(e) => {
                    console.log('Image load error:', e);
                    e.target.style.display = 'none';
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully');
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
