/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_REPOSITORY?.toLowerCase().includes('/peer-learn')

const nextConfig = {
  output: 'export',
  // GitHub Pages project site is served from /Peer-Learn
  basePath: isGithubPages ? '/Peer-Learn' : undefined,
  assetPrefix: isGithubPages ? '/Peer-Learn/' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
