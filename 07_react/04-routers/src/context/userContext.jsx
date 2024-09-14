import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { setUserId } from "firebase/analytics";

export const UserContext = createContext();

function UserContextProvider({ children }) {
     const [ user , setUser ] = useState({
          isLogin : false ,
          email : '',
     })

const [isLoading , setLoading ] = useState(true)
useEffect(()=>{
     const subscriber = onAuthStateChanged(auth , async(user) => {
          if(user){
               const docRef = doc(db , 'users' , user.uid)
               const userInfo = await getDoc(docRef)
               console.log('user info data => ' , userInfo.data())
               setUser({
                    isLogin : true , 
                    ...userInfo.data(),
               })
               setLoading(false) 
               console.log('user hy =><=')
          }else{
               setLoading(false)
               setUser({
                    isLogin:false,
                    email:'',
               })
          }
     })
     return subscriber;

},[])  
     return (
          <UserContext.Provider value={{ user , setUser }}>
               {isLoading ? "Loading..." : children}
          </UserContext.Provider>
     )
}

export default UserContextProvider;