/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()
const nextConfig = {
    images: {
        domains: ['localhost', 'cdn.sanity.io'],
    },
    reactStrictMode: true,
}

export default withNextIntl(nextConfig)
