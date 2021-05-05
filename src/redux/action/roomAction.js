import axios from "axios";
import { ROOM_LIST_SUCCESS, ROOM_LIST_FALL, ROOM_DATA_REQUEST, ROOM_DEVICE_REQUEST, ROOM_DATA_SUCCESS, ROOM_DATA_FALL, ROOM_DEVICE_SUCCESS, ROOM_DEVICE_FALL, ROOM_SWITCH_SUCCESS, ROOM_SWITCH_FALL } from "../constants/roomConstants";

const listRoomAction = (home_id) => async (dispatch) => {
  // let home = home_id
  try {
    const { data } = await axios.get("http://localhost:4000/api/listroom", {
      params: {
        home_id:home_id
      },
    });
    dispatch({ type: ROOM_LIST_SUCCESS, payload: data.data});
    // console.log(data.data[0]);
  } catch (error) {
    dispatch({ type: ROOM_LIST_FALL, payload: error.message });
  }
};

const dataRoomAction = (room_id) => async (dispatch) => {
    dispatch({type:ROOM_DATA_REQUEST}) 
    try {
      const { data } = await axios.get("http://localhost:4000/api/dataroom", {
        params: {
          room_id:room_id
        },
      });
      dispatch({ type: ROOM_DATA_SUCCESS, payload: data.data });
      // console.log(data);
    } catch (error) {
      dispatch({ type: ROOM_DATA_FALL, payload: error.message });
    }
};

const deviceRoomAction = (room_id) => async (dispatch) => {
  dispatch({type:ROOM_DEVICE_REQUEST}) 
    try {
      const { data } = await axios.get("http://localhost:4000/api/deviceroom", {
        params: {
          room_id:room_id
        },
      });
      dispatch({ type: ROOM_DEVICE_SUCCESS, payload: data.data });
      // console.log('deviceRoomAction',data);
    } catch (error) {
      dispatch({ type: ROOM_DEVICE_FALL, payload: error.message });
    }
};

const switchRoomAction = (id,status) => async (dispatch) => {
  let setData = {
    device_id:id,
    status:status
  }
  try {
    const { data } = await axios.put("http://localhost:4000/api/switchroom",(setData));
    dispatch({ type: ROOM_SWITCH_SUCCESS, payload: data.data });
    // console.log(data);
  } catch (error) {
    dispatch({ type: ROOM_SWITCH_FALL, payload: error.message });
  }
};

export { listRoomAction ,dataRoomAction,deviceRoomAction,switchRoomAction};
