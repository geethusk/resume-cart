import React, { useState } from 'react'
import postData from '../../services/postdata'
import "../Component/form.css"
const Form = ({setFormVisibility}) => {
    const [image,setImage]=useState(null)
    const [upload,setUpload]=useState(false)
    console.log(image);

    const uploadTemplate = async ()=>{ 
        const data = new FormData();
        data.append('file', image)
        
            fetch('http://192.168.1.66:5000/api/v1/template-upload', {
            method: 'POST',
            headers: {
                'authorization': localStorage.getItem('token') ? localStorage.getItem('token'): ""
              },
              body: data
        })
        .then(response => response.json())
        .then(data => console.log(data))
        }
         
    return (
        <div className='form_home_container'>
        <div className='form_home'>
            <form action="submit">
            <h1 className='newTemp'>UPLOAD NEW TEMPLATES</h1>
            <div className='template_demand'>
            <label  className="input_form_label" htmlFor="">Set Demand</label>
                <select name="" id="">
                    <option value="type">It's</option> 
                    <option value="Premium">Premium</option>
                    <option value="Free">Free</option>

                </select>
                </div>
                <div className='template_demand'>   
                <label className="input_form_label" htmlFor="">Set Status</label>
                <select name="" id="">
                    <option value="status">For</option>
                    <option value="fresher">Fresher</option>
                    <option value="expert">Expert</option>

                </select>
                </div>
                <div className='template_demand'>
                <label className="input_form_label" htmlFor="">Demo</label>
                {!upload && 
                <input type="file" id="template_image" onChange={(e)=>{setImage(e.target.files[0])
                setUpload(true)}
                }/>}
                {upload && <div className="backend-upload" onClick={()=>{uploadTemplate(); setUpload(false)}}>DONE</div>}
                </div>
                <div className='template_demand'>
                <label className="input_form_label" htmlFor="">Image Url</label>
                <input type="text" placeholder="Url"/>
                </div>
                <button onClick={()=>{}}>OK</button>
            </form>
            <div className='form-close-button' onClick={()=>setFormVisibility(false)}>X</div>
        </div>
        </div>
    )
}

export default Form
