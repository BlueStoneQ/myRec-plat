/**
 * 这里我们可以对fetch进行各种预置操作：
 * 1. mock的处理
 * 2. axios中的拦截
 */
import axios from 'axios'
import Config from '$config'

/**
 * 在development状态下 && Config中mock的开关打开的情况下 引入mock（启动mock拦截）
 * 1- 这里不用import进行无绑定引入mock的原因：import必须放在文件开头
 */
process.env.NODE_ENV === 'development' && !!Config.MOCK_ABLE && require('$mock')

/**
 * fix(HMR+mock)热刷新下，当，mock中url变化时 - 重载mock，否则修改url后会引起invalid url
 */
if (module.hot) {
  module.hot.accept('../mock', () => {
    process.env.NODE_ENV === 'development' && !!Config.MOCK_ABLE && require('$mock')
  })
}

/**
 * axios基本配置
 */
Object.assign(axios.defaults, {
  // baseURL: Config.API_BASE_URL, // url基础地址
  // headers: {
  //   'X-Requested-With': 'XMLHttpRequest' // ajax请求
  // },
  // withCredentials: false, // 跨域请求时是否需要凭证
  // showLoading: true, // 是否显示遮罩
  // showError: true, // 返回错误时是否显示错误信息
  // timeout: 15000 // 超时设置
})

/**
 * axios 请求时的拦截器
 */
axios.interceptors.request.use(function (conf) {
  // 在发送请求之前做些什么
  return conf
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

/**
 * axios 响应时的拦截器
 */
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axios
