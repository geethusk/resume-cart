import React, { useState } from 'react'
import axios from "axios"
import "../Component/form.css"
import ErrorHandler from './ErrorHandler'

const Form = ({setFormVisibility}) => {
    const [errorVisibility,setErrorVisibility]=useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
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

    const uploadTemplate = async()=>{
        const data = new FormData();
        data.append('file', image)
        data.append('body', JSON.stringify(adminForm))
        
        try {
            const response = await axios.post('http://localhost:5000/api/v1/template-upload', data, {
                headers:{
                    'authorization': localStorage.getItem('token') ? localStorage.getItem('token'): ""
                },
            })

            if(response.data.status==true){
                setFormVisibility(false)
            }

            
        } catch (error) {
            let data = error.response.data
            if(data.status==false){
            setErrorVisibility(true)
            setErrorMessage(data.message)
                // <div>already exists</div>
            }
        }
        

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
                <select className='admin-sort' name="" id=""
                    onChange={(e)=>onChange('type', e.target.value)}

                >
                    <option value="type">It's</option> 
                    <option value="Premium">Premium</option>
                    <option value="Free">Free</option>

                </select>
                </div>
                <div className='template_demand'>   
                <label className="input_form_label" htmlFor="">Set Status</label>
                <select className='admin-sort' name="" id=""
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
                <input className='image-input' type="text" placeholder="Url"
                    onChange={(e)=>onChange('url',e.target.value)}
                />
                </div>
                <div className='admin-formsubmit'>
                    {errorVisibility && <ErrorHandler error={errorMessage} />}
                <button className='admin-submitbutton' onClick={()=>{}}>OK</button></div>
            </form>
            <div className='form-close-button' onClick={()=>setFormVisibility(false)}>X</div>
        </div>
        </div>
    )
}

export default Form
