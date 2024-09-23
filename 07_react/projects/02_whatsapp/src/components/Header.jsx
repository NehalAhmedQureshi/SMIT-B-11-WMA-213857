// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
     return (
          <div className="header bg-slate-600 w-12 h-screen flex flex-col justify-between py-2 px-2">
               <div className="homeIcons flex flex-col gap-2">
                    <div className="icon bg-slate-200 w-8 h-8 rounded-full cursor-pointer"></div>
                    <div className="icon bg-slate-200 w-8 h-8 rounded-full cursor-pointer"></div>
                    <div className="icon bg-slate-200 w-8 h-8 rounded-full cursor-pointer"></div>
                    <div className="icon bg-slate-200 w-8 h-8 rounded-full cursor-pointer"></div>
                    <div className="icon bg-slate-300 w-8 h-8 relative rounded-full mt-1 cursor-pointer before:block before:w-full before:h-[2px] before:bg-slate-200 before:absolute before:top-[-6.5px]"></div>
               </div>
               <div className="profileIcons flex flex-col gap-2">
               <div className="icon bg-slate-200 w-8 h-8 rounded-full cursor-pointer"></div>
               <div className="icon bg-slate-200 w-8 h-8 rounded-full cursor-pointer"></div>
               </div>
          </div>
     )
}