import React from 'react'

const Todo = ({ todo, onClick }) => {
    return (
        <>
            <li key={todo.id} onClick={onClick}>{todo.name}</li>
        </>
    )
}

export default Todo;

