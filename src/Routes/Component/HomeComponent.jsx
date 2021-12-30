import React from 'react'
import Home from"../Component/home1.svg"
import {Outlet,useNavigate} from 'react-router-dom'


const HomeComponent = () => {
    const navigate=useNavigate();

    return (
        <div className='mainContainer_home'>
            <div className='header_home'>
                <div
                    onClick={()=>{navigate("/")}}                
                className='home_icon'>
                    <img src={Home} alt="" />
                </div>
                
                <div
                    onClick={()=>{navigate("/How-It-Works")}} 
                className='working_home'>
                    HOW IT WORKS
                </div>
                <div
                    onClick={()=>{navigate("/")}} 
                className='about_home'>
                    ABOUT US
                </div>
                <div
                    onClick={()=>{navigate("/")}} 
                className='feedback_home'>
                    FEEDBACK
                </div>
                <div
                    onClick={()=>{navigate("/login")}} 
                className='login_home'>
                    LOGIN
                </div>
            </div>
            <div className="body-container">
                <Outlet/>
            </div>
            
        </div>
    )
}

export default HomeComponent
