import React from 'react'
import "./Dashboard.css"
import login_logo from "../Images/logo.png"
import login_img from "../Images/Truck_logo.png"
import { Link } from 'react-router-dom';



function Login() {
  return (
    <>
      <div class="log">
        <div class="content121">
            <div class="image">
                <img src={login_img} alt="Truck Image"/>
            </div>
            <div class="logo">
                <img src={login_logo} alt="Truck Logo"/>
            </div>
        </div>
        <div class="container123">
            <h2>Login</h2>
            <p>Welcome Back</p>
            <div class="namee">
            <form action="/login" method="post">
                <div class="input-group">
                    <label for="crew">Crew Id</label>
                    <input type="text" id="crew"  placeholder="Enter your Crew ID" name="username" required/>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password"  placeholder="Enter your Password"  name="password" required/>
                </div>
                <div class="options">
                    <label><input type="checkbox" name="remember"/> Remember Me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <Link to='/app'>
                <button type="submit" class="btn">Login</button>
                </Link>
            </form>
        </div>
        </div>
    </div>
    <div className="login-container">
      <div className="logo-container">
        <img src={login_logo} alt="All Canada Van Lines" className="logo"/>
            <div className="truck_logo">
                <img src={login_img}/>
            </div>
        <h3>Login</h3>
        <p1>Welcome back</p1>
      </div>
      <form className="login-form">   
        {/* <label for="crew">Crew Id</label> */}
        <input type="text" id="crew" placeholder="Enter your Crew ID" className="input-field" />
        {/* <label for="pass">Password</label> */}
        <input type="password" id="pass" placeholder="Enter your Password" className="input-field" />
        <div className="option">
            <a href='#'>Forgat Password </a>
            <label><input type="checkbox" name="remember"/>Remember me</label>
        </div>
        <button type="submit" className="login-button">LOGIN</button>
      </form>
    </div>
  </>
  );
}

export default Login;
