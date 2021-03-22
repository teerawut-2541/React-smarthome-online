import React from 'react'
import { NavLink } from "react-router-dom";
import bg from '../../assets/bg-register.jpg'

function Register() {
    return (
        <div className="page-account">
            <div className="box-account">
                <div className="box-account-grid">
                <div>
                    <form className="form-account">
                        <h2>Create Account</h2>
                        <input placeholder="Username"/>
                        <input placeholder="Email"/>
                        <input placeholder="Password"/>
                        <input placeholder="Confirm password"/>
                        <button type="submit" className="btn-account">Sign Up</button>
                        <span className="form-account-text"> already have an account ? <NavLink to="/login" className="btn-account-link">Sign In</NavLink></span>
                    </form>
                </div>
                <div className="box-img">
                    <img src={bg} alt="bg-account" className="bg-account"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Register
