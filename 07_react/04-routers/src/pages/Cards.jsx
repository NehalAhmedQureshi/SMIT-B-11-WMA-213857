import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

export default function Card() {
     const [products, setProducts] = useState([]);
     const [search, setSearch] = useState("");

     useEffect(() => {
          console.log("Use Effect Chal gya");
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
          <div className="flex w-full flex-col justify-center items-center border-2 border-black">
               <h1>Products</h1>
               <input
                    placeholder="Search"
                    type="search"
                    className="border w-3/4 p-2"
                    onChange={(e) => setSearch(e.target.value)}
               />
               {searched.map((data) => (
                    <Link key={data.id} className="w-3/4 " to={`/product/${data.id}`}>
                         <div className="flex w-3/4 px-2 py-2 bg-purple-100 my-2 rounded-xl">
                              <div className="flex-grow flex ">
                                   <img className="h-14 w-14" src={data.images?data.images:data.category.image} />
                                   <h1 className="text-left p-2 my-1 pl-4 ">
                                        {data.title} {"(" + data.category.name + ")"}
                                   </h1>
                              </div>
                         </div>
                    </Link>
               ))}
          </div>
     )
}