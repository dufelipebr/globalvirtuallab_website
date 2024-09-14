const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
            pathname: '**',
          },
        ],
      },
}

module.exports = withNextIntl(nextConfig)
