import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {userLoginReducer} from './reducers/userReducers'
const initialState={}
const reducer = combineReducers({
    userLogin:userLoginReducer,
    // userRegister:userRegisterReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState , composeEnhancer(applyMiddleware(thunk)));
export default store;
