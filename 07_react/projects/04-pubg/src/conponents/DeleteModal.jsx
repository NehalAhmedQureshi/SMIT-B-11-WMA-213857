import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useNavigate, useParams } from "react-router";

export default function DeleteModal() {
     const {id} = useParams()
     const navigate = useNavigate()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  async function deleteCard() {
     try {
          const docRef = doc(db, 'cards', id)
          const deleteData = await deleteDoc(docRef)
          // console.log("🚀 ~ deleteCard ~ deleteData:", deleteData)
          navigate('/cards')
     } catch (error) {
          console.log("🚀 ~ deleteCard ~ error:", error)
     }
}
  return (

    <>
      <Button color="warning" onPress={onOpen}>Delete Card</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete Confirmation!</ModalHeader>
              <ModalBody>
                <p>If you delete this card will be gone forever.Are you sure you want to proceed?</p>
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" onPress={onClose}>
                  Close
                </Button>
                <Button onClick={()=>deleteCard()} color="danger" onPress={onClose}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}