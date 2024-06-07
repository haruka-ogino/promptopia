import { NextConfig } from 'next'

interface ExtendedNextConfig extends NextConfig {
  experimental: NextConfig['experimental'] & {
    appDir?: boolean
  }
}

const nextConfig: ExtendedNextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
}

export default nextConfig
