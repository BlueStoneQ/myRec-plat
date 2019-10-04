import { connect } from 'react-redux'
import List from '../components/List'

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  }
}

export default connect(mapStateToProps)(List)
