import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./box.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import ChartRoom from "../chart/charRoom";
import { Map } from "react-loadable";
function BoxChart() {
  let { id } = useParams();
  const [dataSensor, setDataSensor] = useState(null);

  const checkToken = useSelector((state) => state.checkToken);
  const { userInfo } = checkToken;
  
  const getDataa = async() => {
    const data = await axios.get("http://localhost:4000/api/dataroom",{params: {
      room_id: id,
      home_id: userInfo.home_id,
    }},)
    .then(response => setDataSensor(response.data.data))
  };

  useEffect(() => {
    if (userInfo) {
      getDataa();
    }
  }, [id, userInfo]);
  
  return (
    <div className="box-data">
      <div className="list-BoxChart">
        {dataSensor !== null
          ? dataSensor.map((item, key) => {
              return (
                <div className='box-Chart-g'>
                   <div className="box-Chart-k" key={key}>
                 <DataSet sensorid={item.sensor_id}/>
                </div>
                </div>
               
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default BoxChart;

function DataSet({sensorid}){
  const [state, setstate] = useState(null)
  const Getdatap =async()=>{
       var token = JSON.parse(localStorage.getItem("token"));
    const data = await axios.get("https://smarthome-bu.online/api/chartDataSensor",{
              params: {
            sensor_id: sensorid !== null ? sensorid : 1,
            day: 0 !== null ? 0 : 0,
          },
          headers: { token: token },
    },)
    .then(response => setstate(response.data.data))
    .catch(err=>console.log(err))
  }
  useEffect(() => {
    if(sensorid){
      Getdatap()
    }
  }, [sensorid]);
  if(!state){
    return(<div>....</div>)
  }
  const names = state[0].sensor.sensor_name
  const value = state.map((itemvalue)=>parseInt(itemvalue.value))
  const datedata =  state.map((itemvalue)=>itemvalue.updatedAt)
  return(
<div>
  {state && (
    <>
       <div >
            <ChartRoom name={names} itemlist={value} datedata={datedata}/>
        </div>
    </>
  )}
</div>
  );
}
