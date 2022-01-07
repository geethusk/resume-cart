import React from 'react'
import { useState } from 'react'

const GetPassword = () => {

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
    console.log(password.email)
    return (
        <div className='forget-password-section'>
            <form className='forget-password-form'>
                <div className="email-container">
                    <label>Email:</label>
                    <input type="email"
                      onChange={(e)=>{
                          onChange("email",e.target.value)
                      }}
                    />
                </div>
                <div className='otp-button'><button>GET OTP</button></div>
                <div className="otp-section">
                    <input type="text"
                        onChange={(e)=>{
                            onChange("otp",e.target.value)
                        }}
                    />
                    <button >OK</button>
                </div>
                <div className='reset-password-section'>
                    <div className='password-section'>
                        <label>New Password:</label>
                        <div className='new-password'>
                            <input  type="text"
                                onChange={(e)=>{
                                    onChange("newPassword",e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="password-section">
                        <label>Confirm Password:</label>
                        <div className="confirm-password">
                            <input type="text"
                                onChange={(e)=>{
                                    onChange("confirmPassword",e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default GetPassword
