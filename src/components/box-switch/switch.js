// import React, { useState } from "react";
// import {useSelector,useDispatch} from 'react-redux'
// import {switchRoomAction} from '../../redux/action/roomAction'
// import "./switch.css";
// function Switch() {
//   const data = useSelector((state) => state.deviceRoom);
//   const { deviceRoom } = data;

//   const [checkSwitch, setCheckSwitch] = useState(false);
//   const dispatch = useDispatch()

//   const handleClick = (id,status) => {
//     console.log(id,status);
//     setCheckSwitch(status ? true : false);
//     dispatch(switchRoomAction(id,checkSwitch))
//   };

//   return (
//     <div >
//       {deviceRoom !== undefined
//         ? deviceRoom.map((item, key) => {
//             return (
//               <div key={key}>
//                 <div
//                 className="box-switch-on-off"
//                   style={{
//                     background: `${!item.status ? "cornflowerblue" : "#fff"}`,
//                   }}
//                   onClick={()=>handleClick(item.device_id,item.status)}
//                 >
//                   <div className="box-switch-icon">
//                     <img
//                       src={item.device_icon}
//                       alt="device_icon"
//                       className="switch-icon"
//                     />
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         : ""}
//     </div>
//   );
// }

// export default Switch;
