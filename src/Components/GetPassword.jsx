import React from 'react'
import { useState } from 'react'
import postData from '../services/postdata'

const GetPassword = () => {
    const[isOtpButton,setOtpButton]=useState(false)
    const[password,setPassword] = useState({
        email:"",
        otp:"",
        newPassword:"",
        confirmPassword:""   
    })

    const onChange = (key,value)=>{
        setPassword(prev =>({
            ...prev,
            [key]:value

        }))
    }
    const getOtp=async()=>{
        const response = await postData('/forgot-password',{email:password.email})
    }
    const resetPassword=async()=>{
        const response = await postData('/reset-password',{otp:password.otp,email:password.email,password:password.newPassword})
    }
    
    return (
        <div className='forget-password-section'>
            <div className='forget-password-form'>
                <div className="email-container">
                    <label>Email</label>
                    <input type="email"
                      onChange={(e)=>{
                          onChange("email",e.target.value)
                      }}
                    />
                </div>
                 
                <div>
                <button 
                    onClick={()=>{
                        getOtp()
                        setOtpButton(true)
                    }}
                className='forget-password-button'>GET OTP</button>
                </div>
                
                {isOtpButton &&
                <div className='reset-password-section'>
                    <div className='password-section'>
                        <label>New Password</label>
                        <div className='new-password'>
                            <input  type="text"
                                onChange={(e)=>{
                                    onChange("newPassword",e.target.value)
                                }}
                            />
                        </div>
                    </div>

                    <div className="password-section">
                        <label>Confirm Password</label>
                        <div className="confirm-password">
                            <input type="text"
                                onChange={(e)=>{
                                    onChange("confirmPassword",e.target.value)
                                }}
                            />
                        </div>
                    </div>

                    <div className="otp-section">
                        <label>Enter Otp</label>
                        <input type="text" placeholder='Enter Otp'
                            onChange={(e)=>{
                                onChange("otp",e.target.value)
                        }}
                    />
                    </div>
                    
                    <button className='forget-password-button'
                    onClick={()=>{
                        resetPassword()
                    }}>SUBMIT</button>
                </div>}
            </div>
        </div>
    )
}

export default GetPassword
