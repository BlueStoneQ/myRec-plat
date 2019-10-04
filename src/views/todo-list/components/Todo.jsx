import React from 'react'
import PropTypes from 'prop-types'
import styles from './Todo.scss'

const getStyle = (completed) => ({
  textDecoration: completed ? 'line-through' : 'none'
})

const Todo = ({ text, completed, onClick }) => (
  <li
    className={styles.todo}
    style={getStyle(completed)}
    onClick={onClick}
  >
    {text}
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo
