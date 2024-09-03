function CustomInput({placeHolder,bgcolor,className,onchange,value}) {
    return(
    <input
        value={value?value:null}
        onChange={onchange?onchange:null}
        type="text"
        placeholder={placeHolder?placeHolder:""}
        className={className?className:""}
        style={{
            width:"30%",
            height:'30px',
            margin:"5px",
            fontSize:"16px",
            paddingLeft:'15px',
            backgroundColor:bgcolor?bgcolor:'transparent',
            fontFamily:'cursive',
            textTransform:"capitalize",
            borderRadius:"25px",
            boxShadow:'2px 2px 10px black',
            border:'none'
        }}
    />
)
}
export default CustomInput