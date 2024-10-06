import { Button } from "antd";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { db } from "../../utils/firebase";
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useState } from "react";

export default function AllProducts() {

          const { user } = useContext(UserContext)
          const [allProd , setAllProd] = useState()

          useEffect(() => { 
               getProducts()
          }, [allProd])

          const getProducts = async () => {
               try {
                    const prodRef = doc(db, 'products', user.uid)
                    const importProd = await getDoc(prodRef)
                    setAllProd(importProd.data())
                    // console.log('allprod ->' , allProd)
               } catch (error) {
                    console.log("🚀 ~ getProducts ~ error:", error)

               }
          }



          return (
               <div className="main flex flex-col w-full py-3 gap-5">
                    <div className="heading text-center text-2xl">All Products</div>
                    <div className="products md:w-11/12 md:mx-auto w-full py-4 flex flex-wrap gap-8 justify-center">
                         {/* //* card */}
                         <div className="product w-3/12  p-2 rounded-lg flex flex-col gap-3 hover:shadow-medium
                    hover:transition-shadow cursor-pointer">
                              {/* //* img */}
                              <img src="#" alt="no image" className="img w-full h-40   rounded-xl" />
                              {/* //* context */}
                              <div className="content flex flex-col gap-2">
                                   <div className="name text-xl">{allProd?.productName}</div>
                                   <div className="desc text-sm text-slate-500">{allProd?.productDesc}</div>
                                   <div className="pirce flex justify-between">
                                        <div className="label">Min Price</div>
                                        <div className="price">{allProd?.productPrice}</div>
                                   </div>
                                   <Button>Show Product</Button>
                              </div>

                         </div>


                    </div>
               </div>
          )
     }