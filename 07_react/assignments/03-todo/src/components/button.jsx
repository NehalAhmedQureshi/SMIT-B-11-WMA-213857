function CustomButton({content,bgcolor,fontcolor,onclick,childButton}){
    return(
        <button 
        className="button"
        onClick={onclick}
        style={{
            backgroundColor:bgcolor?bgcolor:"lightcyan",
            color:fontcolor?fontcolor:"black",
            margin:"10px",
            padding:"10px"
        }}>{content}{childButton?childButton:""}</button>
    )
}

export default CustomButton