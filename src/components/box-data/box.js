import React ,{useState,useEffect}from "react";
import { useSelector } from "react-redux";
import "./box.css";
import axios from "axios"
import { useParams } from "react-router-dom";

function Box() {
  let { id } = useParams();
  const [dataSensor, setDataSensor] = useState(null)

  const getData = () =>{
    axios.get("https://smarthome-bu.online/api/dataroom", {
        params: {
          room_id:id
        },
      }).then((result)=>{
        setDataSensor(result.data.data)
      })
  }

  useEffect(() => {
    getData()
  }, [id])
  return (
    <div className='box-data-api'>
      {dataSensor !== null
        ? dataSensor.map((item, key) => {
            return (
              <div className="home-box-data" key={key}>
                <div className="home-box-data-icon">
                  <img src={item.sensor.sensor_icon} alt="icon-temp" className="home-icon" />
                </div>
                <div className="home-box-data-text">
                  <span className="home-box-data-tile">{item.sensor.sensor_name}</span>
                  <span className="home-box-data-value">{parseInt(item.value)}{item.sensor.unit}</span>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default Box;
