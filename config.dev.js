module.exports = {
    env: {
        BASE_URL: 'http://localhost:8000/'
    },
    images: {
        domains: ['nakhll.com', '3007'],
    },
    trailingSlash: true,
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer({})