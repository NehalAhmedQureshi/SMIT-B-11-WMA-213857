import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
// import NotFound from "./NotFound";
import { Button } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../context/cartContext";
import NotFound from "./404NotFound";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebase'
import { UserContext } from "../context/userContext";
import { Carousel } from "@material-tailwind/react";


function Product() {
  const { addItemToCart } = useContext(CartContext)
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { user } = useContext(UserContext);
  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("data=>", data);
        setProductInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setNotFound(true), setLoading(false);
      });
  }, [id]);
  // const addItemToCart =async (productInfo) => {
  //   console.log("🚀 ~ addItemToCart ~ productInfo:", productInfo)
  //   try {
  //     const docRef = doc(db, 'carts', user.uid);
  //     const document =await setDoc(docRef , )
  //     console.log("🚀 ~ addItemToCart ~ document:", document.data())

  //   } catch (errorMsg) {
  //     console.log("🚀 ~ addItemToCart ~ errorMsg:", errorMsg)
  //   }
  // }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-3 py-4 mx-auto">
        {loading ? (
          <h1 className="text-center text-2xl">Loading ....</h1>
        ) : notFound ? (
          <NotFound />
        ) : (
          <div className="lg:w-4/5  mx-auto flex flex-wrap">
            <Carousel transition={{ duration: 2 }} className="rounded-xl md:w-2/3 lg:w-2/4">
              <img
                src={productInfo.images[0]}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src={productInfo.images[1]}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={productInfo.images[2]}
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {productInfo.category.name}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productInfo.title}
              </h1>
              <div className="flex justify-center mb-4">
                <span className="flex justify-center items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">{"3 Reviews"}</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="cursor-pointer text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="cursor-pointer text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="cursor-pointer text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                {productInfo.description}
              </p>
              <div className="flex mt-6 justify-center items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${productInfo.price}
                </span>
                <Button
                  onClick={() => addItemToCart({ ...productInfo, quantity: 1 })}
                  // onClick={addItemToCart({ ...productInfo, quantity: 1 })}
                  icon={<ShoppingCartOutlined />}>
                  {/* {isItemAdded(id) ? `Item Added (${isItemAdded(id).quantity})` : 'Add To Cart'} */}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Product;