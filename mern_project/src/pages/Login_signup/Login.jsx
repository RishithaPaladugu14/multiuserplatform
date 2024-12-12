import React from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
const Login = () => {
  return (
    <div className={style.full}>
        <div>
            <h1 className={style.hello}>Login</h1>
            <div>
              <input type="username" name="username"id="" placeholder="Username"/>
                < input type="email" name="email"id="" placeholder="Email"/>
                <input type="password" name="password" id="" placeholder="Password"/>
                
                <button>Login</button>
            </div>
            <div>
                <p>dont have an account ?<Link to="/signup">Signup</Link> </p>
            </div>
        </div>
    </div>
  )
}

export default Login
