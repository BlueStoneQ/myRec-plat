/**
 * Weather应用的相关常量
 * 1- 用WEATHER作为命名空间
 */
/**
 * action type
 */
export const FETCH_STARTED = 'WEATHER/FETCH_STARTED'
export const FETCH_SUCCESS = 'WEATHER/FETCH_SUCCESS'
export const FETCH_FAILURE = 'WEATHER/FETCH_FAILURE'

/**
 * 面向视图的三种操作状态（从上面action type 三种状态映射而来）
 */
export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
