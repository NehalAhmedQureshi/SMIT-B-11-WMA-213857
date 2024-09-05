import { Input } from "@nextui-org/react";

export default function Signin() {
     return (
          <div className="bg-blue-300 main border-2 border-black max-w-full m-auto p-4 flex justify-center mt-2 rounded-xl ">
               <form className="w-2/5 border-black border-3 p-4 bg-blur-md bg-violet-400 rounded-2xl flex-col gap-2 signinForm">
                    <Input className=" mx-auto mb-3" size="md" type="email" label='Email' placeholder="Enter your email" />
                    <Input className=" mx-auto mb-3" size="md" type="password" label='Password' placeholder="Enter your password" />
                    <div className="showPassword flex gap-2 font-bold hover:text-blue-800">
                         <input type="checkbox" id="showPassword" />
                         <label htmlFor="showPassword">Show Password</label>
                    </div>
                    
               </form>
          </div>
     )
}
