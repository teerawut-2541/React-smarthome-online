import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../functions/schema";

import "./account.css";
import bg from "../../assets/bg-login.jpg";

function Login() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submitHandler = (e) => {
     e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className="page-account">
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
                {" "}
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
