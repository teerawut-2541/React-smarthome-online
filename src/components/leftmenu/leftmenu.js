import React,{ useEffect} from "react";
import { NavLink } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {listRoomAction} from '../../redux/action/roomAction'

import "./leftmenu.css";
import avatar from "../../assets/avatar.jpeg";
import { BiHomeSmile } from "react-icons/bi";

function Leftmenu() {
  const checkToken = useSelector((state) => state.checkToken);
  const { userInfo} = checkToken;

  const stateListRoom = useSelector(state => state.listRoom)
  const {listRoom} = stateListRoom
  const dispatch = useDispatch()

  
  useEffect(() => {
    if(userInfo !== undefined){
      dispatch(listRoomAction(userInfo.home_id))
    }
  }, [userInfo])

  return (
    <div className="left-menu">
      <span className="menu-title">SMART HOME</span>
      <ul className="menu-ul">
        <li className="menu-box">
          <div className="menu-box-avatar">
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
          <span className="menu-text">{userInfo!==undefined ? userInfo.username : ''}</span>
        </li>
        <li className="menu-box">
          <NavLink
            exact
            to="/"
            activeClassName="is-active"
            className="menu-box-icon"
          >
            <i className="menu-icon">
              <BiHomeSmile />
            </i>
          </NavLink>
          <NavLink exact to="/" activeClassName="is-text-active" className="menu-text">Home</NavLink>
        </li>
        {listRoom !== undefined ? listRoom.map((item,key)=>{
          return(
            <li className="menu-box" key={key}>
            <NavLink
              exact
              exact to={`/room/${item.room_id}`}              
              activeClassName="is-active"
              className="menu-box-icon"
            >
              <i className="menu-icon">
                <img src={item.room_icon} className="menu-icon-img"/>
              </i>
            </NavLink>
            <NavLink exact to={`/room/${item.room_id}`} activeClassName="is-text-active" className="menu-text">{item.room_name}</NavLink>
          </li>
          )
        }) :'' }
      </ul>
    </div>
  );
}

export default Leftmenu;
