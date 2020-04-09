const dogReducer = (state = {dogs: [], loading: false}, action) => {
    switch(action.type){
        case 'FETCHING_DOGS':
            return {...state, loading: true}
        case 'GOT_DOGS':
            return {...state, dogs: action.payload, loading: false}
        case 'ADD_DOG':
            return {...state, dogs: [action.payload, ...state.dogs]}
        default:
            return state
    }
}


export default dogReducer