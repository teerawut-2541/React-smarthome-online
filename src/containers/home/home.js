import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  chartNameSensorAction,
  chartDataSensorAction,
  chartDataSensorOneAction,
  chartDataSensor2Action,
  chartDataSensorOne2Action,
  chartPower,
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
import ChartEnergy from "../../components/chart/chartEnergy";
function Home() {
  const checkToken = useSelector((state) => state.checkToken);
  const { userInfo } = checkToken;

  const chartNameSensor = useSelector((state) => state.chartNameSensor);
  const { name_sensor } = chartNameSensor;

  const [selectName, setSelectName] = useState(null);
  const [selectName2, setSelectName2] = useState(null);

  const [selectDayChart, setSelectDayChart] = useState(null);
  const [selectDayChart2, setSelectDayChart2] = useState(null);

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
    if (selectName != null || selectDayChart !== null) {
      dispatch(chartDataSensorAction(selectName, selectDayChart));
    }
  }, [selectName, selectDayChart]);

  //getDataChart2
  useEffect(() => {
    if ((selectName2 != null) | (selectDayChart2 !== null)) {
      dispatch(chartDataSensor2Action(selectName2, selectDayChart2));
    }
  }, [selectName2, selectDayChart2]);

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

  const types = [
    { value: "0", lable: "1วันย้อนหลัง" },
    { value: "2", lable: "3วันย้อนหลัง" },
    { value: "6", lable: "7วันย้อนหลัง" },
  ];

  // chartPower
  useEffect(() => {
    if (userInfo !== undefined) {
      dispatch(chartPower(userInfo.home_id));
    }
  }, [userInfo]);

  const chartEn = useSelector((state) => state.chartPower);
  const { value_power, name_power } = chartEn;

  return (
    <div className="home-content">
      <div className="home-content-grid1">
        <div className="home-grid-weather">
          <Weather />
        </div>
        <div className="home-grid-covid">
          <Covid />
        </div>
          {name_power ? (
            <div className="home-grid-chart-energy">
              <span>{name_power}</span>
              <ChartEnergy value={value_power} />
              <span className="chart-energy-value">
                {" "}
                {value_power ? value_power.toFixed(2) : 0} Watt
              </span>
            </div>
          ) : (
            <div className="home-grid-chart-energy">
            <span className="home-chart-not-data">ไม่พบข้อมูล</span>
            </div>
          )}
      </div>
      <div className="home-content-grid3">
        <div className="home-grid-chart">
          <div className="home-chart-box-select">
            <select
              onChange={(e) => setSelectDayChart(e.target.value)}
              className="home-chart-select"
            >
              <option value="0">เลือกวัน</option>
              {types.map((item, key) => {
                return (
                  <option key={key} value={item.value}>
                    {item.lable}
                  </option>
                );
              })}
            </select>
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
            <ChartArea/>
          ) : (
            <span className="home-chart-not-data">
              ยังไม่พบข้อมูล กรุณาเลือกเซ็นเซอร์
            </span>
          )}
        </div>
        <div className="home-grid-chart">
          <div className="home-chart-box-select">
            <select
              onChange={(e) => setSelectDayChart2(e.target.value)}
              className="home-chart-select"
            >
              <option value="0">เลือกวัน</option>
              {types.map((item, key) => {
                return (
                  <option key={key} value={item.value}>
                    {item.lable}
                  </option>
                );
              })}
            </select>
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
