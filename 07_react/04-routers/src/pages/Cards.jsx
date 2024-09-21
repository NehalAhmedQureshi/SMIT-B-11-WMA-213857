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
                    console.log("res->", res);
                    setProducts(res);
               });
     }

     return (
          <div className="flex w-full flex-col bg-slate-100 justify-center items-center border-2 border-black">
               <h1>Products</h1>
               <input
                    placeholder="Search"
                    type="search"
                    className="border w-3/4 p-2"
                    onChange={(e) => setSearch(e.target.value)}
               />
               <div className="w-full cards flex flex-row flex-wrap">
               {searched.map((data) => (
                    <Link key={data.id} className="w-3/4" to={`/product/${data.id}`}>
                         <Card className="w-96 m-4">
                              <CardHeader shadow={false} floated={false} className="h-70">
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
                                        className="font-normal opacity-75"
                                   >
                                        {data.description}
                                   </Typography>
                              </CardBody>
                              <CardFooter className="pt-0">
                                   <Button
                                        ripple={false}
                                        fullWidth={true}
                                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        onClick={()=>navigate("/product/data.id")}
                                   >
                                        Show Details
                                   </Button>
                              </CardFooter>
                         </Card>
                    </Link>
               ))}
               </div>
          </div>
     )
}