import { Input , Link } from "@nextui-org/react";
import { useState } from "react";
import {Button} from "@nextui-org/react";

export default function Signin() {
  console.log(window.location.pathname)
  const [type, setType] = useState("password");
  const showPassword = (e) => {
    if (e.target.checked === true) {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <div className="flex w-full h-auto justify-center border-2 py-6 border-black items-center">
      <form className="flex flex-col  bg-slate-300  px-6 py-5 max-w-full xl:w-2/5 lg:w-3/6 md:w-3/6 rounded-2xl gap-3 items-center signinForm">
        <h1 className="text-gray-700 font-sans mb-5 text-2xl font-semibold">LogIn</h1>
        <Input
          className=""
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
        <div className="showPassword flex flex-row items-center justify-center gap-2 font-semibold font-sans">
          <input type="checkbox" id="showPassword" onChange={showPassword} />
          <label htmlFor="showPassword" className="flex flex-row items-center justify-center gap-2 font-semibold font-sans">Show Password</label>
        </div>
        <Button element={'<Home/>'} className="bg-gray-100 w-1/4 text-blue-600 text-medium font-semibold font-sans hover:bg-blue-600 hover:text-white transition-all ease-in-out delay-200">Login</Button>
        <Link className='hover:text-blue-900 active:text-blue-600 font-sans font-semibold' href='/auth/signup'>Don't have an account ?</Link>
        {/* <Link className='hover:text-blue-900 active:text-blue-600 font-sans font-semibold' href='/auth'>Go back</Link> */}
      </form>
    </div>
  );
}
