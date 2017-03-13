let todoId = 0;

export const addTodo = (text) => {
    todoId += 1;
    return {
        type: 'ADD_TODO',
        id: todoId,
        text
    }
}

export const setVisibility = (filterType) => {
    return {
        type: 'SET_VISIBILITY',
        filterType
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

