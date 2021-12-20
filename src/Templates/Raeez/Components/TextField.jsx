import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

const TextField = ({onChange,value,}) => {
    const ref=useRef(null)
    useEffect(() => {
        ref.current.style.width=15+"px"
        ref.current.style.width=ref.current.scrollWidth+"px";

    },[value])   
    return (
       
        <input
            // style={
            //     {
            //     width:value.length <4 ? "4ch" : value.length*1.2 +"ch"
            //     }
            // }    
           
                 type="text"
                    value={value}
                    ref={ref}

                onChange={(e)=>onChange(e.target.value)}/>
    )
}

export default TextField

