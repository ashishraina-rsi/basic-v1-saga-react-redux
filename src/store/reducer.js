const initState = {
    counter : 0
}

const reducer = (state = initState, action) => {
    const newState = {...state};

    switch (action.type) {
        case 'INCREMENT_ASYNC':
            newState.counter += action.value;
            break;
        case 'DECREMENT':
            newState.counter -= action.value;
            break;
        default:
            break;
    }
    return newState;
};

export default reducer;