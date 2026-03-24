# Kỷ niệm 70 năm — Trường Đại học Hàng hải Việt Nam

**01/04/1956 – 01/04/2026**

Website chính thức phục vụ sự kiện kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam (Vietnam Maritime University), trường trọng điểm quốc gia về đào tạo và nghiên cứu phục vụ phát triển bền vững kinh tế biển theo Quyết định 1901/QĐ-TTg ngày 05/09/2025.

---

## Tổng quan

| | |
|---|---|
| **Sự kiện** | Kỷ niệm 70 năm thành lập VMU |
| **Ngày** | 01/04/2026 |
| **Địa điểm** | 484 Lạch Tray, Ngô Quyền, Hải Phòng |
| **Framework** | Next.js 15.4 · React 19 · GSAP 3.13 |
| **Trạng thái** | Production — Tháng 3/2026 |

---

## Chạy local

```bash
npm install --legacy-peer-deps
npm run dev
```

Mở [localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

---

## Deploy

**Docker** (Render, Cloud Run, bất kỳ):

```bash
docker build -t vmu-70-nam .
docker run -p 8080:8080 vmu-70-nam
```

**Vercel**:

```bash
npx vercel
```

---

## Cấu trúc

```
src/
├── app/
│   ├── page.js              Homepage
│   ├── gioi-thieu/          Giới thiệu trường
│   ├── su-kien/             Lịch trình sự kiện
│   ├── tam-nhin/            Tầm nhìn 2030–2045
│   ├── thu-vien/            Thư viện tư liệu
│   └── tham-gia/            Liên hệ & tham gia
├── components/
│   ├── Nav/                 Menu toàn màn hình (clip-path)
│   ├── Timeline/            8 mốc lịch sử 1956–2026
│   ├── CountdownTimer/      Đếm ngược → 01/04/2026
│   ├── Copy/                Text reveal (SplitText)
│   ├── Spotlight/           Scroll gallery
│   └── ...
├── data/
│   ├── seo.js               Metadata & structured data
│   └── vmu-timeline-data.js Nội dung timeline
└── client-layout.js         Lenis / GSAP scroll
```

---

## Công nghệ

| Layer | Stack |
|-------|-------|
| Framework | Next.js 15.4.6 (App Router, Static Prerender) |
| UI | React 19.1 |
| Animation | GSAP 3.13 — ScrollTrigger, SplitText, CustomEase |
| Scroll | Lenis 1.3 (sub-pages), GSAP native (homepage) |
| Transitions | View Transitions API via next-view-transitions |
| Deploy | Docker (Render / Cloud Run / Vercel) |

---

## Nội dung

### Số liệu chính

| Mốc | Giá trị |
|-----|---------|
| Thành lập | 01/04/1956 |
| Sinh viên | 20.000+ |
| Cán bộ, giảng viên | Gần 1.000 |
| Đối tác quốc tế | 50+ |
| QĐ trường trọng điểm | 1901/QĐ-TTg · 05/09/2025 |

### Trang

- **Trang chủ** — Hero, countdown 01/04/2026, stats, timeline 8 mốc, chương trình kỷ niệm, gallery
- **Giới thiệu** — Sứ mệnh, vị thế trường trọng điểm, quy trình đào tạo, gallery
- **Sự kiện** — 7 hoạt động: lễ kỷ niệm, triển lãm, vinh danh, gặp mặt cộng đồng
- **Tầm nhìn** — Chiến lược 2030–2045, đối tác IMO / WMU / KMOU
- **Thư viện** — Tư liệu ảnh chính thức VMU
- **Tham gia** — Liên hệ, đăng ký tham dự

### Hình ảnh

Toàn bộ ảnh trên website là tư liệu chính thức từ Trường Đại học Hàng hải Việt Nam — lễ kỷ niệm, trao Huân chương Lao động, khuôn viên, sự kiện. Không sử dụng ảnh stock.

---

## Hiệu năng

- Static prerender toàn bộ trang tại build time
- Next.js Image component — WebP/AVIF tự động
- Dynamic imports — Timeline, AnniversaryProgram, GalleryCallout load on demand
- GSAP `force3D: true` — GPU acceleration
- Không `backdrop-filter` — mượt trên mobile
- `prefers-reduced-motion` — accessible

---

## Liên hệ

**Trường Đại học Hàng hải Việt Nam**

484 Lạch Tray, Ngô Quyền, Hải Phòng
0225 3829 109 · info@vimaru.edu.vn · [vimaru.edu.vn](https://vimaru.edu.vn)

---

Phát triển bởi **HoLiLiHu — The Wiii Lab** · Tháng 3/2026
