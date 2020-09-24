import React from 'react'

export default function Todo(props) {
    return (
        <div>
            <li key={props.key}>{props.todo}</li>
        </div>
    )
}
