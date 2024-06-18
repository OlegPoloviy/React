import {legacy_createStore} from 'redux'
import {counterReducer} from "./reducers"
import {composeWithDevTools} from '@redux-devtools/extension'

export const myStore = legacy_createStore(counterReducer,composeWithDevTools())