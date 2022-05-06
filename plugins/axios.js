import { Message } from 'element-ui'  //引用饿了么UI消息组件
export default function ({ app: { $axios, $cookies } }) {
    $axios.defaults.baseURL = process.env.baseUrl
    $axios.defaults.timeout = 1000 * 10
    $axios.interceptors.request.use(config => {
        config.headers['token'] = 'eyJzdGFmZl9pZCI6MTY1LCJoZWFkX3Bob3RvIjoiIiwic3RhZmZfbmFtZSI6Ilx1NzllNlx1OWU0Zlx1N2EwYiIsImlzX3N1cGVyIjoxLCJkZXBhcnRtZW50X2lkIjoyMCwiaXNfZGlyZWN0b3IiOjAsInRpbWVfb3V0IjoxNjUxNzMyNjA2fQ=='
        // config.headers['X-Token'] = $cookies.get('token') || ''
        // config.headers['X-Device-Id'] = $cookies.get('clientId') || ''
        // config.headers['X-Uid'] = $cookies.get('userId') || ''
        return config
    })
    $axios.interceptors.response.use(response => {
        const res = response.data
        if (/^[4|5]/.test(response.status)) {
            return Promise.reject(response.statusText)
        }
        if (process.client && res.code !== 0) { // 客户端错误处理
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 2 * 1000
            })
            return Promise.reject(new Error(res.message))
        }
        return res
    })
}