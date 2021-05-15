import React from "react";
import "./box.css";

function Box(props) {
  const data = useSelector((state) => state.dataRoom);
  const { dataRoom } = data;

  return (
    <div className='box-data-api'>
      <div className="home-box-data">
        <div className="home-box-data-icon">
          <img src={props.icon} alt="icon-temp" className="home-icon" />
        </div>
        <div className="home-box-data-text">
          <span className="home-box-data-tile">{props.title}</span>
          <span className="home-box-data-value">{props.value}</span>
        </div>
      </div>
    </div>
  );
}

export default Box;
