export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Kỷ niệm 70 năm Trường Đại học Hàng hải Việt Nam",
    "description": "Lễ kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam với sự kiện đặc biệt công nhận trường trọng điểm quốc gia về đào tạo, nghiên cứu phục vụ phát triển bền vững kinh tế biển.",
    "startDate": "2025-09-06T08:00:00+07:00",
    "endDate": "2025-09-06T17:00:00+07:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Trường Đại học Hàng hải Việt Nam",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "484 Lạch Tray",
        "addressLocality": "Ngô Quyền",
        "addressRegion": "Hải Phòng",
        "addressCountry": "VN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Trường Đại học Hàng hải Việt Nam",
      "url": "https://kiniem70nam.vmu.holihu.online",
      "logo": "https://kiniem70nam.vmu.holihu.online/logos/terrene-logo.png"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://kiniem70nam.vmu.holihu.online/tham-gia",
      "price": "0",
      "priceCurrency": "VND",
      "availability": "https://schema.org/InStock"
    },
    "image": [
      "https://kiniem70nam.vmu.holihu.online/logos/terrene-logo.png"
    ],
    "url": "https://kiniem70nam.vmu.holihu.online"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
