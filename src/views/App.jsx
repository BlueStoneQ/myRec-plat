/**
 * App
 */
import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import TodoList from './todo-list'

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
        </Switch>
      </Router>
    )
  }
}

export default hot(App)
