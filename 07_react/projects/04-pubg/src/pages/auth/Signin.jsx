import { Input, Link } from "@nextui-org/react";
import { useContext, useState } from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
// import CustomInput from "../../conponents/emailInput";
// import { email } from "../../context/email";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { CheckInternet } from "../../context/CheckInternet";

export default function Signin() {
     // console.log(window.location.pathname);
     // * states
     const [ email, setEmail ] = useState('')
     // console.log("🚀 ~ Signin ~ email:", email)
     const [type, setType] = useState("password");
     const [isLoading, setLoading] = useState(false)
     const [emptyInput , setemptyInput] = useState('false')
     // const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [errorMsg, setErrormsg] = useState('')
     const navigate = useNavigate()
     const { checkInternet, setCheckInternet } = useContext(CheckInternet)
     // * show or hide password 
     const showPassword = (e) => {
          if (e.target.checked === true) {
               setType("text");
          } else {
               setType("password");
          }
     };
     // const email = `${email}@gmail.com`
     // * login function 
     // console.log("🚀 ~ Signin ~ email:", email)
     // console.log("🚀 ~ logIn ~ password:", password)
     // console.log("🚀 ~ logIn ~ email:", email)
     const logIn = async () => {
          try {
               setemptyInput(false)
               setLoading(true)
               const result = await signInWithEmailAndPassword(auth, email, password)
               setErrormsg('')
               // console.log("user => ", result.user)
               setLoading(false)
               navigate('/')
          } catch (error) {
               // console.log('error' , error , 'error msg =>',error.message)
               setLoading(false)
               // console.log(error.message === 'Firebase: Error (auth/network-request-failed).') 
               setErrormsg('Invalid email or Password')
               setEmail('')
               setPassword('')

               setCheckInternet('online')
               if (error.message === 'Firebase: Error (auth/network-request-failed).') {
                    setErrormsg("Check your Internet Connection and Try Again")
                    if (email === '') {
                         setErrormsg("Check your Internet Connection and Try Again and also write email and password")
                    }
                    setCheckInternet('offline')
               }
          }
     }
     return (
          <div className="flex w-full h-screen justify-center py-6  items-center background" style={{
               backgroundImage:'url(https://firebasestorage.googleapis.com/v0/b/pubgtemp-e6dd0.appspot.com/o/bg%2FWhatsApp%20Image%202024-10-09%20at%207.33.10%20PM.jpeg?alt=media&token=04fa04f8-070c-44c1-8d11-5400e06f879e)',
               backgroundSize: '100vw 100vh',
               backgroundRepeat: 'no-repeat',
               width: '100vw',
               height: '100vh'
          }}>
               <form className="flex flex-col w-4/5 bg-blur backdrop-blur[9px] py-5 md:px-6 md:py-5 max-w-full xl:w-2/5 lg:w-3/6 md:w-3/6 rounded-2xl gap-3 items-center px-3 signinForm  bg-blur backdrop-blur-[7.3px]">
                    <h1 className="text-white font-serif mb-5 text-5xl font-semibold">
                         LogIn
                    </h1>
                    <h1 className="emptyInput text-red-600 font-bold text-lg">{emptyInput === true ? 'Please Fill email or Password Field!' : ''}</h1>
                    <h1 className=" text-red-600 font-bold text-lg">{errorMsg ? errorMsg : null}</h1>
                    {/* <CustomInput/> */}
                    <Input
                         id="email"
                         className="bg-transparent"
                         color="warning"
                         size="md"
                         type={email}
                         value={email}
                         required
                         label="Email"
                         placeholder="Enter your email"
                         onChange={(e) => setEmail(e.target.value)}
                         
                    />
                    <Input
                         id="password"
                         className="bg-transparent"
                         color="warning"
                         size="md"
                         value={password}
                         required
                         type={type}
                         label="Password"
                         placeholder="Enter your password"
                         onChange={(e) => setPassword(e.target.value)}
                         
                    />
                    <div className="showPassword flex flex-row items-center justify-center gap-2 font-semibold font-sans">
                         <input type="checkbox" id="showPassword" onChange={showPassword} />
                         <label
                              htmlFor="showPassword"
                              className="flex flex-row items-center justify-center gap-2 font-semibold font-sans text-white"
                         >
                              Show Password
                         </label>
                    </div>
                    <Button
                         element={"<Home/>"}
                         className=" w-1/4 text-medium font-semibold font-sans   transition-all ease-in-out delay-200 bg-orange-400 border-2 border-orange-600 hover:border-orange-800 hover:bg-orange-300"
                         onClick={() => {
                              email === '' || password === '' ? setemptyInput(true) : logIn()
                         }}
                         disabled={isLoading}
                    >
                         {isLoading ? 'Loading..' : 'LogIn'}
                    </Button>
                    <Link className="cursor-pointer hover:text-blue-600 text-blue-500 active:text-blue-700 font-sans font-semibold" onClick={()=>navigate('/auth/signup')}>Don't have an account ?</Link>
                    {/* <Link onClick={()=>navigate('/auth')} className='hover:text-blue-900 active:text-blue-600 font-sans font-semibold'>Go back</Link> */}
               </form>
          </div >
     )
}