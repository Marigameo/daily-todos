import React, { Component } from 'react'
import ActiveList from './ActiveList';
import CompletedList from './CompletedList';
import '../styles/wrapper.css'
class TodoWrapper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTodos: [
                { id: 1, todo: 'Go to sleep' },
                { id: 2, todo: 'Bath' }
            ],
            completedTodos: [
                { id: 3, todo: 'Eat' },
                { id: 4, todo: 'Have fun' }
            ]
        }
    }

    render() {
        return (
            <div className="row">
                <div className="column">
                    <ActiveList activeTodos={this.state.activeTodos} />
                </div>
                <div className="column">
                    <CompletedList completedTodos={this.state.completedTodos} />
                </div>
            </div>
        )
    }
}

export default TodoWrapper
