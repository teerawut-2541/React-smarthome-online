import React from "react";
import './weather.css'
function Weather() {
  return (
    <div className="home-box-weather">
      <div className="weather">
        <span className="weather-hello">
          Hello <span className="weather-username">Songphop</span>
        </span>
        <span>welcome to smart home</span>
        <span>27&deg;C</span>
        <span>few clouds</span>
        <span className="weather-outdoor">outdoor template</span>
      </div>
    </div>
  );
}

export default Weather;
