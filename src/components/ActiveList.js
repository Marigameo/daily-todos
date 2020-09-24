import React from 'react'

import Todo from './Todo'

export default function ActiveList(props) {
    return (
        <div>
            <ul>
                {props.activeTodos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}></Todo>
                )}
            </ul>
        </div>
    )
}
