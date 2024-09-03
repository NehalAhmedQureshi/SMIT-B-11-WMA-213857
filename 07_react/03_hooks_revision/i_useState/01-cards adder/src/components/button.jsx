// import "../style/CustomButton.css"
function CustomButton({onclick, content , fontcolor , bgcolor ,}){
    return (
        <button 
            onClick={onclick?onclick:null}
            
            style={{
                color:fontcolor?fontcolor:"Black",
                fontFamily:'cursive',
                backgroundColor:bgcolor ? bgcolor:"skyblue",
                padding:"10px 30px",
                fontWeight:"520",
                fontSize:"16px",
                borderRadius:'50px',
                border:'none',
                boxShadow:"2px 2px 7px black",
                // width:'30%'
            }}
            

        >{content}</button>
    )
}
export default CustomButton