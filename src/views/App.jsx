/**
 * App
 */
import React, { Component } from 'react'
import './App.scss'
import imgBk from '$public/assets/images/heart.jpg'

class App extends Component {
  render () {
    return (
      <div
        className='app-wrap'
        style={{
          background: `url(${imgBk})`
        }}
      >
        123
      </div>
    )
  }
}

export default App
