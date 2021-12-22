import { useEffect,useRef } from "react";
const TextField = ({onChange,value,className}) => {
    const ref=useRef(null);
    useEffect(() => {
        ref.current.style.width = 10+"px"

        ref.current.style.width = ref.current.scrollWidth+"px";
    }, [value])
    return (
        <input 
        // style={
        // {
        //   width:value.length<3 ? "4ch" :value.length*1.2+"ch"  
        // }        
    // }
    type="text" 
    className={className}
    ref={ref}
        value={value}
                onChange={(e)=>onChange(e.target.value)}/>
    )
}

export default TextField
