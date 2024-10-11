import { Button,Link } from "@nextui-org/react";
import '../App.css'

export default function InternetNotFound() {
     return (
          <div className="main-n w-full h-screen flex flex-col justify-center items-center gap-5 ">
               <div className=" text-red-600 font-sans  font-semibold">Check your Internet Connection and try again! </div>
               <Button as={Link} color="danger" href="/" variant="bordered">
                    Try Again 
               </Button>
          </div>
     )
}