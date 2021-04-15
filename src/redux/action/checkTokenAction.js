import axios from "axios";
import { CHECK_TOKEN_REQUEST, CHECK_TOKEN_SUCCESS, CHECK_TOKEN_FALL} from "../constants/checkTokenConstants";

const checkTokenAction = () => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("token"));
  dispatch({type: CHECK_TOKEN_REQUEST})
  try {
    const { data } = await axios.get("http://localhost:4000/api/userInfo", {
      headers: { token: token },
    });
    dispatch({ type: CHECK_TOKEN_SUCCESS, payload: data });
    // console.log('check',data.data);
  } catch (error) {
    dispatch({ type: CHECK_TOKEN_FALL, payload: error.message });
  }
};

export { checkTokenAction };
