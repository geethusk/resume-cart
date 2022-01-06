import React from 'react'
import "../Component/form.css"
const Form = ({setFormVisibility}) => {
    return (
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
                
                <input type="file"/>
                </div>
                <div className='template_demand'>
                <label className="input_form_label" htmlFor="">Image Url</label>
                <input type="text" placeholder="Url"/>
                </div>

            </form>
            <div className='form-close-button' onClick={()=>setFormVisibility(false)}>X</div>
        </div>
    )
}

export default Form
