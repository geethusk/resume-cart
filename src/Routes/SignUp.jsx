import React from 'react'
import "./SignUp.css"
import submiticon from "../assets/icons/submit.svg"

const SignUp = () => {
    return (
        <div className='sign-up-container'>
            <div className="card-container">
                <div className="signup">
                    Sign Up
                </div>
                <form onSubmit="submit" className='sign-up-form'>
                    <div className="label">
                        <input type="text" className='sign-up-input'/>
                        <div className='sign-up-label' >Full Name</div>
                    </div>
                    <div className="label">
                        <input type="email" className='sign-up-input'/>
                        <div className='sign-up-label'>Email</div>
                    </div>
                    <div className="label">
                        <input type="password" className='sign-up-input'/>
                        <div className='sign-up-label'>Password</div>
                    </div>
                    <div className="label">
                        <input type="password" className='sign-up-input'/>
                        <div className='sign-up-label'>Confirm Password</div>
                    </div>
                    <button className='sign-up-button' type="submit">Submit</button>
                    <div className="excisting-user">
                        Already have account? Login
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
