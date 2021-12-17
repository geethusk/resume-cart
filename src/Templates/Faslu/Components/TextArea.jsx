import { useEffect, useRef } from 'react'

const TextArea = ({value,onChange}) => {

    const ref = useRef(null);
    useEffect(() => {
        // console.log(ref.current.clientHeight);
        // console.log(ref.current.scrollHeight);
        ref.current.style.height = 10 + "px";
        ref.current.style.height = ref.current.scrollHeight + "px";
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
