Kế hoạch xây dựng landing page kỷ niệm 70 năm Trường ĐH Hàng hải Việt Nam
1. Mục đích và phạm vi dự án

Sự kiện: Kỷ niệm 70 năm thành lập Trường ĐH Hàng hải Việt Nam (VMU) 1956–2026.

Mục tiêu: Tạo một trang landing page hiện đại, trải nghiệm tốt trên mọi thiết bị, truyền tải lịch sử và thành tựu của trường, quảng bá sự kiện kỷ niệm và thu hút học sinh, cựu sinh viên, đối tác.

Nền tảng: Next.js 15 App Router, dựa trên template Terrene (đã trình bày kiến trúc). Sử dụng GSAP, Lenis cho animation, CSS Modules cho styling.

2. Đội ngũ và phân công trách nhiệm
Vai trò	Nhiệm vụ chính
Product Owner	Xác định nội dung, cung cấp tài liệu, duyệt thiết kế và sản phẩm cuối
Thiết kế UI/UX	Lên wireframe, mockup màu sắc phù hợp với nhận diện VMU, lựa chọn hình ảnh/video
Lập trình viên Front‑end	Tùy chỉnh template, tạo route mới, viết component, cấu hình animation, tối ưu responsive
Quản lý nội dung	Thu thập và biên tập nội dung lịch sử, thành tựu, hình ảnh, dữ liệu sự kiện
QA & Testing	Kiểm thử đa thiết bị, tối ưu hiệu suất, kiểm tra lỗi khi deploy
3. Thu thập và chuẩn bị nội dung

Dữ liệu lịch sử: các mốc quan trọng như thành lập, nâng cấp trường, giải thưởng. Lấy dữ liệu từ các nguồn đáng tin cậy (ví dụ Wikipedia và cổng thông tin thành phố
vi.wikipedia.org
thanhphohaiphong.gov.vn
).

Số liệu thống kê: tổng số sinh viên hiện tại, các ngành đào tạo, số lượng cán bộ được đào tạo
vimaru.edu.vn
…

Hình ảnh/video: ảnh toàn cảnh khuôn viên, lễ kỷ niệm trước đây, tàu huấn luyện, phòng thực hành.

Nội dung sự kiện: chương trình kỷ niệm, liên hệ đăng ký, timeline các hoạt động.

Branding: logo VMU, màu sắc chủ đạo (xanh dương đậm, trắng, bạc), font chữ thương hiệu nếu có.

4. Kiến trúc & thiết kế tổng thể
4.1 Định nghĩa các section chính

Preloader – hiệu ứng đếm ngược tới ngày 01/04/2026.

Hero section – ảnh/video với tiêu đề "VMU – 70 năm vững vàng vươn ra biển lớn" và nút CTA đăng ký.

Giới thiệu lịch sử – timeline tương tác với các mốc 1956–2026, giải thưởng và thành tựu
vi.wikipedia.org
vi.wikipedia.org
.

Thống kê & thành tựu – hiển thị số liệu về sinh viên, chương trình đào tạo, số cựu sinh viên thành đạt
thanhphohaiphong.gov.vn
vimaru.edu.vn
.

Ngành đào tạo & khoa viện – sơ lược các nhóm ngành kỹ thuật, kinh tế, ngoại ngữ, chất lượng cao
vimaru.edu.vn
.

Hợp tác quốc tế & cơ sở vật chất – mô tả tàu huấn luyện VMU Việt–Hàn, các phòng thí nghiệm, đối tác quốc tế
thanhphohaiphong.gov.vn
vimaru.edu.vn
.

Gallery & testimonials – hình ảnh đẹp và lời chia sẻ của cựu sinh viên.

Lịch trình sự kiện & đăng ký – bảng lịch hoạt động, form đăng ký tham dự.

Footer – thông tin liên hệ, liên kết quan trọng, mạng xã hội.

4.2 Cấu trúc thư mục (trong /src)

app/70-nam/page.js: trang landing page chính với bố cục các section.

components/: tạo thêm các component mới như TimelineSection, StatsCounter, EventsSchedule, HeroBanner. Sử dụng CSS Module tương ứng.

public/events/: lưu ảnh/video kỷ niệm, icon kỷ niệm.

styles/: thêm file biến màu, cập nhật globals.css và index.css để áp dụng palette.

4.3 Thiết kế tương tác & animation

GSAP ScrollTrigger: dùng để animation từng section khi cuộn.

Lenis: duy trì cuộn mượt; custom easing riêng cho mobile vs desktop.

View Transition API: hiệu ứng chuyển trang khi từ trang khác tới trang kỷ niệm.

Phản hồi thiết bị: mobile-first với breakpoint 1000 px; menu hamburger; tối ưu ảnh.

5. Quy trình phát triển từng bước
Bước 1: Chuẩn bị môi trường (Ngày 1–2)

Cài đặt Node.js, PNPM nếu chưa có.

Tải mã nguồn template Terrene; chạy lệnh pnpm install, pnpm dev để kiểm thử.

Tạo nhánh git riêng cho trang kỷ niệm.

Bước 2: Lên khung wireframe & thiết kế (Ngày 3–5)

Designer tạo wireframe cho từng section; xác định bố cục desktop và mobile.

Chọn font, màu và icon phù hợp với thương hiệu.

Trình bày wireframe với Product Owner để duyệt.

Bước 3: Tạo route mới và cấu hình (Ngày 6–7)

Tạo thư mục app/70-nam và file page.js với cấu trúc Layout của template.

Sử dụng RootLayout và ClientLayout hiện có; chèn TopBar và footer mặc định.

Định tuyến link từ menu TopBar tới trang kỷ niệm.

Bước 4: Phát triển component tùy chỉnh (Ngày 8–14)

HeroBanner: nền ảnh/video; overlay chữ; nút CTA.

TimelineSection: dùng thẻ div với flex/grid; GSAP để animate; biểu tượng mốc thời gian.

StatsCounter: số liệu được đếm tăng dần; icon minh họa.

EventsSchedule: bảng lịch sự kiện (dùng component Table hoặc Card); hiển thị ngày giờ, mô tả ngắn.

GallerySection: dùng component Gallery của template; tải ảnh vào public/events.

RegistrationForm: form đơn giản với input tên, email, số điện thoại; có thể gửi email hoặc Google Form.

Bước 5: Tích hợp nội dung và ảnh (Ngày 15–18)

Nhập dữ liệu lịch sử, thành tích theo các nguồn đã thu thập.

Tối ưu ảnh (dùng next/image với thuộc tính layout="responsive").

Viết nội dung song ngữ (nếu cần); đảm bảo font hỗ trợ tiếng Việt.

Bước 6: Animation và tối ưu responsive (Ngày 19–23)

Triển khai GSAP ScrollTrigger cho từng section; test trên desktop & mobile.

Tối ưu breakpoints: điều chỉnh font-size, padding, margin để không vỡ layout.

Kiểm thử preloader và countdown; đảm bảo không cản trở SEO.

Bước 7: Kiểm thử toàn diện (Ngày 24–26)

Chức năng: kiểm tra route, form gửi, liên kết.

Hiệu suất: Lighthouse audit; tối ưu hình ảnh, giảm bundle.

Accessibility: đảm bảo contrast màu; thêm thẻ alt cho ảnh.

Đa trình duyệt: Chrome, Safari, Firefox, Edge.

Bước 8: Triển khai và bàn giao (Ngày 27–30)

Triển khai nội bộ: deploy lên môi trường staging; gửi link cho các bên liên quan.

Thu thập phản hồi: điều chỉnh nội dung, màu sắc nếu cần.

Deploy chính thức: upload lên hosting (Vercel/Netlify hoặc server VMU), cập nhật DNS.

Hướng dẫn vận hành: tạo tài liệu hướng dẫn cập nhật nội dung, thay đổi ảnh cho sự kiện khác.

6. Quản lý rủi ro

Chậm cung cấp nội dung: yêu cầu Product Owner cam kết thời hạn cung cấp ảnh và dữ liệu.

Lỗi responsive: liên tục kiểm thử sớm trên thiết bị thật và emulators.

Thay đổi yêu cầu: tổ chức các buổi review định kỳ để cập nhật và điều chỉnh kịp thời.

7. Kết luận

Kế hoạch trên chi tiết hóa từng công đoạn cần thực hiện để phát triển landing page kỷ niệm 70 năm VMU theo kiến trúc template Terrene. Thực hiện đúng lộ trình và phối hợp chặt chẽ giữa các vai trò sẽ giúp dự án hoàn thành đúng tiến độ, đảm bảo chất lượng và truyền tải trọn vẹn thông điệp “Mái trường đại dương – vững tay lái, vươn ra biển lớn”.

Thiết kế kiến trúc tổng thể & quản lý rủi ro cho landing page kỷ niệm 70 năm VMU
1. Kiến trúc ứng dụng
1.1 Sử dụng Next.js với App Router

App Router (Next.js 15) cho phép tách rõ phần layout và phần nội dung. Cấu trúc routing như sau:

app/
│  layout.js      # Root layout, chứa header, footer, định nghĩa metadata
│  client-layout.js  # Layout client dùng Lenis và ViewTransitions
│
├─ 70-nam/
│   │  page.js    # Trang landing page 70 năm
│   └─ components # Các component riêng cho trang sự kiện
│
├─ connect/       # Trang liên hệ/đăng ký
├─ ...            # Các route khác của template


File layout.js đặt cấu trúc HTML chung (thẻ <html>, <body>), nạp global styles và TopBar.

client-layout.js triển khai Lenis smooth scrolling, ViewTransitionProvider, bao bọc mọi page để đảm bảo hiệu ứng cuộn mượt mà.

Dynamic import: đối với những component nặng như Gallery có nhiều ảnh, sử dụng next/dynamic với tùy chọn ssr: false để giảm kích thước bundle ban đầu.

Code splitting: chia page thành các section component độc lập để trình duyệt chỉ tải khi cần, giúp cải thiện TTI (Time To Interactive).

1.2 Cấu trúc component & file organization
Thư mục	Vai trò
components/common/	Chứa các component dùng lại nhiều nơi: TopBar, Footer, AnimatedButton, TimelineItem
components/event/	Chứa component dành cho trang 70 năm: HeroBanner, HistoryTimeline, StatsCounter, ProgramHighlights, InternationalPartners, EventsSchedule, GallerySection, RegistrationForm
hooks/	Các hook tùy chỉnh, ví dụ useIsMobile(), useScrollProgress() dùng cho animation
styles/	Định nghĩa biến màu (CSS Variables) trong :root, file màu chủ đạo palette.css, và các module riêng tương ứng với mỗi component
Quy tắc đặt tên

Component: PascalCase (Ví dụ: HeroBanner.jsx).

CSS Module: cùng tên file component, đuôi .module.css để tránh xung đột.

Image asset: lưu ở public/events/ với tên ngắn gọn, kebab-case.

State management

Dùng local state cho component (ví dụ: trạng thái mở/đóng menu, form input).

Dùng Refs (useRef) cho việc điều khiển animation GSAP.

Không cần library quản lý state tập trung (Redux/Zustand) vì trang này chủ yếu trình bày thông tin tĩnh.

1.3 Thiết kế giao diện
1.3.1 Hệ màu & Typography

Màu chủ đạo (Primary): #003e80 (xanh dương đậm) – thể hiện biển cả, thương hiệu VMU.

Màu phụ (Secondary): #00a0e3 (xanh nước biển nhạt) và #ffc20e (vàng kim) cho điểm nhấn.

Nền: trắng (#ffffff) cho nội dung; xám nhạt (#f5f5f5) cho section chuyển tiếp.

Font chữ: chọn Montserrat hoặc Inter (hỗ trợ tiếng Việt), với hierarchy rõ ràng:

Heading H1: 36–40 px, đậm.

H2: 28–32 px.

H3: 22–24 px.

Body text: 16–18 px.

Spacing: sử dụng hệ thống 8‑pt (8, 16, 24, 32, 40 px) để thống nhất khoảng cách.

1.3.2 Grid & Responsive

Mobile-first: base width 320–375 px; breakpoint quan trọng ở 1000 px.

Layout container: max-width 1200 px, padding trái/phải 24 px.

Grid system: dùng CSS Grid hoặc Flexbox; trên desktop chia 12 cột, mobile chia 1–2 cột.

Menu: ở mobile sử dụng MenuBtn để bật/ẩn navigation; desktop hiển thị đầy đủ.

1.3.3 Animation & Tương tác

GSAP:

Dùng ScrollTrigger để kích hoạt animation khi section vào viewport.

Sử dụng easing tùy chỉnh (ví dụ: power2.out) cho cảm giác mềm mại.

Tránh tạo quá nhiều timeline phức tạp gây lag; nhóm animation theo section.

Lenis:

Cấu hình tốc độ cuộn khác nhau cho desktop (tốc độ 1.2) và mobile (tốc độ 0.8).

ViewTransition API: khi chuyển trang, áp dụng hiệu ứng fade hoặc slide; đảm bảo fallback cho trình duyệt cũ.

Hover & Focus states: chú trọng accessibility; dùng hiệu ứng underline hoặc đổi màu nhẹ khi di chuột.

1.4 Quản lý nội dung

Lịch sử & mốc thời gian: dữ liệu được đặt trong file JSON hoặc Markdown riêng để dễ cập nhật.

Hình ảnh: dùng next/image với priority cho hero, lazy cho ảnh phía dưới.

Đa ngôn ngữ: nếu cần, sử dụng next-intl để tạo vi và en. Tách text ra file translation (en.json, vi.json).

SEO: mỗi route page.js sử dụng export const metadata để khai báo title, description, og:image.

2. Thiết kế chi tiết từng component chính
2.1 HeroBanner

Props: title, subtitle, backgroundImage, ctaLabel, ctaLink.

Layout: dùng position: relative để overlay chữ lên ảnh; sử dụng gradient overlay để chữ rõ ràng.

Animation: text fade‑in từ dưới lên; nút CTA scale nhẹ khi hover.

2.2 HistoryTimeline

Data: nhận mảng đối tượng { year, title, description }.

UI: mỗi mốc là một “TimelineItem” có icon, năm và mô tả; timeline dạng dọc trên mobile và ngang trên desktop.

Animation: sử dụng GSAP để slide‑in từng item khi cuộn; thiết kế tương phản màu giữa mốc chẵn và lẻ.

2.3 StatsCounter

Data: nhận mảng { label, value, icon }.

UI: mỗi counter hiển thị giá trị lớn, mô tả ngắn; icon ở trên; nằm trong lưới 2×2 trên mobile, 4×1 trên desktop.

Animation: số tăng dần khi section xuất hiện (có thể dùng GSAP Tween hoặc thư viện react-countup).

2.4 ProgramHighlights

Data: nhóm ngành học (Kỹ thuật & Công nghệ, Ngoại ngữ, Kinh tế & Luật, Chương trình chất lượng cao).

UI: card hiển thị tên nhóm, số chuyên ngành, mô tả ngắn; icon minh họa.

Interaction: có thể mở popup/modal hoặc dẫn tới trang đào tạo chính để xem chi tiết.

2.5 InternationalPartners

Data: danh sách đối tác, gồm logo và mô tả ngắn.

UI: slider/carousel (dùng Swiper.js hoặc component tùy chỉnh) để hiển thị logo; có tool‑tips hoặc modal khi click.

2.6 EventsSchedule

Data: danh sách sự kiện, bao gồm date, time, title, location, description.

UI: bảng dọc trên mobile, bảng 2 cột trên desktop; nhấn vào từng sự kiện hiện mô tả mở rộng.

2.7 GallerySection

UI: sử dụng component Gallery của template (grid masonry); ảnh được điều chỉnh kích thước theo tỷ lệ nguyên bản.

Animation: ảnh fade-in khi cuộn vào; overlay hiển thị mô tả khi hover.

2.8 RegistrationForm

Fields: Họ tên, email, số điện thoại, lời nhắn (tuỳ chọn).

Validation: kiểm tra email hợp lệ, SĐT có 10–11 số; hiển thị thông báo lỗi.

Submit: gửi dữ liệu tới Google Form hoặc endpoint API; hiển thị thông báo thành công.

3. Chiến lược quản lý rủi ro
3.1 Nhóm rủi ro và biện pháp giảm thiểu
Nhóm rủi ro	Mô tả	Mức độ	Biện pháp xử lý
Nội dung	Chậm cung cấp tài liệu, ảnh, thông tin sự kiện từ nhà trường	Cao	Thiết lập deadline cung cấp nội dung; gửi yêu cầu sớm; nếu thiếu, sử dụng placeholder tạm thời và cập nhật sau
Phạm vi (scope)	Yêu cầu mới phát sinh (thêm chức năng, thay đổi cấu trúc) làm trễ tiến độ	Trung bình	Tổ chức buổi review hàng tuần, xác định phạm vi rõ ràng và log mọi yêu cầu thay đổi; ưu tiên theo MoSCoW
Hiệu suất & tải trang	Ảnh dung lượng lớn, animation nặng gây chậm	Trung bình	Tối ưu ảnh (WebP, lazy loading); giới hạn số lượng animation; dùng dynamic import
Responsive & Cross‑browser	Trang vỡ layout ở thiết bị cũ, trình duyệt cũ	Thấp–Trung bình	Kiểm thử sớm trên nhiều thiết bị; sử dụng CSS hiện đại với fallback; tuân thủ chuẩn web
An ninh & dữ liệu	Form đăng ký lộ thông tin, spam bot	Thấp	Dùng reCAPTCHA hoặc honeypot; mã hóa kết nối HTTPS; không lưu dữ liệu nhạy cảm tại client
SEO & Accessibility	Nội dung khó đọc bởi máy tìm kiếm; thiếu thẻ aria	Trung bình	Sử dụng thẻ heading theo thứ tự; thêm alt cho ảnh; khai báo meta đầy đủ; kiểm tra bằng công cụ Lighthouse
Triển khai & hosting	Lỗi build/ deploy, downtime vào ngày sự kiện	Thấp	Tạo môi trường staging; deploy trước ít nhất 1 tuần để kiểm tra; thiết lập rollback plan và backup
Nhân sự & tiến độ	Lập trình viên hoặc designer nghỉ đột xuất	Thấp	Phân bổ công việc chồng chéo, backup tài liệu đầy đủ trên git; họp nội bộ để cập nhật tiến độ
3.2 Quy trình phản hồi rủi ro

Phát hiện: tất cả thành viên theo dõi rủi ro và báo cáo trong cuộc họp daily/weekly.

Đánh giá: xác định mức độ ảnh hưởng (cao/trung bình/thấp) và phân công người chịu trách nhiệm xử lý.

Hành động: áp dụng biện pháp giảm thiểu; cập nhật vào log rủi ro và theo dõi tiến độ.

Đánh giá lại: sau khi xử lý, đánh giá hiệu quả và ghi nhận bài học cho các sprint sau.

4. Kết luận

Bản thiết kế này cung cấp cái nhìn sâu về kiến trúc phần mềm, cấu trúc component và chi tiết thiết kế UI/UX cho trang landing page kỷ niệm 70 năm VMU, đồng thời xây dựng khung quản lý rủi ro có hệ thống. Việc tuân theo những hướng dẫn này sẽ giúp dự án vận hành trơn tru, đảm bảo tính nhất quán, chất lượng giao diện và giảm thiểu những trục trặc tiềm ẩn trong suốt quá trình phát triển.