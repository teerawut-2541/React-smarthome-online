import React from "react";
import "./home.css";
import Leftmenu from "../../components/leftmenu/leftmenu";
import Weather from '../../components/home/weather/weather'
import Covid from '../../components/home/covid/covid'
import Temperature from '../../components/home/data-sensor/temperature'
import Humidity from '../../components/home/data-sensor/humidity'
import Pm25 from "../../components/home/data-sensor/pm25";
import Pm10 from '../../components/home/data-sensor/pm10'
function Home() {
  return (
    <div className="grid">
      <div className="grid-left-menu">
        <Leftmenu />
      </div>
      <div className="grid-main">
        <div className="home-content">
          <div className="home-grid-weather">
              <Weather/>
          </div>
          <div className="home-grid-covid">
              <Covid/>
          </div>
          <div className="box3">
          </div>
          <div className="home-grid-data">
          <Temperature/>
          </div>
          <div className="home-content-data">
          <div className="home-grid-data">
              <Humidity/>
          </div>
          <div className="home-grid-data">
              <Pm25/>
          </div>
          </div>
          <div className="home-grid-data">
              <Pm10/>
          </div>
          <div className="box6"></div>

        </div>

        {/* 

          <div className="home-box-weather"></div>
          <div className="home-box-sensor">
            <div className="sensor">
                <div className="sensor-box-icon">

                </div>
                <div className="sensor-box-text">
                    <span>Temperature</span>
                    <span>30</span>
                </div>
            </div>
            <div className="sensor"></div>
            <div className="sensor"></div>
            <div className="sensor"></div>
            <div className="sensor"></div>

          </div>
          <div className="home-box-weather"></div>
          <div className="home-box-weather"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
