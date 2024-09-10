// import Header from '../components/header'
import { Button } from "@nextui-org/react"

function Home() {
     // console.log(window.location)
     return (
          <div className='w-full h-auto'>
               <div className="header w-full flex flex-col bg-slate-200 border-2 border-black gap-5 justify-center items-center ">
                    <div className="content w-2/4">
                         <div className="heading text-4xl font-serif m-4 font-bold">
                              Nehal Supermart
                         </div>
                         <div className="para font-sans text-center mb-3">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum laboriosam assumenda commodi. Aut totam minus quasi! Vitae est, delectus voluptatem tempore dolorum quidem ipsa officiis illo, veritatis consectetur blanditiis asperiores?
                              Placeat neque minima necessitatibus laboriosam iure et quam asperiores non? Aliquam non eaque voluptates temporibus soluta, repellendus sunt in, tempora illo cupiditate hic ipsam voluptatem optio amet doloribus excepturi labore.
                         </div>
                         <div className="buttons flex justify-center items-center gap-8">
                              <Button className="shop bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all delay-200 ease-in-out font-semibold text-medium">Big Deals 🎉</Button>
                              <Button className="buy bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all delay-200 ease-in-out font-semibold text-medium">Free Delivery 📦</Button>
                         </div>
                    </div>
                    <div className="cards bg-slate-400 w-11/12 p-8 rounded-xl mb-6 flex flex-row  items-center justify-evenly over ">
                         <div className="card1 flex flex-col p-2 rounded-xl border-4 bg-slate-300  border-blue-500 w-2/5 gap-4 justify-center items-center">
                              <div className="heading font-serif text-2xl font-bold">Card 1</div>
                              <div className="content font-mono font-semibold px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores consequatur quia aliquid quo sed omnis? Quas, suscipit ab consequuntur error eaque earum nulla nesciunt nisi repellat. Temporibus, nisi a!</div>
                              <div className="footer flex gap-5 ">
                                   <Button className="addToCart text-sm font-sans font-semibold bg-white hover:bg-blue-600 hover:text-white">Add to Cart 🛒</Button>
                                   <Button className="viewMore text-sm  font-sans font-semibold bg-white hover:bg-blue-600 hover:text-white">View More 👉🏻</Button>
                              </div>
                         </div>
                         <div className="card2 flex flex-col p-2 rounded-xl border-4 bg-slate-300  border-blue-500 w-2/5 gap-4 justify-center items-center">
                              <div className="heading font-serif text-2xl font-bold">Card 1</div>
                              <div className="content font-mono font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores consequatur quia aliquid quo sed omnis? Quas, suscipit ab consequuntur error eaque earum nulla nesciunt nisi repellat. Temporibus, nisi a!</div>
                              <div className="footer flex gap-5">
                                   <Button className="addToCart text-sm  font-sans font-semibold bg-white hover:bg-blue-600 hover:text-white">Add to Cart 🛒</Button>
                                   <Button className="viewMore text-sm  font-sans font-semibold bg-white hover:bg-blue-600 hover:text-white">View More 👉🏻</Button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
export default Home