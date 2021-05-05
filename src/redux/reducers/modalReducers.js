import {
    MODAL_ADD_ROOM_SUCCESS,
    MODAL_ADD_ROOM_FALL,
    MODAL_ADD_DEVICE_SUCCESS,
    MODAL_ADD_DEVICE_FALL,
    MODAL_ADD_SENSOR_SUCCESS,
    MODAL_ADD_SENSOR_FALL,
    MODAL_ADD_USER_SUCCESS,
    MODAL_ADD_USER_FALL,
    MODAL_ICON_SUCCESS,
    MODAL_ICON_FALL,
    MODAL_FACE_ID_SUCCESS,
    MODAL_FACE_ID_FALL
  } from "../constants/modalConstants";
  
function addRoomReducer(state={},action) {
    switch(action.type){
        case MODAL_ADD_ROOM_SUCCESS:
            return{status:action.payload.status,message:action.payload.message}
        case MODAL_ADD_ROOM_FALL:
            return{error:action.payload}
        default:
            return state
    }     
}

function addDeviceReducer(state={},action) {
    switch(action.type){
        case MODAL_ADD_DEVICE_SUCCESS:
            return{status:action.payload.status,message:action.payload.message}
        case MODAL_ADD_DEVICE_FALL:
            return{error:action.payload}
        default:
            return state
    }     
}

function addSensorReducer(state={},action) {
    switch(action.type){
        case MODAL_ADD_SENSOR_SUCCESS:
            return{status:action.payload.status,message:action.payload.message}
        case MODAL_ADD_SENSOR_FALL:
            return{error:action.payload}
        default:
            return state
    }     
}

function addUserReducer(state={},action) {
    switch(action.type){
        case MODAL_ADD_USER_SUCCESS:
            return{status:action.payload.status,message:action.payload.message}
        case MODAL_ADD_USER_FALL:
            return{error:action.payload}
        default:
            return state
    }     
}

function iconReducer(state={},action) {
    switch(action.type){
        case MODAL_ICON_SUCCESS:
            return{icon:action.payload}
        case MODAL_ICON_FALL:
            return{error:action.payload}
        default:
            return state
    }     
}


function faceIdReducer(state={},action) {
    switch(action.type){
        case MODAL_FACE_ID_SUCCESS:
            return{message:action.payload}
        case MODAL_FACE_ID_FALL:
            return{error:action.payload}
        default:
            return state
    }     
}

export{addRoomReducer, addDeviceReducer,addSensorReducer, addUserReducer, iconReducer,faceIdReducer }