# 🚢 VMU 70 YEARS PROJECT - KNOWLEDGE BASE
*Trường Đại học Hàng hải Việt Nam - Landing Page Kỷ niệm 70 năm*

## 📋 **TỔNG QUAN DỰ ÁN**

### **Thông tin cơ bản**
- **Tên dự án**: Trường Đại học Hàng hải Việt Nam - Landing Page Kỷ niệm 70 năm
- **Nhóm phát triển**: HOLIHU (Hồng Linh Hùng) - The Wiii Lab
- **Mục tiêu**: Tạo landing page chuyên nghiệp cho sự kiện kỷ niệm 70 năm thành lập VMU (1956-2026)
- **Ngày sự kiện**: 01/04/2026
- **Thời điểm hiện tại**: Tháng 9/2025 (chuẩn bị cho tương lai)
- **Trạng thái**: ✅ BUILD THÀNH CÔNG

### **Kiến trúc dự án**
```
terrene/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── page.js            # Trang chủ chính
│   │   ├── 70-nam/           # Trang landing page 70 năm
│   │   ├── globals.css        # CSS toàn cục
│   │   ├── vmu-colors.css     # Hệ thống màu VMU
│   │   ├── error.js           # Trang lỗi tùy chỉnh
│   │   ├── not-found.js       # Trang 404 tùy chỉnh
│   │   ├── 500.js             # Trang 500 tùy chỉnh
│   │   └── global-error.js    # Trang lỗi toàn cục
│   ├── components/            # React Components
│   │   ├── event/            # Components cho trang 70 năm
│   │   ├── Timeline/         # Timeline animation
│   │   ├── VimaruTitle/      # Logo animation
│   │   ├── ClientOnly/       # Client-side wrapper
│   │   └── ...               # Các components khác
│   ├── hooks/                # Custom hooks
│   │   └── useViewTransition.js
│   └── pages/                # Pages Router (cho error pages)
│       └── _error.js
├── public/                   # Static assets
└── package.json             # Dependencies
```

## 🛠️ **STACK CÔNG NGHỆ**

### **Frontend Framework**
- **Next.js 15.4.6**: App Router, Server Components, View Transitions
- **React 19.1.0**: Hooks, State management, Client-side rendering
- **CSS Modules**: Scoped styling, Component-based CSS

### **Animation & Interactions**
- **GSAP 3.13.0**: Professional animations, ScrollTrigger, CustomEase
- **@gsap/react 2.1.2**: React integration cho GSAP (TẠM THỜI DISABLED)
- **Lenis 1.3.8**: Smooth scrolling (TẠM THỜI DISABLED)
- **Split-type 0.3.4**: Text splitting effects

### **Styling & Design**
- **CSS Variables**: Dynamic theming system
- **CSS Grid & Flexbox**: Modern layout system
- **Responsive Design**: Mobile-first approach (breakpoint 1000px)
- **View Transitions API**: Smooth page navigation (TẠM THỜI DISABLED)

### **Performance & Optimization**
- **Next.js Image**: Optimized image loading
- **Code Splitting**: Dynamic imports
- **Intersection Observer**: Scroll-based animations
- **Lazy Loading**: Performance optimization

## 🎨 **HỆ THỐNG THIẾT KẾ**

### **VMU Brand Colors**
```css
/* Primary Colors */
--vmu-primary: #003e80      /* Xanh dương đậm - biển cả */
--vmu-secondary: #00a0e3    /* Xanh nước biển nhạt */
--vmu-accent: #ffc20e       /* Vàng kim - điểm nhấn */

/* Neutral Colors */
--vmu-white: #ffffff        /* Nền trắng */
--vmu-gray: #f5f5f5         /* Xám nhạt - chuyển tiếp */
--vmu-text: #333333         /* Văn bản chính */
--vmu-text-light: #666666   /* Văn bản phụ */

/* Utility Colors */
--vmu-shadow: rgba(0, 62, 128, 0.1)
--vmu-overlay: rgba(0, 62, 128, 0.8)
--vmu-gradient: linear-gradient(135deg, var(--vmu-primary) 0%, var(--vmu-secondary) 100%)
```

### **Typography System**
- **Primary Font**: "BE PRO VIETNAM" (hỗ trợ tiếng Việt)
- **Secondary Font**: "Manrope" (fallback)
- **Monospace**: "DM Mono" (cho labels)
- **Responsive**: Sử dụng clamp() cho font-size

### **Layout System**
- **Container**: Max-width 1200px với padding responsive
- **Grid System**: CSS Grid với fallback Flexbox
- **Breakpoints**: Mobile-first (≤1000px), Desktop (>1000px)
- **Spacing**: Consistent spacing scale (8px, 16px, 24px, 32px, 40px)

## 🎭 **ANIMATION SYSTEM**

### **GSAP Animation Architecture**
```javascript
// Master timeline cho preloader
const masterTl = gsap.timeline({
  delay: 0.5,
  defaults: { ease: "power2.out" }
});

// Scroll-triggered animations
ScrollTrigger.create({
  trigger: element,
  start: "top 90%",
  once: true,
  animation: gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out"
  })
});
```

### **Animation Types**
1. **Preloader Animation**: Counter sequence (00→27→65→98→99)
2. **Text Reveal**: Staggered text animation với split-type
3. **Scroll Animations**: Intersection Observer + GSAP
4. **Timeline Animation**: SVG path drawing với MotionPathPlugin
5. **Hover Effects**: CSS transitions cho interactive elements

### **Custom Easing Functions**
```javascript
CustomEase.create("hop", "0.9, 0, 0.1, 1");
```

## 📱 **RESPONSIVE DESIGN**

### **Breakpoint Strategy**
- **Mobile**: ≤ 1000px (default)
- **Desktop**: > 1000px

### **Mobile Optimizations**
- Touch-friendly interactions
- Optimized animation durations
- Simplified layouts
- Responsive typography với clamp()

### **Desktop Enhancements**
- Full navigation menu
- Hover effects và animations
- Multi-column layouts
- Advanced GSAP animations

## 🏗️ **COMPONENT ARCHITECTURE**

### **Core Components**
1. **VimaruTitle**: Logo animation với GSAP
2. **Timeline**: SVG timeline với MotionPathPlugin
3. **CounterAnimation**: Number counting animation
4. **AnimatedButton**: Interactive button với hover effects
5. **Copy**: Text reveal component với scroll triggers
6. **ClientOnly**: Wrapper cho client-side rendering

### **Event Components (70-nam page)**
1. **HeroBanner**: Countdown timer + hero content
2. **HistoryTimeline**: Interactive timeline với 10 milestones
3. **StatsCounter**: Animated statistics
4. **ProgramHighlights**: Ngành đào tạo cards
5. **InternationalPartners**: Đối tác quốc tế
6. **GallerySection**: Image gallery + testimonials
7. **EventsSchedule**: Lịch trình sự kiện
8. **RegistrationForm**: Form đăng ký tham dự

### **Component Patterns**
- **Props-based configuration**: Flexible component API
- **CSS Modules**: Scoped styling
- **useEffect hooks**: Side effects và animations
- **useRef**: DOM manipulation
- **Custom hooks**: Reusable logic

## 🎯 **HISTORY SECTION ANALYSIS**

### **Current Implementation**
```jsx
// History milestones section trong page.js
<section className="history-milestones">
  <div className="container">
    <div className="section-header">
      <Copy delay={0.1}>
        <h2>Hành trình 70 năm kiến tạo</h2>
        <p>Những cột mốc quan trọng trong lịch sử phát triển</p>
      </Copy>
    </div>
    <div className="milestones-grid">
      {/* 6 milestone items */}
    </div>
    <Timeline />
  </div>
</section>
```

### **Timeline Component Features**
- **SVG Animation**: Path drawing với DrawSVGPlugin
- **Motion Path**: Ball animation theo timeline path
- **Scroll Trigger**: Animation triggered by scroll
- **Responsive**: Mobile-optimized layout

### **HistoryTimeline Component (70-nam page)**
- **10 Milestones**: Từ 1956 đến 2026
- **Alternating Layout**: Left/right trên desktop, dọc trên mobile
- **Interactive Cards**: Hover effects và animations
- **Icon System**: Emoji icons cho mỗi milestone

## 🚀 **PERFORMANCE OPTIMIZATIONS**

### **Code Splitting**
- Dynamic imports cho components
- Lazy loading với React.lazy()
- Route-based code splitting

### **Image Optimization**
- Next.js Image component
- Responsive images
- Lazy loading
- WebP format support

### **Animation Performance**
- CSS transforms thay vì layout properties
- will-change property cho animated elements
- requestAnimationFrame cho smooth animations
- GPU acceleration với transform3d

## 🔧 **DEVELOPMENT WORKFLOW**

### **File Structure Patterns**
```
src/components/ComponentName/
├── ComponentName.jsx      # Main component
├── ComponentName.css      # Styles
└── index.js              # Export (optional)
```

### **CSS Organization**
- **Global styles**: globals.css, vmu-colors.css
- **Component styles**: Scoped CSS modules
- **Utility classes**: vmu-* prefix
- **Responsive**: Mobile-first media queries

### **State Management**
- **Local state**: useState cho component state
- **Refs**: useRef cho DOM manipulation
- **Effects**: useEffect cho side effects
- **Custom hooks**: Reusable state logic

## 🐛 **BUILD ISSUES & SOLUTIONS**

### **Vấn đề đã gặp phải**
1. **TypeError: Cannot read properties of null (reading 'useContext')**
   - **Nguyên nhân**: Các hook useContext được gọi trong server-side rendering
   - **Giải pháp**: 
     - Tạo ClientOnly wrapper component
     - Thêm kiểm tra isClient state
     - Tạm thời disable các hook có vấn đề

### **Các thay đổi đã thực hiện**
1. **Disabled packages**:
   - `@gsap/react` → Sử dụng useEffect thay vì useGSAP
   - `lenis/react` → Tạm thời disable smooth scrolling
   - `next-view-transitions` → Sử dụng useRouter thông thường

2. **Added error pages**:
   - `src/app/error.js`
   - `src/app/not-found.js`
   - `src/app/500.js`
   - `src/app/global-error.js`
   - `src/pages/_error.js`

3. **Client-side rendering fixes**:
   - `src/components/ClientOnly/ClientOnly.jsx`
   - Updated hooks với isClient checks
   - Wrapped problematic components

## 📊 **CURRENT STATUS & FOCUS AREAS**

### **Completed Features**
✅ Preloader animation system
✅ Hero section với countdown timer
✅ Basic timeline component
✅ Responsive design system
✅ VMU branding và color system
✅ Component architecture
✅ **BUILD SUCCESS** - Production ready

### **Focus Area: History Section**
🎯 **Current State**: Basic milestones grid + SVG timeline
🎯 **Target**: Enhanced interactive timeline với rich content
🎯 **Opportunities**: 
- Advanced timeline animations
- Rich media integration
- Interactive milestone details
- Smooth scroll navigation
- Mobile-optimized timeline

### **Technical Debt & Improvements**
- Re-enable smooth scrolling (Lenis) sau khi fix SSR issues
- Re-enable view transitions sau khi fix SSR issues
- Re-enable useGSAP hook sau khi fix SSR issues
- Timeline component cần refactor cho better performance
- History section cần more engaging animations
- Mobile timeline cần better UX
- Content management cần more flexible system

## 🎨 **DESIGN PHILOSOPHY**

### **VMU Brand Identity**
- **Maritime Theme**: Ocean blues, nautical elements
- **Professional**: Clean, modern, trustworthy
- **Vietnamese**: Localized content và typography
- **Celebratory**: 70-year milestone celebration

### **Animation Philosophy**
- **Purposeful**: Mỗi animation có mục đích rõ ràng
- **Smooth**: 60fps performance target
- **Accessible**: Respects user preferences
- **Progressive**: Enhances experience, không phụ thuộc

### **User Experience**
- **Mobile-first**: Touch-friendly interactions
- **Performance**: Fast loading, smooth animations
- **Accessibility**: Semantic HTML, ARIA labels
- **Progressive Enhancement**: Works without JavaScript

## 🔮 **FUTURE ENHANCEMENTS**

### **Timeline Improvements**
- Interactive milestone details modal
- Rich media integration (images, videos)
- Smooth scroll navigation between milestones
- Advanced GSAP animations
- Mobile-optimized timeline UX

### **Content Management**
- CMS integration cho easy content updates
- Dynamic timeline data
- Multi-language support
- Admin panel cho content management

### **Performance**
- Service worker cho offline support
- Advanced caching strategies
- Image optimization improvements
- Bundle size optimization

### **Re-enable Disabled Features**
- Smooth scrolling với Lenis
- View transitions
- useGSAP hook
- Advanced animations

## 📝 **DEVELOPMENT NOTES**

### **Key Files to Monitor**
- `src/app/page.js` - Main homepage
- `src/app/70-nam/page.js` - 70 years landing page
- `src/components/Timeline/Timeline.jsx` - SVG timeline
- `src/components/event/HistoryTimeline.jsx` - Interactive timeline
- `src/app/vmu-colors.css` - Brand color system
- `src/app/globals.css` - Global styles
- `src/components/ClientOnly/ClientOnly.jsx` - SSR wrapper

### **Animation Dependencies**
- GSAP plugins: ScrollTrigger, DrawSVGPlugin, MotionPathPlugin
- Custom easing functions
- Intersection Observer API
- CSS transforms và transitions

### **Responsive Considerations**
- Breakpoint: 1000px
- Touch interactions trên mobile
- Performance optimization cho mobile
- Simplified animations trên mobile

### **Build Configuration**
- Next.js 15.4.6 với App Router
- React 19.1.0
- TypeScript support
- CSS Modules
- Static export ready

---

## 🎉 **KẾT LUẬN**

Dự án VMU 70 năm là một landing page chuyên nghiệp với:
- **Kiến trúc hiện đại**: Next.js 15 + React 19
- **Animation system mạnh mẽ**: GSAP với custom plugins
- **Design system nhất quán**: VMU brand colors và typography
- **Responsive design**: Mobile-first approach
- **Performance tối ưu**: Code splitting, lazy loading, image optimization
- **✅ BUILD SUCCESS**: Production ready

**Focus chính hiện tại**: History section cần được enhance với interactive timeline, rich content, và smooth animations để tạo trải nghiệm engaging cho người dùng khi khám phá 70 năm lịch sử của trường.

**HOLIHU Team** đã tạo ra một foundation vững chắc cho việc phát triển tiếp theo, đặc biệt là phần history/milestones section mà bạn đang tập trung vào.

**Trạng thái hiện tại**: Dự án đã build thành công và sẵn sàng cho production deployment.

---

*Knowledge Base được tạo bởi AI Assistant - Chuyên gia Web Development & Animation*
*Ngày: 5/9/2025*
*Dự án: VMU 70 Years Landing Page - HOLIHU Team*
*Trạng thái: BUILD SUCCESS ✅*
