import { useRef,useState } from "react";
import camera from "../assets/camera.svg"


const FileUpload = ({onChange,image}) => {
    const inputRef = useRef(null);
    
    return (
        
        <div className="image4_1">
        <img className="profilepic4" src={image}/>
        <img className="changing_image4" src={camera} alt="camera-icon"
        onClick={()=>{
            inputRef.current.click()
        }}
        />
        <input type="file" ref={inputRef} style={{display:"none"}}
        onChange={(e)=>{
            onChange(URL.createObjectURL(e.target.files[0]))
        }}/>
        </div>
    )
}

export default FileUpload
