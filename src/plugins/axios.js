import Vue from 'vue'
import Axios from 'axios'
import {Message} from 'element-ui'
export const axios = Axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? './../' : '/',
    timeout: 1000 * 30,                     // 超时时间
    withCredentials: true,                  // 跨域携带cookie
    crossDomain: true,
    // retry: 4,                               // 设置重新请求
    // retryDelay: 1000,
    responseType: "json",
})
// 配置拦截器，取消所有请求
let promiseArr = {}
window.axiosCancel = []
//请求拦截
axios.interceptors.request.use(config => {
    // config.cancelToken = new axios.CancelToken(cancel => {
    //     window.axiosCancel.push({cancel})
    //     let str = config.data ? JSON.stringify(config.data) : JSON.stringify(config.params)
    //     str = config.url + str
    //     if (promiseArr[str]) {
    //         promiseArr[str]('取消请求')
    //         promiseArr[str] = cancel
    //     } else {
    //         promiseArr[str] = cancel
    //     }
    // })
    return config;
}, err => {
    return Promise.reject(err)
})
//响应拦截
axios.interceptors.response.use(response => {
    const result = response.data
    const responseType = response.config.responseType
    if (responseType === 'json') {
        if (result && result.code === 200) {
            return Promise.resolve(result.data)
        } else {
            if (result.code === 302) {
                window.location.href = result.data + window.location.href
            } else {
                Message.error(result.message)
                return Promise.reject(result)
            }
        }
    } else {
        return Promise.reject(result)
    }
}, error => {
    if (error.code === "ECONNABORTED" && error.message.indexOf('timeout') !== -1) {
        Vue.prototype.$notify.error({
            title: "消息",
            message: "请求超时"
        });
    }
    // 请求错误的处理
    const msg = {
        "400": "请求错误",
        "401": "未授权，请登录",
        "403": "拒绝访问",
        "404": `请求地址出错`,
        "408": "请求超时",
        "500": "服务器内部错误",
        "501": "服务未实现",
        "502": "网关错误",
        "503": "服务不可用",
        "504": "网关超时",
        "505": "HTTP版本不受支持"
    };
    if (error.response) {
        Vue.prototype.$notify.error({
            title: "消息",
            message: msg[error.response.status]
        });
    }
    return Promise.reject(error);
})
Vue.prototype.$axios = axios;
