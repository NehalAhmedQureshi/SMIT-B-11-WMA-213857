

export default function BidsNotFound({name}) {

     return (
          <div className="main w-full h-[50vh] flex justify-center items-center">
               <div className="div px-8 text-2xl font-extrabold text-center border-red-500 text-red-600">{name} You are Not an Admin! </div>
          </div>
     )
}