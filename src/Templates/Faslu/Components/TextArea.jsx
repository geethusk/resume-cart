import { useEffect, useRef } from 'react'

const TextArea = ({value,onChange,className,addToList=null}) => {

    const ref = useRef(null);
    useEffect(() => {
        // console.log(ref.current.clientHeight);
        ref.current.style.height = 10 + "px";
        ref.current.style.height = ref.current.scrollHeight + "px";
        if(value.split("\n").length > 1){
            if(addToList !== null){
                onchange(value.split("\n")[0]);
                addToList(value.split("\n")[1]);
            }
        }
    },[value]);
    return (
        <textarea
            ref= {ref}
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            className={className}
        />
    )
}

export default TextArea
