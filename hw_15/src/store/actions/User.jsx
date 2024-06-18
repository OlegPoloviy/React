import {CONSTANTS_ENUM} from "../constsants/Constants.jsx";
import {getUsers} from "../../services/user.api.jsx";

export const Users = (usersFromApi) => ({type : CONSTANTS_ENUM.USERS, payload : usersFromApi})

export const apiUsers = () => (dispatch) => {
    getUsers()
        .then(res => res.json())
        .then(users => {
            console.log(users)
            dispatch(Users(users))
        })
}

export const clearUsers = () => ({type : CONSTANTS_ENUM.DELETE_USERS})