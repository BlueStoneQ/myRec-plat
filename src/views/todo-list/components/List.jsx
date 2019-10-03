/**
 * Todo List列表
 */
import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const List = ({ todos }) => (
  <ul>
    {
      todos.map((v, i) => (
        <Todo key={i} {...v} />
      ))
    }
  </ul>
)

List.propTypes = {
  todos: PropTypes.array.isRequired
}

export default List
