import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { setUserId } from "firebase/analytics";
import '../App.css'
export const UserContext = createContext();

function UserContextProvider({ children }) {
     const [user, setUser] = useState({
          isLogin: false,
          email: '',
          username: '',
          phoneNumber: '',
     })

     const [isLoading, setLoading] = useState(true)
     useEffect(() => {
          const subscriber = onAuthStateChanged(auth, async (user) => {
               if (user) {
                    const docRef = doc(db, 'users', user.uid)
                    const userInfo = await getDoc(docRef)
                    // console.log('user info data => ', userInfo.data())
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
                         username: '',
                         phoneNumber: '',
                    })
               }
          })
          return subscriber;

     }, [])
     return (
          <UserContext.Provider value={{ user, setUser }}>
               {isLoading ?
                    <div className="wrap w-full h-screen flex justify-center items-center">
                         <div className=" loader"></div>
                    </div>
                    : children
               }
          </UserContext.Provider>
     )
}
/*/* HTML: <div class="loader"></div> */

export default UserContextProvider;