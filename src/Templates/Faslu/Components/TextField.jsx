const TextField = ({onChange,value}) => {
    return(
        <input
            style={{
                width: value.length < 4 ? "4ch" : value.length * 1.3 +"ch"
            }
            }
            type="text"
            value={value}
            onChange={(e)=>onChange(e.target.value)}>
        </input>
    )
}
export default TextField