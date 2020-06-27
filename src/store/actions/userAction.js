import * as actionTypes from './actionTypes';
import * as apiConstants from '../../apiConstants';
import axios from '../../axios-config';

export const addUser = (user) => {
    return {
        type: actionTypes.ADD_USER,
        user: user
    }
}

export const initTheUsers = (users) => {
    return {
        type: actionTypes.INIT_USERS,
        users: users
    }
}

export const authUser = (isAuthenticated) => {
    return {
        type: actionTypes.AUTH_USER,
        isAuthenticated: isAuthenticated
    }
}

export const logOutUser = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return {
        type: actionTypes.AUTH_USER,
        isAuthenticated: false
    }
}

export const addNewUser = (user) => {
    return dispatch => {

        axios.post('/allUsers.json', user).then((response) => {

            var userAdd = {
                ...user,
                id: response.data.name
            }

            dispatch(addUser(userAdd));

        }).catch((e) => {
            console.log(e);
        })
    }
}

export const initUsers = () => {
    return disptach => {
        axios.get('https://react-burger-17b0e.firebaseio.com/allUsers.json').then((response) => {


            const keys = Object.keys(response.data);

            const users = keys.map((index) => {
                return {
                    id: index,
                    name: response.data[index].name,
                    age: response.data[index].age,
                    about: response.data[index].about,
                    profileImage: response.data[index].profileImage,
                }
            })

            return disptach(initTheUsers(users));


        }).catch((e) => {
            console.log(e)
        })
    }
}

export const authenticate = (email, password, isSignUp) => {
    return disptach => {

        let userObj = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let API = "";

        if (!isSignUp) {
            API = apiConstants.signin_api + apiConstants.api_key;
        } else {
            API = apiConstants.signup_api + apiConstants.api_key;
        }

        axios.post(API, userObj).then(
            (response) => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                return disptach(authUser(true));
            }).catch((e) => {
                console.log(e);
            })

    }
}

export const checkAuth = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            return dispatch(authUser(false));
        } else {
            const userId = localStorage.getItem('userId');
            return dispatch(authUser(true));
        }
    }
}
