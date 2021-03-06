const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter +1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'Add 5':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'Subtract 5':
            return {
                ...state,
                counter: state.counter - action.val
        }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(),value: state.counter})
        }
        case 'DELETE_RESULT':
            // const id = 2;
            // const newArray = [...state.results]
            // state.results.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
        }
    }
    return state;
}

export default reducer;