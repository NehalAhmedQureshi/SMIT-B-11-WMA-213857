import { useScroll } from "framer-motion";
import { createContext, useReducer, useState } from "react";


export const ProfileContext = createContext()

export default function ProfileContextProvider({ children }) {
   function reducer(state, action) {
      switch (action.key) {
         case 'showMessage':
            return {
               ...state,
               messageShow: !state.messageShow,
               messageData: action.value
            }
         default:
            return {
               ...state
            }
      }
   }
   const initialValue = {
      messageShow: false
   }
   const [profileState, profileDispatch] = useReducer(reducer, initialValue)
   const [isShowProfile, setIsShowProfile] = useState(false)
   return (
      <ProfileContext.Provider value={{ isShowProfile, setIsShowProfile, profileState, profileDispatch }}>{children}</ProfileContext.Provider>
   )
}