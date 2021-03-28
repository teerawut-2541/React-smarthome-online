import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "../../functions/schema";

import bg from "../../assets/bg-register.jpg";
import './account.css'
function Register() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submitHandler = (e) => {
    console.log(e);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <div className="page-account">
      <div className="box-account">
        <div className="box-account-grid">
          <div>
            <form
              className="form-account"
              onSubmit={handleSubmit(submitHandler)}
            >
              <h2>Create Account</h2>
              <li>
                <input
                  placeholder="Username"
                  name="username"
                  ref={register}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <p className="form-account-error">{errors.username?.message}</p>
              </li>
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
              <li>
                <input
                  placeholder="Confirm password"
                  name="rePassword"
                  ref={register}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <p className="form-account-error">
                  {errors.rePassword?.message}
                </p>
              </li>
              <button type="submit" className="btn-account">
                Sign Up
              </button>
              <span className="form-account-text">
                {" "}
                already have an account ?{" "}
                <NavLink to="/login" className="btn-account-link">
                  Sign In
                </NavLink>
              </span>
            </form>
          </div>
          <div className="box-img">
            <img src={bg} alt="bg-account" className="bg-account" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
