import React from "react";
import "./box.css";

function Box({ icon, title, value }) {
  return (
    <div className="home-box-data">
      <div className="home-box-data-icon">
          <img src={icon} alt="icon-temp" className="home-icon"/>
      </div>
        <div className="home-box-data-text">
            <span className="home-box-data-tile">{title}</span>
            <span className="home-box-data-value">{value}</span>
        </div>
    </div>
  );
}

export default Box;
