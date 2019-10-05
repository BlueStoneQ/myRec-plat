/**
 * src内部用到的一些配置：统一配置在一处
 */

const METHOD = 'http://'
const PORT = ':3002'

/**
 * 公用基础配置
 */
const comConfig = {
  API_BASE_URL: `${METHOD}127.0.0.1${PORT}`, // API基础地址
  MOCK_ABLE: false // 是否打开mock的开关
}

/**
  * devlopment模式下的配置
  */
const devConfig = {
  API_BASE_URL: `${METHOD}127.0.0.1${PORT}`,
  MOCK_ABLE: true
}

/**
 * productionp模式下的配置
 */
const prodConfig = {
  // 待定
}

Object.assign(comConfig, process.env.NODE_ENV === 'production' ? prodConfig : devConfig)

export default comConfig
