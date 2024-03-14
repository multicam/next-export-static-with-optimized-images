const withExportImages = require('next-export-optimize-images')

/**
 * @type {import('next').NextConfig}
 */
const config = {
    output: 'export',
    reactStrictMode: true,
    trailingSlash: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = withExportImages(config)