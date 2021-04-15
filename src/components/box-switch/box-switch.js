import React ,{useState,useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import {switchRoomAction, deviceRoomAction, dataRoomAction} from "../../redux/action/roomAction";
import "./box-switch.css";
import { useParams } from "react-router-dom";

function BoxSwitch() {
  let { id } = useParams();
  // const [checkTest, setCheckTest] = useState(false)
  const data = useSelector((state) => state.deviceRoom);
  const { deviceRoom } = data;

  const dispatch = useDispatch();

  const handleClick = (device_id, status) => {
    console.log("status", status);
    const checkStatus = status === "false" ? true : false;
    console.log("checkStatus", checkStatus);
    dispatch(switchRoomAction(device_id, checkStatus)).then(() => {
      // setCheckTest(true)
      dispatch(deviceRoomAction(id));
      dispatch(dataRoomAction(id))
    });
  };

  const handleChange = (event) => {
    // event.preventDefault();
    // console.log(event.target.value);
    // console.log(event.target.id);
    dispatch(switchRoomAction(event.target.id, event.target.value)).then(() => {
      dispatch(deviceRoomAction(id));
      dispatch(dataRoomAction(id))
    });
  };

  // useEffect(() => {
  //   dispatch(deviceRoomAction(id));
  //   dispatch(dataRoomAction(id))
  //   setCheckTest(false)

  // }, [checkTest])

  return (
    <div>
      {deviceRoom !== undefined
        ? deviceRoom.map((item, key) => {
            var boolValue = item.status.toLowerCase() === "true" ? true : false;
            return (
              <div className="box-switch" key={key}>
                <div
                  className="box-switch-on-off"
                  style={{
                    background: `${boolValue ? "cornflowerblue" : "#fff"}`,
                  }}
                  onClick={() => handleClick(item.device_id, item.status)}
                >
                  <div className="box-switch-icon">
                    <img
                      src={item.device_icon}
                      alt="device_icon"
                      className="switch-icon"
                    />
                  </div>
                </div>
                <div className="box-switch-slide-icon">
                  <span className="switch-slide-title">
                    {" "}
                    {item.device_name} : {boolValue ? item.value : 0} Lux
                  </span>
                  <input
                    disabled={!boolValue}
                    type="range"
                    min="0"
                    max="100"
                    value={boolValue ? parseInt(item.value) : 0}
                    onChange={handleChange}
                    step="1"
                    id={item.device_id}
                  />
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default BoxSwitch;
