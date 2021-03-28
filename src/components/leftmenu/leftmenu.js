import React from "react";
import { NavLink } from "react-router-dom";
import "./leftmenu.css";
import { BiHomeSmile } from "react-icons/bi";
import avatar from "../../assets/avatar.jpeg";

function Leftmenu() {
  return (
    <div className="left-menu">
      <span className="menu-title">Smart Home</span>
      <ul className="menu-ul">
        <li className="menu-box">
          <div className="menu-box-avatar">
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
          <span className="menu-text">Songphop</span>
        </li>
        <li className="menu-box">
          <NavLink
            exact
            to="/dashboard/home"
            activeClassName="is-active"
            className="menu-box-icon"
          >
            <i className="menu-icon">
              <BiHomeSmile />
            </i>
          </NavLink>
          <NavLink exact to="/dashboard/home" activeClassName="is-text-active" className="menu-text">Home</NavLink>

        </li>
        <li className="menu-box">
          <NavLink
            to="/dashboard/bedroom"
            activeClassName="is-active"
            className="menu-box-icon"
          >
            <i className="menu-icon">
              <BiHomeSmile />
            </i>
          </NavLink>
          <NavLink to="/dashboard/bedroom" activeClassName="is-text-active" className="menu-text">Bedroom</NavLink>
        </li>
        <li className="menu-box">
          <NavLink
            to="/livingRoom"
            activeClassName="is-active"
            className="menu-box-icon"
          >
            <i className="menu-icon">
              <BiHomeSmile />
            </i>
          </NavLink>
          <NavLink to="/livingRoom" activeClassName="is-text-active" className="menu-text">Living Room</NavLink>

        </li>
        <li className="menu-box">
          <NavLink
            to="/kitchen"
            activeClassName="is-active"
            className="menu-box-icon"
          >
            <i className="menu-icon">
              <BiHomeSmile />
            </i>
          </NavLink>
          <NavLink to="/kitchen" activeClassName="is-text-active" className="menu-text">Kitchen Room</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Leftmenu;
