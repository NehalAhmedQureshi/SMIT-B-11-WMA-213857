import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { Button } from "@nextui-org/react";
import {auth, db} from '../../utils/firebase'
import { Button, message } from "antd";
import { doc, setDoc } from "firebase/firestore";
import {useNavigate} from 'react-router-dom'


// import { ProviderId } from "firebase/auth";



export default function LogIn() {
     // const auth = getAuth();
     const navigate = useNavigate()
     const handleSignIn = async ()=> {
          const provider = new GoogleAuthProvider();
          provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
          signInWithPopup(auth, provider)
          .then((result) => {
               // This gives you a Google Access Token. You can use it to access the Google API.
               const credential = GoogleAuthProvider.credentialFromResult(result);
               // The signed-in user info.
               const user = result.user;
               console.log('result =>',result)
               const ref = doc(db, "users", user.uid);
               setDoc(ref, {
                    email: user.email,
                    photoUrl: user.photoURL,
                    uid: user.uid,
                    displayName: user.displayName,
                  }).then(() => {
                    navigate("/");
                    // message.success("Aapka account ban gya he. Bht bht shkrya");
                  });
               // IdP data available using getAdditionalUserInfo(result)
               // ...
          }).catch((error) => {
               // Handle Errors here.
               console.log(error,'error')
               const errorCode = error.code;
               const errorMessage = error.message;
               // The email of the user's account used.
               const email = error.customData.email;
               // The AuthCredential type that was used.
               const credential = GoogleAuthProvider.credentialFromError(error);
               // ...
          });}
     return (
          <div className="main w-full h-screen flex flex-col gap-4 justify-center items-center">
               <Button className="signIn" onClick={handleSignIn}>LogIn with Google</Button>
               <Button as='Link' href="/">Go back to Home</Button>
          </div>
     )
}