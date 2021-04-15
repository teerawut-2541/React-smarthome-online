import { ROOM_LIST_SUCCESS, ROOM_LIST_FALL, ROOM_DATA_REQUEST, ROOM_DEVICE_REQUEST, ROOM_DATA_SUCCESS, ROOM_DATA_FALL, ROOM_DEVICE_SUCCESS, ROOM_DEVICE_FALL, ROOM_SWITCH_SUCCESS, ROOM_SWITCH_FALL } from "../constants/roomConstants";

function listRoomReducer(state={},action) {
    switch(action.type){
        case ROOM_LIST_SUCCESS:
            return{listRoom:action.payload}
        case ROOM_LIST_FALL:
            return{error:action.payload}
        default:
            return state
    }  
}

function dataRoomReducer(state={},action) {
    switch(action.type){
        case ROOM_DATA_REQUEST:
            return {loading:true}
        case ROOM_DATA_SUCCESS:
            return{loading:false,dataRoom:action.payload}
        case ROOM_DATA_FALL:
            return{loading:false,error:action.payload}
        default:
            return state
    }  
}

function deviceRoomReducer(state={},action) {
    switch(action.type){
        case ROOM_DEVICE_REQUEST:
            return {loading:true}
        case ROOM_DEVICE_SUCCESS:
            return{deviceRoom:action.payload}
        case ROOM_DEVICE_FALL:
            return{error:action.payload}
        default:
            return state
    }  
}

function switchRoomReducer(state={},action) {
    switch(action.type){
        case ROOM_SWITCH_SUCCESS:
            return{status:action.payload}
        case ROOM_SWITCH_FALL:
            return{error:action.payload}
        default:
            return state
    }  
}
 
export{listRoomReducer,dataRoomReducer,deviceRoomReducer,switchRoomReducer}