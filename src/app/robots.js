export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://kiniem70nam.vmu.holihu.online/sitemap.xml',
  };
}
