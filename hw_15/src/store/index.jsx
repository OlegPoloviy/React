import {legacy_createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk} from "redux-thunk";
import {counterReducer} from "./reducers"
import {composeWithDevTools} from '@redux-devtools/extension'
import {usersReducer} from "./reducers/Users.jsx";
import {postsReducer} from "./reducers/Posts.jsx";
import {commentsReducer} from "./reducers/Comments.jsx";


const allReducers = combineReducers({
    counter : counterReducer,
    getUsers : usersReducer,
    getPosts : postsReducer,
    getComments : commentsReducer
})

export const myStore = legacy_createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))
