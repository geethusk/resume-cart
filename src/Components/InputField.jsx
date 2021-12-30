import React from 'react'

const InputField = ({value,onChange,label,type="text",error}) => {
    return (
        
            <div className="input-area">
                        <input type="text" className='sign-up-input'
                            type={type}
                            value={value}     
                            onChange={(e)=>{
                                onChange(e.target.value)
                                console.log(e);
                            }}
                             
                        />

                        {/* to make the label stay on top */}
                        <div className={` label ${value ?  "filled-label": "" } `}>
                            {label}
                        </div>
                        <div className="error-field">{error}</div>
            </div>
        
    )
}

export default InputField
