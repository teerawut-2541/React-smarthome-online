import React,{useState,useEffect} from "react";
import "./alert.css";
function Alert(props) {
const [setClass, setSetClass] = useState(true)
useEffect(() => {
    setSetClass(true)
}, [props.status])
  return (
    props.status === undefined || props.status === true ?'':
    <div className={setClass ? "box-alert" : "box-alert-none"}>
      <span className="close-alert-btn " onClick={()=>setSetClass(!setClass)}>
        &times;
      </span>
    <span>{props.message}</span>
    </div>
  );
}

export default Alert;
