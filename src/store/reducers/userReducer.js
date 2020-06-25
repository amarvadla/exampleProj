import * as actionTypes from '../actions/actionTypes';

const intialState = {
    profile: [
        { name: 'amar', age: 24, about: "hello there this is amar i like to play games in ps4", profileImage: "https://images.unsplash.com/photo-1576669801343-117bb4054118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80" },
        { name: 'akbar', age: 24, about: "I like to ski and enjoy in snow as it is winter these days", profileImage: "https://images.unsplash.com/photo-1582719471327-5bd41fcf7f7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=592&q=80" },
        { name: 'anthony', age: 25, about: "Hi i like to go to church onsundays regulary", profileImage: "https://images.unsplash.com/photo-1578496479939-722d9dd1cc5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
    ]
}


const addUserFunction = (state, action) => {
    return {
        ...state,
        profile: [...state.profile, action.user]
    }
}


const reducer = (state = intialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_USER: return addUserFunction(state, action)
        default: return state;
    }

}

export default reducer;