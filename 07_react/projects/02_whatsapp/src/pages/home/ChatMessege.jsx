import { useEffect } from "react"
import { useState } from "react"


export default function ChatMessage() {
     const user = 'nehal'
     
     const [chat, setChat] = useState('')
     const [time, setTime] = useState('')
     const date = () => {
          const getDate = new Date()
          // console.log("🚀 ~ ChatsHome ~ getDate:", getDate)

          const hours = getDate.getHours() < 10 ? `0${getDate.getHours()}` : getDate.getHours() > 12 ? getDate.getHours() - 12 : ''
          const minutes = getDate.getMinutes() < 10 ? `0${getDate.getMinutes()}` : getDate.getMinutes()
          const amPm = getDate.getHours > 12 ? 'PM' : 'AM'

          setTime(`${hours}:${minutes} ${amPm}`)
     }
     const [allChats, setAllChat] = useState([
          {
          sendername: 'nehal',
          message: 'Hi',
          time: "12:10 pm",
          recieverName: "username",
     },{
          sendername: 'username',
          message: 'kia kr rh ho',
          time: "01:10 pm",
          recieverName: "nehal",
     },
     {
          sendername: 'nehal',
          message: 'hello',
          time: "01:10 pm",
          recieverName: "username",
     },{
          sendername: 'username',
          message: '.....?',
          time: "01:10 pm",
          recieverName: "nehal",
     },
])
     const messageHandler = () => {
          console.log('m chala')
          if (chat !== '') {
               console.log(chat, 'chat =.>>>')
               const message = {
                    message: chat,
                    time: time,
                    sendername: user,
                    recieverName : 'username',
               }
               console.log(...allChats , 'all chats ===<<<')
               setAllChat([...allChats ,message ])
               setChat('')
               console.log("🚀 ~ messageHandler ~ message:", message)
          }
          console.log("🚀 ~ messageHandler ~ allChats:", allChats)
     }
     useEffect(() => {
          date()
     }, [messageHandler])
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
               <div className="messages flex flex-col flex-grow bg-slate-600 border-3 overflow-y-auto overflow-x-hidden relative p-3">
                    {/* //* recieved msg */}
                    {/* <div className="left-msg">
                         <div className="recieved-msg inline-block bg-green-700 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">Hi</div>
                              <div className="timestamp text-[8px] flex justify-end">{time}</div>
                         </div>
                    </div> */}
                    {/* //* send message */}
                    {/* <div className="right-msg flex justify-end">
                         <div className="send-msg inline-block bg-slate-500 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">ti</div>
                              <div className="timestamp text-[8px] flex justify-end">{time}</div>
                         </div>
                    </div> */}
                    {/* //* recieved msg */}
                    {/* <div className="left-msg">
                         <div className="recieved-msg inline-block bg-green-700 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">Kha ho,kia kr ri ho</div>
                              <div className="timestamp text-[8px] flex justify-end">{time}</div>
                         </div>
                    </div> */}
                    {/* //* send message */}
                    {/* <div className="right-msg flex justify-end">
                         <div className="send-msg inline-block bg-slate-500 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">kch ni</div>
                              <div className="timestamp text-[8px] flex justify-end">{time}</div>
                         </div>
                    </div> */}
                    {/* //* recieved msg */}
                    {/* <div className="left-msg">
                         <div className="recieved-msg inline-block bg-green-700 px-3 py-1 rounded-r-lg rounded-bl-lg">
                              <div className="rm-inner-msg text-sm flex justify-start">kesa ho , kia kr rh hoo</div>
                              <div className="timestamp text-[8px] flex justify-end">{time}</div>
                         </div>
                    </div> */}
                    {allChats.map((data,index) => (
                         data.sendername == 'nehal'?
                              <div key={index} className=" right-msg flex justify-end mb-1">
                                   <div className="send-msg inline-block max-w-[50%] bg-slate-500 px-3 py-1 rounded-r-lg rounded-bl-lg">
                                        <div className="rm-inner-msg text-sm flex flex-grow justify-start ">{data.message}</div>
                                        <div className="timestamp text-[8px] flex justify-end">{data.time}</div>
                                   </div>
                              </div>
                         : data.sendername == 'username' ? <div className="left-msg">
                              <div className=" recieved-msg inline-block max-w-[50%] bg-green-700 px-3 py-1 rounded-r-lg rounded-bl-lg ">
                                   <div className="rm-inner-msg text-sm flex justify-start">{data.message}</div>
                                   <div className="timestamp text-[8px] flex justify-end">{data.time}</div>
                              </div>
                         </div>:''
                    ))}
               </div>
               {/*  //* bottom */}
               <div className="footer bg-slate-700 w-full py-2">
                    <div className="wrap flex gap-2 mx-3">
                         <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"></div>
                         <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"></div>
                         <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"></div>
                         <input type="text" className="w-5/6 text-sm text-slate-600 font-serif active: outline-none bg-slate-300 rounded-full pl-4" placeholder="Enter your message..."
                              value={chat} onChange={(e) => { setChat(e.target.value) }} />
                         <div className="emoji w-7 h-7 rounded-full bg-slate-300 cursor-pointer"></div>
                         <div className="sender w-7 h-7 rounded-full bg-slate-300 cursor-pointer" onClick={messageHandler}></div>
                    </div>
               </div>
          </div>
     )
}
