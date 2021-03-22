import React from 'react'
import { NavLink } from "react-router-dom";
import './account.css'
import bg from '../../assets/bg-login.jpg'
function Login() {
    return (
        <div className="page-account">
            <div className="box-account">
                <div className="box-account-grid">
                <div className="box-img">
                    <img src={bg} alt="bg-account" className="bg-account"/>
                </div>
                <div>
                    <form className="form-account">
                        <h2>Sign In</h2>
                        <input placeholder="Email"/>
                        <input placeholder="Password"/>
                        <button type="submit" className="btn-account">Sign In</button>
                        <span className="form-account-text"> Don't have an account ? <NavLink to="/register" className="btn-account-link">Sign Up</NavLink></span>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login
