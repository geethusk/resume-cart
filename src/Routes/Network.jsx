import React from 'react'
import "./networkerror.css"
import networkerror from "../Routes/hiw-images/network-connection.jpg"

const Network = () => {
    return (
        <div className='network-error'>
            <div className='network-error-sub'>
                <img className='networkerror-image' src={networkerror}/>
                <div className='network-head'>Connection Lost!</div>
                <div className='network-head2'>Looks likes the page you are trying to visit does not exist.</div>
                <div className='network-error-description'>Please Check the URL and try again..</div>
           
            </div>
        </div>
    )
}

export default Network
