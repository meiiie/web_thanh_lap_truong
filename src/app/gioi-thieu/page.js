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
        <section className="studio-hero">
          <div className="container">
            <div className="studio-hero-col">
              <Copy delay={0.85}>
                <p>
                  Trong suốt 70 năm qua, VMU đã không ngừng phát triển và đổi mới, 
                  trở thành một trong những trường đại học hàng hải hàng đầu Việt Nam 
                  với sứ mệnh đào tạo nguồn nhân lực chất lượng cao cho ngành hàng hải.
                </p>
              </Copy>
            </div>
            <div className="studio-hero-col">
              <Copy delay={0.85}>
                <h2>
                  Với vị thế mới là trường trọng điểm quốc gia về đào tạo, nghiên cứu 
                  phục vụ phát triển bền vững kinh tế biển, VMU tiếp tục khẳng định 
                  vai trò tiên phong trong việc đào tạo những thế hệ sinh viên có kiến 
                  thức chuyên môn vững vàng, kỹ năng thực hành cao và tinh thần đổi mới sáng tạo.
                </h2>
              </Copy>
              <div className="studio-hero-hero-img">
                <img src="/studio/about-hero.png" alt="VMU 70 năm phát triển" />
              </div>
            </div>
          </div>
        </section>
        <section className="more-facts">
          <div className="container">
            <div className="more-facts-header">
              <Copy delay={0.1}>
                <h2>70 năm thành tựu nổi bật</h2>
                <p>Những con số ấn tượng thể hiện sự phát triển vượt bậc của VMU</p>
              </Copy>
            </div>
            <div className="more-facts-items">
              <div className="fact">
                <Copy delay={0.1}>
                  <p>Năm thành lập</p>
                  <h2>1956</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.2}>
                  <p>Khóa sinh viên</p>
                  <h2>70+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.3}>
                  <p>Chuyên ngành đào tạo</p>
                  <h2>25+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.4}>
                  <p>Cựu sinh viên</p>
                  <h2>50k+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.5}>
                  <p>Đối tác quốc tế</p>
                  <h2>30+</h2>
                </Copy>
              </div>
            </div>
          </div>
        </section>
        <section className="vmu-history">
          <div className="container">
            <div className="vmu-history-content">
              <div className="vmu-history-text">
                <Copy delay={0.1}>
                  <h2>Hành trình 70 năm phát triển</h2>
                  <p>
                    Từ những ngày đầu thành lập năm 1956 tại Hải Phòng, VMU đã không ngừng 
                    phát triển và đổi mới. Ngày 05/9/2025, trường vinh dự đón nhận Quyết định 
                    của Thủ tướng Chính phủ về việc phê duyệt Đề án xây dựng VMU là trường 
                    trọng điểm quốc gia về đào tạo, nghiên cứu phục vụ phát triển bền vững 
                    kinh tế biển.
                  </p>
                </Copy>
              </div>
              <div className="vmu-history-timeline">
                <div className="timeline-item">
                  <div className="timeline-year">1956</div>
                  <div className="timeline-content">
                    <h3>Thành lập trường</h3>
                    <p>Trường Đại học Hàng hải Việt Nam được thành lập tại Hải Phòng</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2025</div>
                  <div className="timeline-content">
                    <h3>Trường trọng điểm quốc gia</h3>
                    <p>Đón nhận quyết định của Thủ tướng Chính phủ</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2026</div>
                  <div className="timeline-content">
                    <h3>Kỷ niệm 70 năm</h3>
                    <p>Chào mừng 70 năm thành lập với tầm nhìn mới</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-work-container">
          <div className="container">
            <HowWeWork />
          </div>
        </section>
        <CTAWindow
          img="/studio/about-cta-window.jpg"
          header="Thư viện VMU"
          callout="70 năm lịch sử và thành tựu"
          description="Khám phá hành trình 70 năm phát triển của VMU qua những tài liệu, hình ảnh và câu chuyện đầy cảm hứng. Từ những ngày đầu thành lập đến vị thế trường trọng điểm quốc gia ngày nay."
        />
        <Spotlight />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
