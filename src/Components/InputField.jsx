import React, { useState } from 'react'

const InputField = ({value,onChange,label,type="text",error,isFormSubmitted=false}) => {
    const[blured,setBlured]=useState(false)
    return (
        <>
            <div className="input-area">
                        <input type="text" className='sign-up-login-input'
                            type={type}
                            value={value}     
                            onChange={(e)=>{onChange(e.target.value)}}   
                            onBlur={()=>
                                setBlured(true)
                            }  
                        />

                        <div className={` label ${value ?  "filled-label": "" } `}>{label}</div>
                        
             </div>
             {error && (blured || isFormSubmitted) && 
             <div className="text-field-error-text">{error}</div>
             }
           </>
    )
}

export default InputField
