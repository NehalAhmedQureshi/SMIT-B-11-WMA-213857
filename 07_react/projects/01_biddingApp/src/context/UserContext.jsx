import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth, db } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import InternetNotFound from "../pages/NotFound/InternetNotFound";
// import { setUserId } from "firebase/analytics";

export const UserContext = createContext()

function UserContextProvider({ children }) {
     const [isInternet , setInternet ] = useState(true)
     // const navigate = useNavigate()
     const [user, setUser] = useState({
          isLogin: false,
          email: ''
     })

     const [isLoading, setLoading] = useState(true)

     useEffect(() => {
          const subscriber = onAuthStateChanged(auth, async (user) => {
               try {
                    if (user) {
                         const docRef = doc(db, 'users', user.uid)
                         const userInfo = await getDoc(docRef)
                         console.log('user info data => ', userInfo.data())
                         setUser({
                              isLogin: true,
                              ...userInfo.data(),
                         })
                         setLoading(false)
                         // console.log('user hy =><=')
                    } else {
                         setLoading(false)
                         setUser({
                              isLogin: false,
                              email: '',
                         })
                    }
               } catch (error) {
                    console.log("🚀 ~ subscriber ~ error:", error.message)
                    if (error.message === 'Failed to get document because the client is offline.') {
                         // console.log('net lagwa lo')
                         setInternet(false)
                    }

               }
          })
          return subscriber;
     }, [])

     return (
          <UserContext.Provider value={{ user, setUser }}>
           { !isInternet ? <InternetNotFound /> : isLoading ? <div>Loading</div> :children} 
               {/* {children} */}
          </UserContext.Provider>
     )
}
export default UserContextProvider