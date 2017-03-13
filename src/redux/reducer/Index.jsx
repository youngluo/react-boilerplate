const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (action.id !== state.id) {
                return state;
            }
            return Object.assign({}, state, { completed: !state.completed });
        default:
            return state;
    }
}

export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(item => todo(item, action));
        default:
            return state;
    }
}

export const visibilityFilter = (state = 'ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY':
            return action.filterType;
        default:
            return state;
    }
}