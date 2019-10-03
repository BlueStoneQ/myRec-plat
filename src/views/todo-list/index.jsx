import React from 'react'
import List from './components/List'

const mockList = [
  { text: '25364' },
  { text: '加油' }
]

const TodoList = () => (
  <>
    <List todos={mockList} />
  </>
)

export default TodoList
