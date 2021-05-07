import axios from "axios";
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

const addRoomAction = (dataRoom) => async (dispatch) => {
  try {
    const { data } = await axios.post("https://smarthome-bu.online/api/addRoom",(dataRoom));
    dispatch({ type: MODAL_ADD_ROOM_SUCCESS, payload: data });
    console.log('addRoom',data)
  } catch (error) {
    dispatch({ type: MODAL_ADD_ROOM_FALL, payload: error.message });
  }
};

const addDeviceAction = (dataDevice) => async (dispatch) => {
  try {
    const { data } = await axios.post("https://smarthome-bu.online/api/addDevice",(dataDevice));
    dispatch({ type: MODAL_ADD_DEVICE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MODAL_ADD_DEVICE_FALL, payload: error.message });
  }
};

const addSensorAction = (dataSensor) => async (dispatch) => {
  try {
    const { data } = await axios.post("https://smarthome-bu.online/api/addSensor",(dataSensor));
    dispatch({ type: MODAL_ADD_SENSOR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MODAL_ADD_SENSOR_FALL, payload: error.message });
  }
};

const addUserAction = (dataUser,info) => async (dispatch) => {
  const sendUser = {
    name:dataUser.text,
    email:dataUser.email,
    password:dataUser.password,
    homeId:info
  }
  try {
    const { data } = await axios.post("https://smarthome-bu.online/api/addUser",sendUser);
    dispatch({ type: MODAL_ADD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MODAL_ADD_USER_FALL, payload: error.message });
  }
};

const iconAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("https://smarthome-bu.online/api/icon");
    dispatch({ type: MODAL_ICON_SUCCESS, payload: data.icon});
  } catch (error) {
    dispatch({ type: MODAL_FACE_ID_FALL, payload: error.message });
  }
};

const faceIdAction = (faceId,id) => async (dispatch) => {
  var formData = new FormData(); 
  formData.append('file', faceId);
  formData.append('id', 13);
  console.log(formData)
  try {
    const { data } = await axios.post("https://d365cb47a2e0.ngrok.io/uploader",formData);
    dispatch({ type: MODAL_FACE_ID_SUCCESS, payload: data.icon});
    console.log(data)
  } catch (error) {
    dispatch({ type: MODAL_ICON_FALL, payload: error.message });
  }
};

export { addRoomAction ,addDeviceAction, addSensorAction, addUserAction,iconAction, faceIdAction };
