import {Outlet} from 'react-router-dom'
import "./footer.css"
import save from "../../src/assets/icons/save-regular.svg"
import download from "../../src/assets/icons/download-solid.svg"
// import takescreenshot from "../Routes/Takescreenshot"


const Footer = () => {


    return (
        <div className='main-container-home'>
            <Outlet/>
            <div className="button-segment">
                <img className='save-button'
               
                 src={save}
                />
                <img className='save-button' 
                 onClick={()=>{
                    //  takeScreenshot();
     
                }}
                src={download}/>

            </div>
        </div>
    )
}

export default Footer
