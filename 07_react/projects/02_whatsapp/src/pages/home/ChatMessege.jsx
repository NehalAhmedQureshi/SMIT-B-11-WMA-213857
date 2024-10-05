

export default function ChatMessage() {
     return (
          <div className="main bg-slate-700 flex flex-col flex-grow h-screen">
               {/* //* top header  */}
               <div className="navbar bg-slate-500 w-full h-12 flex justify-between items-center py-1 px-2">
                    <div className="profile flex gap-2">
                         <div className="img w-10 h-10 bg-slate-100 rounded-full"></div>
                         <div className="content h-full flex flex-col justify-evenly">
                              <div className="name text-slate-100 text-sm">user name</div>
                              <div className="status text-gray-300 text-xs">last seen today at...</div>
                         </div>
                    </div>
               </div>
               {/*  //* chats  */}
               <div className="messages flex flex-col flex-grow bg-slate-600 border-3 relative p-3">
                    {/* //* recieved msg */}
                    <div className="left-msg">
                         <div className="recieved-msg inline-block bg-green-700 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">Hi</div>
                              <div className="timestamp text-[8px] flex justify-end">12:30 PM</div>
                         </div>
                    </div>
                    {/* //* send message */}
                    <div className="right-msg flex justify-end">
                         <div className="send-msg inline-block bg-slate-500 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">ti</div>
                              <div className="timestamp text-[8px] flex justify-end">12:30 PM</div>
                         </div>
                    </div>
                    {/* //* recieved msg */}
                    <div className="left-msg">
                         <div className="recieved-msg inline-block bg-green-700 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">Kha ho,kia kr ri ho</div>
                              <div className="timestamp text-[8px] flex justify-end">12:30 PM</div>
                         </div>
                    </div>

               </div>
               {/*  //* bottom */}
               <div className="footer bg-slate-700 w-full py-2">
                    <div className="wrap flex gap-2 mx-3">
                         <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"></div>
                         <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"></div>
                         <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"></div>
                         <input type="text" className="w-5/6 text-sm text-slate-600 font-serif active: outline-none bg-slate-300 rounded-full pl-4" placeholder="Enter your message..." />
                         <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"></div>
                         <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"></div>
                    </div>
               </div>
          </div>
     )
}