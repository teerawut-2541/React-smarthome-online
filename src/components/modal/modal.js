import React, { useState,useEffect } from "react";
import AddRoom from "./addRoom";
import AddUser from "./addUser";
import AddDevice from "./addDevice";
import AddSensor from "./addSensor";
import CreateFaceId from "./createFaceId";
import "./modal.css";
import { useDispatch } from "react-redux";
import { iconAction } from "../../redux/action/modalAction";

const Modal = ({isModal}) => {
  const [Route, setRoute] = useState('room');
  
  const xxx =()=>{
    let modalC = document.getElementById("myModal");
      modalC.classList.remove("modal-open");
      modalC.classList.add("modal");
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(iconAction())
  }, [])

  return (
    <div id="myModal" className="modal">
      <div className="modals">
        <div className="modal-content">
        <div className='times'><span onClick={xxx}>&times;</span></div>
          <div className="nav-modal">
            <span onClick={() => setRoute("room")}>ADD ROOM</span>
            <span onClick={() => setRoute("user")}>ADD USER</span>
            <span onClick={() => setRoute("sensor")}>ADD sensor</span>
            <span onClick={() => setRoute("device")}>ADD device</span>
            <span onClick={() => setRoute("faceid")}>create face id</span>
          </div>
          <div>
            {Route ===  'room' && (
             <AddRoom/>
            )}
            {Route ===  'user' && (
             <AddUser/>
            )}
            {Route ===  'sensor' && (
             <AddSensor/>
            )}
            {Route ===  'device' && (
             <AddDevice/>
            )}
            {Route ===  'faceid' && (
             <CreateFaceId/>
            )}
          </div>
        </div>
      </div>
    </div>
  );

};

export default Modal;