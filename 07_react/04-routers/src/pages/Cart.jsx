import { useContext } from "react"
import { CartContext } from '../context/cartContext'

export default function Cart() {

     const { cartItems } = useContext(CartContext)
     return (
          <div className="flex flex-col p-3  bg-slate-400 py-1 ">
               <div className="heading text-center font-semibold text-2xl font-sans mt-5 mb-5">My Carts</div>
               {cartItems.map((data , index) => (
                    <div key={index} className=" bg-blue-gray-100 flex mb-2 p-2 rounded-md">
                         <img src={data.images[2]} className="bg-red-600 rounded-full w-20 h-20 img mr-5" />
                         <div className="content text-start">
                              <div className="name">{index+1}) {data.title}</div>
                              <div className="price-quantity">Price: ${data.price}</div>
                              <div className="quantity">Quantity: {data.quantity}</div>
                         </div>
                    </div>
               ))}

          </div>
     )
}