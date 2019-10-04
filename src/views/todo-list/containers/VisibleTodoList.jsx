import { connect } from 'react-redux'
import List from '../components/List'
import { toggleTodo } from '../../../redux/actions/todo-list'

const mapStateToProps = state => {
  return {
    todoList: state.todoList
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
