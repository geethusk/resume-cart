import React from 'react'
import "./loadingpage.css"
import loadingpageimage from  "../Routes/hiw-images/loadingpage.png"
// import loadingpageimage from "../Routes/hiw-images/loadingpage.gif"
import { useNavigate } from 'react-router-dom'

const LoadingError = () => {
   
    return (
        <div className='loadingpage-container'>
            <div className='loadingpage-sub-container'>
            <div className='loadingpage-head'>Loading...</div>
            <img className='loadingpage-image' src ={ loadingpageimage }/>
               
            </div>
        </div>
    )
}

export default LoadingError
