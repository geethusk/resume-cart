import React from 'react'
import { useRef } from 'react';
import camera from "../icons/camera.svg"
import { useState } from 'react';

const FileUpload = ({onChange,image}) => {
    const imageRef=useRef(null);
    // const[image,setImage]=useState(profilepic);

    return (
        <div className="profile-image-container-3">
            <img className='profilepic-3' src={image}/>
            <img
            className='change-image-button-3'
            src={camera} alt="camera icon"
            onClick={()=>{
                imageRef.current.click()
            }}
            />
        
        <input
             ref={imageRef}
             type="file"
             style={{display:"none"}}
             onChange={(e)=>{
                 onChange(URL.createObjectURL(e.target.files[0]))
             }}/>
         </div>    
             
        
    )       
}

export default FileUpload
