import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import postData from '../../services/postdata'
import "../Component/form.css"
const Form = ({setFormVisibility}) => {
    const [adminForm,setAdminForm]=useState(
        {
            type:"",
            status:"",
            url:"",
        }
    )
    const{type,status,url}=adminForm;
    const onChange = (key,value)=>{
        setAdminForm(prev=>({
            ...prev,
            [key]:value
        }))
    }

    
    const [image,setImage]=useState(null)

    const uploadTemplate =()=>{ 
        console.log('called');
        const data = new FormData();
        data.append('file', image)
        data.append('body', JSON.stringify(adminForm))
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

        const formSubmit =(e) =>{
            e.preventDefault();
            uploadTemplate();
        }
         
    return (
        <div className='form_home_container'>
        <div className='form_home'>
            <form onSubmit={formSubmit}>
            <h1 className='newTemp'>UPLOAD NEW TEMPLATES</h1>
            <div className='template_demand'>
            <label  className="input_form_label" htmlFor="">Set Demand</label>
                <select name="" id=""
                    onChange={(e)=>onChange('type', e.target.value)}

                >
                    <option value="type">It's</option> 
                    <option value="Premium">Premium</option>
                    <option value="Free">Free</option>

                </select>
                </div>
                <div className='template_demand'>   
                <label className="input_form_label" htmlFor="">Set Status</label>
                <select name="" id=""
                     onChange={(e)=>onChange('status', e.target.value)}
                >
                    <option value="status">For</option>
                    <option value="fresher">Fresher</option>
                    <option value="expert">Expert</option>

                </select>
                </div>
                <div className='template_demand'>
                <label className="input_form_label" htmlFor="">Demo</label>
                <input type="file" id="template_image"  onChange={(e)=>{setImage(e.target.files[0])}
                }/>
                </div>
                <div className='template_demand'>
                <label className="input_form_label" htmlFor="">Image Url</label>
                <input type="text" placeholder="Url"
                    onChange={(e)=>onChange('url',e.target.value)}
                />
                </div>
                <div className='admin-formsubmit'>
                <button className='admin-submitbutton' onClick={()=>{}}>OK</button></div>
            </form>
            <div className='form-close-button' onClick={()=>setFormVisibility(false)}>X</div>
        </div>
        </div>
    )
}

export default Form
