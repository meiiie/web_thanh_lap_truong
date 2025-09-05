"use client";
import "./sample-space.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page sample-space">
        <section className="sample-space-hero">
          <div className="sample-space-hero-img">
            <img src="/sample-space/hero.jpg" alt="VMU Tầm nhìn tương lai" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Tầm nhìn tương lai</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>VMU 2030-2045</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>Việt Nam</p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      Với vị thế mới là trường trọng điểm quốc gia, VMU hướng tới 
                      trở thành trung tâm đào tạo và nghiên cứu hàng hải hàng đầu 
                      khu vực Đông Nam Á.
                    </h3>
                    <h3>
                      Tầm nhìn đến 2045: Phát triển bền vững kinh tế biển, đào tạo 
                      nguồn nhân lực chất lượng cao và đóng góp tích cực vào sự 
                      nghiệp phát triển đất nước.
                    </h3>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Thời gian thực hiện</p>
                        <p>2025-2045</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Lĩnh vực</p>
                        <p>Đào tạo hàng hải</p>
                        <p>Nghiên cứu kinh tế biển</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Đối tác quốc tế</p>
                        <p>IMO (Tổ chức Hàng hải Quốc tế)</p>
                        <p>World Maritime University</p>
                        <p>Đại học Hàng hải Hàn Quốc</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Hỗ trợ</p>
                        <p>Bộ Giao thông Vận tải</p>
                        <p>Chính phủ Việt Nam</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-1">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Chiến lược phát triển</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3>
                  VMU tập trung vào việc xây dựng hệ thống đào tạo tích hợp, 
                  kết hợp giữa lý thuyết và thực hành. Mỗi chương trình được 
                  thiết kế để đáp ứng nhu cầu thực tế của ngành hàng hải.
                </h3>

                <h3>
                  Cơ sở vật chất được đầu tư hiện đại với các phòng thí nghiệm 
                  mô phỏng hàng hải tiên tiến, đảm bảo sinh viên được trang bị 
                  đầy đủ kỹ năng thực tế trước khi ra trường.
                </h3>
              </Copy>
              <div className="sample-space-details-img">
                <img src="/sample-space/sample-space-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Đối tác & Hợp tác</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Đối tác quốc tế</p>
                      <p>IMO</p>
                      <p>World Maritime University</p>
                      <p>Đại học Hàng hải Hàn Quốc</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Hợp tác khu vực</p>
                      <p>ASEAN</p>
                      <p>APEC</p>
                      <p>Đông Nam Á</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Đối tác doanh nghiệp</p>
                      <p>Vinashin</p>
                      <p>PetroVietnam</p>
                      <p>Vietnam Airlines</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Hỗ trợ chính phủ</p>
                      <p>Bộ Giao thông Vận tải</p>
                      <p>Bộ Giáo dục & Đào tạo</p>
                      <p>Chính phủ Việt Nam</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/sample-space/sample-space-2.jpg"
                  alt="VMU Đối tác và hợp tác quốc tế"
                />
              </div>
              <Copy delay={0.2}>
                <h3>
                  Mỗi đối tác được lựa chọn dựa trên giá trị và tầm nhìn chung. 
                  Mục tiêu không chỉ là hợp tác mà còn tạo ra mạng lưới liên kết 
                  mạnh mẽ, đóng góp vào sự phát triển bền vững của ngành hàng hải 
                  Việt Nam và khu vực.
                </h3>
              </Copy>
            </div>
          </div>
        </section>
        <CTAWindow
          img="/sample-space/next-project.jpg"
          header="Hành trình tiếp theo"
          callout="Xây dựng tương lai bền vững"
          description="VMU tiếp tục hành trình 70 năm với tầm nhìn mới, đóng góp vào sự phát triển kinh tế biển và đào tạo nguồn nhân lực chất lượng cao cho đất nước."
        />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
