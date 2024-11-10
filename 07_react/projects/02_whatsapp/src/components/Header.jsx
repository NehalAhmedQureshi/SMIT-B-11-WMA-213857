// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { ProfileContext } from "../context/profileContext"


export default function Header() {
     let { isShowProfile , setIsShowProfile} = useContext(ProfileContext)
     // let isShowProfile = localStorage.getItem('isShowProfile')
     console.log("🚀 ~ Header ~ isShowProfile:", isShowProfile)
     const {user} = useContext(UserContext)
     return (
          <div className="header bg-slate-600 h-screen flex flex-col justify-between py-2 px-2">
               <div className="homeIcons flex flex-col gap-0 items-center">
                    <div className="icon text-slate-200 hover:bg-slate-500 rounded-full cursor-pointer flex justify-center p-2 items-center">
                    <i className="fa-solid text-xl fa-message"></i>
                    </div>
                    <div className="icon text-slate-200 hover:bg-slate-500 rounded-full cursor-pointer flex justify-center p-2 items-center">
                    <i className="fa-solid text-xl fa-chart-pie"></i>
                    </div>
                    <div className="icon text-slate-200 hover:bg-slate-500 rounded-full cursor-pointer flex justify-center p-2 items-center">
                    <i className="fa-solid text-xl fa-comment-dots"></i>
                    </div>
                    <div className="icon text-slate-200 hover:bg-slate-500 rounded-full cursor-pointer flex justify-center p-2 items-center">
                    <i className="fa-solid text-xl fa-users"></i>
                    </div>
                    <div className="icon bg-slate-300 w-8 h-8 relative rounded-full cursor-pointer before:block before:w-full before:h-[2px] before:bg-slate-200 before:absolute before:top-[-6.5px] my-2"></div>
               </div>
               <div className="profileIcons flex flex-col">
               <div className="icon text-slate-200 hover:bg-slate-500 flex justify-center p-2 rounded-full cursor-pointer">
               <i className="fa-solid fa-gear text-xl"></i>
               </div>
               <div className="icon text-slate-200 bg-slate-400 hover:bg-slate-500 rounded-full flex justify-center items-center cursor-pointer p-2" 
               onClick={()=>setIsShowProfile(!isShowProfile)}
               style={{
                    backgroundColor: isShowProfile ? 'blue' : '',
               }}>
               {user?.isLogin ? user?.username.slice(0,2): <i className="fa-solid fa-user-secret text-xl"></i>}
               </div>
               </div>
          </div>
     )
}