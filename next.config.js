/** @type {import('next').NextConfig} */

module.exports = {
    output: 'export',
    basePath: '/connect',
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'devandrew.com.br/',
          port: '',
          pathname: '/connect/**',
        },
      ],
    }
  }
  