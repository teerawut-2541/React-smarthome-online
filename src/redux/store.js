import { createStore , combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {loginReducer,registerReducer} from './reducers/userReducers'
import {listRoomReducer,dataRoomReducer,deviceRoomReducer,switchRoomReducer} from './reducers/roomReducers'
import {checkTokenReducer} from './reducers/checkTokenReducers'
const initialState = {};

const reducer = combineReducers({
    userLogin:loginReducer,
    userRegister:registerReducer,
    checkToken:checkTokenReducer,
    listRoom:listRoomReducer,
    dataRoom:dataRoomReducer,
    deviceRoom:deviceRoomReducer,
    switchRoom:switchRoomReducer
})


const middlewares = [thunk]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState , composeEnhancer(applyMiddleware(...middlewares)));

export default store;