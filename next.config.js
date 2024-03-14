const withExportImages = require('next-export-optimize-images')
const withYaml = require('next-plugin-yaml');
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

module.exports = withExportImages(withYaml(config))