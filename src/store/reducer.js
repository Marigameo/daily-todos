const todos = [
    { id: 1, name: 'Mediate', completed: false },
    { id: 2, name: 'Take a barista class', completed: false },
    { id: 3, name: 'Improve product', completed: false },
    { id: 4, name: 'Zen', completed: false },
    { id: 5, name: 'Finish food', completed: false },
    { id: 6, name: 'Clean desk', completed: false },
    { id: 7, name: 'Dance', completed: false },
    { id: 8, name: 'Find dance partner', completed: false },
    { id: 9, name: 'Call doctor', completed: false },
    { id: 10, name: 'Learn more about 6sense', completed: true },
    { id: 11, name: 'Find the meaning of life', completed: true },
    { id: 12, name: 'Take a bartender class', completed: true },
    { id: 13, name: 'Gift icecream to a child', completed: true },
    { id: 14, name: 'Laugh as much possible', completed: true },
    { id: 15, name: 'Practise code', completed: true },
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