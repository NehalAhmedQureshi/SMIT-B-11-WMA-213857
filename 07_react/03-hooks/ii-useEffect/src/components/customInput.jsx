function CustomInput({placeHolder,bgcolor,className,onchange,inputValue,fontcolor,inputtype,inputid,}) {
    return(
    <input
        value={inputValue?inputValue:null}
        id={inputid?inputid:null}
        onChange={onchange?onchange:null}
        type={inputtype?inputtype:"text"}
        placeholder={placeHolder?placeHolder:""}
        className={className?className:""}
        style={{
            width:"40%",
            height:'30px',
            margin:"5px",
            fontSize:"16px",
            paddingLeft:'15px',
            backgroundColor:bgcolor?bgcolor:'transparent',
            fontFamily:'cursive',
            textTransform:"capitalize",
            borderRadius:"25px",
            boxShadow:'2px 2px 10px black',
            border:'none',
            color:fontcolor?fontcolor:"black",
        }}
    />
)
}
export default CustomInput