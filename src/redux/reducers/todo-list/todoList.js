import { ADD_TODO } from '../../constants'
const defaultState = []

const todoList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          // 新增的todo
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state
  }
}

export default todoList
