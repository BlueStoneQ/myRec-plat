/**
 * App
 */
import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import TodoList from './todo-list'
import Weather from './weather'

const Home = () => (
  <h2>Home</h2>
)

const Header = () => (
  <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/todo-list'>TodoList</Link>
    </li>
    <li>
      <Link to='/weather'>Weather</Link>
    </li>
  </ul>
)

class App extends Component {
  render () {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/todo-list' component={TodoList} />
          <Route path='/weather' component={Weather} />
        </Switch>
      </Router>
    )
  }
}

export default hot(App)
