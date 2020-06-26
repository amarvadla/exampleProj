import * as actionTypes from './actionTypes';
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

export const addNewUser = (user) => {
    return dispatch => {
        dispatch(addUser(user));
        axios.post('/allUsers.json', user).then((reponse) => {
            console.log(reponse);
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
                    name: response.data[index].name,
                    age: response.data[index].age,
                    about: response.data[index].about,
                    profileImage: response.data[index].profileImage,
                }
            })
            console.log(response);


            return disptach(initTheUsers(users));


        }).catch((e) => {
            console.log(e)
        })
    }
}
