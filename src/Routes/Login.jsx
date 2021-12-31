import React, { useState } from 'react'
import InputField from '../Components/InputField';
import { isPassword, isValidEmail } from '../utility/validate';
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
    const onError = (key,value)=>{
        setFormErrorData(prev=>({
            ...prev,
            [key]:value
        }))
    }
    const formValidate = ()=>{
        if(!email){
            onError("emailError","Cannot be Empty")
        }
        else{
            if(!isValidEmail(email)){
                onError("emailError","Enter Valid Email")
            }
            else{
                onError("emailError","")
            }
        }
        if(!password){
            onError("passwordError","Cannot be Empty")
        }
        else{
            if(!isPassword(password)){
                onError("passwordError","Enter Valid Password")
            }
            else{
                onError("passwordError","")
            }
        }
    }
    const loginCall=(e)=>{
        e.preventDefault();
        setIsFormSubmitted(true)
        if (formValidate()){
            console.log("login success")
        }
    }
    const [isFormSubmitted,setIsFormSubmitted ]=useState(false)
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-heading">
                    Login
                </div>
                <form onSubmit={loginCall} className='login-form'>
                    <InputField
                        label="Email"
                        value={email}
                        // type="email"
                        onChange={(value) =>onChange("email",value)}
                        error={emailError}
                        isFormSubmitted={isFormSubmitted}
                    />
                    <InputField
                        label="Password"
                        value={password}
                        type="password"
                        onChange={(value) =>onChange("password",value)}
                        error={passwordError}
                        isFormSubmitted={isFormSubmitted}
                    />
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
