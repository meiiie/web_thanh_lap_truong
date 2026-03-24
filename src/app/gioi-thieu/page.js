"use client";
import "./studio.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page studio">
        {/* Hero — Sứ mệnh (unique, không trùng homepage) */}
        <section className="studio-hero">
          <div className="container">
            <div className="studio-hero-col">
              <Copy delay={0.5}>
                <p style={{textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.08em', fontSize: '0.9rem', color: 'var(--vmu-primary)'}}>Sứ mệnh của VMU</p>
              </Copy>
            </div>
            <div className="studio-hero-col">
              <Copy delay={0.6}>
                <h2>
                  Đào tạo nguồn nhân lực chất lượng cao, nghiên cứu khoa học
                  và chuyển giao công nghệ phục vụ phát triển bền vững kinh tế
                  biển Việt Nam.
                </h2>
              </Copy>
              <div className="studio-hero-hero-img">
                <img src="/vmu/official/home-hero.jpg" alt="Lễ kỷ niệm tại Trường Đại học Hàng hải Việt Nam" />
              </div>
            </div>
          </div>
        </section>

        {/* Vị thế — Unique content about national key university */}
        <section className="vmu-identity">
          <div className="container">
            <div className="vmu-identity-grid">
              <div className="vmu-identity-main">
                <Copy delay={0.1}>
                  <h2>Trường trọng điểm quốc gia về kinh tế biển</h2>
                  <p>
                    Ngày 05/9/2025, Thủ tướng Chính phủ ký Quyết định 1901/QĐ-TTg
                    phê duyệt Đề án xây dựng Trường Đại học Hàng hải Việt Nam thành
                    trường trọng điểm quốc gia về đào tạo, nghiên cứu phục vụ phát
                    triển bền vững kinh tế biển giai đoạn đến năm 2030, tầm nhìn đến
                    năm 2045.
                  </p>
                </Copy>
              </div>
              <div className="vmu-identity-cards">
                <div className="identity-card">
                  <Copy delay={0.15}>
                    <h3>Đào tạo</h3>
                    <p>Hàng hải, logistics, cơ khí, đóng tàu, điện - điện tử, CNTT, kinh tế, quản trị</p>
                  </Copy>
                </div>
                <div className="identity-card">
                  <Copy delay={0.2}>
                    <h3>Nghiên cứu</h3>
                    <p>Cảng biển, vận tải, an toàn hàng hải, công nghệ tàu thủy, phát triển bền vững</p>
                  </Copy>
                </div>
                <div className="identity-card">
                  <Copy delay={0.25}>
                    <h3>Hợp tác quốc tế</h3>
                    <p>Liên kết hơn 50 trường đại học và tổ chức hàng hải quốc tế</p>
                  </Copy>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quy trình đào tạo — unique to this page */}
        <section className="how-we-work-container">
          <div className="container">
            <HowWeWork />
          </div>
        </section>

        {/* CTA → Sự kiện */}
        <CTAWindow
          img="/vmu/official/event-1.jpg"
          header="Sự kiện 70 năm"
          callout="01/04/2026 — Lễ kỷ niệm chính thức"
          description="Tham gia cùng cộng đồng VMU trong chuỗi hoạt động kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam."
        />

        {/* Spotlight gallery — campus showcase */}
        <Spotlight />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
