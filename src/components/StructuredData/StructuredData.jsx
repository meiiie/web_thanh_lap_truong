import JsonLdScript from "./JsonLdScript";
import { siteContact } from "@/data/site-content";
import {
  absoluteUrl,
  institutionAlternateName,
  institutionName,
  officialAdmissionsUrl,
  officialFacebookUrl,
  officialWebsiteUrl,
  siteDescription,
  siteLanguage,
  siteLastModified,
  sitePublisher,
  siteTitle,
  siteUrl,
} from "@/data/seo";

export default function StructuredData() {
  const publisherSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#publisher`,
    name: sitePublisher,
    url: siteUrl,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteTitle,
    description: siteDescription,
    inLanguage: siteLanguage,
    publisher: {
      "@id": `${siteUrl}/#publisher`,
    },
    about: {
      "@id": `${siteUrl}/#vmu`,
    },
    dateModified: siteLastModified,
  };

  const universitySchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": `${siteUrl}/#vmu`,
    name: institutionName,
    alternateName: institutionAlternateName,
    url: officialWebsiteUrl,
    logo: absoluteUrl("/logos/Logo-truong.png"),
    image: [absoluteUrl("/vmu/official/home-hero.jpg")],
    email: siteContact.email,
    telephone: siteContact.phonePrimary,
    address: {
      "@type": "PostalAddress",
      streetAddress: "484 Lạch Tray",
      addressLocality: "Lê Chân",
      addressRegion: "Hải Phòng",
      addressCountry: "VN",
    },
    sameAs: [officialWebsiteUrl, officialAdmissionsUrl, officialFacebookUrl],
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${siteUrl}/#event`,
    name: "Lễ kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam",
    description:
      "Sự kiện kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam diễn ra ngày 01/04/2026, kết nối các thế hệ cán bộ, giảng viên, sinh viên, cựu sinh viên và đối tác của VMU.",
    startDate: "2026-04-01T08:00:00+07:00",
    endDate: "2026-04-01T17:00:00+07:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: [absoluteUrl("/vmu/official/home-hero.jpg")],
    location: {
      "@type": "Place",
      name: institutionName,
      address: {
        "@type": "PostalAddress",
        streetAddress: "484 Lạch Tray",
        addressLocality: "Lê Chân",
        addressRegion: "Hải Phòng",
        addressCountry: "VN",
      },
    },
    organizer: {
      "@id": `${siteUrl}/#vmu`,
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/tham-gia"),
      price: "0",
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
    },
    mainEntityOfPage: absoluteUrl("/su-kien"),
    url: absoluteUrl("/su-kien"),
  };

  return (
    <JsonLdScript
      data={[publisherSchema, websiteSchema, universitySchema, eventSchema]}
    />
  );
}
