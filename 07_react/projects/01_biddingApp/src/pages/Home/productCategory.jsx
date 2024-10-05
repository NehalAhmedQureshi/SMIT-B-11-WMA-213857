// https://dummyjson.com/products/categories
import { Button } from "antd";

import { useState } from "react";
import { useEffect } from "react";

export default function ProductCategory() {
     const [categories, setCategories] = useState([])
     useEffect(() => {
          getCategories();
     }, []);

     function getCategories() {
          fetch("https://dummyjson.com/products/categories")
               .then((res) => res.json())
               .then((data) => setCategories(data));
     }
     console.log(categories, 'categories')

     return <div className="main w-full py-4">
          <div className="categories w-5/6 p-4 border-3 gap-5 mx-auto flex flex-wrap rounded-2xl">

          {categories.map((data,index) => (
               <Button variant="bordered" key={index} className="category py-3 px-8 rounded-xl w-auto capitalize ">{data.name ? data.name : data.slug}</Button>
          ))}

          </div>

     </div>;
}
