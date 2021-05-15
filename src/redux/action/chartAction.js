import axios from "axios";
import {
  CHART_FIND_NAME_SENSOR_SUCCESS,
  CHART_FIND_NAME_SENSOR_FALL,
  CHART_DATA_SENSOR_SUCCESS,
  CHART_DATA_SENSOR_FALL,
  CHART_DATA_ONE_SENSOR_SUCCESS,
  CHART_DATA_ONE_SENSOR_FALL,
  CHART_DATA_SENSOR_2_SUCCESS,
  CHART_DATA_SENSOR_2_FALL,
  CHART_DATA_ONE_SENSOR_2_SUCCESS,
  CHART_DATA_ONE_SENSOR_2_FALL,
  CHART_POWER_SUCCESS,
  CHART_POWER_FALL,
} from "../constants/chartConstants";

const chartNameSensorAction = (home_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://smarthome-bu.online/api/chartNameSensor",
      {
        params: {
          home_id: home_id,
        },
      }
    );
    // console.log(data.data)
    dispatch({ type: CHART_FIND_NAME_SENSOR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CHART_FIND_NAME_SENSOR_FALL, payload: error.message });
  }
};

const chartDataSensorAction =
  (selectName, selectDayChart) => async (dispatch) => {
    // console.log('selectName',selectName)
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/chartDataSensor",
        {
          params: {
            sensor_id: selectName !== null ? selectName : 1,
            day: selectDayChart !== null ? selectDayChart : 0,
          },
          headers: { token: token },
        }
      );
      // console.log('chartDataSensorAction',data);
      dispatch({ type: CHART_DATA_SENSOR_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CHART_DATA_SENSOR_FALL, payload: error.message });
    }
  };

const chartDataSensorOneAction = (selectName) => async (dispatch) => {
  console.log("selectNameOne", selectName);
  let token = JSON.parse(localStorage.getItem("token"));
  try {
    const { data } = await axios.get(
      "https://smarthome-bu.online/api/chartDataOneSensor",
      {
        params: {
          sensor_id: selectName,
        },
        headers: { token: token },
      }
    );
    console.log("dataone", data.data);
    dispatch({ type: CHART_DATA_ONE_SENSOR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CHART_DATA_ONE_SENSOR_FALL, payload: error.message });
  }
};

const chartDataSensor2Action =
  (selectName, selectDayChart) => async (dispatch) => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/chartDataSensor2",
        {
          params: {
            sensor_id: selectName !== null ? selectName : 1,
            day: selectDayChart !== null ? selectDayChart : 0,
          },
        }
      );
      // console.log('chartDataSensor2Action',data.data)
      dispatch({ type: CHART_DATA_SENSOR_2_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CHART_DATA_SENSOR_2_FALL, payload: error.message });
    }
  };

const chartDataSensorOne2Action = (selectName) => async (dispatch) => {
  console.log("selectNameOne", selectName);
  try {
    const { data } = await axios.get(
      "https://smarthome-bu.online/api/chartDataOneSensor2",
      {
        params: {
          sensor_id: selectName,
        },
      }
    );
    console.log("dataone", data.data);
    dispatch({ type: CHART_DATA_ONE_SENSOR_2_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CHART_DATA_ONE_SENSOR_2_FALL, payload: error.message });
  }
};

const chartPower = (homeid) => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:4000/api/chartPower",{
      params: {
        home_id: homeid,
      },
    });
    // console.log("chartPower", data);
    dispatch({ type: CHART_POWER_SUCCESS, payload: data.data});
  } catch (error) {
    // dispatch({ type: CHART_POWER_FALL, payload: error.message });
  }
};

export {
  chartNameSensorAction,
  chartDataSensorAction,
  chartDataSensorOneAction,
  chartDataSensor2Action,
  chartDataSensorOne2Action,
  chartPower,
};
