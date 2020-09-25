import React from 'react'
const arrow = {
    cursor: 'pointer',
    fontSize: '16px',
    marginLeft: '10px'
}

const Todo = ({ todo, onClick, moveToTop }) => {
    return (
        <>
            <li className="list-wrap" key={todo.id}>
                <span className={todo.completed ? 'list-item-completed' : 'list-item-active'} onClick={onClick}>{todo.name}</span>
                <span style={arrow} onClick={() => moveToTop(todo.id)}>&uarr;</span>
            </li>
        </>
    )
}

export default Todo;

