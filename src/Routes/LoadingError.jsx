import React from 'react'
import "./loadingpage.css"
import loadingpageimage from  "../Routes/hiw-images/loadingpage.png"
import { useNavigate } from 'react-router-dom'

const LoadingError = () => {
   
    return (
        <div className='loadingpage-container'>
            <div className='loadingpage-sub-container'>
            <div className='loadingpage-head'>Loading...</div>
            <img src ={ loadingpageimage }/>
               
            </div>
        </div>
    )
}

export default LoadingError
