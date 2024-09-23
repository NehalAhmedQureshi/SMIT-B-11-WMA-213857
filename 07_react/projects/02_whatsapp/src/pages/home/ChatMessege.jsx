

export default function ChatMessage(){
     return (
          <div className="main bg-slate-700 flex-grow h-screen">
               <div className="navbar bg-slate-500 w-full h-12 flex justify-between items-center py-1 px-2">
                    <div className="profile flex gap-2">
                         <div className="img w-10 h-10 bg-slate-100 rounded-full"></div>
                         <div className="content h-full flex flex-col justify-evenly">
                              <div className="name text-slate-100 text-sm">user name</div>
                              <div className="status text-gray-300 text-xs">last seen today at...</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}