import React, { useState,useEffect } from "react";
import Webcam from "react-webcam";
import { useSelector, useDispatch } from "react-redux";
import {loginFaceIdAction} from '../../redux/action/userAction'
import { Route,useHistory,useParams,useRouteMatch} from "react-router-dom";

import "./account.css";
function LoginFaceId() {

  let {token}= useParams();
  console.log(token)

  const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user",
  };
  
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

  return (
    <div className="login-faceid">
        <h2>Login with FaceID</h2>
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
