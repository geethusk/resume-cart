import React, { useState } from 'react'
import './Login.css'
const Login = () => {
    const [formData,setFormData] = useState({
        email:"",
        password:"",
    });
    const{email,password}=formData;
    const onChange = (key,value)=>{
        setFormData(prev=>({
            ...prev,
            [key]:value
        }))
    }
    const[formErrorData,setFormErrorData]=useState({
        emailError:"",
        passwordError:"",
    })
    const{emailError,passwordError}=formErrorData
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-heading">
                    Login
                </div>
                <form onSubmit="submit" className='login-form'>
                    <div className="login-section">
                        <input type="text" className='login-input'
                            value={email}
                            onChange={(e) =>onChange("email",e.target.value)}
                            error={emailError}
                        />
                        <div className="login-label">Email</div>
                    </div>
                    <div className="login-section">
                        <input type="text" className='login-input' 
                            value={password}
                            onChange={(e) =>onChange("password",e.target.value)}
                            error={passwordError}
                        />
                        <div className="login-label">Password</div>
                        
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
