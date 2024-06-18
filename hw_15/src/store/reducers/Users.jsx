import { storeUsers} from "../store.jsx";
import {clearUsers} from "../actions/index.jsx";
import {CONSTANTS_ENUM} from "../constsants/Constants.jsx";

export function usersReducer(store = storeUsers,action){
    switch (action.type){
        case CONSTANTS_ENUM.USERS :
            return {...store,users : action.payload}
        case CONSTANTS_ENUM.DELETE_USERS :
            return {...storeUsers}
        default :
            return {...store}
    }
}
