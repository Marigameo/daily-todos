import React from 'react'
import Todo from './Todo'
import '../styles/lists.css'
export default function ActiveList({ todos, toggleTodo, moveToTop }) {
    return (
        <>
            <ul className="lists">
                <div className="list-title">To-do</div>
                {
                    todos.filter(todo => todo.completed === false).map(todo => <Todo todo={todo} key={todo.id} onClick={() => toggleTodo(todo.id)} moveToTop={() => moveToTop(todo.id)} />)
                }
            </ul>
        </>
    )
}

