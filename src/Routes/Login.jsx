import React from 'react'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-heading">
                    Login
                </div>
                <form action="">
                    <label>Email</label>
                    <input type="text" alt="email"/>
                    <label>Password</label>
                    <input type="text" alt="password"/>
                </form>
            </div> 
        </div>
    )
}

export default Login
