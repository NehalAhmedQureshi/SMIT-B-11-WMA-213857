import { Button } from "antd";
import { Link } from "react-router-dom";
import AllCards from "../../conponents/AllCards"; // Fixed typo from 'conponents'

export default function Home() {
     return (
          <div className="main w-full">
               <div
                    className="main flex flex-col flex-grow h-[89vh] border-2"
                    style={{
                         backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/pubgtemp-e6dd0.appspot.com/o/WhatsApp%20Image%202024-10-09%20at%207.33.10%20PM.jpeg?alt=media&token=e96f46b7-5c3a-4132-81ea-3523949b2ded)',
                         backgroundSize: '100% 90vh', // Changed for responsiveness
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center',
                         width: '100%',
                    }}
               >
                    <div className="homepage flex justify-center items-center gap-3 flex-col font-sans">
                         <div className="wrap flex flex-col gap-3 justify-center items-center bg-blur backdrop-blur-[7.6px] shadow-blue-900 shadow-large rounded-2xl px-10 py-10 mt-32">
                              <div className="heading font-bold text-4xl">
                                   FAIZAN PUBG CARDING ACCOUNTS
                              </div>
                              <div className="para text-slate-200 font-sans font-extrabold">
                                   HIGH QUALITY CARDING ACCOUNT AT THE CHEAPEST
                              </div>

                              <Link to={'/cards'}>
                                   <button className="px-4 py-2 border-2 border-white rounded-lg mt-5 bg-orange-400 hover:bg-orange-300 active:bg-orange-600 active:text-orange-200 active:border-orange-300 text-white font-extrabold font-sans">
                                        View All
                                   </button>
                                   </Link>

                         </div>
                    </div>
               </div>
          </div>
     );
}
