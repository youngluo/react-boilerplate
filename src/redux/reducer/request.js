export const response = (state = [], action) => {
    switch (action.type) {
        case 'RESPONSE':
            return action.data;
        default:
            return state;
    }
}