import  { useEffect, useRef } from 'react'

const TextField = ({onChange,value}) => {

    const ref = useRef(null);

    useEffect(()=>{
        ref.current.style.width= 15+"px";
        ref.current.style.width= ref.current.scrollWidth+"px";
    },[value])


    return (
        <input 
            ref={ref}
            // style={{
            //     width:value.length < 4 ? "4ch" : value.length*1.2+"ch"
            // }}
        className="text-field" 
        value={value} 
        type="text"
        onChange={(e)=>{
            onChange(e.target.value)
        }}
        
        />
    )
}

export default TextField
