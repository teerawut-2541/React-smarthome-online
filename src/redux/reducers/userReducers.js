import { USER_LOGIN_SUCCESS, USER_LOGIN_FALL, USER_REGISTER_SUCCESS, USER_REGISTER_FALL} from "../constants/userConstants";

function loginReducer(state={},action) {
    switch(action.type){
        case USER_LOGIN_SUCCESS:
            return{status:action.payload.status,message:action.payload.message}
        case USER_LOGIN_FALL:
            return{error:action.payload}
        default:
            return state
    }     
}

function registerReducer(state={},action) {
    switch(action.type){
        case USER_REGISTER_SUCCESS:
            return{status:action.payload.status,message:action.payload.message}
        case USER_REGISTER_FALL:
            return{error:action.payload}
        default:
            return state
    }  
}
export{loginReducer,registerReducer}