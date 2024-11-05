// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
     return (
          <div className="header bg-slate-600 h-screen flex flex-col justify-between py-2 px-2">
               <div className="homeIcons flex flex-col gap-0 items-center">
                    <div className="icon text-slate-200 hover:bg-slate-500 rounded-full cursor-pointer flex justify-center p-2 items-center">
                    <i class="fa-solid text-xl fa-message"></i>
                    </div>
                    <div className="icon text-slate-200 hover:bg-slate-500 rounded-full cursor-pointer flex justify-center p-2 items-center">
                    <i class="fa-solid text-xl fa-chart-pie"></i>
                    </div>
                    <div className="icon text-slate-200 hover:bg-slate-500 rounded-full cursor-pointer flex justify-center p-2 items-center">
                    <i class="fa-solid text-xl fa-comment-dots"></i>
                    </div>
                    <div className="icon text-slate-200 hover:bg-slate-500 rounded-full cursor-pointer flex justify-center p-2 items-center">
                    <i class="fa-solid text-xl fa-users"></i>
                    </div>
                    <div className="icon bg-slate-300 w-8 h-8 relative rounded-full cursor-pointer before:block before:w-full before:h-[2px] before:bg-slate-200 before:absolute before:top-[-6.5px] my-2"></div>
               </div>
               <div className="profileIcons flex flex-col">
               <div className="icon text-slate-200 hover:bg-slate-500 flex justify-center p-2 rounded-full cursor-pointer">
               <i class="fa-solid fa-gear text-xl"></i>
               </div>
               <div className="icon text-slate-200 hover:bg-slate-500 rounded-full flex justify-center items-center cursor-pointer p-2">
               <i class="fa-solid fa-user-secret text-xl"></i>
               </div>
               </div>
          </div>
     )
}