import React from 'react'
import {useEffect,useRef} from "react"

const TextArea = ({onChange,value,className,addToList=null,length,deleteList}) => {
    const ref=useRef(null);

    useEffect(() => {
        ref.current.style.height=10+"px";
        ref.current.style.height=ref.current.scrollHeight+"px";
        
        if(value.split("\n").length>1){
            if(addToList!==null){
                onChange(value.split("\n")[0])
                addToList({id:length+1,value:value.split("\n")[1]});
            }
        }

    }, [value])
    return (
        <div>
            <textarea 
                className={className}
                ref={ref}
                value={value} 
                onChange={(e)=>onChange(e.target.value)}
                onKeyDown={e=>{
                    if(e.code="Backspace" && e.target.selectionStart===0)
                    deleteList(value);
                }}
                autoFocus
            />
        </div>
    )
}

export default TextArea
