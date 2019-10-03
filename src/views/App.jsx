/**
 * App
 */
import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Home = () => (
  <h2>Home</h2>
)

const Header = () => (
  <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
  </ul>
)

class App extends Component {
  render () {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default hot(App)
