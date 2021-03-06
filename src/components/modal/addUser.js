import React from "react";
import { useForm } from "react-hook-form";
import "./modal.css";
import { useSelector, useDispatch } from "react-redux";
import { addUserAction } from "../../redux/action/modalAction";
import Alert from "../Alert/Alert";
function AddUser() {
  const { register, handleSubmit } = useForm();
  const checkToken = useSelector((state) => state.checkToken);
  const { userInfo} = checkToken;
  
  const {status, message } = useSelector((state) => state.addUser);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addUserAction(data,userInfo.home_id));
  };

  return (
    <div className='grid-add'>
    <Alert statu={status} message={message}/>
    <div className="adduser-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="adduser">
          <div className="title-addroom">
            <h1>Add User</h1>
          </div>
          <input
            type="text"
            name="text"
            placeholder="name"
            className="input-romm"
            ref={register}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            className="input-romm"
            ref={register}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input-romm"
            ref={register}
          />
          <div className="btn-addroom">
            <button>SAVE</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AddUser;
