import React, { useState,useEffect } from "react";
import Webcam from "react-webcam";
import { useSelector, useDispatch } from "react-redux";
import {loginFaceIdAction} from '../../redux/action/userAction'
import { Route,useHistory,useParams,useRouteMatch} from "react-router-dom";

import "./account.css";
function LoginFaceId() {

  let {token}= useParams();

  const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user",
  };
  
  const loginFaceId = useSelector((state) => state.loginFaceId);
  const { status, message, error } = loginFaceId;
  
  const [file, setFile] = useState(null);
  const [newFile, setNewFile] = useState(null);

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setFile(imageSrc);
  }, [webcamRef]);

  useEffect(() => {
    if (file) {
      const url = file;
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "Filename", { type: "image/png" });
          setNewFile(file);
        });
    }
  }, [file]);


  const dispatch = useDispatch();
  useEffect(() => {
    if (newFile) {
        dispatch(loginFaceIdAction(newFile));
    }
  }, [newFile]);




  useEffect(() => {
    if(status){
      window.location.replace("/");
    }
  }, [status])

  return (
    <div className="login-faceid">
        <h2>Login with FaceID</h2>
        <span>{message}</span>
        {console.log(message)}
      <div >
        <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
        />
        <img src={file} />
      </div>
      <button className="btn-login-faceid" onClick={() => capture()}>
      take a picture
      </button>
    </div>
  );
}

export default LoginFaceId;
