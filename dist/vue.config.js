module.exports = {
    devServer: {
        open: true,
        proxy: {
            "/api": {
                target: "http://118.89.234.135:7001",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}