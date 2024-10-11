import { deleteDoc, deleteField, doc, getDoc, updateDoc, } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../utils/firebase";
import { useNavigate, useParams } from "react-router";
// import Modal from "../../conponents/Modal";
import CustomModal from "../../conponents/Modal";



export default function Card() {
     const { id } = useParams();
     const [loading, setLoading] = useState(true)
     // console.log("🚀 ~ Card ~ id:", id)
     const navigate = useNavigate()
     const [cardData, setCardData] = useState([])

     async function getCardData() {
          const docRef = doc(db, 'cards', id)
          const result = await getDoc(docRef)
          // console.log("🚀 ~ getCardData ~ result:", result.data())
          setCardData(result.data())
          setLoading(false)
     }
     useEffect(() => {
          getCardData()
     }, [])

     async function deleteCard() {
          try {
               const docRef = doc(db, 'cards', id)
               const deleteData = await deleteDoc(docRef)
               // console.log("🚀 ~ deleteCard ~ deleteData:", deleteData)
               navigate('/cards')
          } catch (error) {
               // console.log("🚀 ~ deleteCard ~ error:", error)
          }
     }

     return (
          <div className="main w-full">
               {loading ? (
                    <div className="w-full text-center text-2xl mt-[40vh] ">Loading...</div>
               ) : (
                    <div className="wrap w-full py-5" style={
                         {
                              backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/pubgtemp-e6dd0.appspot.com/o/WhatsApp%20Image%202024-10-09%20at%207.33.10%20PM.jpeg?alt=media&token=e96f46b7-5c3a-4132-81ea-3523949b2ded)',
                              backgroundSize: '100% 89vh',
                              backgroundRepeat: 'no-repeat',
                              width: '100%',
                              height: '89.5vh'
                         }
                    }>
                         <div className="card bg-blur backdrop-blur-[7.6px] w-[80%] mx-auto  rounded-lg flex gap-5 flex-col hover:shadow-lg  hover:shadow-white justify-evenly items-center pb-2 h-[80vh]">
                              <div className="img rounded-lg overflow-hidden h-[50vh]"><img src={cardData.url} alt="no-image" className="w-full h-full" /></div>
                              <div className="content w-full text-orange-500 font-bold capitalize flex justify-between  px-6 items-center">
                                   <div className="name text-3xl font-serif">{cardData.productName}</div>
                                   <div className="price">RS-{cardData.productPrice}</div>
                              </div>
                              <div className="info w-full text-orange-500 font-bold capitalize flex justify-between  px-6 items-center">
                                   <div className="email px-4 py-2 bg-orange-200 rounded-lg cursor-pointer">Email:example@gmial.com</div>
                                   <div className="password px-4 py-2 bg-orange-200 rounded-lg cursor-pointer">Password:2333232</div>
                              </div>
                              <div className="footer px-5 w-full flex justify-between items-center">
                                   <CustomModal key={cardData.productName}/>
                                   <button className="px-5 py-2 bg-orange-500 hover:bg-orange-400 active:bg-orange-600 active:text-orange-300 rounded-lg cursor-pointer" onClick={() => deleteCard()}>Delete Card</button>
                              </div>
                         </div>
                    </div>
               )
               }
          </div>
     )
}