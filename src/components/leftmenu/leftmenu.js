import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listRoomAction } from "../../redux/action/roomAction";

import "./leftmenu.css";
import { BiHomeSmile ,BiLogOutCircle} from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import Modal from "../modal/modal";
import { useHistory } from "react-router-dom";

function Leftmenu() {
  let history = useHistory();

  const checkToken = useSelector((state) => state.checkToken);
  const { userInfo } = checkToken;

  const stateListRoom = useSelector((state) => state.listRoom);
  const { listRoom } = stateListRoom;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo !== undefined) {
      dispatch(listRoomAction(userInfo.home_id));
    }
  }, [userInfo]);

  const openModal = () => {
    let modalC = document.getElementById("myModal");
    modalC.classList.remove("modal");
    modalC.classList.add("modal-open");
  };

  const logout=()=>{
    localStorage.clear()
    window.location.replace("/login");
  }

  return (
    <div className="left-menu">
      <span className="menu-title">SMART HOME</span>
      <ul className="menu-ul">
        {/* <li className="menu-box">
          <div className="menu-box-avatar">
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
          <span className="menu-text">{userInfo!==undefined ? userInfo.username : ''}</span>
        </li> */}
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
          <NavLink
            exact
            to="/"
            activeClassName="is-text-active"
            className="menu-text"
          >
            Home
          </NavLink>
        </li>
        {listRoom !== undefined
          ? listRoom.map((item, key) => {
              return (
                <li className="menu-box" key={key}>
                  <NavLink
                    exact
                    exact
                    to={`/room/${item.room_id}`}
                    className="menu-box-icon"
                  >
                    <i className="menu-icon">
                      <img src={item.room_icon} className="menu-icon-img" />
                    </i>
                  </NavLink>
                  <NavLink
                    exact
                    to={`/room/${item.room_id}`}
                    activeClassName="is-text-active"
                    className="menu-text"
                  >
                    {item.room_name}
                  </NavLink>
                </li>
              );
            })
          : ""}
        <li className="menu-box">
          <span onClick={openModal} className="menu-box-icon">
            <i className="menu-icon">
              <AiOutlineSetting />
            </i>
          </span>
          <span className="menu-text">Setting</span>
          <Modal />
        </li>
        <li className="menu-box" >
          <span onClick={logout} className="menu-box-icon" >
            <i className="menu-icon">
              <BiLogOutCircle />
            </i>
          </span>
          <span className="menu-text">Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Leftmenu;
