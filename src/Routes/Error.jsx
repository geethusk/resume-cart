import React from 'react'
import "./error.css"
import { useNavigate } from 'react-router-dom'
//  import errorpage from "../Routes/hiw-images/404_page_cover.jpg"

const Error = () => {
    const navigate=useNavigate();
    return (
        <div  className='error-page-container'>
            <div className='error-page-sub-container'>
            
                 <div className='error-head'>404 </div>
                 <div className='error-head-2'>Oops! Page Not Found</div>
                 <div className='error-description' >Oops! The Page you are looking for does not exist.It might have been moved or deleted</div>
                   <button  className='error-button'
                   onClick={()=>{navigate("/")}}
                   >Home</button>


                
             
            </div>
        </div>
    )
}

export default Error
