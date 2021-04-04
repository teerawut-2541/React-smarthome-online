import React from "react";
import "./home.css";
import Weather from "../../components/home/weather/weather";
import Covid from "../../components/home/covid/covid";
import Temperature from "../../components/home/data-sensor/temperature";
import Humidity from "../../components/home/data-sensor/humidity";
import Pm25 from "../../components/home/data-sensor/pm25";
import Pm10 from "../../components/home/data-sensor/pm10";
import ChartTemp from '../../components/home/chart/chartTemp'
import ChartHumidity from '../../components/home/chart/chartHumidity'
function Home() {
  return (
    <div className="home-content">
      <div className="home-content-grid1">
        <div className="home-grid-weather">
          <Weather />
        </div>
        <div className="home-grid-covid">
          <Covid />
        </div>
        <div className="box3">
        </div>
      </div>

      <div className="home-content-grid2">
        <div className="home-grid-data">
          <Temperature />
        </div>
        <div className="home-grid-data">
          <Humidity />
        </div>
        <div className="home-grid-data">
          <Pm25 />
        </div>
        <div className="home-grid-data">
          <Pm10 />
        </div>
      </div>
      <div className="home-content-grid3">
        <div className="home-grid-chart">
        <ChartTemp/>
        </div>
        <div className="home-grid-chart">
          <ChartHumidity/>
        </div>
      </div>
    </div>
  );
}

export default Home;
