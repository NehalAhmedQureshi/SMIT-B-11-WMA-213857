import { createUserWithEmailAndPassword } from "firebase/auth";
import { CheckInternet } from "../../context/CheckInternet";
import { Input, Link } from "@nextui-org/react";
import { useContext, useState } from "react";
import { Button } from "@nextui-org/react";
import { auth, db } from '../../utils/firebase'
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import CustomInput from "../../conponents/UsernameInput";
// import { Username } from "../../context/Username";


export default function AdminSignup() {
     // console.log(window.location.path)
     // * show or hide password
     // const { username } = useContext(Username)
     const [type, setType] = useState("password");
     const [errorMsg, setErrormsg] = useState('')
     const {checkInternet , setCheckInternet} = useContext(CheckInternet)

     const showPassword = (e) => {
          if (e.target.checked === true) {
               setType("text");
          } else {
               setType("password");
          }
     };
     // * getting email or password input value
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [emptyInput , setemptyInput] = useState('false')
     // const [username, setUsername] = useState('')
     const [isLoading, setLoading] = useState(false)
     const navigate = useNavigate()

     // *sign up 
     // const email = `${username}@gmail.com`
     // console.log("🚀 ~ Signup ~ email:", email)
     // console.log("🚀 ~ signUp ~ email:", email)
     // console.log("🚀 ~ signUp ~ password:", password)
     const adminsignUp = async () => {
          try {
               setLoading(true)
               const result = await createUserWithEmailAndPassword(auth, email, password)

               const docRef = doc(db, 'users', result.user.uid);
               const addDocument =await setDoc(docRef, {
                    email,
                    password,
                    isAdmin:true,
                    uid: result.user.uid,
               })
               // console.log("🚀 ~ signUp ~ addDocument:", addDocument)
               // console.log("use")
               setLoading(false)
               navigate('/')
          } catch (error) {
               console.log("🚀 ~ signUp ~ error:", error.message)
               setLoading(false)
               // console.log('error', error)
               // console.log('error msg -> ', error.msg)
               setErrormsg('Email already exists!')
               setCheckInternet('online')
               if(error.message === 'Firebase: Error (auth/network-request-failed).'){
                    setErrormsg("Check your Internet Connection and Try Again")
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
               <form className="flex flex-col w-4/5 bg-blue-gray-100 py-5 md:px-6 md:py-5 max-w-full xl:w-2/5 lg:w-3/6 md:w-3/6 rounded-2xl gap-3 items-center px-3 signinForm  bg-blur backdrop-blur-[7.3px]">
                    <h1 className="text-black font-serif mb-5 text-5xl font-semibold">
                         Admin
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
                         label="Admin Email"
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
                         label="Admin Password"
                         placeholder="Enter your password"
                         onChange={(e) => setPassword(e.target.value)}
                         
                    />
                    <div className="showPassword flex flex-row items-center justify-center gap-2 font-semibold font-sans">
                         <input type="checkbox" id="showPassword" onChange={showPassword} />
                         <label
                              htmlFor="showPassword"
                              className="flex flex-row items-center justify-center gap-2 font-semibold font-sans text-black"
                         >
                              Show Password
                         </label>
                    </div>
                    <Button
                         element={"<Home/>"}
                         className=" w-1/4 text-medium font-semibold font-sans   transition-all ease-in-out delay-200 bg-orange-400 border-2 border-orange-600 hover:border-orange-800 hover:bg-orange-300"
                         onClick={() => {
                              email === '' || password === '' ? setemptyInput(true) : adminsignUp()
                         }}
                         disabled={isLoading}
                    >
                         {isLoading ? 'Loading..' : 'SignUp'}
                    </Button>
                    <Link
                         className="hover:text-blue-600 text-blue-500 active:text-blue-700 font-sans font-semibold"
                         onClick={()=>navigate('/auth')}
                    >
                         Already have an account ?
                    </Link>
                    {/* <Link className='hover:text-blue-900 active:text-blue-600 font-sans font-semibold' onClick={}>Go back</Link> */}
               </form>
          </div >
     );
}
