const todos = [
    { id: 1, name: 'test', completed: false },
    { id: 2, name: 'run', completed: true },
    { id: 3, name: 'run fast', completed: true },
];

const moveToTop = (todo, id) => {
    return todo.sort(function (x, y) { return x.id === id ? -1 : y.id === id ? 1 : 0; });
}

const compare = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}

const reducer = (state = todos, action) => {
    switch (action.type) {
        case 'SHOW_TODOS':
            return [
                ...state
            ]
        case 'SORT_TODOS':
            const copy = [...state]
            return copy.sort(compare)
        case 'MOVE_TO_TOP':
            const dummyList = [...state]
            return moveToTop(dummyList, action.id)
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