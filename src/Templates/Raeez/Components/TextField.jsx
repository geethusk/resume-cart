import React from 'react'

const TextField = ({onChange,value,}) => {
    return (
        <input
            style={
                {
                width:value.length <4 ? "4ch" : value.length*1.2 +"ch"
                }
            }    
           
                 type="text"
                    value={value}
                    
                    onChange={(e)=>onChange(e.target.value)}/>
    )
}

export default TextField

