import React, { useState } from 'react'

const InputField = ({value,onChange,label,type,error}) => {
    const[isBlur,setIsBlur]=useState(false)
    return (
            <div className="input-area">
                        <input type="text" className='sign-up-input'
                            type={type}
                            value={value}     
                            onChange={(e)=>{onChange(e.target.value)}}   
                            onBlur={()=>{
                                setIsBlur(true)
                            }}  
                        />
                        <div className={`label ${value? "filled-label":""}`}>{label}</div>
                        {error && (isBlur) &&
                        <div className='error-field'>{error}</div>
                        }
                     
            </div>
        
    )
}

export default InputField
