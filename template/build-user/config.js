module.exports = {
    /* px2rem: null,//px2rem 转换内容 如 { rootValue: 100 } 非rem项目 使用null */
    px2rem: {
        rootValue: 100, //比例
        selectorBlackList: ['vux','weui'] //不进行rem转换的样式
    },
    host: 'localhost', // 测试版host
    port: 8013, // 测试版端口号
    proxy: {
        '/data': {
            //印射为/api
            target: 'http://yapi.tcy365.org:3000/mock/322/', // 接口域名
            changeOrigin: true, //是否跨域
            pathRewrite: {
                '^/api': '/api' //需要rewrite的,
            }
        }
    }
};
