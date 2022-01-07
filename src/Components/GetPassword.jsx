import React from 'react'

const GetPassword = () => {
    return (
        <div className='forget-password-section'>
            <form className='forget-password-form'>
                <div className="email-container">
                    <label>Email:</label>
                    <input type="email"/>
                </div>
                <div className='otp-button'><button>GET OTP</button></div>
                <div className="otp-section">
                    <input type="text"/>
                    <button >OK</button>
                </div>
                <div className='reset-password-section'>
                    <div className='password-section'>
                        <label>New Password:</label>
                        <div className='new-password'><input  type="text"/></div>
                    </div>
                    <div className="password-section">
                        <label>Confirm Password:</label>
                        <div className="confirm-password"><input type="text"/></div>
                    </div>
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default GetPassword
