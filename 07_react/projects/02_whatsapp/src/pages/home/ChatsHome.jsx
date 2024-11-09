import { useContext, useReducer, useState } from "react"
import { useSearchParams } from "react-router-dom"
import AddContact from "../../components/addContact"
import { UserContext } from "../../context/userContext"
import { ProfileContext } from "../../context/profileContext"
import Profile from "../../components/Profile"


export default function ChatsHome() {
     const { isShowProfile, setIsShowProfile } = useContext(ProfileContext)
     const reducer = (state, action) => {
          // console.log("🚀 ~ reducer ~ action:", action)
          // console.log("🚀 ~ reducer ~ state:", state)
          switch (action) {
               case "isContactAdd":
                    return {
                         ...state,
                         isContactAdd: !state.isContactAdd,
                    };
               default:
                    return {
                         ...state
                    };
          }
     }

     const initializeValue = {
          isContactAdd: false,
     }
     const [search, setSearch] = useState('')
     const [state, dispatch] = useReducer(reducer, initializeValue)
     const getDate = new Date();
     // console.log("🚀 ~ ChatsHome ~ getDate:", getDate);

     const rawHours = getDate.getHours();
     const hours = rawHours < 10 ? `0${rawHours}` : rawHours > 12 ? rawHours - 12 : rawHours === 12 ? 12 : rawHours;
     const minutes = getDate.getMinutes() < 10 ? `0${getDate.getMinutes()}` : getDate.getMinutes();
     const amPm = rawHours >= 12 ? 'PM' : 'AM';

     const { user } = useContext(UserContext);
     const time = `${hours}:${minutes} ${amPm}`;

     // console.log("🚀 ~ ChatsHome ~ time:", time)

     // console.log(search)
     const [allContacts, setContects] = useState([
          {
               'contactName': 'Arib',
          },
          {
               'contactName': 'Shehzad',
          }, {
               'contactName': 'Waqas',
          }, {
               'contactName': 'Zain',
          }, {
               'contactName': 'Arsalan',
          }, {
               'contactName': 'Abdur Rehman',
          }, {
               'contactName': 'Mama',
          }, {
               'contactName': 'Rozina Ani',
          },
     ])
     const searched = allContacts?.filter(
          (data) => data.contactName.toLowerCase().indexOf(search) !== -1
     );
     console.log(user)
     const addContactHandler = () => {
          dispatch('isContactAdd')
     }
     // console.log("🚀 ~ ChatsHome ~ searched:", searched)


     return (
          <div className="main min-w-80 h-screen flex flex-col bg-slate-800 py-2 gap-2">
               {/*  //* navbar */}
               <div className="navbar  px-4 flex flex-col gap-2">
                    {/* //* header */}
                    <div className="header border-b-1 flex flex-row justify-between items-center ">
                         <div className="heading text-white text-xl">{state.isContactAdd ? "Create Account" : isShowProfile ? "Profile":"Chats"}</div>
                         <div className="icons flex flex-row gap-2">
                              <div className="icon text-slate-200 flex justify-center items-center p-2 rounded-full cursor-pointer" onClick={addContactHandler}>
                                   {user.isLogin ? '' : <i class="fa-solid fa-comment-medical  text-xl" ></i>}
                              </div>
                              <div className="icon text-slate-200 flex justify-center items-center p-2 rounded-full cursor-pointer">
                                   <i class="fa-solid fa-ellipsis-vertical text-xl"></i>
                              </div>
                         </div>
                    </div>
                    <div className="search relative items-center" style={{
                         display: state.isContactAdd ? "none" : isShowProfile?'none':'flex'
                    }}>
                         <input type="text" placeholder="search" className="search text-sm w-full h-7 bg-slate-500 rounded-lg pl-9 active:border-none focus-visible:outline-none text-slate-50 placeholder:text-slate-100 cursor-pointer" onChange={(e) => setSearch(e.target.value)} />
                         <div className="icon bg-slate-50 w-5 h-5 rounded-full absolute left-1"></div>
                    </div>
                    <div className="tags flex-row gap-1" style={{
                         display: state.isContactAdd ? "none" :isShowProfile?'none': 'flex'
                    }}>
                         <div className="tag bg-slate-500 active:bg-green-600 active:text-slate-50 hover:bg-slate-400 text-[10px] px-2 py-1 text-slate-300 rounded-full">All</div>
                         <div className="tag bg-slate-500 active:bg-green-600 active:text-slate-50 hover:bg-slate-400 text-[10px] px-2 py-1 text-slate-300 rounded-full">Unread</div>
                         <div className="tag bg-slate-500 active:bg-green-600 active:text-slate-50 hover:bg-slate-400 text-[10px] px-2 py-1 text-slate-300 rounded-full">Groups</div>
                    </div>
               </div>
               {/* //* home */}
               <div className="home h-full overflow-y-auto ">
                    {state.isContactAdd ? user.isLogin ? '' : <AddContact /> : isShowProfile ? <Profile /> : searched.map((data, index) => (
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
                         </div>))
                    }
               </div>
          </div>
     )
}