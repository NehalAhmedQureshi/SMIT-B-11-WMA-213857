import { Button } from "@nextui-org/react";
import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import { auth, db } from "../utils/firebase";
import { useReducer } from "react";
import { doc, setDoc } from "firebase/firestore";
import { keyframes } from "framer-motion/dom";

export default function AddContact() {

   const reducer = (state, action) => {
      // console.log("🚀 ~ reducer ~ action:", action)
      console.log("🚀 ~ reducer ~ state:", state)
      switch (action.key) {
         case "username":
            return {
               ...state,
               username: action.value
            };
         case "password":
            return {
               ...state,
               password: action.value
            };
         case "phoneNo":
            return {
               ...state,
               phoneNo: action.value
            };
         case "email":
            return {
               ...state,
               email: action.value
            };
         case "showPassword":
            return {
               ...state,
               showPassword: !state.showPassword
            };
         case 'error':
            return {
               ...state,
               error: action.value
            }
            case 'loading':
            return {
               ...state,
               loading: !state.loading
            }
         default:
            return {
               ...state,
            };
      }
   }

   const initializeValue = {
      email: '',
      password: '',
      username: '',
      phoneNo: '',
      showPassword: false,
      error: '',
      loading:false,
   }

   const [state, dispatch] = useReducer(reducer, initializeValue)
   // console.log("🚀 ~ AddContact ~ state:", state)

   const handleSignup = async () => {
      try {
         // dispatch({key:'error',value:''})
        console.log('User signing up...');
         dispatch({key:'loading'})
        // Create the user with email and password
        const result = await createUserWithEmailAndPassword(auth, state.email, state.password);
    
        // Prepare user details with the UID from result
        const userDetails = {
          uid: result.user.uid,
          email: state.email,
          password: state.password,
          username: state.username,
          phoneNo: state.phoneNo,
        };
    
        // Reference to the users collection with the UID as the document ID
        const docRef = doc(db, 'users', result.user.uid);
    
        // Set user details in Firestore
        await setDoc(docRef, userDetails);
        console.log("🚀 ~ handleSignup ~ User added to Firestore:", userDetails);
        console.log("🚀 ~ handleSignup ~ Firebase Auth result:", result);
        // Clear the state using dispatch or state setters
        dispatch({ key: 'username', value: '' });
        dispatch({ key: 'password', value: '' });
        dispatch({ key: 'phoneNo', value: '' });
        dispatch({ key: 'email', value: '' });
        dispatch({key:'loading'})
      } catch (error) {
         dispatch({key:'loading'})
        console.error("🚀 ~ handleSignup ~ error:", error);
      //   dispatch({key:'error',value:'error.message'})
    
        // Clear the state in case of an error as well
        dispatch({ key: 'username', value: '' });
        dispatch({ key: 'password', value: '' });
        dispatch({ key: 'phoneNo', value: '' });
        dispatch({ key: 'email', value: '' });
      }
    };
    


   return (
      <div className="home h-full overflow-y-auto  flex justify-center text-slate-50 px-3">
         <div className="addchat flex flex-grow flex-col gap-2">
            <div className="heading text-xl mb-2 text-center">Register Yourself!</div>
            <div className="errorDiv text-red-500 font-semibold">{state.error}</div>
            <label htmlFor="useremail">Enter User Email:</label>
            <input type="email" id="useremail" value={state.email} className="useremail rounded-xl pl-5 text-black focus-visible:outline-none focus-visible:outline-slate-200" placeholder="Enter User Email"
               onChange={(e) => {
                  dispatch({
                     key: "email",
                     value: e.target.value
                  })
               }}
            />
            <label htmlFor="password">Enter Password:</label>
            <input type={state.showPassword ? 'text' : 'password'} value={state.password}
               id="password" className="password rounded-xl pl-5 text-black focus-visible:outline-none focus-visible:outline-slate-200" placeholder="Enter Password"
               onChange={(e) => {
                  dispatch({
                     key: "password",
                     value: e.target.value
                  })
               }}
            />
            <div className="showPasswrod">
               <input type="checkbox" name="" id="showPasswrod"
                  className="cursor-pointer" onChange={() => dispatch({ key: 'showPassword' })} />
               <label htmlFor="showPasswrod" className="ml-2 cursor-pointer">Show Password</label>
            </div>
            <label htmlFor="username">Enter Username:</label>
            <input type="text" id="username" className="username rounded-xl pl-5 text-black focus-visible:outline-none focus-visible:outline-slate-200" placeholder="Enter Username"
               value={state.username}
               onChange={(e) => {
                  dispatch({
                     key: "username",
                     value: e.target.value
                  })
               }}
            />
            <label htmlFor="contactNo">Enter Phoner No:</label>
            <input type="number" id="contactNo" className="contactNo rounded-xl pl-5 text-black focus-visible:outline-none focus-visible:outline-slate-200" minLength={11} placeholder="03101231231" value={state.phoneNo} onChange={(e) => {
               dispatch({
                  key: "phoneNo",
                  value: e.target.value
               })
            }} />


            <Button variant="ghost" className="mt-2" type="submit" onClick={
               () => { state.email !== '' ? state.password !== '' ? state.username !== "" ? state.phoneNo !== '' ? handleSignup() : dispatch({ key: 'error', value: 'Enter Phone Number' }) : dispatch({ key: 'error', value: 'Enter User Name' }) : dispatch({ key: 'error', value: 'Enter Password' }) : dispatch({ key: 'error', value: 'Enter your email' }) }
            }>{state.loading ? 'Loading...' : 'Register'}</Button>
         </div>
      </div>
   )
}
