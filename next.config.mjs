/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  turbopack: {
    root: process.cwd(),
  },
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
