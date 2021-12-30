import React from 'react'

const InputField = () => {
    return (
        
            <div className="label">
                        <input type="text" className='sign-up-input'
                            value={fullName}     
                            onChange={(e)=>{
                                onChange("fullname",e.target.value)
                            }}
                             
                        />
                        <div className='sign-up-label' >Full Name</div>
                    </div>
        
    )
}

export default InputField
