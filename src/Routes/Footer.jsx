import {Navigate, Outlet} from 'react-router-dom'
import { useState } from 'react'
import "./footer.css"
import save from "../../src/assets/icons/save-regular.svg"
import download from "../../src/assets/icons/download-solid.svg"
import api from '../services/api'
// import takescreenshot from "../Routes/Takescreenshot"


const Footer = () => {
const downloadTemplate=async()=>{

    try{
        const response = await api.post('/download-template',)
       
        console.log(response);
        window.open('http://localhost:5000/api/v1/template/?template=' + response.data.url)
    }
    catch(error){
        console.log(error.response);
        Navigate("/network")
    }

       
}


    return (
        <div className='main-container-home'>
            <Outlet/>
            <div className="button-segment">
                <img className='save-button'
               
                 src={save}
                />
                <img className='save-button' 
                 onClick={()=>{
                     downloadTemplate();
     
                }}
                src={download}/>

            </div>
        </div>
    )
}

export default Footer
