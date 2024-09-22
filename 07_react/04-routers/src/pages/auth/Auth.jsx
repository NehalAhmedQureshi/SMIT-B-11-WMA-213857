import { Link } from "@nextui-org/react"
function Auth() {
     // console.log(window.location.pathname)
     return (
          <>
               <h1
                    className="bg-slate-600 text-center text-white mt-4
          font-medium text-4xl py-3"
               >
                    Authientication
               </h1>
               <div className="links flex flex-row gap-9 justify-center items-center mt-14 ">
                    <Link className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-800 active:bg-blue-700" href="/auth/signup" >SignUp</Link>
                    <Link className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-800 active:bg-blue-700" href="auth/signin">LogIn</Link>
               </div>

          </>
     );
}
export default Auth;
