import { Input , Link } from "@nextui-org/react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { auth, createUserWithEmailAndPassword } from "../firebase.js"

function Signup() {
  console.log(window.location.path)
  // * show or hide password
  const [type, setType] = useState("password");
  const showPassword = (e) => {
    if (e.target.checked === true) {
      setType("text");
    } else {
      setType("password");
    }
  };
  // * getting email or password input value
  // const [passwordInput, setPasswordInput] = useState(null)
  // const [password, setPassword] = useState(null)
  // console.log("🚀 ~ SignUp ~ password:", password)
  // // console.log("🚀 ~ SignUp ~ passwor--d:", passwordInput)
  // const [emailInput, setEmailInput] = useState(null)
  // const [email, setEmail] = useState(null)
  // console.log("🚀 ~ SignUp ~ email:", email)
  // console.log("🚀 ~ SignUp ~ email---:", emailInput)


  // * sign up user 
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed up 
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  return (
    <div className="flex w-full h-auto justify-center border-2 py-6 border-black items-center">
      <form className="flex flex-col signUpForm bg-slate-300  px-6 py-5 max-w-full xl:w-2/5 lg:w-3/6 md:w-3/6 rounded-2xl gap-3 items-center">
        <h1 className="text-gray-700 font-sans mb-5 text-2xl font-semibold">SignUp</h1>
        <Input
          className=""
          size="md"
          type="email"
          label="Email"
          placeholder="Enter your email"
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <Input
          id="password"
          className=""
          size="md"
          type={type}
          label="Password"
          placeholder="Enter your password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <div className="showPassword flex flex-row items-center justify-center gap-2 font-semibold font-sans">
          <input type="checkbox" id="showPassword" onChange={showPassword} />
          <label htmlFor="showPassword" className="text-blue-600 hover:text-blue-800 active:text-blue-500">Show Password</label>
        </div>
        <Button className="bg-gray-100 w-1/4 text-blue-600 text-medium font-semibold font-sans hover:bg-blue-600 hover:text-white transition-all ease-in-out delay-200"
          // onClick={(e) => {
          //   if (passwordInput && emailInput) {
          //     setEmail(emailInput)
          //     setPassword(passwordInput)
          //     console.log(auth)
          //     createUserWithEmailAndPassword(auth, email, password)
          //       .then((userCredential) => {
          //         // Signed up 
          //         const user = userCredential.user;
          //         console.log("🚀 ~ .then ~ user:", user)
          //         alert("signup")
          //         // ...
          //       })
          //       .catch((error) => {
          //         const errorCode = error.code;
          //         console.log("🚀 ~ SignUp ~ errorCode:", errorCode)
          //         const errorMessage = error.message;
          //         console.log("🚀 ~ SignUp ~ errorMessage:", errorMessage)
          //         alert("error")
          //         // ..
          //       });
          //   }
          // }
          // }
        >SignUp</Button>
        <Link className='hover:text-blue-900 active:text-blue-600 font-sans font-semibold' href='/auth/signin'>Already have an account ?</Link>
        {/* <Link className='hover:text-blue-900 active:text-blue-600 font-sans font-semibold' href='/auth'>Go back</Link> */}
      </form>
    </div>
  );
}
export default Signup