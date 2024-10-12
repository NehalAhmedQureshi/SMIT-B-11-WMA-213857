import { deleteDoc, deleteField, doc, getDoc, updateDoc, } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../utils/firebase";
import { useNavigate, useParams } from "react-router";
// import Modal from "../../conponents/Modal";
import CustomModal from "../../conponents/Modal";
import DeleteModal from "../../conponents/DeleteModal";



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

     

     return (
          <div className="main w-full">
               {loading ? (
                    <div className="w-full text-center text-2xl mt-[40vh] ">Loading...</div>
               ) : (
                    <div className="wrap w-full py-5" style={
                         {
                              backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/pubgtemp-e6dd0.appspot.com/o/WhatsApp%20Image%202024-10-09%20at%207.33.10%20PM.jpeg?alt=media&token=e96f46b7-5c3a-4132-81ea-3523949b2ded)',
                              backgroundSize: '100% 89vh',
                              backgroundRepeat: 'repeat',
                              width: '100%',
                         }
                    }>
                         <div className="footer px-5 w-full flex justify-start mb-4 gap-6 items-center">
                                   <CustomModal key={cardData.productName}/>
                                   <DeleteModal />
                              </div>
                         <div className="card bg-blur backdrop-blur-[8.6px] w-[95%] md:w-[70%] mx-auto  rounded-lg flex gap-5 flex-col hover:shadow-lg  hover:shadow-white justify-evenly items-center pb-2">
                              <div className="img w-full rounded-lg overflow-hidden h-[60vh] md:h-[70vh]"><img src={cardData.url} alt="no-image" className="w-full h-full" /></div>
                              <div className="content w-full text-orange-500 font-bold capitalize flex justify-between flex-col gap-5 px-6 items-center">
                                   <div className="name text-3xl font-serif">Carding Account</div>
                                   <div className="price text-xl">RS-{cardData.productPrice}/=PKR</div>
                              </div>
                              <div className="info w-full text-orange-500 font-bold capitalize flex gap-4 flex-col sm:flex-row justify-between  px-6 items-center">
                                   <div className="email px-4 py-2 bg-orange-200 rounded-lg cursor-pointer">Email:{cardData.productName}</div>
                                   <div className="password px-4 py-2 bg-orange-200 rounded-lg cursor-pointer">Password:{cardData.productCategory}</div>
                              </div>
                              {/* <div className="footer px-5 w-full flex justify-between items-center">
                                   <CustomModal key={cardData.productName}/>
                                   <DeleteModal />
                              </div> */}
                         </div>
                    </div>
               )
               }
          </div>
     )
}