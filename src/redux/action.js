import * as  types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = () => ({
    type: types.DELETE_USERS

});
const userAdded = () => ({
    type: types.ADD_USERS

});
const userUpdated = () => ({
    type: types.UPDATE_USER

});
const getUser = (user) => ({
    type: types.GET_SINGLEUSER,
    payload: user,

});
const userloginsuccess = (user) => ({

    type: types.LOGIN_SUCCESS,
    payload: user,

})
export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((resp) => {
            console.log("resp", resp)
            dispatch(getUsers(resp.data));
        })
            .catch((error) => console.log(error));
    }
}
export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch(userDeleted());
            dispatch(loadUsers());
        })
            .catch((error) => console.log(error));
    }
}
export const useradd = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, user).then((resp) => {
            console.log("resp", resp)
            dispatch(userAdded());
            dispatch(loadUsers());
        })
            .catch((error) => console.log(error));
    }
}
export const getSingleUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch(getUser(resp.data));
            //dispatch(loadUsers());
        })
            .catch((error) => console.log(error));
    }
}
export const updateUser = (user, id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`, user).then((resp) => {
            console.log("resp", resp)
            dispatch(userUpdated(resp.data));
            //dispatch(loadUsers());
        })
            .catch((error) => console.log(error));
    }
}

export const userlogin = (email, password) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, {
            email,
            password,
        }).then((resp) => {
            console.log("resp", resp)
            dispatch(userloginsuccess(resp.data));
            dispatch(loadUsers());
        })
            .catch((error) => console.log(error));
    }
}