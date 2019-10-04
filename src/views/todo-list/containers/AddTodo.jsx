import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '$redux/actions/todo-list'

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.inputRef = React.createRef()
  }

  onSubmit (e) {
    const { dispatch } = this.props
    const { value } = this.inputRef.current
    e.preventDefault()
    if (!value.trim()) {
      // 如果是空字符串 或者 全是空格的情况
      return
    }
    // 向redux的store发出action
    dispatch(addTodo(value))
    this.inputRef.current.value = '' // 清空input，这里用了非受控组件
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <input ref={this.inputRef} />
          <button type='submit'>Add todo</button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(AddTodo)
