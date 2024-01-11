/** @type {import('next').NextConfig} */

module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    output: 'export',
    basePath: '/projetos/connect',
    typescript: {
      ignoreBuildErrors: true,
    },
    assetPrefix: 'https://agenciabrasildigital.com.br/projetos/connect',
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'agenciabrasildigital.com.br/',
          port: '',
          pathname: '/projetos/connect/**',
        },
      ],
    }
  }
  