import React from 'react';
import './Login.css'

const Login=()=>{
    
    return(
        <>
        <center>
        <div className="Page-card">
        <h2>sign in with email</h2>
        <p>make a database with json and document with this login</p>
        <form>
            <div className="Page-control">
            <div>📧<input type="email "placeholder="Enter your email"/></div>
            <div>🔒<input type="password" placeholder="Enter your password"/></div>
            <div><a href='#'className='forget'>Forget password?</a></div>
            <button type="submit" >Login</button>
            </div>
        </form>
        </div>
        </center>
        </>
    )
}
export default Login;