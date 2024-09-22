// import Header from '../components/header'
import { useContext } from "react";
import { Button } from "@nextui-org/react"
import { UserContext } from "../context/userContext";
import Cards from "./Cards";

function Home() {
     // console.log(window.location)
     // * import context 
     const { user } = useContext(UserContext);
     console.log(user)
     return (
          <div className='w-full h-auto bg-blue-gray-50'>
               <div className="header w-full flex flex-col bg-slate-200 gap-5 justify-center items-center ">
                    <div className="userProfile text-center">
                         {user.isLogin ? (
                              <h1 className="text-2xl  text-center font-semibold my-4 font-mono">
                                   Welcome {`${user?.username}👋` }
                              </h1>
                         ) : 'User Not Found'}

                    </div>
                    <Cards />
               </div>
          </div>
     )
}
export default Home