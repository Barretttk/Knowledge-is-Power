import React from 'react'
import "./login.scss"

const Login = () => {
    

  return (
    <div>
        <div className="main-container">
            <div className="container-left">
                <div className="login">
                    <div className="title">
                        Login
                    </div>
                    <div class="container">
                        <label for="username"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" required/>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" id="myInput" name="psw" required/>
                        <br/>
                        {/* <input type="checkbox" onclick="myFunction()"/>
                        Show Password
                             */}
                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" name="remember"/> Remember me
                        </label>
                        </div>
                </div>
            </div>
            <div className="container-right">
                <div className="image-fun">
                    <img src="images/codingisfun.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login