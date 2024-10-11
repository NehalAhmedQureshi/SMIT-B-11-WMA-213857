import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import {
     Card,
     CardHeader,
     CardBody,
     CardFooter,
     Typography,
     Button,
} from "@material-tailwind/react";

export default function AllCards({ id }) {
     const [allProduct, setAllProduct] = useState([]);
     const [search, setSearch] = useState("");


     async function getProduct() {
          const result = await getDocs(collection(db, "cards"));
          const products = result.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setAllProduct(products);
     }

     const searched = allProduct?.filter(
          (data) => data.productPrice.toLowerCase().indexOf(search) !== -1
     );
     useEffect(() => {
          getProduct();
     }, []);

     return (
          <div id={id} className="main w-full flex min-h-[89vh] flex-col justify-center items-center py-5 bg-transparent"
               style={{
                    backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/pubgtemp-e6dd0.appspot.com/o/WhatsApp%20Image%202024-10-09%20at%207.33.10%20PM.jpeg?alt=media&token=e96f46b7-5c3a-4132-81ea-3523949b2ded)',
                    backgroundSize: '100% 100vh',
                    backgroundRepeat: 'repeat',
               }}
          >
               <input
                    placeholder="Search Products"
                    type="search"
                    className="border w-3/4 rounded-full pl-5 md:w-2/6 p-2 bg-transparent bg-blur backdrop-blur-[8.6px]  text-white font-bold"
                    onChange={(e) => setSearch(e.target.value)}
               />
               <div className="w-full cards flex flex-wrap justify-center items-center" >

                    {searched.map((data, index) => (
                         <Link key={data.id} className="sm:w-3/6 md:w-72 flex justify-center items-center" to={`/card/${data.id}`}>
                              <Card className="w-11/12 md:w-72 m-2 bg-blur backdrop-blur-[9.6px] hover:border-2 text-white">
                                   <CardHeader shadow={false} floated={false} className="h-44">
                                        <img
                                             src={data.url ? data.url : ''}
                                             alt="card-image"
                                             className="h-full w-full object-cover"
                                        />
                                   </CardHeader>
                                   <CardBody>
                                        <div className=" flex flex-col items-center justify-between">
                                             <Typography color="white" className="font-sans font-bold text-xl">
                                                  Carding Accounts
                                             </Typography>
                                             <div className="flex justify-evenly w-full">
                                                  <Typography color="white" className=" font-semibold text-sm">
                                                       {data.productPrice}-PKR
                                                  </Typography>
                                                  <Typography color="white" className="font-bold font-serif text-sm">
                                                       Login Ready
                                                  </Typography>
                                             </div>
                                        </div>
                                   </CardBody>
                                   <CardFooter className="pt-0">
                                        <Button
                                             ripple={false}
                                             fullWidth={true}
                                             className=" text-orange-200 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                             onClick={() => navigate("/data.id")}
                                        >
                                             Show Details
                                        </Button>
                                   </CardFooter>
                              </Card>
                         </Link>
                    ))}
               </div>
          </div>
     );
}
