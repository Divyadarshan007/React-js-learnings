const initialState = 0;

const countReducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREAMENT': return state + 1;
        case 'DECREAMENT': return state - 1;
        case 'RESET': return 0;
        default: return state;
    }
}

export default countReducer;