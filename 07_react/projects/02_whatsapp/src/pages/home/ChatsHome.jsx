import { useState } from "react"
import { useSearchParams } from "react-router-dom"


export default function ChatsHome() {

     const [search , setSearch] = useState('')
     const getDate = new Date()
     console.log("🚀 ~ ChatsHome ~ getDate:", getDate)

     const hours = getDate.getHours() < 10 ? `0${getDate.getHours()}` : getDate.getHours() > 12 ? getDate.getHours()-12 :''
     const minutes = getDate.getMinutes() < 10 ? `0${getDate.getMinutes()}` : getDate.getMinutes()
     const amPm = getDate.getHours > 12 ? 'PM' : 'AM'

     const time = `${hours}:${minutes} ${amPm}`
     console.log("🚀 ~ ChatsHome ~ time:", time)

     console.log(search)
     const [allContacts , setContects] = useState([
          {
               'contactName':'Arib',
          },
          {
               'contactName':'Shehzad',
          },{
               'contactName':'Waqas',
          },{
               'contactName':'Zain',
          },{
               'contactName':'Arsalan',
          },{
               'contactName':'Abdur Rehman',
          },{
               'contactName':'Mama',
          },
     ])
     const searched = allContacts?.filter(
          (data) => data.contactName.toLowerCase().indexOf(search) !== -1
     );
     console.log("🚀 ~ ChatsHome ~ searched:", searched)


     return (
          <div className="main w-80 h-screen flex flex-col bg-slate-800 py-2 gap-2">
               {/*  //* navbar */}
               <div className="navbar  px-4 flex flex-col gap-2">
                    {/* //* header */}
                    <div className="header flex flex-row justify-between items-center ">
                         <div className="heading text-white text-xl">Chats</div>
                         <div className="icons flex flex-row gap-2">
                              <div className="icon bg-slate-200 w-8 h-8 rounded-full cursor-pointer"></div>
                              <div className="icon bg-slate-200 w-8 h-8 rounded-full cursor-pointer"></div>
                         </div>
                    </div>
                    <div className="search relative flex items-center">
                         <input type="text" placeholder="search" className="search text-sm w-full h-7 bg-slate-500 rounded-lg pl-9 active:border-none focus-visible:outline-none text-slate-50 placeholder:text-slate-100 cursor-pointer" onChange={(e)=>setSearch(e.target.value)} />
                         <div className="icon bg-slate-50 w-5 h-5 rounded-full absolute left-1"></div>
                    </div>
                    <div className="tags flex flex-row gap-1">
                         <div className="tag bg-slate-500 hover:bg-slate-400 text-[10px] px-2 py-1 text-slate-300 rounded-full">All</div>
                         <div className="tag bg-slate-500 hover:bg-slate-400 text-[10px] px-2 py-1 text-slate-300 rounded-full">Unread</div>
                         <div className="tag bg-slate-500 hover:bg-slate-400 text-[10px] px-2 py-1 text-slate-300 rounded-full">Groups</div>
                    </div>
               </div>
               {/* //* home */}
               <div className="home h-full overflow-y-auto ">
                    {/* //* chat */}
                    <div className="chat px-4 gap-1 w-full relative hover:bg-slate-500 h-16 flex items-center py-2">
                         <div className="profile w-12 h-10 bg-slate-400 rounded-full"></div>
                         <div className="content h-full border-slate-300 w-full flex flex-col justify-evenly items-center before:absolute before:w-64 before:h-[1px] before:bg-slate-300 before:bottom-0">
                              <div className="name w-full flex justify-between items-center">
                                   <div className="name text-sm text-slate-200">contact name</div>
                                   <div className="lastSeen text-xs text-slate-200">12:28 PM</div>
                              </div>
                              <div className="message w-full">
                                   <div className="message text-xs text-slate-400">random message</div>
                              </div>
                         </div>
                    </div>
                    {searched.map((data,index) => (
                         <div key={index} className="chat px-4 gap-1 w-full relative hover:bg-slate-500 h-16 flex items-center py-2">
                         <div className="profile w-12 h-10 bg-slate-400 rounded-full"></div>
                         <div className="content h-full border-slate-300 w-full flex flex-col justify-evenly items-center before:absolute before:w-64 before:h-[1px] before:bg-slate-300 before:bottom-0">
                              <div className="name w-full flex justify-between items-center">
                                   <div className="name text-sm text-slate-200">{data.contactName}</div>
                                   <div className="lastSeen text-xs text-slate-200">{time}</div>
                              </div>
                              <div className="message w-full">
                                   <div className="message text-xs text-slate-400">random message</div>
                              </div>
                         </div>
                    </div>
                    ))}



               </div>
          </div>
     )
}