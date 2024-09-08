import { Input } from "@nextui-org/react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { auth, createUserWithEmailAndPassword } from "../firebase.js"

export default function SignUp() {
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
  const [passwordInput, setPasswordInput] = useState(null)
  const [password, setPassword] = useState(null)
  console.log("🚀 ~ SignUp ~ password:", password)
  // console.log("🚀 ~ SignUp ~ passwor--d:", passwordInput)
  const [emailInput, setEmailInput] = useState(null)
  const [email, setEmail] = useState(null)
  console.log("🚀 ~ SignUp ~ email:", email)
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
    <div className="flex justify-center h-screen items-center main box-border border-2 border-black max-w-full m-0 rounded-xl max-sm:px-2">
      <form className="lg:w-2/6 md:w-2/5 sm:w-3/5 sm:h-2/3 h-3/5 hover:shadow-slate-700 max-sm:m-0 flex flex-col gap-4 items-center justify-center p-10 border-black border-3  bg-blue-600 rounded-3xl  transition-shadow shadow-lg signUpForm">
        <h1 className="lg:text-4xl text-3xl font-semibold font-serif mb-6">SignUp</h1>
        <Input
          className="invalid:text-red-600"
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
        <div className="showPassword flex gap-2 font-bold active:text-blue-900  hover:text-blue-800">
          <input type="checkbox" id="showPassword" onChange={showPassword} />
          <label htmlFor="showPassword" className="">Show Password</label>
        </div>
        <Button className="bg-blue-800 text-white font-medium text-lg rounded-full"
          onClick={(e) => {
            if (passwordInput && emailInput) {
              setEmail(emailInput)
              setPassword(passwordInput)
              console.log(auth)
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                  console.log("🚀 ~ .then ~ user:", user)
                  alert("signup")
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  console.log("🚀 ~ SignUp ~ errorCode:", errorCode)
                  const errorMessage = error.message;
                  console.log("🚀 ~ SignUp ~ errorMessage:", errorMessage)
                  alert("error")
                  // ..
                });
            }
          }
          }
        >SignUp</Button>
      </form>
    </div>
  );
}
