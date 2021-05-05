import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer, registerReducer } from "./reducers/userReducers";
import {
  listRoomReducer,
  dataRoomReducer,
  deviceRoomReducer,
  switchRoomReducer,
} from "./reducers/roomReducers";
import { checkTokenReducer } from "./reducers/checkTokenReducers";
import { covidReducer } from "./reducers/covid";
import {
  chartNameSensorReducer,
  chartDataSensorReducer,
  chartDataOneSensorReducer,
  chartDataSensor2Reducer,
  chartDataOneSensor2Reducer,
} from "./reducers/chatReducers";
import {
  addRoomReducer,
  addDeviceReducer,
  addSensorReducer,
  addUserReducer,
  iconReducer,
  faceIdReducer
} from "./reducers/modalReducers";
const initialState = {};

const reducer = combineReducers({
  userLogin: loginReducer,
  userRegister: registerReducer,
  checkToken: checkTokenReducer,
  listRoom: listRoomReducer,
  dataRoom: dataRoomReducer,
  deviceRoom: deviceRoomReducer,
  switchRoom: switchRoomReducer,
  covid: covidReducer,
  chartNameSensor: chartNameSensorReducer,
  chartDataSensor: chartDataSensorReducer,
  chartDataOneSensor: chartDataOneSensorReducer,
  chartDataSensor2: chartDataSensor2Reducer,
  chartDataOneSensor2: chartDataOneSensor2Reducer,
  addRoom: addRoomReducer,
  addDevice: addDeviceReducer,
  addSensor: addSensorReducer,
  addUser: addUserReducer,
  icon:iconReducer,
  faceId:faceIdReducer
});

const middlewares = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(...middlewares))
);

export default store;
