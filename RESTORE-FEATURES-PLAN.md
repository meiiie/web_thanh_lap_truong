# 🔧 KẾ HOẠCH KHÔI PHỤC FEATURES

## **Bước 1: Khôi phục Smooth Scrolling (Lenis)**
```javascript
// 1. Uncomment trong client-layout.js
import { ReactLenis } from "lenis/react";

// 2. Wrap children với ReactLenis
return (
  <ReactLenis root options={scrollSettings}>
    {children}
  </ReactLenis>
);
```

## **Bước 2: Khôi phục View Transitions**
```javascript
// 1. Uncomment trong client-layout.js
import { ViewTransitions } from "next-view-transitions";

// 2. Wrap với ViewTransitions
return (
  <ViewTransitions>
    <ReactLenis root options={scrollSettings}>
      {children}
    </ReactLenis>
  </ViewTransitions>
);
```

## **Bước 3: Khôi phục useGSAP Hook**
```javascript
// 1. Uncomment trong page.js
import { useGSAP } from "@gsap/react";

// 2. Thay useEffect bằng useGSAP
useGSAP(() => {
  // Animation code
}, [dependencies]);
```

## **Bước 4: Khôi phục useLenis Hook**
```javascript
// 1. Uncomment trong page.js và Nav.jsx
import { useLenis } from "lenis/react";

// 2. Sử dụng với isClient check
const lenis = useLenis();
useEffect(() => {
  if (!isClient || !lenis) return;
  // Lenis logic
}, [isClient, lenis]);
```

## **Bước 5: Khôi phục useTransitionRouter**
```javascript
// 1. Uncomment trong useViewTransition.js
import { useTransitionRouter } from "next-view-transitions";

// 2. Sử dụng với error handling
const router = useTransitionRouter();
```

## **⚠️ LƯU Ý QUAN TRỌNG:**
- Tất cả features có thể được khôi phục HOÀN TOÀN
- Không mất dữ liệu hay code nào
- Chỉ cần uncomment và test từng bước
- Có thể rollback bất kỳ lúc nào
