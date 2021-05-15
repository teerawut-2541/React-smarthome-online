import React, { useState, useEffect } from "react";
import "./Alert.css";

const Alert = ({ statu, message }) => {
  const [state, setstate] = useState(message?message:null)
  const [Alerts, setAlerts] = useState(null);
  useEffect(() => {
    if(state){
      setAlerts(message);
      setTimeout(() => {
        setstate(null)
        setAlerts(null);
      }, 3000);
    }
  },[state]);

  return (
    <div>
      {Alerts && (
        <div>
          {statu ? (
            <div className="box-alert-Success">
              <span>{message}</span>
            </div>
          ) : (
            <div className="box-alert-error">
              <span>{message}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Alert;
