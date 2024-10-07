import { Input, Link } from "@nextui-org/react";
import { useContext, useState } from "react";
import { Button } from "@nextui-org/react";
import { auth, db } from '../../utils/firebase'
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import CustomInput from "../../conponents/UsernameInput";
import { Username } from "../../context/Username";


function Signup() {
     // console.log(window.location.path)
     // * show or hide password
     const {username} = useContext(Username)
     const [type, setType] = useState("password");
     const showPassword = (e) => {
          if (e.target.checked === true) {
               setType("text");
          } else {
               setType("password");
          }
     };
     // * getting email or password input value
     const [password, setPassword] = useState('')
     // const [email, setEmail] = useState('')
     // const [username, setUsername] = useState('')
     const [isLoading, setLoading] = useState(false)
     const navigate = useNavigate()

     // *sign up 
     const email = `${username}@gmail.com`
     // console.log("🚀 ~ Signup ~ email:", email)
     const signUp = async () => {
          try {
               setLoading(true)
               const result = await createUserWithEmailAndPassword(auth, email, password)

               const docRef = doc(db, 'users', result.user.uid);
               const docAdd = setDoc(docRef, {
                    username,
                    email,
                    uid: result.user.uid,
               })
               setLoading(false)
               navigate('/')
          } catch (error) {
               setLoading(false)
               console.log('error',error)
               console.log('error msg -> ' , error.msg)
          }
     }

     return (
          <div className="flex w-full h-screen justify-center py-6  items-center">
               <form className="flex flex-col signUpForm bg-blue-gray-100 w-4/5  px-6 py-5 max-w-full xl:w-2/5 lg:w-3/6 md:w-3/6 rounded-2xl gap-3 items-center bg-slate-300">
                    <h1 className="text-gray-700 font-sans mb-5 text-2xl font-semibold">SignUp</h1>
                    {/* <Input
          size="md"
          type="text"
          label='Username'
          placeholder="Enter username"
          onChange={(e)=>setUsername(e.target.value)}
        /> */}
                    <CustomInput />
                    <Input
                         id="password"
                         className=""
                         size="md"
                         type={type}
                         label="Password"
                         placeholder="Enter your password"
                         onChange={(e) => {
                              setPassword(e.target.value)
                         }}
                    />
                    <div className="showPassword flex flex-row items-center justify-center gap-2 font-semibold font-sans">
                         <input type="checkbox" id="showPassword" onChange={showPassword} />
                         <label htmlFor="showPassword" className="text-blue-600 hover:text-blue-800 active:text-blue-500">Show Password</label>
                    </div>
                    <Button className="bg-gray-100 w-1/4 text-blue-600 text-medium font-semibold font-sans hover:bg-blue-600 hover:text-white transition-all ease-in-out delay-200" onClick={signUp} disabled={isLoading}>{isLoading ? 'Loading...' : 'SignUp'}</Button>
                    <Link className='hover:text-blue-900 active:text-blue-600 font-sans font-semibold' href='/auth/'>Already have an account ?</Link>
               </form>
          </div>
     );
}
import { createUserWithEmailAndPassword } from "firebase/auth";
export default Signup