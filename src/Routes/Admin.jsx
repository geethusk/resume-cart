
import React, { useState,useEffect, useContext } from 'react'
import InputField from '../Components/InputField';
import { isPassword, isValidEmail } from '../utility/validate';
import {useNavigate} from 'react-router-dom'
import './Login.css'
import postData from '../services/postdata';
import { UserContext } from '../Context/UserContext';

const Admin = () => {
     const navigate=useNavigate();
    const[isOtpButton,setOtpButton]=useState(false)
    const [formData,setFormData] = useState({
        email:"",
        otp:"",
    });
    const {userData, setUserData } = useContext(UserContext)
    const{email,otp}=formData;
    const onChange = (key,value)=>{
        setFormData(prev=>({
            ...prev,
            [key]:value
        }))
    }
    const[formErrorData,setFormErrorData]=useState({
        emailError:"",
        otpError:"",
    })
    const{emailError,otpError}=formErrorData
    const onError = (key,value)=>{
        setFormErrorData(prev=>({
            ...prev,
            [key]:value
        }))
    }
    
    const formValidate = ()=>{
        let isValidForm = true;
        
        if(!email){
            onError("emailError","Cannot be Empty")
            isValidForm = false;
        }
        else{
            if(!isValidEmail(email)){
                onError("emailError","Enter Valid Email")
                isValidForm = false;
            }
            else{
                onError("emailError","")
            }
        }
        // if(!otp){
        //     onError("otpError","Cannot be Empty")
        //     isValidForm = false;
        // }
        return isValidForm
    }
    useEffect(()=>{
        formValidate();
    },[formData])
   

    const [isFormSubmitted,setIsFormSubmitted ]=useState(false)
   
    const getOtp = async ()=>{
        const response = await postData('/get-admin-otp',{email})
        console.log(response);
    }
    const adminNavigate=()=>{
        if(userData.isAdmin===true){
            navigate("/adminhome")
        }else
        return
    }
    const loginCall = async (e) =>{
        e.preventDefault();
        const response = await postData('/admin-login', {otp})
        console.log(response);
        if(response.status){
            setUserData((prev)=>{
                return{
                ...prev,
                isAdmin: true
            }})
        }
    }
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
                        onChange={(value) =>onChange("email",value)}
                        error={emailError}
                        isFormSubmitted={isFormSubmitted}
                    />
                    <br/>
                    <div onClick={()=>{
                         setOtpButton(true)
                        getOtp()}
                    } className='login-button'>Get OTP</div>
                    <br/>
                    <InputField
                        label="OTP"
                        value={otp}
                        onChange={(value) =>onChange("otp",value)}
                        error={otpError}
                        isFormSubmitted={isFormSubmitted}
                    />
                    <br/>
                    <button 
                    onClick={()=>{
                        adminNavigate()
                    }}
                     type="submit" className='login-button'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Admin
