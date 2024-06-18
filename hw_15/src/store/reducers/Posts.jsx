import {CONSTANTS_ENUM} from "../constsants/Constants.jsx";
import {storePosts} from "../store.jsx";

export const postsReducer = (store = storePosts,action) => {

    switch (action.type){
        case CONSTANTS_ENUM.POSTS :
            return {...store,posts : action.payload}
        default :
            return {...store}
    }
}