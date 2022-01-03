import React from 'react'
import Home from"../Component/home1.svg"
import {Outlet,useNavigate} from 'react-router-dom'
import { useState } from 'react'


import burger from "../../assets/icons/bars-solid.svg"
const HomeComponent = () => {
    const navigate=useNavigate();
    const[isHeader,setIsHeader]=useState(false);
    // const ref=useRef(null);

    // const handle=(e)=>{
    //     setIsHeader(false);
        
    // }

    return (
        <div className='mainContainer_home'>
            <div className='header_home'>
                <div 
                    onClick={()=>{navigate("/")}}                
                className='home_icon'>
                    <img src={Home} alt="" />
                </div>
                
                <div className="displaybar working_home"
                    onClick={()=>{navigate("/How-It-Works")}} 
                >
                    HOW IT WORKS
                </div>
                <div className="displaybar about_home"
                    onClick={()=>{navigate("/about")}} 
                >
                    ABOUT US
                </div>
                <div className="displaybar about_home"
                    onClick={()=>{navigate("/feedback")}} 
                >
                    FEEDBACK
                </div>
                <div className="displaybar login_home"
                    onClick={()=>{navigate("/login")}} 
                >
                    LOGIN
                </div>
                <div className='burger_button' 
                    onClick={()=>{
                        setIsHeader(!isHeader);
                    }}
                >
                    <img src={burger} alt="" />
                </div>
                {isHeader &&  <div className="vertical-header" >
                <div className="vertical_lists"
                    onClick={()=>{navigate("/How-It-Works")}} 
                >
                    HOW IT WORKS
                </div>
                <div className="vertical_lists"
                    onClick={()=>{navigate("/about")}} 
                >
                    ABOUT US
                </div>
                <div className="vertical_lists"
                    onClick={()=>{navigate("/feedback")}} 
                >
                    FEEDBACK
                </div>
                <div className="vertical_lists"
                    onClick={()=>{navigate("/login")}} 
                >
                    LOGIN
                </div> 
                </div>}
            </div>
            <div className="body-container">
                <Outlet/>
            </div>
            
        </div>
    )
}

export default HomeComponent
