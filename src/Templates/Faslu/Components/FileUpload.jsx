import { useRef} from 'react'
import camera from '../icons/camera-solid.svg'

const FileUpload = ({onChange,image}) => {
    const inputRef = useRef(null);
    return (
        <div className="header-right-sec2">
            <img className='profile-image'src={image}/>
            <img className='change-image-button-2'src={camera} alt="camera icon"
            onClick={()=>{
                inputRef.current.click()
            }}/>
            <input 
                ref={inputRef}
                type="file"
                style={{display:"none"}}
                onChange={(e)=>{
                onChange(URL.createObjectURL(e.target.files[0])) 
            }}
        />
        </div>
    )
}

export default FileUpload
