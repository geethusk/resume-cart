import React from 'react'
import {useEffect,useRef} from "react"

const TextArea = ({onChange,value}) => {
    const ref=useRef(null);

    useEffect(() => {
        ref.current.style.height=ref.current.scrollHeight+"px";

    }, [value])
    return (
        <div>
            <textarea 
                className='text-field'
                ref={ref}
                value={value} 
                onChange={(e)=>onChange(e.target.value)}
            />
        </div>
    )
}

export default TextArea
