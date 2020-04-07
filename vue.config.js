const pxtorem = require('postcss-pxtorem');

module.exports = {
    publicPath: '/book/', // 部署应用包时的基本 URL
    outputDir: 'dist', // 生产环境构建文件目录
    assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    productionSourceMap: false, // 是否需要生产环境的 source map
    devServer: { // 开发环境请求代理
        proxy: {
            '^/login/api': {
                target: process.env.VUE_APP_DEFEN, // 要访问的跨域的域名
                ws: true, // 是否开启 webSockets
                secure: false, // 使用的是 http 协议则设置为 false，https 协议则设置为 true
                changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    '^/login/api': '/api'
                },
            },
            '^/paper/api': {
                target: process.env.VUE_APP_TIKU, // 要访问的跨域的域名
                ws: true, // 是否开启 webSockets
                secure: false, // 使用的是 http 协议则设置为 false，https 协议则设置为 true
                changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    '^/paper/api': '/api'
                },
            },
            '^/video/v1': {
                target: process.env.VUE_APP_APP, // 要访问的跨域的域名
                ws: true, // 是否开启 webSockets
                secure: false, // 使用的是 http 协议则设置为 false，https 协议则设置为 true
                changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    '^/video/v1': '/v1'
                },
            },
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    pxtorem({
                        rootValue: 37.5,
                        selectorBlackList: ['.ignore', '.hairlines'],
                        propList: ['*']
                    })
                ]
            }
        }
    }
}