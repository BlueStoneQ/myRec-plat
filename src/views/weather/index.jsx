/**
 * redux + redux-thunk 实现异步机制
 */
import React from 'react'
import CitySelector from './CitySelector'
import WeatherDis from './WeatherDis'

// http://www.weather.com.cn/

const Weather = () => (
  <div>
    <CitySelector />
    <WeatherDis />
  </div>
)

export default Weather
