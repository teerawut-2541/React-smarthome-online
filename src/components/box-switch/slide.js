// import React from "react";
// import {useSelector,useDispatch} from 'react-redux'
// import {switchRoomAction} from '../../redux/action/roomAction'

// import "./slide.css";
// function Slide() {
//   const data = useSelector((state) => state.deviceRoom);
//   const { deviceRoom } = data;
//   const dispatch = useDispatch()

//   const handleChange = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.id)
//     dispatch(switchRoomAction(event.target.id,event.target.value))
//   };

//   return (
//     <div className="box-switch-slide">
//       {deviceRoom !== undefined
//         ? deviceRoom.map((item, key) => {
//           var boolValue = item.status.toLowerCase() === "true" ? true : false;
//           return(
//             <div  key={key}>
//             <div className="box-switch-slide-icon">
//               <span className="switch-slide-title"> {item.device_name} : {boolValue ? item.value : 0} Lux</span>
//               <input
//                 disabled={!boolValue}
//                 type="range"
//                 min="0"
//                 max="100"
//                 value={boolValue ? parseInt(item.value) : 0}
//                 onChange={handleChange}
//                 step="1"
//                 id={item.device_id}
//               />
//             </div>
//           </div>
//           )
//           })
//         : ''}
//     </div>
//   );
// }

// export default Slide;
