/** @type {import('next').NextConfig} */

module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    output: 'export',
    basePath: '',
    typescript: {
      ignoreBuildErrors: true,
    },
    assetPrefix: 'https://connectprotecaointeligente.com.br/',
    // assetPrefix: 'http://localhost:3000/',
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'connectprotecaointeligente.com.br',
          port: '',
          pathname: '/**',
        },
      ],
    }
  }
  