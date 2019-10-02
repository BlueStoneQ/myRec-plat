/**
 * App
 */
import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import style from './App.scss'
import imgBk from '$public/assets/images/heart.jpg'

class App extends Component {
  render () {
    return (
      <div
        className={style['app-wrap']}
        style={{
          background: `url(${imgBk})`
        }}
      >
        123456
      </div>
    )
  }
}

export default hot(App)
