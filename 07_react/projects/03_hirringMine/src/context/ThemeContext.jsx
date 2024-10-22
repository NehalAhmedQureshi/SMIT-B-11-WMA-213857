import { document } from "postcss"
import { createContext, useState } from "react"


export const ThemeContext = createContext()

export function ThemeProvider({children}){

     const [isDark , setIsDark ] = useState(false)

     const toogleTheme = () =>{
          console.log('toogleTheme ==> ' , isDark)
          setIsDark(!isDark)
          localStorage.setItem('isDark' , isDark)
     }

     return (
          <ThemeContext.Provider value={{isDark , toogleTheme}}>
               {children}
          </ThemeContext.Provider>

     )
}