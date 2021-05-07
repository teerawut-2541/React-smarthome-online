import axios from "axios";
import { COVID_SUCCESS, COVID_FALL} from "../constants/covid";

const covidAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("https://smarthome-bu.online/api/covid");
    dispatch({ type: COVID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COVID_FALL, payload: error.message });
  }
};

export { covidAction };
