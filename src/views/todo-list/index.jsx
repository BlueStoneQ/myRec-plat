import React from 'react'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'

const TodoList = () => (
  <>
    <AddTodo />
    <Footer />
    <VisibleTodoList />
  </>
)

export default TodoList
