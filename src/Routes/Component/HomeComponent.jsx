import React from 'react'
import Home from"../Component/home1.svg"

const HomeComponent = () => {
    return (
        <div className='mainContainer_home'>
            <div className='header_home'>
                <div className='home_icon'>
                    <img src={Home} alt="" />
                </div>
                
                <div className='working_home'>
                    HOW IT WORKS
                </div>
                <div className='about_home'>
                    ABOUT US
                </div>
                <div className='feedback_home'>
                    FEEDBACK
                </div>
                <div className='login_home'>
                    LOGIN
                </div>
            </div>
            
        </div>
    )
}

export default HomeComponent
