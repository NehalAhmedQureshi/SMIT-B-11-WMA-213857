import { Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../conponents/UsernameInput";

export default function Signin() {
     // console.log(window.location.pathname);
     // * states
     const [type, setType] = useState("password");
     const [isLoading, setLoading] = useState(false)
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [errorMsg, setErrormsg] = useState('')
     const navigate = useNavigate()

     // * show or hide password 
     const showPassword = (e) => {
          if (e.target.checked === true) {
               setType("text");
          } else {
               setType("password");
          }
     };
     // * login function 
     const logIn = async () => {
          try {
               setLoading(true)
               const result = await signInWithEmailAndPassword(auth, email, password)
               setErrormsg('')
               // console.log("user => ", result.user)
               navigate('/')
               setLoading(false)
          } catch (error) {
               // console.log('error' , error , 'error msg =>',error.message)
               setLoading(false)
               setErrormsg('Invalid User Email or Password')
          }
     }

     return (
          <div className="flex w-full h-screen justify-center py-6  items-center ">
               <form className="flex flex-col w-4/5 bg-blue-gray-100  px-6 py-5 max-w-full xl:w-2/5 lg:w-3/6 md:w-3/6 rounded-2xl gap-3 items-center signinForm bg-gray-300">
                    <h1 className="text-gray-700 font-sans mb-5 text-2xl font-semibold">
                         LogIn
                    </h1>
                    <h1 className=" text-red-600 font-semibold">{errorMsg ? errorMsg : null}</h1>
                    <CustomInput
                         // className=""
                         // size="md"
                         // type="text"
                         // maxLength={20}
                         // minLength={5}
                         // label="Email"
                         // placeholder="Enter your email"
                         // onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                         id="password"
                         className=""
                         size="md"
                         type={type}
                         label="Password"
                         placeholder="Enter your password"
                         onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="showPassword flex flex-row items-center justify-center gap-2 font-semibold font-sans">
                         <input type="checkbox" id="showPassword" onChange={showPassword} />
                         <label
                              htmlFor="showPassword"
                              className="flex flex-row items-center justify-center gap-2 font-semibold font-sans"
                         >
                              Show Password
                         </label>
                    </div>
                    <Button
                         element={"<Home/>"}
                         className="bg-gray-100 w-1/4 text-blue-600 text-medium font-semibold font-sans hover:bg-blue-600 hover:text-white transition-all ease-in-out delay-200"
                         onClick={logIn}
                         disabled={isLoading}
                    >
                         {isLoading ? 'Loading..' : 'LogIn'}
                    </Button>
                    <Link
                         className="hover:text-blue-600 text-blue-500 active:text-blue-700 font-sans font-semibold"
                         href="/auth/signup"
                    >
                         Don't have an account ?
                    </Link>
                    {/* <Link className='hover:text-blue-900 active:text-blue-600 font-sans font-semibold' href='/auth'>Go back</Link> */}
               </form>
          </div>
     )
}