import {storeComments} from "../store.jsx";
import {CONSTANTS_ENUM} from "../constsants/Constants.jsx";

export const commentsReducer = (store = storeComments,action) => {
    switch(action.type){
        case CONSTANTS_ENUM.COMMENTS :
            return {...store,comments : action.payload}
        default :
            return {...store}
    }
}