import { Button } from "antd"
import { Link } from "react-router-dom"


export default function Home() {

     return (
          <div className="main flex flex-col flex-grow">
               <div className="homepage flex justify-center items-center gap-3 w-full flex-col h-screen bg-slate-600 text-slate-200 pb-10">
                    <div className="heading font-bold text-4xl">HASNAIN PUBG CARDING ACCOUNTS</div>
                    <div className="para font-semibold">HIGHT QUALITY CARDING ACCOUNT IN CHEAPEST</div>
                    <Button color="danger" className="mt-5" variant="solid">View All</Button>
               </div>
               <div className="cards" id="cards">
                    <div className="card w-5 h-5 bg-slate-500"></div>
               </div>
          </div>
     )
}