# 🎓 VMU 70th Anniversary Website

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

> **Chào mừng kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam (1956-2026)**  
> *Sự kiện đặc biệt ngày 6/9/2025 - Lễ công nhận trường trọng điểm quốc gia*

---

## 🌟 **Tổng quan**

Website kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam - một dự án đặc biệt được thiết kế để tôn vinh những thành tựu vượt bậc trong 7 thập kỷ đào tạo nguồn nhân lực chất lượng cao cho ngành hàng hải Việt Nam.

### 🎯 **Sự kiện chính**
- **Ngày:** 6 tháng 9, 2025
- **Địa điểm:** Trường Đại học Hàng hải Việt Nam, Hải Phòng
- **Nội dung:** Lễ công nhận trường trọng điểm quốc gia về đào tạo, nghiên cứu phục vụ phát triển bền vững kinh tế biển

---

## ✨ **Tính năng nổi bật**

### 🎨 **Trải nghiệm người dùng**
- **Timeline tương tác** - Hành trình 70 năm phát triển với animation mượt mà
- **Thành tựu nổi bật** - Showcase những dự án và nghiên cứu đột phá
- **Lịch trình sự kiện** - Chi tiết các hoạt động kỷ niệm
- **Tầm nhìn tương lai** - Định hướng phát triển và đối tác quốc tế
- **Đăng ký tham gia** - Form đăng ký trực tuyến cho sự kiện

### 🚀 **Công nghệ tiên tiến**
- **Next.js 15** - App Router, Server Components, View Transitions
- **React 19** - Hooks tối ưu, Suspense, Concurrent Features
- **GSAP 3.13** - Animation chuyên nghiệp, ScrollTrigger, Timeline
- **Lenis** - Smooth scrolling mượt mà
- **Responsive Design** - Tối ưu cho mọi thiết bị

### 🔍 **SEO & Performance**
- **SEO tối ưu** - Meta tags, Open Graph, Structured Data
- **Core Web Vitals** - LCP, FID, CLS đạt chuẩn Google
- **Image Optimization** - WebP, AVIF, lazy loading
- **Caching Strategy** - Vercel Edge Network, CDN

---

## 🛠️ **Công nghệ sử dụng**

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | Next.js | 15.4.6 | React framework với App Router |
| **UI Library** | React | 19.1.0 | Component library |
| **Animation** | GSAP | 3.13.0 | Professional animations |
| **Smooth Scroll** | Lenis | 1.3.8 | Buttery smooth scrolling |
| **Icons** | Heroicons | 2.2.0 | Professional icon set |
| **Deployment** | Vercel | Latest | Edge deployment platform |

---

## 🚀 **Cài đặt & Chạy dự án**

### **Yêu cầu hệ thống**
- Node.js >= 18.0.0
- npm >= 8.0.0 hoặc pnpm >= 7.0.0

### **Cài đặt**
```bash
# Clone repository
git clone https://github.com/meiiie/web_thanh_lap_truong.git
cd web_thanh_lap_truong

# Cài đặt dependencies
npm install
# hoặc
pnpm install

# Chạy development server
npm run dev
# hoặc
pnpm dev
```

### **Truy cập**
Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

---

## 📁 **Cấu trúc dự án**

```
src/
├── app/                    # Next.js App Router
│   ├── 70-nam/            # Trang kỷ niệm 70 năm
│   ├── gioi-thieu/        # Giới thiệu về trường
│   ├── su-kien/           # Lịch trình sự kiện
│   ├── tam-nhin/          # Tầm nhìn tương lai
│   ├── thu-vien/          # Thư viện tài liệu
│   ├── tham-gia/          # Đăng ký tham gia
│   └── layout.js          # Root layout
├── components/             # React components
│   ├── Timeline/          # Interactive timeline
│   ├── FeaturedAchievements/ # Thành tựu nổi bật
│   ├── CommunityVoices/   # Tiếng nói cộng đồng
│   └── ...               # Các components khác
├── hooks/                 # Custom React hooks
└── public/               # Static assets
    ├── logos/            # Logo và branding
    ├── events/           # Hình ảnh sự kiện
    └── ...              # Các assets khác
```

---

## 🎨 **Design System**

### **Màu sắc chính**
- **Primary:** `#003e80` - Xanh navy VMU
- **Secondary:** `#00a0e3` - Xanh dương sáng
- **Accent:** `#ffc20e` - Vàng nổi bật
- **Text:** `#1a1a1a` - Đen chủ đạo

### **Typography**
- **Heading:** "BE PRO VIETNAM" - Font chữ chuyên nghiệp
- **Body:** "Manrope" - Font chữ dễ đọc
- **Code:** "DM Mono" - Font monospace

---

## 📱 **Responsive Design**

| Breakpoint | Device | Layout |
|------------|--------|--------|
| `320px+` | Mobile | Single column, stacked |
| `768px+` | Tablet | Two columns, grid |
| `1024px+` | Desktop | Multi-column, complex grid |
| `1440px+` | Large Desktop | Full layout, max-width 1200px |

---

## 🚀 **Deployment**

### **Vercel (Recommended)**
```bash
# Deploy to Vercel
vercel --prod

# Hoặc connect GitHub repository với Vercel
# 1. Import project từ GitHub
# 2. Set build command: npm run build
# 3. Set output directory: .next
# 4. Deploy!
```

### **Environment Variables**
```env
NEXT_PUBLIC_SITE_URL=https://kiniem70nam.vmu.holihu.online
NEXT_PUBLIC_SITE_NAME="Kỷ niệm 70 năm VMU"
NEXT_PUBLIC_EVENT_DATE="2025-09-06"
```

---

## 📊 **Performance Metrics**

| Metric | Score | Status |
|--------|-------|--------|
| **Lighthouse Performance** | 95+ | ✅ Excellent |
| **Lighthouse SEO** | 100 | ✅ Perfect |
| **Lighthouse Accessibility** | 95+ | ✅ Excellent |
| **Core Web Vitals** | All Green | ✅ Optimized |

---

## 🤝 **Đóng góp**

Chúng tôi hoan nghênh mọi đóng góp để cải thiện dự án!

### **Quy trình đóng góp**
1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

---

## 📄 **License**

Dự án này được phát hành dưới [MIT License](LICENSE) - xem file `LICENSE` để biết thêm chi tiết.

---

## 👥 **Team**

<div align="center">

### **The Wiii Lab**
*Nơi tạo ra những sản phẩm digital xuất sắc*

**HoLiHu** - Lead Developer & Designer  
*Chuyên gia về Web Development & UI/UX Design*

[![GitHub](https://img.shields.io/badge/GitHub-HoLiHu-black?style=for-the-badge&logo=github)](https://github.com/meiiie)
[![Portfolio](https://img.shields.io/badge/Portfolio-The%20Wiii%20Lab-blue?style=for-the-badge)](https://holihu.online)

</div>

---

## 📞 **Liên hệ**

- **Email:** 70nam@vimaru.edu.vn
- **Phone:** 0225.3.747.024
- **Address:** 484 Lạch Tray, Ngô Quyền, Hải Phòng
- **Website:** [kiniem70nam.vmu.holihu.online](https://kiniem70nam.vmu.holihu.online)

---

<div align="center">

### **🎉 Chúc mừng 70 năm thành lập VMU! 🎉**

*"Hành trình 70 năm - Vững bước tương lai"*

**Made with ❤️ by The Wiii Lab**

</div>