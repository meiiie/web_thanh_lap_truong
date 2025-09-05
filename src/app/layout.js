import "./globals.css";
import "./vmu-colors.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";
import ClientOnly from "@/components/ClientOnly/ClientOnly";
import StructuredData from "@/components/StructuredData/StructuredData";

export const metadata = {
  title: "Kỷ niệm 70 năm VMU | 6/9/2025 - Trường Đại học Hàng hải Việt Nam",
  description: "Chào mừng kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam (1956-2026). Sự kiện đặc biệt ngày 6/9/2025 với lễ công nhận trường trọng điểm quốc gia về đào tạo, nghiên cứu phục vụ phát triển bền vững kinh tế biển.",
  keywords: [
    "VMU", "Trường Đại học Hàng hải Việt Nam", "kỷ niệm 70 năm", "6/9/2025", 
    "trường trọng điểm quốc gia", "kinh tế biển", "đào tạo hàng hải", "Hải Phòng",
    "nghiên cứu biển", "phát triển bền vững", "thành tựu 70 năm", "lịch sử VMU"
  ],
  authors: [{ name: "The Wiii Lab" }],
  creator: "The Wiii Lab",
  publisher: "Trường Đại học Hàng hải Việt Nam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kiniem70nam.vmu.holihu.online'),
  alternates: {
    canonical: 'https://kiniem70nam.vmu.holihu.online',
  },
  openGraph: {
    title: "Kỷ niệm 70 năm VMU | 6/9/2025 - Trường Đại học Hàng hải Việt Nam",
    description: "Chào mừng kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam (1956-2026). Sự kiện đặc biệt ngày 6/9/2025 với lễ công nhận trường trọng điểm quốc gia.",
    url: 'https://kiniem70nam.vmu.holihu.online',
    siteName: 'VMU 70 Năm',
    images: [
      {
        url: '/logos/terrene-logo.png',
        width: 1200,
        height: 630,
        alt: 'VMU 70 Năm - Trường Đại học Hàng hải Việt Nam',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kỷ niệm 70 năm VMU | 6/9/2025",
    description: "Chào mừng kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam (1956-2026).",
    images: ['/logos/terrene-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout 
          topBar={
            <ClientOnly>
              <TopBar />
            </ClientOnly>
          }
        >
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
