const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    //代理
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                changeOrigin: true
            }
        }
    },
    //设置路径别名
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    }
}
