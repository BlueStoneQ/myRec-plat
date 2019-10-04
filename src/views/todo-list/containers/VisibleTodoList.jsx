import { connect } from 'react-redux'
import List from '../components/List'
import { toggleTodo } from '../../../redux/actions/todo-list'
import { SHOW_COMPELETED, SHOW_ACTIVE } from '../constants'

/**
 * 让两个state值共同参与计算
 */
const getFilterTodoList = (list, filter) => {
  switch (filter) {
    case SHOW_ACTIVE:
      return list.filter(todo => !todo.completed)
    case SHOW_COMPELETED:
      return list.filter(todo => todo.completed)
    default:
      return list
  }
}

const mapStateToProps = ({ todoList, visibilityFilter }) => {
  return {
    todoList: getFilterTodoList(todoList, visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
