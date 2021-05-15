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
  CHART_POWER_FALL
} from "../constants/chartConstants";
function chartNameSensorReducer(state = {}, action) {
  switch (action.type) {
    case CHART_FIND_NAME_SENSOR_SUCCESS:
      return { name_sensor: action.payload.data };
    case CHART_FIND_NAME_SENSOR_FALL:
      return { error: action.payload };
    default:
      return state;
  }
}

function chartDataSensorReducer(state = {}, action) {
  switch (action.type) {
    case CHART_DATA_SENSOR_SUCCESS:
      return { data_sensor: action.payload.data };
    case CHART_DATA_SENSOR_FALL:
      return { error: action.payload };
    default:
      return state;
  }
}

function chartDataOneSensorReducer(state = {}, action) {
  switch (action.type) {
    case CHART_DATA_ONE_SENSOR_SUCCESS:
      return { data_one_sensor: action.payload.data };
    case CHART_DATA_ONE_SENSOR_FALL:
      return { error: action.payload };
    default:
      return state;
  }
}

function chartDataSensor2Reducer(state = {}, action) {
  switch (action.type) {
    case CHART_DATA_SENSOR_2_SUCCESS:
      return { data_sensor: action.payload.data };
    case CHART_DATA_SENSOR_2_FALL:
      return { error: action.payload };
    default:
      return state;
  }
}

function chartDataOneSensor2Reducer(state = {}, action) {
  switch (action.type) {
    case CHART_DATA_ONE_SENSOR_2_SUCCESS:
      return { data_one_sensor: action.payload.data };
    case CHART_DATA_ONE_SENSOR_2_FALL:
      return { error: action.payload };
    default:
      return state;
  }
}

function chartPowerReducer(state = {}, action) {
  switch (action.type) {
    case CHART_POWER_SUCCESS:
      return { value_power: action.payload.value, name_power: action.payload.sensor.sensor_name};
    case CHART_POWER_FALL:
      return { error: action.payload };
    default:
      return state;
  }
}

export {
  chartNameSensorReducer,
  chartDataSensorReducer,
  chartDataOneSensorReducer,
  chartDataSensor2Reducer,
  chartDataOneSensor2Reducer,
  chartPowerReducer,
};
