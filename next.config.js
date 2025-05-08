/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  trailingSlash: true,
}

module.exports = nextConfig 