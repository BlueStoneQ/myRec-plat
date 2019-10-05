import React, { Component } from 'react'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'
import { getTodoList } from '$services/todo-list'

class TodoList extends Component {
  componentDidMount () {
    // 请求异步数据
    getTodoList().then((res) => {
      console.log('res: ', res)
    })
  }

  render () {
    return (
      <>
        <AddTodo />
        <Footer />
        <VisibleTodoList />
      </>
    )
  }
}

export default TodoList
