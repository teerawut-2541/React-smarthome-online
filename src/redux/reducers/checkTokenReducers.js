import { CHECK_TOKEN_REQUEST,CHECK_TOKEN_SUCCESS, CHECK_TOKEN_FALL} from "../constants/checkTokenConstants";

function checkTokenReducer(state=[],action) {
    switch(action.type){
        case CHECK_TOKEN_REQUEST:
            return {loading:true}
        case CHECK_TOKEN_SUCCESS:
            return{loading:false,userInfo:action.payload.data,status:action.payload.status}
        case CHECK_TOKEN_FALL:
            return{loading:false,error:action.payload}
        default:
            return state
    }  
}
export{checkTokenReducer}