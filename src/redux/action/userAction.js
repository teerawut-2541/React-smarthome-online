import axios from "axios";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FALL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FALL,
  USER_LOGIN_FACEID_SUCCESS,
  USER_LOGIN_FACEID_FALL,
} from "../constants/userConstants";

const loginAction = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post("https://smarthome-bu.online/api/login", {
      email,
      password,
    });
    console.log(data.status);
    if(data.status){
      localStorage.setItem("token", JSON.stringify(data.token));
    }
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FALL, payload: error.message });
  }
};

const loginFaceIdAction = (file) => async (dispatch) => {
    var formData = new FormData(); 
    formData.append('file', file);
    console.log(formData)
    try {
      const { data } = await axios.post("https://8a3c8ca40e86.ngrok.io/facerecog",formData);
      console.log(data);
      dispatch({ type: USER_LOGIN_FACEID_SUCCESS, payload: data });
      localStorage.setItem("token", JSON.stringify(data.token.token));
    } catch (error) {
      dispatch({ type: USER_LOGIN_FACEID_FALL, payload: error.message });
    }
  };

const registerAction = (username, email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post("https://smarthome-bu.online/api/register", {
      username,
      email,
      password,
    });
    console.log(data.status);
    console.log(data);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FALL, payload: error.message });
  }
};

export { loginAction, registerAction, loginFaceIdAction };
