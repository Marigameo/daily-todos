const todos = [
    { id: 1, name: 'test', completed: false },
    { id: 2, name: 'run', completed: true },
    { id: 3, name: 'run fast', completed: true },
];

const reducer = (state = todos, action) => {
    switch (action.type) {
        case 'SHOW_TODOS':
            return [
                ...state
            ]
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        default: return state
    }
}

export default reducer;