import React from 'react'
import Todo from './Todo'
export default function ActiveList({ todos, toggleTodo }) {
    return (
        <>
            <ul>
                {
                    todos.filter(todo => todo.completed === false).map(todo => <Todo todo={todo} key={todo.id} onClick={() => toggleTodo(todo.id)} />)
                }
            </ul>
        </>
    )
}

