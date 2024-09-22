import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
     Card,
     CardHeader,
     CardBody,
     CardFooter,
     Typography,
     Button,
} from "@material-tailwind/react";
import { UserContext } from "../context/userContext";


export default function Cards() {
     const [products, setProducts] = useState([]);
     const [search, setSearch] = useState("");
     // const { addItemToCart } = useContext(CartContext)
     const navigate = useNavigate()

     useEffect(() => {
          // console.log("Use Effect Chal gya");
          getProducts();
     }, []);

     const searched = products?.filter(
          (data) => data.title.toLowerCase().indexOf(search) !== -1
     );

     const getProducts = () => {

          fetch("https://api.escuelajs.co/api/v1/products")
               .then((res) => res.json())
               .then((res) => {
                    // console.log("res->", res);
                    setProducts(res);
               });
     }

     return (
          <div className="flex w-full bg-blue-gray-50 flex-col flex-wrap bg-slate-100 justify-center items-center py-4">
               <input
                    placeholder="Search Products"
                    type="search"
                    className="border w-3/4 rounded-full pl-5 md:w-2/6 p-2"
                    onChange={(e) => setSearch(e.target.value)}
               />
               <div className="w-full cards flex flex-row flex-wrap justify-center items-center">
               {searched.map((data) => (
                    data?.title !== 'New Product' ? data?.title !== "eerr" ? data?.description !== 'tra gop' ? data?.description !== "prueba 58" ? data?.description !== "Hello" ?
                    <Link key={data.id} className="w-5/6 md:w-96 flex justify-center items-center" to={`/product/${data.id}`}>
                         <Card className="w-11/12 md:w-96 m-4">
                              <CardHeader shadow={false} floated={false} className="h-60">
                                   <img
                                        src={data.images ? data.images[1] : data.category.image}
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                   />
                              </CardHeader>
                              <CardBody>
                                   <div className="mb-2 flex items-center justify-between">
                                        <Typography color="blue-gray" className="font-medium">
                                             {data.title}
                                        </Typography>
                                        <Typography color="blue-gray" className="font-medium">
                                             ${data.price}
                                        </Typography>
                                   </div>
                                   <Typography
                                        variant="small"
                                        color="gray"
                                        className="text-start font-normal opacity-75"
                                   >
                                        {data.description}
                                   </Typography>
                              </CardBody>
                              <CardFooter className="pt-0">
                                   <Button
                                        ripple={false}
                                        fullWidth={true}
                                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        onClick={()=>navigate("/data.id")}
                                   >
                                        Show Details
                                   </Button>
                              </CardFooter>
                         </Card>
                    </Link>
               :"":"":"":"":""))}
               </div>
          </div>
     )
}