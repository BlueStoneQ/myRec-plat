import { ADD_TODO, TOGGLE_TODO } from '../../constants/todo-list'

const defaultState = []

const todoList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          // 新增的todo
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => (
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      ))
    default:
      return state
  }
}

export default todoList
