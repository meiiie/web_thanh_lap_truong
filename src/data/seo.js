export const siteUrl = "https://kiniem70nam.vmu.holihu.online";
export const siteName = "VMU 70 Năm";
export const siteTitle =
  "VMU 70 Năm | Trường Đại học Hàng hải Việt Nam";
export const siteDescription =
  "Microsite giới thiệu Trường Đại học Hàng hải Việt Nam nhân mốc 70 năm thành lập ngày 01/04/2026, tập trung vào lịch sử, vị thế trường trọng điểm quốc gia và tầm nhìn phát triển gắn với kinh tế biển.";
export const siteLocale = "vi_VN";
export const siteLanguage = "vi-VN";
export const siteThemeColor = "#003e80";
export const siteCreator = "HoLiLiHu";
export const sitePublisher = "The Wiii Lab";
export const siteCopyright = "HoLiLiHu tới từ The Wiii Lab";
export const siteLastModified = "2026-03-24T00:00:00+07:00";

export const institutionName = "Trường Đại học Hàng hải Việt Nam";
export const institutionAlternateName = "Vietnam Maritime University";
export const officialWebsiteUrl = "https://vimaru.edu.vn";
export const officialAdmissionsUrl = "https://tuyensinh.vimaru.edu.vn";
export const officialFacebookUrl =
  "https://www.facebook.com/daihochanghaivietnam";

export const defaultOgImage = {
  url: "/vmu/official/home-hero.jpg",
  width: 1200,
  height: 630,
  alt: "VMU 70 Năm - Trường Đại học Hàng hải Việt Nam",
};

export const siteKeywords = [
  "VMU 70 Năm",
  "Trường Đại học Hàng hải Việt Nam",
  "Đại học Hàng hải Việt Nam",
  "Vietnam Maritime University",
  "kỷ niệm 70 năm thành lập VMU",
  "01/04/2026",
  "trường trọng điểm quốc gia",
  "kinh tế biển",
  "đào tạo hàng hải",
  "Hải Phòng",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

function resolveImageUrl(url) {
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : absoluteUrl(url);
}

function resolveImage(image, fallbackTitle = siteTitle) {
  if (!image) {
    return defaultOgImage;
  }

  if (typeof image === "string") {
    return {
      ...defaultOgImage,
      url: image,
      alt: fallbackTitle,
    };
  }

  return {
    ...defaultOgImage,
    ...image,
    alt: image.alt || fallbackTitle,
  };
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  image,
  keywords = [],
  type = "website",
}) {
  const pageTitle = title ? `${title} | ${siteName}` : siteTitle;
  const resolvedImage = resolveImage(image, pageTitle);

  return {
    title,
    description,
    keywords: Array.from(new Set([...siteKeywords, ...keywords])),
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: pageTitle,
      description,
      url: absoluteUrl(path),
      siteName,
      locale: siteLocale,
      type,
      images: [resolvedImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [resolveImageUrl(resolvedImage.url)],
    },
  };
}

export function createBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createWebPageSchema({
  path = "/",
  name,
  description,
  type = "WebPage",
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: siteLanguage,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#vmu`,
    },
    dateModified: siteLastModified,
  };
}
