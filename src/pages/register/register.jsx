import React from 'react'
import { Link } from "react-router-dom"
import "./register.scss";

const register = () => {
  return (
    <div>
      <div className="main-container">
        <div className="left-container">
          <img src="images/learntocode.jpg" alt="" />
        </div>
        <div className="right-container">
          <div className="reg">
            <form action="post">
              <div class="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                <label for="email">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  required
                />

                <label for="email">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="Username"
                  id="Username"
                  required
                />

                <label for="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  id="psw"
                  required
                />

                <label for="psw-repeat">
                  <b>Repeat Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Repeat Password"
                  name="psw-repeat"
                  id="psw-repeat"
                  required
                />
                <hr />

                <p>
                  By creating an account you agree to our{" "}
                  <a href="#">Terms & Privacy</a>.
                </p>
                <button type="submit" class="registerbtn">
                  Register
                </button>
              </div>

              <div class="container signin">
                <p>
                  Already have an account? <Link to="/Login">Sign in</Link>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 

export default register