# 🌊 TRƯỜNG ĐẠI HỌC HÀNG HẢI VIỆT NAM - LANDING PAGE

## 📋 Mô tả dự án

Đây là landing page được tùy chỉnh từ template Terrene để kỷ niệm ngày thành lập trường Đại học Hàng hải Việt Nam (1/4). Website được thiết kế với giao diện hiện đại, animation mượt mà và nội dung phù hợp với trường đại học.

## 🎯 Tính năng chính

### ✨ **Giao diện hiện đại**
- Design responsive với breakpoint 1000px
- Animation GSAP chuyên nghiệp
- Smooth scrolling với Lenis
- View transitions API

### 🎨 **Nội dung được tùy chỉnh**
- Logo và branding của trường Đại học Hàng hải
- Thông tin về ngày thành lập 1/4
- Giới thiệu về trường và các thành tựu
- Quy trình đào tạo 4 bước
- Dự án nghiên cứu nổi bật
- Đánh giá từ sinh viên và đối tác

### 📱 **Responsive Design**
- Mobile-first approach
- Touch-friendly interactions
- Optimized cho mọi thiết bị

## 🚀 Cách chạy dự án

### **Yêu cầu hệ thống**
- Node.js 18+ 
- PNPM (khuyến nghị) hoặc npm

### **Cài đặt dependencies**
```bash
# Sử dụng PNPM (khuyến nghị)
pnpm install

# Hoặc sử dụng npm
npm install
```

### **Chạy development server**
```bash
# Development mode
pnpm dev

# Hoặc
npm run dev
```

### **Build production**
```bash
# Build
pnpm build

# Start production server
pnpm start
```

## 📁 Cấu trúc dự án

```
terrene/
├── public/
│   ├── logos/
│   │   └── vimaru-logo.svg          # Logo trường Đại học Hàng hải
│   ├── home/                        # Hình ảnh trang chủ
│   ├── featured-projects/           # Hình ảnh dự án nổi bật
│   ├── client-reviews/              # Hình ảnh đánh giá
│   └── how-we-work/                 # Hình ảnh quy trình
├── src/
│   ├── app/                         # Next.js App Router
│   ├── components/                  # React components
│   └── hooks/                       # Custom hooks
└── package.json
```

## 🎨 Các component chính

### **1. TopBar**
- Logo trường Đại học Hàng hải
- Nút "Liên hệ" thay vì "Reserve"

### **2. Hero Section**
- Tiêu đề: "Kỷ niệm ngày thành lập trường Đại học Hàng hải Việt Nam"
- Thống kê: 60+ năm, 50+ chuyên ngành, 25,000+ sinh viên, 95% tỷ lệ việc làm

### **3. HowWeWork**
- Quy trình đào tạo 4 bước:
  1. Tuyển sinh & Định hướng
  2. Đào tạo & Thực hành
  3. Nghiên cứu & Phát triển
  4. Tốt nghiệp & Việc làm

### **4. FeaturedProjects**
- Trung tâm Nghiên cứu Hàng hải
- Hợp tác Quốc tế
- Campus Hải Phòng
- Kinh tế Biển

### **5. ClientReviews**
- Đánh giá từ sinh viên các khóa
- Đánh giá từ đối tác doanh nghiệp
- Đánh giá từ phụ huynh

### **6. Footer**
- Thông tin liên hệ đầy đủ
- Địa chỉ: 484 Lạch Tray, Ngô Quyền, Hải Phòng
- Điện thoại: 0225.3.747.024
- Email: info@vimaru.edu.vn

## 🔧 Tùy chỉnh nội dung

### **Thay đổi logo**
- Cập nhật file `public/logos/vimaru-logo.svg`
- Hoặc thay thế bằng file PNG/JPG

### **Thay đổi nội dung**
- **Hero section**: `src/app/page.js` (dòng 220-240)
- **Featured Projects**: `src/components/FeaturedProjects/featured-projects-content.js`
- **Client Reviews**: `src/components/ClientReviews/client-reviews-content.js`
- **How We Work**: `src/components/HowWeWork/HowWeWork.jsx`

### **Thay đổi hình ảnh**
- Thay thế các file trong thư mục `public/`
- Giữ nguyên tên file để không phải sửa code

## 🎭 Animation & Effects

### **GSAP Animations**
- Preloader với đếm ngược
- Scroll-triggered animations
- Text splitting effects
- Smooth transitions

### **Smooth Scrolling**
- Lenis integration
- Custom easing functions
- Mobile-optimized scrolling

### **View Transitions**
- Next.js View Transitions API
- Smooth page navigation
- Loading states

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: ≤ 1000px
- **Desktop**: > 1000px

### **Mobile Optimizations**
- Touch-friendly interactions
- Optimized animation durations
- Responsive layouts

## 🚀 Deployment

### **Vercel (Khuyến nghị)**
```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Netlify**
```bash
# Build
npm run build

# Deploy thư mục .next
```

### **Traditional Hosting**
```bash
# Build
npm run build

# Upload thư mục .next và public
```

## 🔍 SEO & Performance

### **SEO**
- Meta tags đã được tùy chỉnh
- Alt text cho hình ảnh
- Semantic HTML structure

### **Performance**
- Image optimization
- Code splitting
- Lazy loading
- Optimized animations

## 🛠️ Troubleshooting

### **Lỗi thường gặp**
1. **Build failed**: Kiểm tra Node.js version (18+)
2. **Animation không hoạt động**: Kiểm tra GSAP installation
3. **Images không hiển thị**: Kiểm tra đường dẫn trong public/

### **Debug mode**
```bash
# Chạy với debug info
DEBUG=* npm run dev
```

## 📞 Hỗ trợ

Nếu gặp vấn đề hoặc cần hỗ trợ:
- Email: info@vimaru.edu.vn
- Điện thoại: 0225.3.747.024
- Website: https://www.vimaru.edu.vn

## 📄 License

Dự án này được tùy chỉnh từ template Terrene của Codegrid.
© 2025 Trường Đại học Hàng hải Việt Nam. All rights reserved.

---

**Chúc mừng 70 năm thành lập trường Đại học Hàng hải Việt Nam! 🎉**
