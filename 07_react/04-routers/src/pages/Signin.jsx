import { Input } from "@nextui-org/react";
import { useState } from 'react'


export default function Signin() {
     const [type, setType] = useState('password')
     const showPassword = (e) => {
          if (e.target.checked === true) {
               setType('text')
          } else {
               setType('password')
          }
     }
     return (
          <div className="flex justify-center h-screen items-center main box-border border-2 border-black max-w-full m-0 rounded-xl max-sm:px-3">
               <form className="flex flex-col gap-2 items-center justify-center max-lg:w-4/6 max-md:w-4/5 max-sm:m-0 max-sm:w-full max-sm:h-2/3 p-10 border-black border-3 bg-blur-m bg-blue-600 rounded-3xl hover:shadow-slate-700 transition-shadow shadow-lg signinForm">
                    <h1 className="">SignIn</h1>
                    <Input className=" "size="md" type="email" label='Email' placeholder="Enter your email" />
                    <Input id='password' className="" size="md" type={type} label='Password' placeholder="Enter your password" />
                    <div className="showPassword flex gap-2 font-bold hover:text-blue-800">
                         <input type="checkbox" id="showPassword" onChange={showPassword} />
                         <label htmlFor="showPassword">Show Password</label>
                    </div>

               </form>
          </div>
     )
}
