let nextTodoId = Math.random()
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const moveToTop = id => ({
    type: 'MOVE_TO_TOP',
    id,
})