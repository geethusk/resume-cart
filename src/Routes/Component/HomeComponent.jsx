import React from 'react'
import Home from"../Component/home1.svg"
import {Outlet,useNavigate} from 'react-router-dom'
import { useState,useContext } from 'react'
import { UserContext } from '../../Context/UserContext'


import burger from "../../assets/icons/bars-solid.svg"
const HomeComponent = () => {
    const navigate=useNavigate();
    const[isHeader,setIsHeader]=useState(false);
    
    const{userData,setUserData}=useContext(UserContext)
    
    // const ref=useRef(null);

    // const handle=(e)=>{
    //     setIsHeader(false);
        
    // }

    return (
        <div className='mainContainer_home'>
            <div className='header_home'>
                <div 
                    onClick={()=>{navigate("/")
                    setIsHeader(!isHeader);
                }
                    
                }                
                className='home_icon'>
                    <img src={Home} alt="" />
                </div>
                
                <div className="displaybar working_home"
                    onClick={()=>{navigate("/How-It-Works")}} 
                >
                    HOW IT WORKS
                </div>
                {!userData.isAdmin &&
                <div className="displaybar working_home"
                    onClick={()=>{navigate("/favorite")}} 
                >
                    MY WISHLIST
                </div>}
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
                {!userData.isLoggedIn && <div className="displaybar login_home"
                    onClick={()=>{navigate("/login")
                         
                    }} 
                >
                    LOGIN
                </div>}
                {userData.isLoggedIn && <div className='display-user-id'>
                     {userData.fullname}  
                    <div class="dropdown-content">
                        <a href="#"
                        onClick={()=>{
                            
                            setUserData({
                                fullname:"",
                                email:"",
                                isLoggedIn:false
                            })
                            navigate("/")
                            
                        }}
                        >Logout</a>
                        
                    </div>
                </div>}
                <div className='burger_button' 
                    onClick={()=>{
                        setIsHeader(!isHeader);
                        
                    }}
                >
                    <img src={burger} alt="" />
                </div>
                { isHeader &&  <div className="vertical-header" 
                        
                >
                <div className="vertical_lists"
                    onClick={()=>{
                        navigate("/How-It-Works")
                        setIsHeader(!isHeader);
                    }} 
                >
                    HOW IT WORKS
                </div>

                <div className="vertical_lists"
                    onClick={()=>{navigate("/favorite")
                    setIsHeader(!isHeader);
                }} 
                >
                    MY WISHLIST
                </div>
                <div className="vertical_lists"
                    onClick={()=>{navigate("/about")
                    setIsHeader(!isHeader);
                }} 
                >
                    ABOUT US
                </div>
                <div className="vertical_lists"
                    onClick={()=>{navigate("/feedback")
                    setIsHeader(!isHeader);
                }} 
                >
                    FEEDBACK
                </div>
                <div className="vertical_lists"
                    onClick={()=>{navigate("/login")
                    setIsHeader(!isHeader);
                }} 
                >
                    LOGIN
                </div> 
                
                </div>}

            </div>
            <div className="body-container"
               onClick={()=>{
                    setIsHeader(!isHeader);
                 }}
               >
                <Outlet />
            </div>
            
        </div>
    )
}

export default HomeComponent
