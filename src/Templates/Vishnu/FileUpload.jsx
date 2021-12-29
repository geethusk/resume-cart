import  { useRef, useState } from 'react'
import camera from "./images/camera/cameraicon.svg"
import profilepic from "./images/s.webp"

const FileUpload = ({profilepic}) => {
    const inputref = useRef(null);
    const[image,setImage] = useState(profilepic)
    return (
        <div className="profile-pic">
                        <img className="image" src={profilepic} src={image} />
                        <img
                        className='image-upload' 
                        src={camera} 
                        alt="imageupload_here"
                        onClick={()=>{
                            inputref.current.click()
                        }}/>
                        <input 
                        ref={inputref}
                        type="file"
                        style={{display:"none"}}
                        onChange={(e)=>{
                            setImage(URL.createObjectURL(e.target.files[0]))
                        }}
                        />
        </div>
    )
}

export default FileUpload
