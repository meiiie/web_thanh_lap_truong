export default function manifest() {
  return {
    name: 'Kỷ niệm 70 năm VMU | 6/9/2025',
    short_name: 'VMU 70 Năm',
    description: 'Chào mừng kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam (1956-2026)',
    start_url: '/',
    display: 'standalone',
    background_color: '#003e80',
    theme_color: '#003e80',
    orientation: 'portrait',
    scope: '/',
    lang: 'vi',
    icons: [
      {
        src: '/logos/terrene-logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/logos/terrene-logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    categories: ['education', 'university', 'maritime'],
    screenshots: [
      {
        src: '/logos/terrene-logo.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide'
      }
    ]
  };
}
