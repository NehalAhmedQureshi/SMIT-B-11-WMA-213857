function Avatar({name , profileImg }){
    return(
        <div className="avatar">
            <img src={profileImg} className="avatarImg" />
            <div className="content">
                <div className="avatarName">{name}</div>
            </div>
        </div>
    )
}
export default Avatar