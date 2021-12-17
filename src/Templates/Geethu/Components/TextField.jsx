import React from 'react'

const TextField = ({onChange,value}) => {
    return (
        <div>
            <input
                style={
                    {
                        width: value.length < 4 ? "4ch" : value.length*1.2+"ch"
                    }  
                }   
            type="text"
            className='text-field'
            value={value} 
            onChange={(e)=>onChange(e.target.value)}/>
        </div>
    )
}

export default TextField
