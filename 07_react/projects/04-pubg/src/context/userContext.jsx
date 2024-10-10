import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
// import { setUserId } from "firebase/analytics";
import '../App.css'
import InternetNotFound from "../NotFound/InternetNotFound";
import { useNavigate } from "react-router";
export const UserContext = createContext();

function UserContextProvider({ children }) {
     const [isInternet , setInternet ] = useState(true)
     const [user, setUser] = useState({
          isLogin: false,
          email: '',
     })

     const [isLoading, setLoading] = useState(true)
     useEffect(() => {
          const subscriber = onAuthStateChanged(auth, async (user) => {
               try {
                    if (user) {
                         const docRef = doc(db, 'users', user.uid)
                         const userInfo = await getDoc(docRef)
                         // console.log('user info data => ', userInfo.data())
                         setLoading(false)
                         setUser({
                              isLogin: true,
                              ...userInfo.data(),
                         })
                         // console.log('user hy =><=')
                         // navigate('/')
                    } else {
                         setLoading(false)
                         setUser({
                              isLogin: false,
                              email: '',
                         })
                         navigate("/auth")
                    }
               } catch (error) {
                    console.log("🚀 ~ subscriber ~ error:", error)
                    console.log("🚀 ~ subscriber ~ error:", error.message)
                    if (error.message === 'Failed to get document because the client is offline.') {
                         console.log('net lagwa lo')
                         setInternet(false)
                    }
               }
          })
          return subscriber;

     }, [])
     return (
          <UserContext.Provider value={{ user, setUser }}>
           { !isInternet ? <InternetNotFound /> : isLoading ? <div className="w-full h-screen flex justify-center items-center text-2xl">Loading...</div> :children} 
               {/* {children} */}
          </UserContext.Provider>
     )
}
/*/* HTML: <div class="loader"></div> */

export default UserContextProvider;