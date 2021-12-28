import { useEffect,useRef } from "react";
const TextArea = ({value,onChange,className,addToList=null,length,deleteList=()=>{}}) => {
    const ref=useRef(null);
    useEffect(() => {
        ref.current.style.height = 10+"px"

        ref.current.style.height = ref.current.scrollHeight+"px";
        if(addToList !==null){
                if(value.split("\n").length>1){
                onChange(value.split("\n")[0]);
                addToList({id:length+1, value:value.split("\n")[1]});
                }
        }
        
    }, [value])
    return (
       <textarea
       ref={ref}
       value={value}
       onChange={(e)=>onChange(e.target.value)}
       onKeyDown={e=>{
           if(e.code==="Backspace" && e.target.selectionStart===0){
               deleteList(value)
           }
       }}
       className={className}
       autoFocus/>
    )
}

export default TextArea
