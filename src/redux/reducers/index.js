import { combineReducers } from 'redux'
import todoList from './todo-list'
import weather from './weather'

export default combineReducers({
  ...todoList,
  weather
})
