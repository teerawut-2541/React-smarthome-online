import React from "react";
import { useSelector } from "react-redux";
import "./box.css";

function Box() {
  const data = useSelector((state) => state.dataRoom);
  const { dataRoom } = data;
  return (
    <div >
      {dataRoom !== undefined
        ? dataRoom.map((item, key) => {
            return (
              <div className="home-box-data" key={key}>
                <div className="home-box-data-icon">
                  <img src={item.sensor.sensor_icon} alt="icon-temp" className="home-icon" />
                </div>
                <div className="home-box-data-text">
                  <span className="home-box-data-tile">{item.sensor.sensor_name}</span>
                  <span className="home-box-data-value">{item.value}</span>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default Box;
