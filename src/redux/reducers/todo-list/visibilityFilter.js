import { SET_VISIBILITY_FILTER } from '../../constants/todo-list'

/**
 * 该state在整个state中是这样的
 *  state = {
 *     visibilityFilter: 'SHOW_ALL'
 * }
 */

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
