import { Button } from "@nextui-org/react";
import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import { auth, db } from "../utils/firebase";
import { useEffect, useReducer } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { keyframes } from "framer-motion/dom";
import { getDataConnect } from "firebase/data-connect";

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
            case  'allContact':
            return{
               ...state,
               users:action.value
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
      username: 'guest',
      phoneNo: '',
      showPassword: false,
      error: '',
      loading:false,
      users:[]
   }

   const [state, dispatch] = useReducer(reducer, initializeValue)
   console.log("🚀 ~ AddContact ~ state:", state)

   const handleSignup = async () => {
      try {
        dispatch({ key: 'error', value: '' });
        dispatch({ key: 'loading', value: true });
    
        console.log('User signing up...');
        const result = await createUserWithEmailAndPassword(auth, state.email, state.password);
        console.log("🚀 ~ handleSignup ~ result:", result.user);
    
        const userDetails = {
          uid: result.user.uid,
          email: state.email,
          username: state.username,
          phoneNo: state.phoneNo,
        };
        console.log("🚀 ~ handleSignup ~ userDetails:", userDetails);
    
        const docRef = doc(db, 'users', result.user.uid);
        await setDoc(docRef, userDetails);
    
        dispatch({ key: 'loading', value: false });
      } catch (error) {
        console.error("🚀 ~ handleSignup ~ error:", error.message);
        dispatch({ key: 'error', value: error.message });
        dispatch({ key: 'loading', value: false });
      } finally {
        dispatch({ key: 'username', value: '' });
        dispatch({ key: 'password', value: '' });
        dispatch({ key: 'phoneNo', value: '' });
        dispatch({ key: 'email', value: '' });
      }
    };
    
    
    async function getContacts(){
      const contacts = await getDoc(doc(db , 'chats' , 'users'))
      console.log("🚀 ~ getContacts ~ contacts:", contacts.data() || [])
      const allContact = contacts.data() || []
      dispatch({
         value:'allContacts',
         key:allContact
      })
    }

    useEffect(()=>{
      console.log('hi')
      getContacts()
    },[])

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
