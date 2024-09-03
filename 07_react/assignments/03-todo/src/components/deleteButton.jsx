function DeleteButton({content,bgcolor,fontcolor,onclick}){
    return (

        <button
        onClick={onclick}
        style={{
            fontSize:"10px",
            margin:"3px",
            marginLeft:"10px",
            padding:"2px",
            backgroundColor:bgcolor?bgcolor:"red",
            color:fontcolor?fontcolor:"white",
            // border:"2px solid black"
        }}>{content}</button>
    )
}

export default DeleteButton