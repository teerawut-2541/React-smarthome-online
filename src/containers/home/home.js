import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  chartNameSensorAction,
  chartDataSensorAction,
  chartDataSensorOneAction,
  chartDataSensor2Action,
  chartDataSensorOne2Action
} from "../../redux/action/chartAction";
import "./home.css";
import Weather from "../../components/home/weather/weather";
import Covid from "../../components/home/covid/covid";
import Temperature from "../../components/home/data-sensor/temperature";
import Humidity from "../../components/home/data-sensor/humidity";
import Pm25 from "../../components/home/data-sensor/pm25";
import Pm10 from "../../components/home/data-sensor/pm10";
import ChartArea from "../../components/chart/chartArea";
import ChartArea2 from "../../components/chart/chartArea2";

function Home() {
  const checkToken = useSelector((state) => state.checkToken);
  const { userInfo } = checkToken;

  const chartNameSensor = useSelector((state) => state.chartNameSensor);
  const { name_sensor } = chartNameSensor;

  const [selectName, setSelectName] = useState(null);
  const [selectName2, setSelectName2] = useState(null);

  const dispatch = useDispatch();

  //getSensorName And getLocalStorage
  useEffect(() => {
    if (userInfo !== undefined) {
      dispatch(chartNameSensorAction(userInfo.home_id));
    }
    const selectLocal = localStorage.getItem("selectLocal");
    setSelectName(selectLocal);
    const selectLocal2 = localStorage.getItem("selectLocal2");
    setSelectName2(selectLocal2);
  }, [userInfo]);

  //getDataChart1
  useEffect(() => {
    if (selectName != null) {
      dispatch(chartDataSensorAction(selectName));
    }
  }, [selectName]);

  //getDataChart2
  useEffect(() => {
    if (selectName2 != null) {
      dispatch(chartDataSensor2Action(selectName2));
    }
  }, [selectName2]);

  //updateDataChart1
  useEffect(() => {
    if (selectName != null) {
      const time = setInterval(() => {
        dispatch(chartDataSensorOneAction(selectName));
      }, 50000);
      return () => {
        clearInterval(time);
      };
    }
  });

  //updateDataChart2
  useEffect(() => {
    if (selectName2 != null) {
      const time = setInterval(() => {
        dispatch(chartDataSensorOne2Action(selectName2));
      }, 5000);
      return () => {
        clearInterval(time);
      };
    }
  });

  //onChangeSelect1
  const optionSelect1 = (e) => {
    setSelectName(e.target.value);
    localStorage.setItem("selectLocal", e.target.value);
  };

  //onChangeSelect2
  const optionSelect2 = (e) => {
    setSelectName2(e.target.value);
    localStorage.setItem("selectLocal2", e.target.value);
  };

  return (
    <div className="home-content">
      <div className="home-content-grid1">
        <div className="home-grid-weather">
          <Weather />
        </div>
        <div className="home-grid-covid">
          <Covid />
        </div>
        <div className="box3"></div>
      </div>

      <div className="home-content-grid2">
        <div className="home-grid-data">{/* <Temperature /> */}</div>
        <div className="home-grid-data">{/* <Humidity /> */}</div>
        <div className="home-grid-data">{/* <Pm25 /> */}</div>
        <div className="home-grid-data">{/* <Pm10 /> */}</div>
      </div>
      <div className="home-content-grid3">
        <div className="home-grid-chart">
          <div className="home-chart-box-select">
            <select onChange={optionSelect1} className="home-chart-select">
              <option value="">เลือกเซ็นเซอร์</option>
              {name_sensor &&
                name_sensor.map((item, key) => {
                  return (
                    <option key={key} value={item.sensor_id}>
                      {item.sensor_name}
                    </option>
                  );
                })}
            </select>
          </div>
          {selectName ? (
            <ChartArea />
          ) : (
            <span className="home-chart-not-data">
              ยังไม่พบข้อมูล กรุณาเลือกเซ็นเซอร์
            </span>
          )}
        </div>
        <div className="home-grid-chart">
          <div className="home-chart-box-select">
            <select onChange={optionSelect2} className="home-chart-select">
              <option value="">เลือกเซ็นเซอร์</option>
              {name_sensor &&
                name_sensor.map((item, key) => {
                  return (
                    <option key={key} value={item.sensor_id}>
                      {item.sensor_name}
                    </option>
                  );
                })}
            </select>
          </div>
          {selectName2 ? (
            <ChartArea2 />
          ) : (
            <span className="home-chart-not-data">
              ยังไม่พบข้อมูล กรุณาเลือกเซ็นเซอร์
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
