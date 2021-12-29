import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-heading">
                    Login
                </div>
                <form onSubmit="submit" className='login-form'>
                    <div className="login-section">
                        <div className="login-label">Email</div>
                        <input type="text" className='login-input' alt="email"/>
                    </div>
                    <div className="login-section">
                        <div className="login-label">Password</div>
                        <input type="text" className='login-input' alt="password"/>
                        
                    </div>
                    <div className='login-button-section'>
                        <div>Forget Password?</div>
                        <button type="submit" className='login-button'>Login</button>
                    </div>
                    <div className='sign-up-page-link'>Not a member?<span className='sign-up-link'> SignUp </span>now</div>
                </form>
            </div> 
        </div>
    )
}

export default Login
