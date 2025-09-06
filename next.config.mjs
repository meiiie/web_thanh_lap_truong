/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tối ưu cho Vercel
  output: 'standalone',
  
  // Cấu hình images
  images: {
    domains: ['kiniem70nam.vmu.holihu.online'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Cấu hình headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ]
  },

  // Cấu hình redirects
  async redirects() {
    return [
      {
        source: '/studio',
        destination: '/gioi-thieu',
        permanent: true,
      },
      {
        source: '/spaces',
        destination: '/su-kien',
        permanent: true,
      },
      {
        source: '/sample-space',
        destination: '/tam-nhin',
        permanent: true,
      },
      {
        source: '/blueprints',
        destination: '/thu-vien',
        permanent: true,
      },
      {
        source: '/connect',
        destination: '/tham-gia',
        permanent: true,
      }
    ]
  },

  // Cấu hình experimental
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['gsap', '@gsap/react']
  },

  // Cấu hình webpack
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  }
};

export default nextConfig;
