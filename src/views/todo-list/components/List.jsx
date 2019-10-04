/**
 * Todo List列表
 */
import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const List = ({ todoList, onTodoClick }) => (
  <ul>
    {
      todoList.map((v, i) => (
        <Todo
          key={v.id}
          {...v}
          onClick={() => onTodoClick(v.id)}
        />
      ))
    }
  </ul>
)

List.propTypes = {
  todoList: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default List
