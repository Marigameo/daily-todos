import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                if (input.value.trim().length > 20) {
                    alert('Must be 20 characters or less')
                } else {
                    dispatch(addTodo(input.value))
                }
                input.value = ''
            }}>
                <input ref={node => input = node} />
                <button type="submit">
                    Add Todo
        </button>
                <button onClick={() => dispatch({ type: "SORT_TODOS" })}>Sort</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)
