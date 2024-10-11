import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, useNavbar } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { db } from "../utils/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore/lite";
// import {MailIcon} from './MailIcon.jsx';
// import {LockIcon} from './LockIcon.jsx';

export default function CustomModal() {
     const { id } = useParams();
     // console.log("🚀 ~ CustomModal ~ id: from modal", id)
     const navigate = useNavigate()
     const [cardData, setCardData] = useState([])
     const [loading, setLoading] = useState(true)
     const [productName, setName] = useState('')
     // console.log("🚀 ~ CustomModal ~ productName:", productName)
     const [productPrice, setPrice] = useState('')
     // console.log("🚀 ~ CustomModal ~ productPrice:", productPrice)
     const [productCategory, setType] = useState('')
     // console.log("🚀 ~ CustomModal ~ productCategory:", productCategory)
     const [url ,setImg] = useState('')
     const [errorMsg, setErrorMsg] = useState('')

     async function getProduct() {
          try {
               const docRef = doc(db, 'cards', id)
               const data = await getDoc(docRef)
               // console.log("🚀 ~ useEffect ~ data:", data.data())
               setCardData(data.data())
               setName(cardData.productName)
               setPrice(cardData.productPrice)
               setType(cardData.productCategory)
               setImg(cardData.url)
          } catch (error) {
               console.log("🚀 ~ getProduct ~ error:", error.message)
               // console.log("🚀 ~ getProduct ~ error:", error)
          }
     }
     useEffect(() => {
          getProduct()
          setLoading(false)
     }, [])
     const { isOpen, onOpen, onOpenChange } = useDisclosure();
     
     async function UpdateCard() {
          try {
               const docRef = doc(db, 'cards', id)
               const result =await updateDoc(docRef , {
                    productName ,
                    productCategory,
                    productPrice ,
                    url,
               })
               // console.log("🚀 ~ UpdateCard ~ result:", result)
               setErrorMsg('Changes Successfully!')
               navigate(`/cards/${id}`)
          } catch (error) {
               // console.log("🚀 ~ UpdateCard ~ error:", error)
               console.log("🚀 ~ UpdateCard ~ error:", error.message)
          }
     }


     return (
          <div>
               <Button onPress={onOpen} onClick={()=>getProduct()} color="warning">{loading ? 'Loading..' : 'Edit'}</Button>
               <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="top-center"
               >
                    <ModalContent>
                         {(onClose) => (
                              <>
                                   <ModalHeader className="flex flex-col gap-1">Edit Card</ModalHeader>
                                   {productName == undefined?<div className="w-full text-center">Loading...</div>:<ModalBody>
                                        <div className="error text-red-400">{errorMsg ? errorMsg : ''}</div>
                                        <Input
                                             autoFocus
                                             label="Card Name"
                                             placeholder="Enter Card Name"
                                             variant="bordered"
                                             type="text"
                                             color="warning"
                                             value={productName ?  productName:'Loading...'}
                                             onChange={(e) => { setName(e.target.value) }}
                                        />
                                        <Input
                                             label="Card Type"
                                             placeholder="Enter Card Type"
                                             type="text"
                                             variant="bordered"
                                             color="warning"
                                             onChange={(e) => { setType(e.target.value) }}
                                             value={productCategory ? productCategory: 'Loading...'  }
                                        />
                                        <Input
                                             label="Card Price"
                                             placeholder="Enter Card Price"
                                             type="number"
                                             variant="bordered"
                                             color="warning"
                                             value={productPrice ? productPrice: '000' }
                                             onChange={(e) => { setPrice(e.target.value) }}
                                        />
                                   </ModalBody>}
                                   <ModalFooter>
                                        <Button color="danger" variant="flat" onPress={onClose}>
                                             Close
                                        </Button>
                                        <Button color="warning" onClick={() => {
                                             if (productName == cardData.productName && productCategory == cardData.productCategory && productPrice == cardData.productPrice) {
                                                  setErrorMsg('Please Make some changes!')
                                             } else {
                                                  UpdateCard()
                                             }
                                        }}>
                                             Edit
                                        </Button>
                                   </ModalFooter>
                              </>
                         )}
                    </ModalContent>
               </Modal>
          </div>
     );
}