import React from 'react'

import Todo from './Todo'

export default function CompletedList(props) {
    return (
        <div>
            <ul>
                {props.completedTodos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}></Todo>
                )}
            </ul>
        </div>
    )
}
