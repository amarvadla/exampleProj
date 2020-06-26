import * as actionTypes from '../actions/actionTypes';

const intialState = {
    allUsers: [],
    likedUsers: []
}


const addUserFunction = (state, action) => {
    return {
        ...state,
        allUsers: [...state.allUsers, action.user]
    }
}

const initTheUsers = (state ,action) => {
    return {
        ...state,
        allUsers: action.users
    }
}

const reducer = (state = intialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_USER: return addUserFunction(state, action);
        case actionTypes.INIT_USERS: return initTheUsers(state,action);
        default: return state;
    }

}

export default reducer;