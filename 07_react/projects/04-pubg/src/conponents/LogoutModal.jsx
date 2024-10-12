import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../utils/firebase";
import { useNavigate, useParams } from "react-router";
import { signOut } from "firebase/auth";

export default function LogoutModal() {
     // const {id} = useParams()
     const navigate = useNavigate()
     const { isOpen, onOpen, onOpenChange } = useDisclosure();
     //   async function deleteCard() {
     //      try {
     //           const docRef = doc(db, 'cards', id)
     //           const deleteData = await deleteDoc(docRef)
     //           // console.log("🚀 ~ deleteCard ~ deleteData:", deleteData)
     //           navigate('/cards')
     //      } catch (error) {
     //           console.log("🚀 ~ deleteCard ~ error:", error)
     //      }
     // }
     const handleSignOut = async () => {
          await signOut(auth);
          // navigate("/auth");
     };
     return (

          <>
               <Button color="warning" onPress={onOpen}>LogOut</Button>
               <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                    <ModalContent>
                         {(onClose) => (
                              <>
                                   <ModalHeader className="flex flex-col gap-1 text-red-500">LogOut Confirmation!</ModalHeader>
                                   <ModalBody>
                                        <p className="text-red-600">Are you sure you want to Logout?</p>
                                   </ModalBody>
                                   <ModalFooter>
                                        <Button variant="ghost" onPress={onClose}>
                                             No
                                        </Button>
                                        <Button onClick={() => handleSignOut()} color="danger" onPress={onClose}>
                                             Yes
                                        </Button>
                                   </ModalFooter>
                              </>
                         )}
                    </ModalContent>
               </Modal>
          </>
     );
}