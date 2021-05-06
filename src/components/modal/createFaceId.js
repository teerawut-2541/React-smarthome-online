import React, { useState, useEffect } from "react";
import "./modal.css";
import Webcam from "react-webcam";
import { useSelector, useDispatch } from "react-redux";
import { faceIdAction } from "../../redux/action/modalAction";
function CreateFaceId() {
  const checkToken = useSelector((state) => state.checkToken);
  const { userInfo } = checkToken;

  const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user",
  };
  const webcamRef = React.useRef(null);
  const [file, setfile] = useState(null);
  const [newFile, setNewFile] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setfile(imageSrc);
  }, [webcamRef]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     capture();
  //   }, 2000);
  // }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    if (newFile) {
      // dispatch(faceIdAction(newFile, userInfo.user_id));
    }
  }, [newFile]);

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

  return (
    <div className="create-faceid">
      <div className="create-faceid-webcam">
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
      <button onClick={() => capture()} className="btn-faceid">take a picture</button>
    </div>
  );
}

export default CreateFaceId;
