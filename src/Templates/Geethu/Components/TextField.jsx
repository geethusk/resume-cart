import React from 'react'
import { useRef,useEffect } from 'react'

const TextField = ({onChange,value,className}) => {
    const ref=useRef(null);
    useEffect(()=>{
        ref.current.style.width=20+"px"
        ref.current.style.width=ref.current.scrollWidth+"px";
    },[value])
    return (
        <div>
            <input
                ref={ref}
                style={
                    {
                        width: value.length < 4 ? "4ch" : value.length*1.2+"ch"
                    }  
                }   
            type="text"
            className={className}
            value={value} 
            onChange={(e)=>onChange(e.target.value)}/>
        </div>
    )
}

export default TextField
