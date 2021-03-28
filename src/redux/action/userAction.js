import Axios from "axios"
import {USER_LOGIN_SUCCESS, USER_LOGIN_FALL} from '../constants/userConstants'

const login =  (username,password) => async (dispatch) =>{
    try{
        const {data} = await Axios.post('http://localhost:4000/api/login',{username,password})
        dispatch({type:USER_LOGIN_SUCCESS, payload:data})
        console.log(data)
    }catch(error){
        dispatch({type:USER_LOGIN_FALL, payload:error.message})
    }
}
export {login}
