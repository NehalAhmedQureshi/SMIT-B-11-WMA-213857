import { useState, useEffect, createContext, useContext, } from "react";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebase'
import { UserContext } from "./userContext";

export const CartContext = createContext()

export default function CartContextProvider({ children }) {

     const { user } = useContext(UserContext);
     const [cartItems, setCartItems] = useState([])
     useEffect(() => {
          const items = localStorage.getItem('cartItems')

          if (items) {
               setCartItems([...JSON.parse(items)])
          }
     }, [])

     useEffect(() => {
          localStorage.setItem('cartItems', JSON.stringify(cartItems))
     }, [cartItems])

     const addItemToCart = (item) => {
          const arr = cartItems
          const productIndex = cartItems.findIndex((data) => data.id === item.id)
          if (productIndex === -1) {
               arr.push(item)
          } else {
               arr[productIndex].quantity++
          }
          setCartItems([...arr])
     }

     return (
          <CartContext.Provider value={{
               cartItems,
               addItemToCart,
               //     removeItemFromCart,
               //     isItemAdded
          }}>
               {children}
          </CartContext.Provider>
     )

}