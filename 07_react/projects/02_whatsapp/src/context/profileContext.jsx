import { useScroll } from "framer-motion";
import { createContext, useState } from "react";


export const ProfileContext = createContext()

export default function ProfileContextProvider({ children }) {
   const [isShowProfile , setIsShowProfile] = useState(false)

   return (
      <ProfileContext.Provider value={{ isShowProfile, setIsShowProfile }}>{children}</ProfileContext.Provider>
   )
}