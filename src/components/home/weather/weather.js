import React from "react";
import './weather.css'
import { useSelector } from "react-redux";

function Weather() {
  const checkToken = useSelector((state) => state.checkToken);
  const { userInfo } = checkToken;

  return (
    <div className="home-box-weather">
      <div className="weather">
        <span className="weather-hello">
          Hello <span className="weather-username">{userInfo&&userInfo.username}</span>
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
