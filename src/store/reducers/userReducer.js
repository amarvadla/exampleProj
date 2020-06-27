import * as actionTypes from '../actions/actionTypes';

const intialState = {
    allUsers: [],
    likedUsers: [],
    authentication: false
}


const addUserFunction = (state, action) => {
    return {
        ...state,
        allUsers: [...state.allUsers, action.user]
    }
}

const initTheUsers = (state, action) => {
    return {
        ...state,
        allUsers: action.users
    }
}

const authUser = (state, action) => {
    return {
        ...state,
        authentication: action.isAuthenticated
    }
}

const reducer = (state = intialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_USER: return addUserFunction(state, action);
        case actionTypes.INIT_USERS: return initTheUsers(state, action);
        case actionTypes.AUTH_USER: return authUser(state, action)
        default: return state;
    }

}

export default reducer;