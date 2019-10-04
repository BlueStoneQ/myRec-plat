/**
 * Todo List列表
 */
import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const List = ({ todoList }) => (
  <ul>
    {
      todoList.map((v, i) => (
        <Todo key={v.id} {...v} />
      ))
    }
  </ul>
)

List.propTypes = {
  todoList: PropTypes.array.isRequired
}

export default List
