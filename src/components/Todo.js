import React from 'react'

const Todo = ({ todo, onClick, moveToTop }) => {
    return (
        <>
            <li key={todo.id} onClick={onClick}>{todo.name}</li>
            <button onClick={moveToTop}>Move up</button>
        </>
    )
}

export default Todo;

