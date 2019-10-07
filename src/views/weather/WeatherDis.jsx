/**
 * 展示天气的组件
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LOADING, SUCCESS, FAILURE } from '../../redux/constants/weather'

const WeatherDis = ({ status }) => {
  switch (status) {
    case LOADING:
      return <div>Loading...</div>
    case SUCCESS:
      return (
        <div>请求到信息</div>
      )
    case FAILURE:
      return <div>天气信息装载失败</div>
    default:
      throw new Error('unexpected status ' + status)
  }
}

const mapStateToProps = state => {
  const weatherData = state.weather
  return {
    status: weatherData.status
  }
}

WeatherDis.propTypes = {
  status: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(WeatherDis)
