import axios from "axios"
import { USER_LOGIN_SUCCESS, USER_LOGIN_FALL, USER_REGISTER_SUCCESS, USER_REGISTER_FALL} from "../constants/userConstants";


const loginAction = (email,password) => async (dispatch) =>{
    try{
        const {data} = await axios.post('http://localhost:4000/api/login',{email,password})
        console.log(data)
        dispatch({type:USER_LOGIN_SUCCESS, payload:data})
        localStorage.setItem("token", JSON.stringify(data.token));
    }catch(error){
        dispatch({type:USER_LOGIN_FALL, payload:error.message})
    }
}

const registerAction = (username,email,password) => async (dispatch) =>{
    try{
        const {data} = await axios.post('http://localhost:4000/api/register',{username,email,password})
        console.log(data.status)
        console.log(data)
        dispatch({type:USER_REGISTER_SUCCESS, payload:data})
    }catch(error){
        dispatch({type:USER_REGISTER_FALL, payload:error.message})
    }
}

export {loginAction,registerAction}