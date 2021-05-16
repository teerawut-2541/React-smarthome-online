import React,{ useEffect} from "react";
import {useDispatch} from 'react-redux'
import {dataRoomAction, deviceRoomAction} from '../../redux/action/roomAction'
import "./room.css";
import BoxSwitch from "../../components/box-switch/box-switch";
import BoxData from '../../components/box-data/box'
import Boxchart from "../../components/box-data/Box-chart";
import { useParams } from "react-router-dom";

export default function Room() {
  // let { id } = useParams();

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   if(id !== undefined){
  //     dispatch(dataRoomAction(id))
  //     dispatch(deviceRoomAction(id))
  //   }
  // }, [id])

  return (
    <div className="room-content">
      <div className="room-content-grid">
        <div className="room-content-switch"> 
          <BoxSwitch />
        </div>
      </div>
      <div className="room-content-grid">
        <div className="room-content-switch">
          <BoxData />
        </div>
      </div>  
      <div className="room-content-grid">
        <div className="room-content-switch">
          <Boxchart />
        </div>
      </div>  
      <div>
        
      </div>
    </div>
  );
}
