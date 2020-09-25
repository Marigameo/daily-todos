import React from 'react'
import TodoWrapper from './components/TodoWrapper';
import AddTodo from './components/AddTodo';
import './App.css'
import ColorSwitcher from './components/ColorSwitcher';

export default function App() {
  return (
    <div className="container">
      <ColorSwitcher />
      <div className="title">Tasks</div>
      <AddTodo />
      <TodoWrapper />
    </div>
  )
}
