import React from 'react'
import PropTypes from 'prop-types'
import styles from './Todo.scss'

const Todo = ({ text }) => (
  <li className={styles.todo}>{text}</li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo
