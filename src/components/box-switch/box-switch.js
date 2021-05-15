import React ,{useState,useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import {switchRoomAction, deviceRoomAction, dataRoomAction} from "../../redux/action/roomAction";
import "./box-switch.css";
import { useParams } from "react-router-dom";
import axios from "axios"

function BoxSwitch() {
  let { id } = useParams();

  
  const [Device, setDevice] = useState(null)
  const [checkEff, setCheckEff] = useState(false)
  // const data = useSelector((state) => state.deviceRoom);
  // const { deviceRoom } = data;

  const checkToken = useSelector((state) => state.checkToken);
  const { userInfo } = checkToken;

  const dispatch = useDispatch();
  const handleClick = (device_id, status) => {
    const checkStatus = status === "false" ? true : false;
    dispatch(switchRoomAction(device_id, checkStatus)).then(() => {
      setCheckEff(!checkEff)
    });
  };

  const handleChange = (event) => {
    dispatch(switchRoomAction(event.target.id, event.target.value)).then(() => {
      setCheckEff(!checkEff)
    });
  };

  const getDevice = () =>{
    axios.get("http://localhost:4000/api/deviceroom", {
        params: {
          room_id:id,
          home_id:userInfo.home_id
        },
      }).then((result)=>{
        setDevice(result.data.data)
      })
  }


  useEffect(() => {
    if(userInfo){
      getDevice()
    }
  }, [checkEff,id,userInfo])


  return (
    <div className='box-switch-content'> 
      {Device !== null
        ? Device.map((item, key) => {
            var boolValue = item.status.toLowerCase() === "true" ? true : false;
            return (
              <div className="box-switch" key={key}>
                <div
                  className="box-switch-on-off"
                  style={{
                    background: `${boolValue ? "#193B68" : "#fff"}`,
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
                    {item.device_name} : {boolValue ? item.value : 0} {item.type}
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
