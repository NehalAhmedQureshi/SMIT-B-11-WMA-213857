import { Button } from "@nextui-org/react";
import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import { auth } from "../utils/firebase";
import { useReducer } from "react";

export default function AddContact() {

   const reducer = (state , action ) => {
      // console.log("🚀 ~ reducer ~ action:", action)
      console.log("🚀 ~ reducer ~ state:", state)
      switch (action.key) {
         case "phoneNo":
            return{
               ...state,
               phoneNo:action.value
            };
            case "email" :
               return{
                  ...state , 
                  email:action.value
               }; 
               case "username" :
               return{
                  ...state , 
                  username:action.value
               }; 
               case "password" :
               return{
                  ...state , 
                  password:action.value
               }; 
               case "showPassword" :
               return{
                  ...state , 
                  showPassword: !state.showPassword
               }; 
         default:
            return {
               ...state,
            };
      }
   }

   const initializeValue ={
      email:'',
      password:'',
      username:'',
      phoneNo:'',
      showPassword:false,
   }

   const [state , dispatch ] = useReducer(reducer , initializeValue )
   // console.log("🚀 ~ AddContact ~ state:", state)

   const handleSignup =async ()=>{
      try{
         const result = await createUserWithEmailAndPassword(auth , state.email , state.password)
         console.log("🚀 ~ handleSignup ~ result:", result)
      }catch(error){
      console.log("🚀 ~ handleSignup ~ error:", error)
      }
   }

   return (
      <div className="home h-full overflow-y-auto  flex justify-center text-slate-50 px-3">
         <div className="addchat flex flex-grow flex-col gap-2">
            <div className="heading text-xl mb-2 text-center">Register Yourself!</div>
            <label htmlFor="contactNo">Enter Phoner No:</label>
            <input type="number" id="contactNo" className="contactNo rounded-xl pl-5 text-black focus-visible:outline-none focus-visible:outline-slate-200" minLength={11} placeholder="03101231231" onChange={(e) => {
               dispatch({key:"phoneNo",
                  value:e.target.value
               })
            }} />
            <label htmlFor="useremail">Enter User Email:</label>
            <input type="email" id="useremail" className="useremail rounded-xl pl-5 text-black focus-visible:outline-none focus-visible:outline-slate-200" placeholder="Enter User Email" 
            onChange={(e) => {
               dispatch({key:"email",
                  value:e.target.value
               })
            }}
            />
            <label htmlFor="username">Enter Username:</label>
            <input type="text" id="username" className="username rounded-xl pl-5 text-black focus-visible:outline-none focus-visible:outline-slate-200" placeholder="Enter Username" 
            onChange={(e) => {
               dispatch({key:"username",
                  value:e.target.value
               })
            }}
            />
            <label htmlFor="password">Enter Password:</label>
            <input type={state.showPassword ? 'text':'password'} id="password" className="password rounded-xl pl-5 text-black focus-visible:outline-none focus-visible:outline-slate-200" placeholder="Enter Password"
            onChange={(e) => {
               dispatch({key:"password",
                  value:e.target.value
               })
            }}
             />
             <div className="showPasswrod">
               <input type="checkbox" name="" id="showPasswrod" className="cursor-pointer" onChange={()=> dispatch({key:'showPassword'})}  />
               <label htmlFor="showPasswrod" className="ml-2 cursor-pointer">Show Password</label>
             </div>
            <Button variant="ghost" className="mt-2" type="submit" onClick={handleSignup}>Register</Button>
         </div>
      </div>
   )
}
