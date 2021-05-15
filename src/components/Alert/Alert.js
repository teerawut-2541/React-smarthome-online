import React, { useState, useEffect } from "react";
import "./Alert.css";

const Alert = ({ statu, message }) => {
  const [Alerts, setAlerts] = useState(null);
  useEffect(() => {
      setAlerts(message);
      setTimeout(() => {
        setAlerts(null);
      }, 3000);
  },[Alerts]);

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
