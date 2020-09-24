import React from 'react'

import Todo from './Todo'

export default function CompletedList({ todos, toggleTodo, moveToTop }) {
    return (
        <>
            <ul>
                {
                    todos.filter(todo => todo.completed === true).map(todo => <Todo todo={todo} key={todo.id} onClick={() => toggleTodo(todo.id)} moveToTop={() => moveToTop(todo.id)} />)
                }
            </ul>
        </>
    )
}

