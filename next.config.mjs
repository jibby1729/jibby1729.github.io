/** @type {import('next').NextConfig} */
const nextConfig = {
  // This configuration is needed for GitHub Pages deployment
  output: 'export', // Generates static HTML files for each page
  // The following is needed for GitHub Pages to work with Next.js
  // It ensures assets are loaded correctly from the base path
  basePath: '',
  // Disable image optimization since GitHub Pages doesn't support it
  images: { 
    unoptimized: true,
  },
  // Trailing slash is recommended for static exports
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
