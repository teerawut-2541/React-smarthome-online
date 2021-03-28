import {USER_LOGIN_SUCCESS, USER_LOGIN_FALL} from '../constants/userConstants'

function userLoginReducer(state={},action) {
    switch(action.type){
        case USER_LOGIN_SUCCESS:
            return{userInfo:action.payload}
        case USER_LOGIN_FALL:
            return{error:action.payload}
        default:
            return state
    }  
}

export{userLoginReducer}
