import React from 'react'
import TodoWrapper from './components/TodoWrapper';
import AddTodo from './components/AddTodo';

export default function App() {
  return (
    <div>
      <AddTodo />
      <TodoWrapper />
    </div>
  )
}
