import { Input, Textarea } from "@nextui-org/react";
import { Button } from "antd";
import { db, auth, storage } from "../../utils/firebase";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { doc, getDoc, setDoc, addDoc,collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { serverTimestamp } from "firebase/firestore/lite";
// import { storage } from "../../utils/firebase";
// import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const { user } = useContext(UserContext);
  // const [productName, setProductName] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardPrice, setCardPrice] = useState("");
  const [cardImg , setCardImg] = useState('')
  const [accountEmail , setAccountEmail ] = useState('')
  const [accountPassword , setAccountPassword ] = useState('')

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [errorMsg , setErrorMsg ] = useState('')
  const [allCards , setAllCards] = useState()
  const [url,setUrl] = useState()
  
  async function addCard() {
    try {
      setLoader(true);
      if (!cardType || !cardPrice || !cardImg || !accountEmail || !accountPassword) {
        throw new Error('Kindly Fill All Input Fields!');
      }
      setErrorMsg('');
  
      const storageRef = ref(storage, `cardImgs/${cardImg.name}`);
      const uploadTask = await uploadBytes(storageRef, cardImg);
  
      const url = await getDownloadURL(uploadTask.ref);
      const docRef = collection(db, 'cards');
      
      await addDoc(docRef, {
        cardType,
        url,
        cardPrice,
        accountEmail,
        accountPassword,
        uid:user?.uid
      });
  
      // Optionally navigate or show success message
      navigate('/cards'); // Redirect to products page
    } catch (error) {
      setLoader(false);
      setErrorMsg(error.message);
      console.error("Error adding product:", error);
    }
  }
  


  return (
    <div
      className="main w-full flex justify-center items-center "
      style={{
        backgroundImage:
          "url(https://firebasestorage.googleapis.com/v0/b/pubgtemp-e6dd0.appspot.com/o/bg%2FWhatsApp%20Image%202024-10-09%20at%207.33.10%20PM.jpeg?alt=media&token=04fa04f8-070c-44c1-8d11-5400e06f879e)",
        backgroundSize: "100vw 89.6vh",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "89.6vh",
      }}
    >
      <div
        className="form flex flex-col justify-center py-10 gap-8 items-center lg:w-2/4
          w-3/4 md:w-4/6  rounded-xl bg-white text-black"
      >
        <div className="heading text-orange-400 text-3xl md:text-4xl font-semibold ">
          Add Account
        </div>
        <div className="addproduct flex flex-col gap-2 md:gap-4 w-full px-12 justify-center ">
          <div className="text-red-500 text-center font-bold">{errorMsg ? errorMsg : ''}</div>
          {/* <Input
            variant="underlined"
            label="Card Name"
            type="text"
            value={productName}
            className="productName text-slate-900 font-bold capitalize"
            color="warning"
            style={{
              color: "black",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
            maxLength={15}
            minLength={3}
            onChange={(e) => setProductName(e.target.value)}
          /> */}
          <Input
            variant="underlined"
            label="Account Type"
            value={cardType}
            style={{
              color: "black",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
            type="text"
            color="warning"
            className="productType font-bold"
            onChange={(e) => setCardType(e.target.value)}
            required
          />
          <Input required type="file" accept="image/*" className="rounded-full bg-orange-300 hover:border-1 hover:bg-orange-500 transition-colors-opacity" onChange={(e)=>setCardImg(e.target.files[0])}/>
          {/* <Textarea
            label="Product Description"
            variant="bordered"
            placeholder="Enter Product description"
            disableAnimation
            disableAutosize
            onChange={(e) => setProductDesc(e.target.value)}
            style={{
              color: "white",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
            color="warning"
            classNames={{
              base: "max-w-xl",
              input: "resize-y min-h-[40px]",
            }}
          /> */}
          <Input
            variant="underlined"
            label="Account Price"
            value={cardPrice}
            type="number"
            className="productPrice  text-black font-extrabold"
            color="warning"
            
            onChange={(e) => setCardPrice(e.target.value)}
            required
          />
          <Input
            variant="underlined"
            label="Account Email"
            type="email"
            value={accountEmail}
            className="productName text-slate-900 font-bold"
            color="warning"
            style={{
              color: "black",
              fontWeight: 600,
              textTransform: "",
            }}
            maxLength={15}
            minLength={3}
            onChange={(e) => setAccountEmail(e.target.value)}
            required
          /> 
          <Input
            variant="underlined"
            label="Account Password"
            type="text"
            value={accountPassword}
            className="productName text-slate-900 font-bold "
            color="warning"
            style={{
              color: "black",
              fontWeight: 600,
              textTransform: "",
            }}
            maxLength={20}
            minLength={6}
            required
            onChange={(e) => setAccountPassword(e.target.value)}
          /> 
          <button
            onClick={() => addCard()}
            loading={loader}
            className="rounded-full py-2 outline outline-orange-600 hover:bg-orange-400 hover:outline-orange-500 active:bg-orange-600 active:border-orange-500 active:text-orange-300 px-4 text-slate-200 text-lg font-semibold mt-4 bg-orange-500"
          >
            {loader === true ? 'Loading...' : "Add Account"}
          </button>
        </div>
      </div>
    </div>
  );
}
