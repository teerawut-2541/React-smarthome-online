import React, { useState } from "react";
import "./modal.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addDeviceAction } from "../../redux/action/modalAction";

function AddDevice() {
  const { register, handleSubmit } = useForm();

  const stateListRoom = useSelector((state) => state.listRoom);
  const { listRoom } = stateListRoom;

  const stateIcon = useSelector((state) => state.icon);
  const { icon } = stateIcon;
  const [pathIcon, setPathIcon] = useState("Icon");

  const addDevice = useSelector((state) => state.addDevice);
  const { status, message } = addDevice;

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const dataDevice = {
      name:data.name,
      types:data.types,
      room:data.room,
      path_icon:pathIcon,
    }
    dispatch(addDeviceAction(dataDevice));
  };

  const types = [
    { value: "TestType1" },
    { value: "TestType2" },
    { value: "TestType3" },
    { value: "TestType4" },
  ];

  console.log(status,message)

  return (
    <div className="addroom-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="addroom">
          <div className="title-addroom">
            <h1>Add Device</h1>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name Device"
            className="input-romm"
            ref={register}
          />
          <select className="input-select" ref={register} name="types">
            <option value="0">Type</option>
            {types.map((item, key) => {
              return (
                <option key={key} value={item.value}>
                  {item.value}
                </option>
              );
            })}
          </select>
          <select className="input-select" ref={register} name="room">
            <option value="0">Room</option>
            {listRoom.map((item, key) => {
              return (
                <option key={key} value={item.room_id}>
                  {item.room_name}
                </option>
              );
            })}
          </select>
          <span className="input-romm">{pathIcon}</span>
          <div className="btn-addroom">
            <button type="submit">SAVE</button>
          </div>
        </div>
      </form>
      <div className="box-icon-addroom">
        <div className="icon-addroom">
          {icon &&
            icon.map((item, key) => {
              return (
                <img
                  key={key}
                  src={item.path_icon}
                  alt="icon"
                  onClick={() => setPathIcon(item.path_icon)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default AddDevice;
