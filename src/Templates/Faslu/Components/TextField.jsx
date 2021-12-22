import { useEffect, useRef } from "react";

const TextField = ({onChange,value}) => {
    const ref = useRef(null);
    useEffect(() => {
        ref.current.style.width = 15 +"px";
        ref.current.style.width =  ref.current.scrollWidth + "px";
    },[value]);
    return(
        <input
            // style={{
            //     width: value.length < 4 ? "4ch" : value.length * 1.3 +"ch"
            // }
            // }
            ref= {ref}
            type="text"
            value={value}
            onChange={(e)=>onChange(e.target.value)}>
        </input>
    )
}
export default TextField