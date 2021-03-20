const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    console.log('=== action ====', action);
    switch (action.type) {
        case 'INC_5':
            return { ...state, counter: state.counter + 5 };
        case 'DEC_5':
            return { ...state, counter: state.counter - 5 };
        case 'INC_10':
            return { ...state, counter: state.counter + 10 };
        case 'DEC_10':
            return { ...state, counter: state.counter - 10 };
    }
    return state;
}

export default reducer;