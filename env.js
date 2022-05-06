module.exports = {
    // 开发环境
    dev: {
        NODE_ENV: 'development',
        BASE_API: 'http://localhost:3000/api' // 开发服务器地址
    },
    // 测试环境
    test: {
        NODE_ENV: 'test',
        BASE_API: 'http://localhost:3000/api' // 测试服务器地址
    },
    // 生产环境
    pro: {
        NODE_ENV: 'production',
        BASE_API: 'http://localhost:3000/api' // 正式服务器地址
    }
}