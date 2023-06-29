import React, { useState } from "react";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    return (
      <div className="div-login">
        <div className="login-form">
        <input className="input-login" type="email" placeholder="Enter Email" value={loginEmail}
          onChange={(e)=>setLoginEmail(e.target.value)}
        />
          <input className="input-login" type="password" placeholder="Enter Password" value={loginPassword}
          onChange={(e)=>setLoginPassword(e.target.value)}
        />
        <label htmlFor="login-check">
          <input id="login-check" type="checkbox" value="Remember me" />
        Remember me</label>
        <button type="submit" className="login-button">Login</button>
        </div>
        </div>
    )
}

export default Login;