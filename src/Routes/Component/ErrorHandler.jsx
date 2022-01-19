import {useState} from 'react'
import Form from '../Component/Form'
import "./form.css"

const ErrorHandler = ({setErrorFormVisibility, error}) => {

    return (
        <div className="form_home_container">
            <div className="form_home">
                {error}
            <div className='form-close-button' onClick={()=>setErrorFormVisibility(false)}>X</div>
            </div>
        </div>
    )
}

export default ErrorHandler
