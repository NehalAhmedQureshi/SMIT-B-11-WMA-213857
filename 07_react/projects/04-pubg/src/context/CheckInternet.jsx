import { createContext, useState } from "react";


export const CheckInternet = createContext()

export default function CheckInternetProvider({children}){

     const [checkInternet , setCheckInternet ] = useState('')
     return(
          <CheckInternet.Provider value={{checkInternet , setCheckInternet}}>
               {children}
          </CheckInternet.Provider>
     )
}