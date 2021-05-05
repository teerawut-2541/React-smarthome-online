import { COVID_SUCCESS, COVID_FALL} from "../constants/covid";
function covidReducer(state={},action) {
    switch(action.type){
        case COVID_SUCCESS:
            return{covid:action.payload.data,message:action.payload.message}
        case COVID_FALL:
            return{error:action.payload}
        default:
            return state
    }     
}


export{covidReducer}