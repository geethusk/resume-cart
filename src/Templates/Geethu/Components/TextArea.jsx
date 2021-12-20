import React from 'react'
import {useEffect,useRef} from "react"

const TextArea = ({onChange,value,className}) => {
    const ref=useRef(null);

    useEffect(() => {
        ref.current.style.height=10+"px";
        ref.current.style.height=ref.current.scrollHeight+"px";

    }, [value])
    return (
        <div>
            <textarea 
                className={className}
                ref={ref}
                value={value} 
                onChange={(e)=>onChange(e.target.value)}
            />
        </div>
    )
}

export default TextArea
