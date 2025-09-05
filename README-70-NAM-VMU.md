# 🚢 Trang Landing Page Kỷ niệm 70 năm Trường Đại học Hàng hải Việt Nam

## 📋 **Tổng quan dự án**

Trang landing page chính thức cho sự kiện kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam (1956-2026). Dự án được xây dựng dựa trên template Terrene với Next.js 15 App Router, được tùy chỉnh hoàn toàn cho sự kiện đặc biệt này.

## 🎯 **Mục tiêu dự án**

- **Truyền tải lịch sử**: Giới thiệu hành trình 70 năm xây dựng và phát triển của VMU
- **Quảng bá sự kiện**: Cung cấp thông tin chi tiết về các hoạt động kỷ niệm
- **Thu hút tham gia**: Tạo form đăng ký tham dự sự kiện
- **Trải nghiệm người dùng**: Giao diện hiện đại, responsive và tương tác cao

## 🏗️ **Kiến trúc dự án**

### **Cấu trúc thư mục**
```
src/
├── app/
│   ├── 70-nam/           # Trang landing page chính
│   │   ├── page.js       # Component chính
│   │   └── 70-nam.css    # Styles cho trang
│   └── ...               # Các trang khác của template
├── components/
│   ├── event/            # Components dành cho trang 70 năm
│   │   ├── HeroBanner.jsx
│   │   ├── HistoryTimeline.jsx
│   │   ├── StatsCounter.jsx
│   │   ├── ProgramHighlights.jsx
│   │   ├── InternationalPartners.jsx
│   │   ├── GallerySection.jsx
│   │   ├── EventsSchedule.jsx
│   │   └── RegistrationForm.jsx
│   └── ...               # Components chung của template
└── ...
```

### **Các section chính**
1. **HeroBanner**: Header với countdown timer và CTA buttons
2. **HistoryTimeline**: Timeline tương tác 70 năm lịch sử
3. **StatsCounter**: Thống kê thành tựu với animation đếm số
4. **ProgramHighlights**: Giới thiệu các ngành đào tạo
5. **InternationalPartners**: Hợp tác quốc tế và cơ sở vật chất
6. **GallerySection**: Gallery hình ảnh và testimonials
7. **EventsSchedule**: Lịch trình chi tiết các sự kiện
8. **RegistrationForm**: Form đăng ký tham dự

## 🎨 **Thiết kế & Branding**

### **VMU Brand Colors**
```css
--vmu-primary: #003e80      /* Xanh dương đậm - biển cả */
--vmu-secondary: #00a0e3    /* Xanh nước biển nhạt */
--vmu-accent: #ffc20e       /* Vàng kim - điểm nhấn */
--vmu-white: #ffffff        /* Nền trắng */
--vmu-gray: #f5f5f5        /* Xám nhạt - chuyển tiếp */
--vmu-text: #333333         /* Văn bản chính */
--vmu-text-light: #666666   /* Văn bản phụ */
```

### **Typography**
- **Headings**: Montserrat/Inter (hỗ trợ tiếng Việt)
- **Body**: Font system với hierarchy rõ ràng
- **Responsive**: Sử dụng clamp() cho font-size

### **Layout & Grid**
- **Mobile-first**: Breakpoint chính ở 1000px
- **Container**: Max-width 1200px với padding responsive
- **Grid System**: CSS Grid với fallback Flexbox

## 🚀 **Tính năng chính**

### **1. Countdown Timer**
- Đếm ngược đến ngày 01/04/2026
- Hiển thị ngày, giờ, phút, giây
- Animation mượt mà với CSS transitions

### **2. Interactive Timeline**
- Timeline 70 năm lịch sử
- Layout responsive (dọc trên mobile, ngang trên desktop)
- Hover effects và animations

### **3. Animated Statistics**
- Số liệu thống kê với animation đếm số
- Intersection Observer để trigger animation
- Smooth counting với GSAP

### **4. Registration Form**
- Form đăng ký tham dự sự kiện
- Validation và error handling
- Success message và form reset
- Responsive design

### **5. Responsive Design**
- Mobile-first approach
- Breakpoint 1000px
- Touch-friendly interactions
- Optimized for all devices

## 🛠️ **Công nghệ sử dụng**

### **Frontend Framework**
- **Next.js 15**: App Router, Server Components
- **React 19**: Hooks, State management
- **CSS Modules**: Scoped styling

### **Animation & Interactions**
- **GSAP**: Professional animations
- **CSS Transitions**: Smooth hover effects
- **Intersection Observer**: Scroll-based animations

### **Styling & Layout**
- **CSS Grid & Flexbox**: Modern layout
- **CSS Variables**: Dynamic theming
- **Responsive Design**: Mobile-first approach

### **Performance**
- **Code Splitting**: Dynamic imports
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Intersection Observer

## 📱 **Responsive Design**

### **Breakpoints**
- **Mobile**: ≤ 1000px (default)
- **Desktop**: > 1000px

### **Mobile Optimizations**
- Touch-friendly buttons và interactions
- Optimized font sizes và spacing
- Simplified layouts cho small screens

### **Desktop Enhancements**
- Full navigation menu
- Hover effects và animations
- Multi-column layouts

## 🚀 **Cách chạy dự án**

### **1. Cài đặt dependencies**
```bash
pnpm install
```

### **2. Chạy development server**
```bash
pnpm dev
```

### **3. Build production**
```bash
pnpm build
pnpm start
```

### **4. Truy cập trang 70 năm**
```
http://localhost:3000/70-nam
```

## 📁 **Cấu trúc component**

### **HeroBanner**
- Countdown timer với target date 2026-04-01
- Hero content với title và subtitle
- CTA buttons cho đăng ký và khám phá

### **HistoryTimeline**
- Data-driven timeline với 10 mốc quan trọng
- Responsive layout (left/right trên desktop, dọc trên mobile)
- Hover effects và smooth animations

### **StatsCounter**
- 4 thống kê chính với animation đếm số
- Intersection Observer để trigger animation
- Responsive grid layout

### **ProgramHighlights**
- 4 nhóm ngành đào tạo chính
- Card-based layout với hover effects
- Icon và color coding

### **InternationalPartners**
- 4 đối tác/cơ sở vật chất chính
- Image placeholders với category tags
- Responsive grid layout

### **GallerySection**
- 6 gallery items với hover overlays
- 3 testimonials từ cộng đồng VMU
- Responsive grid và hover effects

### **EventsSchedule**
- 5 sự kiện chính với timeline
- Date display với styling đặc biệt
- CTA button cho đăng ký

### **RegistrationForm**
- Form validation và error handling
- Success message với auto-reset
- Responsive grid layout

## 🎨 **Customization Guide**

### **Thay đổi màu sắc**
1. Cập nhật CSS variables trong `src/app/vmu-colors.css`
2. Sử dụng `var(--vmu-primary)`, `var(--vmu-secondary)`, etc.
3. Tất cả components sẽ tự động cập nhật

### **Thay đổi nội dung**
1. **Timeline**: Cập nhật `timelineData` trong `HistoryTimeline.jsx`
2. **Statistics**: Cập nhật `statsData` trong `StatsCounter.jsx`
3. **Events**: Cập nhật `eventsData` trong `EventsSchedule.jsx`
4. **Programs**: Cập nhật `programData` trong `ProgramHighlights.jsx`

### **Thay đổi hình ảnh**
1. Thêm images vào `public/events/`
2. Cập nhật image paths trong components
3. Sử dụng Next.js Image component cho optimization

## 🔧 **Development Notes**

### **State Management**
- Local state với useState cho form data
- useRef cho DOM manipulation
- useEffect cho side effects và animations

### **Performance Optimizations**
- Lazy loading với Intersection Observer
- CSS transitions thay vì JavaScript animations
- Optimized images và code splitting

### **Accessibility**
- Semantic HTML structure
- ARIA labels và roles
- Keyboard navigation support
- Color contrast compliance

## 🚀 **Deployment**

### **Build Process**
```bash
pnpm build
```

### **Deploy Options**
- **Vercel**: Zero-config deployment
- **Netlify**: Drag & drop deployment
- **Custom Server**: Export static files

### **Environment Variables**
- Không cần environment variables đặc biệt
- Tất cả config đều trong code

## 📊 **Performance Metrics**

### **Lighthouse Score Target**
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

### **Core Web Vitals**
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🐛 **Troubleshooting**

### **Common Issues**
1. **Countdown không hoạt động**: Kiểm tra target date trong HeroBanner
2. **Animation không trigger**: Kiểm tra Intersection Observer setup
3. **Responsive issues**: Kiểm tra CSS breakpoints và media queries

### **Debug Tips**
- Sử dụng browser dev tools
- Kiểm tra console errors
- Test trên nhiều devices

## 📞 **Support & Contact**

### **Development Team**
- **Frontend Developer**: [Tên developer]
- **UI/UX Designer**: [Tên designer]
- **Project Manager**: [Tên PM]

### **Documentation**
- **Component API**: Xem comments trong code
- **Styling Guide**: Xem CSS variables và utility classes
- **Responsive Guide**: Xem media queries và breakpoints

---

## 🎉 **Kết luận**

Trang landing page kỷ niệm 70 năm Trường Đại học Hàng hải Việt Nam là một dự án web hiện đại, được thiết kế với trải nghiệm người dùng tối ưu và giao diện đẹp mắt. Dự án sử dụng các công nghệ web tiên tiến nhất và tuân thủ các best practices về performance, accessibility và SEO.

**🚢 Mái trường đại dương – vững tay lái, vươn ra biển lớn!**
