import React from 'react'

const GetPassword = () => {
    return (
        <div className='forget-password-section'>
            <form className='forget-password-form'>
                <label>Email:</label>
                <input type="email"/>
                <div><button>GET OTP</button></div>
                <input type="text"/>
                <button>OK</button>
                <div className='reset-password-section'>
                    <div>
                        <label>New Password:</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="text"/>
                    </div>
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default GetPassword
