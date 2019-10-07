import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from '../../constants/weather'
import { axios } from '$utils'

const getApiUrl = (cityCode) => {
  const WEATHER_BASE_URL = 'http://www.weather.com.cn/'
  return `${WEATHER_BASE_URL}data/cityinfo/${cityCode}.html`
}

export const fetchWeatherStarted = () => ({
  type: FETCH_STARTED
})

export const fetchWeatherSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
})

export const fetchWeatherFailure = (error) => ({
  type: FETCH_FAILURE,
  error
})

/**
 * 异步action Creater
 * 1. 把一个异步请求 封装在一个异步action中
 */
export const fetchWeather = (cityCode) => {
  return (dispatch) => {
    // 初识状态
    dispatch(fetchWeatherStarted())
    // 请求
    axios.get(getApiUrl(cityCode))
      .then((result) => {
        dispatch(fetchWeatherSuccess(result))
      })
      .catch((error) => {
        dispatch(fetchWeatherFailure(error))
      })
  }
}
