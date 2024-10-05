import { Input, Textarea } from "@nextui-org/react";
import { Button } from "antd";
import { db, auth } from "../../utils/firebase";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react"
import { useEffect, } from "react";
import { useState } from "react";
import { doc, getDoc, setDoc , addDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function AddProduct() {
     const { user } = useContext(UserContext);
     const [productName, setProductName] = useState('')
     const [productCategory, setProductCategory] = useState('')
     const [productDesc, setProductDesc] = useState('')
     const [productPrice, setProductPrice] = useState('')
     const [loader, setLoader] = useState()
     const navigate = useNavigate()

     async function addProduct() {
          try {
               setLoader(true)
               const docRef = doc(db, "products", user.uid)
               let importProd = (await getDoc(docRef)).data()
               const prod = {
                    owner: user.uid,
                    productName,
                    productPrice,
                    productDesc,
                    productCategory,
               }
               const result =addDoc(docRef, {
                    importProd ,
                    prod
               })

          console.log(result, 'result')
          navigate("/all-products/")
          setLoader(false)
     } catch (error) {
          setLoader(false)
          console.log("🚀 ~ addProduct ~ error:", error)
          console.log("🚀 ~ addProduct ~ error ~ message:", error.message)
     }
}

return (
     <div className="main w-full flex justify-center items-center ">
          <div className="form flex flex-col justify-center py-10 gap-8 items-center w-2/4 border-2  rounded-xl">
               <div className="heading text-2xl font-semibold ">Add Product</div>
               <div className="addproduct flex flex-col gap-4 w-full px-12 justify-center items-center">
                    <Input variant="underlined" label="Product Name" type="text" className="productName"
                         onChange={(e) => setProductName(e.target.value)} />
                    <Input variant="underlined" label="Product Type" type="text" color className="productType" onChange={(e) => setProductCategory(e.target.value)} />
                    <Textarea
                         label="Product Description"
                         variant="bordered"
                         placeholder="Enter Product description"
                         disableAnimation
                         disableAutosize
                         onChange={(e) => setProductDesc(e.target.value)}
                         classNames={{
                              base: "max-w-xl",
                              input: "resize-y min-h-[40px]",
                         }} />
                    <Input variant="underlined" label="Product Price" type="number" className="productPrice" onChange={(e) => setProductPrice(e.target.value)} />
                    <Button onClick={() => addProduct()} loading={loader} className="rounded-full py-5 text-lg font-semibold mt-4 w-2/5">Add Product</Button>
               </div>
          </div>
     </div>
)
}