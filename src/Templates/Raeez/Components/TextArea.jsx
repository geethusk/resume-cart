import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

const TextArea = ({value,onChange}) => {
    const ref =useRef(null);
    useEffect(() => {
        ref.current.style.height=10+"px"
      ref.current.style.height=ref.current.scrollHeight+"px";
    }, [value]);
    return (
        <textarea
        ref={ref}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        />
    )        
}

export default TextArea
