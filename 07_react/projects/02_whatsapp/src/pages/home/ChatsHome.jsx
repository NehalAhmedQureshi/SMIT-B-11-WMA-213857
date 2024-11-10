import { useContext, useEffect, useReducer, useState } from "react"
import { useSearchParams } from "react-router-dom"
import AddContact from "../../components/addContact"
import { UserContext } from "../../context/userContext"
import { ProfileContext } from "../../context/profileContext"
import Profile from "../../components/Profile"
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore"
import { db } from "../../utils/firebase"
import { keyframes } from "framer-motion/dom"


export default function ChatsHome() {
     const { isShowProfile, setIsShowProfile } = useContext(ProfileContext)
     console.log("🚀 ~ ChatsHome ~ isShowProfile:", isShowProfile)
     const { profileState, profileDispatch } = useContext(ProfileContext)
     const reducer = (state, action) => {
          console.log("🚀 ~ reducer ~ action:", action.value)
          console.log("🚀 ~ reducer ~ state:", state)
          switch (action.key) {
               case "isContactAdd":
                    return {
                         ...state,
                         isContactAdd: !state.isContactAdd,
                    };
               case "allContacts":
                    return {
                         ...state,
                         allContacts: action.value,
                    };
               case "keyUids":
                    return {
                         ...state,
                         keyUids: action.value,
                    };
               case "messagesData":
                    return {
                         ...state,
                         messagesData: action.value
                    }
               default:
                    return {
                         ...state,

                    };
          }
     }
     const initializeValue = {
          isContactAdd: false,
          allContacts: [],
          keyUids: [],
          messagesData: [],
     }
     const [search, setSearch] = useState('')
     const [state, dispatch] = useReducer(reducer, initializeValue)
     const { user } = useContext(UserContext);
     // const time = `${hours}:${minutes} ${amPm}`;
     const searched = state.allContacts?.filter(
          (data) => data.username.toLowerCase().indexOf(search) !== -1
     );
     console.log(user)
     const addContactHandler = () => {
          dispatch({ key: 'isContactAdd' })
     }
     const getContacts = async() => {
          try {
               const querySnapshot = await getDocs(collection(db, 'users'));
               const contacts = [];
               const keyUids = []
               querySnapshot.forEach((doc2) => {
                    const mergeUid = [user.uid, doc2.data().uid]
                    const keyUid = mergeUid.sort().join('-')
                    user.uid != doc2.data().uid ? keyUids.push(keyUid) : ''
                    contacts.push(doc2.data());
               });
               // console.log("🚀 ~ getContacts ~ keyUids:", keyUids)
               // console.log("🚀 ~ getContacts ~ contacts:", ...contacts)
               dispatch({
                    key: "keyUids",
                    value: keyUids
               })
               dispatch({
                    key: 'allContacts',
                    value: [...contacts], // Dispatch once with the accumulated data
               });

          } catch (error) {
               console.log("🚀 ~ getContacts ~ error:", error);
          }
     }
     useEffect(() => {
          getContacts()
     }, [])
     // {state.isContactAdd ? "Create Account" : isShowProfile ? "Profile" : "Chats"}
     return (
          <div className="main min-w-80 h-screen flex flex-col bg-slate-800 py-2 gap-2">
               {/*  //* navbar */}
               <div className="navbar  px-4 flex flex-col gap-2">
                    {/* //* header */}
                    <div className="header border-b-1 flex flex-row justify-between items-center ">
                         <div className="heading text-white text-xl">Chats</div>
                         <div className="icons flex flex-row gap-2">
                              <div className="icon text-slate-200  justify-center items-center p-2 rounded-full cursor-pointer" onClick={addContactHandler}
                                   style={{
                                        display: user.isLogin ? 'none' : 'flex',
                                   }}>
                                   <i className="fa-solid fa-comment-medical  text-xl" ></i>
                              </div>
                              <div className="icon text-slate-200 flex justify-center items-center p-2 rounded-full cursor-pointer">
                                   <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
                              </div>
                         </div>
                    </div>
                    <div className="search relative items-center" style={{
                         display: state.isContactAdd ? "none" : isShowProfile ? 'none' : 'flex'
                    }}>
                         <input type="text" placeholder="search" className="search text-sm w-full h-7 bg-slate-500 rounded-lg pl-9 active:border-none focus-visible:outline-none text-slate-50 placeholder:text-slate-100 cursor-pointer" onChange={(e) => setSearch(e.target.value)} />
                         <div className="icon bg-slate-50 w-5 h-5 rounded-full absolute left-1"></div>
                    </div>
                    <div className="tags flex-row gap-1" style={{
                         display: state.isContactAdd ? "none" : isShowProfile ? 'none' : 'flex'
                    }}>
                         <div className="tag bg-slate-500 active:bg-green-600 active:text-slate-50 hover:bg-slate-400 text-[10px] px-2 py-1 text-slate-300 rounded-full">All</div>
                         <div className="tag bg-slate-500 active:bg-green-600 active:text-slate-50 hover:bg-slate-400 text-[10px] px-2 py-1 text-slate-300 rounded-full">Unread</div>
                         <div className="tag bg-slate-500 active:bg-green-600 active:text-slate-50 hover:bg-slate-400 text-[10px] px-2 py-1 text-slate-300 rounded-full">Groups</div>
                    </div>
               </div>
               {/* //* home */}
               <div className="home h-full overflow-y-auto ">
                    {state.isContactAdd ? user.isLogin ? 'You are Logged In successfully' : <AddContact /> : isShowProfile ? <Profile /> : searched.map((data, index) => (
                         user.username == data.username ? '' : <div key={index} className="chat px-4 gap-1 w-full relative hover:bg-slate-500 h-16 flex items-center py-2" onClick={() => {
                              profileDispatch({ key: 'showMessage', value: data, })
                         }}>
                              <div className="profile w-12 h-10 bg-slate-400 rounded-full flex justify-center items-center text-xl">{data.username.slice(0, 2)}</div>
                              <div className="content h-full border-slate-300 w-full flex flex-col justify-evenly items-center before:absolute before:w-64 before:h-[1px] before:bg-slate-300 before:bottom-0">
                                   <div className="name w-full flex justify-between items-center">
                                        <div className="name text-sm text-slate-200">{data.username}</div>
                                        <div className="lastSeen text-xs text-slate-200">12:10pm</div>
                                   </div>
                                   <div className="message w-full">
                                        <div className="message text-xs text-slate-400">0</div>
                                   </div>
                              </div>
                         </div>))
                    }
               </div>
          </div>
     )
}