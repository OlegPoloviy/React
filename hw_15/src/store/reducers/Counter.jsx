import {storeCount} from "../store.jsx";
import {CONSTANTS_ENUM} from "../constsants/Constants.jsx";

export function counterReducer(store = storeCount,action){

    console.log(store)
    const {count} = store

    switch(action.type){
        case CONSTANTS_ENUM.PLUS :
            return {...store,count : count + 1 }
        case CONSTANTS_ENUM.MINUS :
            return {...store,count : count - 1}
        case CONSTANTS_ENUM.SET_ZERO :
            return {...store,count : 0}
        default :
            return {...store}
    }
}