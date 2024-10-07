import { User } from "@nextui-org/react";
import { defaultConfig } from "antd/es/theme/context";
import { createContext, useState } from "react";



export const Username = createContext()

export default function UsernameProvider({ children }) {
     const [username, setUsername] = useState()

     return (
          <Username.Provider value={{username, setUsername}}>
               {children}
          </Username.Provider>
     )
}