import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import '../styles/input.css'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <>
            <div className="formContainer">
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
                    <input ref={node => input = node} className="input-field" placeholder="Add a task" />
                    <button type="submit" className="addBtn">
                        Add
        </button>
                    <button onClick={() => dispatch({ type: "SORT_TODOS" })} className="sortBtn">Sort</button>
                </form>
            </div>
        </>
    )
}

export default connect()(AddTodo)
