import { Input, Textarea } from "@nextui-org/react";
import { Button } from "antd";
import { useState } from "react";

export default function AddCards() {
     const [loader, setLoader] = useState()

     return (
          <div className="main w-full flex justify-center items-center  mt-5 ">
               <div className="form flex flex-col justify-center py-8 gap-8 items-center w-2/4 border-2 bg-slate-100 rounded-xl">
                    <div className="heading text-2xl font-semibold ">Add Card</div>
                    <div className="addproduct flex flex-col gap-4 w-full px-12 justify-center items-center">
                         <Input variant="underlined" label="Account Name" type="text" className="productName"
                              onChange={(e) => setProductName(e.target.value)} />
                         <Input variant="underlined" label="Account Type" type="text" color className="productType" onChange={(e) => setProductCategory(e.target.value)} />
                         <Textarea
                              label="Account Description"
                              variant="bordered"
                              placeholder="Enter Account description"
                              disableAnimation
                              disableAutosize
                              onChange={(e) => setProductDesc(e.target.value)}
                              classNames={{
                                   base: "max-w-xl",
                                   input: "resize-y min-h-[40px]",
                              }} />
                         <Input variant="underlined" label="Account Price" type="number" className="productPrice" onChange={(e) => setProductPrice(e.target.value)} />
                         <Button onClick={() => addProduct()} loading={loader} className="rounded-full py-5 text-lg font-semibold mt-4 w-2/5">Add Account</Button>
                    </div>
               </div>
          </div>

     )
}