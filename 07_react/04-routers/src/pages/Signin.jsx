import { Input } from "@nextui-org/react";
import { useState } from "react";
import {Button} from "@nextui-org/react";

export default function Signin() {
  const [type, setType] = useState("password");
  const showPassword = (e) => {
    if (e.target.checked === true) {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <div className="flex justify-center h-screen items-center main box-border border-2 border-black max-w-full m-0 rounded-xl max-sm:px-3">
      <form className="lg:w-2/6 md:w-2/5 sm:w-3/5 sm:h-2/3 h-3/5 hover:shadow-slate-700 max-sm:m-0 flex flex-col gap-4 items-center justify-center p-10 border-black border-3  bg-blue-600 rounded-3xl  transition-shadow shadow-lg signinForm">
        <h1 className="lg:text-4xl text-3xl font-semibold font-serif mb-6">LogIn</h1>
        <Input
          className="invalid:text-red-600"
          size="md"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <Input
          id="password"
          className=""
          size="md"
          type={type}
          label="Password"
          placeholder="Enter your password"
        />
        <div className="showPassword flex gap-2 font-bold active:text-blue-900  hover:text-blue-800">
          <input type="checkbox" id="showPassword" onChange={showPassword} />
          <label htmlFor="showPassword" className="">Show Password</label>
        </div>
        <Button element={'<Home/>'} className="bg-blue-800 text-white font-medium text-lg rounded-full">Login</Button>
      </form>
    </div>
  );
}
