import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../functions/schema";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../redux/action/userAction";
import "./account.css";
import bg from "../../assets/bg-login.jpg";
import Alert from "../../components/Alert/Alert";

import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

function Login() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const userLogin = useSelector((state) => state.userLogin);
  const { status, message, error } = userLogin;

  const submitHandler = (e) => {
    dispatch(loginAction(email, password)).then(()=>{
        if(status == false){
          store.addNotification({
            title:"Warning",
            message:`${message}`,
            type:"warning",
            container:"top-center",
            insert:"top",
            dismiss:{
              duration:2000,
              showIcon:true
            }
          })
        }
    })
  };


  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      window.location.replace("/");
    }
  }, [status]);


  return (
    <div className="page-account">
            <Alert statu={status} message={message}/>
      <div className="box-account">
        <div className="box-account-grid">
          <div className="box-img">
            <img src={bg} alt="bg-account" className="bg-account" />
          </div>
          <div>
            <form
              className="form-account"
              onSubmit={handleSubmit(submitHandler)}
            >
              <h2>Sign In</h2>
              <li>
                <input
                  placeholder="Email"
                  name="email"
                  ref={register}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="form-account-error">{errors.email?.message}</p>
              </li>
              <li>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="form-account-error">{errors.password?.message}</p>
              </li>

              <button type="submit" className="btn-account">
                Sign In
              </button>
              <span className="form-account-text">
                Login with
                <NavLink to="/login-faceid" className="btn-account-link">
                  <span> Face Id</span>
                </NavLink>
              </span>
              <span className="form-account-text">
                Don't have an account ?{" "}
                <NavLink to="/register" className="btn-account-link">
                  Sign Up
                </NavLink>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
