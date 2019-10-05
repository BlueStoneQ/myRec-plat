/**
 * 页面todo的api接口
 * 1. 将api在一处管理（只要这里和接口文档对齐即可），也可以作预处理/拦截处理
 */
import { axios } from '$utils'
import Config from '$config'

export const getTodoList = () => {
  console.log(`[URL] ${Config.API_BASE_URL}/todoList/getTodoList`)
  return axios.get(`${Config.API_BASE_URL}/todoList/getTodoList`)
}
