function CustomButton({text, onClick, bgColor, textColor}) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: bgColor ? bgColor : "lightcoral",
                color: textColor ? textColor : "black",
                margin:"2px"
            }
            }>{text}</button>
    )
}

export default CustomButton