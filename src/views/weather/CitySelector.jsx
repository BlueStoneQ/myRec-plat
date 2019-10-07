/**
 * 天气过滤条件选择器
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchWeather } from '../../redux/actions/weather'

const CITY_CODES = {
  北京: 101010100,
  上海: 101020100,
  广州: 101280101,
  深圳: 101280601
}
class CitySelectoer extends Component {
  onChange (e) {
    const cityCode = e.target.value
    this.props.onSelectCity(cityCode)
  }

  render () {
    return (
      <select onChange={(e) => this.onChange(e)}>
        {
          Object.keys(CITY_CODES).map(cityName => (
            <option key={cityName} value={CITY_CODES[cityName]}>
              {cityName}
            </option>
          ))
        }
      </select>
    )
  }
}

CitySelectoer.propTypes = {
  onSelectCity: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  onSelectCity: (cityCode) => {
    dispatch(fetchWeather(cityCode))
  }
})

export default connect(null, mapDispatchToProps)(CitySelectoer)
