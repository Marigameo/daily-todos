import React from 'react'
import TodoWrapper from './components/TodoWrapper';
import AddTodo from './components/AddTodo';
import './App.css'

export default function App() {
  return (
    <div className="container">
      <div className="title">Tasks</div>
      <AddTodo />
      <TodoWrapper />
    </div>
  )
}
