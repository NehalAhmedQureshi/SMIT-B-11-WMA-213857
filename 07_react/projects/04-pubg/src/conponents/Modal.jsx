import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, useNavbar } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { db } from "../utils/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore/lite";
import { UserContext } from "../context/userContext";

export default function CustomModal() {
     const { id } = useParams();
     const { user } = useContext(UserContext)
     const navigate = useNavigate()
     const [cardData, setCardData] = useState([])
     const [loading, setLoading] = useState(true)
     const [cardPrice, setPrice] = useState('')
     const [cardType, setType] = useState('')
     const [accountEmail, setAccountEmail] = useState('')
     const [accountPassword, setAccountPassword] = useState('')
     const [url, setImg] = useState('')
     const [errorMsg, setErrorMsg] = useState('')

     async function getCard() {
          try {
               const docRef = doc(db, 'cards', id)
               const data = await getDoc(docRef)
               // console.log("🚀 ~ useEffect ~ data:", data.data())
               setCardData(data.data())
               // setName(cardData.productName)
               setPrice(cardData.cardPrice)
               setType(cardData.cardType)
               setImg(cardData.url)
               setAccountEmail(cardData.accountEmail)
               setAccountPassword(cardData.accountPassword)
          } catch (error) {
               console.log("🚀 ~ getCard ~ error:", error.message)
               // console.log("🚀 ~ getCard ~ error:", error)
          }
     }
     useEffect(() => {
          getCard()
          setLoading(false)
     }, [])
     const { isOpen, onOpen, onOpenChange } = useDisclosure();

     async function UpdateCard() {
          try {
               const docRef = doc(db, 'cards', id)
               const result = await updateDoc(docRef, {
                    cardType,
                    cardPrice,
                    url,
                    accountEmail,
                    accountPassword,
                    uid: user?.uid,
               })
               // console.log("🚀 ~ UpdateCard ~ result:", result)
               setErrorMsg('Changes Successfully!')
               navigate(`/card/${id}`)
          } catch (error) {
               // console.log("🚀 ~ UpdateCard ~ error:", error)
               console.log("🚀 ~ UpdateCard ~ error:", error.message)
          }
     }


     return (
          <div>
               <Button onPress={onOpen} onClick={() => getCard()} color="warning">{loading ? 'Loading..' : 'Edit'}</Button>
               <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="center"
               >
                    <ModalContent>
                         {(onClose) => (
                              <>
                                   <ModalHeader className="flex flex-col gap-1">Edit Card</ModalHeader>
                                   {cardType == undefined ? <div className="w-full text-center">Loading...</div> : <ModalBody>
                                        <div className="error text-red-400">{errorMsg ? errorMsg : ''}</div>
                                        {/* <Input
                                             autoFocus
                                             label="Card Name"
                                             placeholder="Enter Card Name"
                                             variant="bordered"
                                             type="text"
                                             color="warning"
                                             value={productName ? productName : 'Loading...'}
                                             onChange={(e) => { setName(e.target.value) }}
                                        /> */}
                                        <Input
                                             label="Card Type"
                                             placeholder="Enter Card Type"
                                             type="text"
                                             variant="bordered"
                                             color="warning"
                                             onChange={(e) => { setType(e.target.value) }}
                                             value={cardType ? cardType : 'Loading...'}
                                        />
                                        <Input
                                             label="Card Price"
                                             placeholder="Enter Card Price"
                                             type="number"
                                             variant="bordered"
                                             color="warning"
                                             value={cardPrice ? cardPrice : '000'}
                                             onChange={(e) => { setPrice(e.target.value) }}
                                        />
                                        <Input
                                             variant="underlined"
                                             label="Account Email"
                                             type="email"
                                             value={accountEmail}
                                             className="productName text-slate-900 font-bold"
                                             color="warning"
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
                                             maxLength={20}
                                             minLength={6}
                                             required
                                             onChange={(e) => setAccountPassword(e.target.value)}
                                        />
                                   </ModalBody>}
                                   <ModalFooter>
                                        <Button color="danger" variant="flat" onPress={onClose}>
                                             Close
                                        </Button>
                                        <Button color="warning" onClick={() => {
                                             if (productName == cardData.productName && cardType == cardData.cardType && cardPrice == cardData.cardPrice) {
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