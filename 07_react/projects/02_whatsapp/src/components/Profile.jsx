import { useContext, useReducer } from "react"
import { UserContext } from "../context/userContext"
import { Avatar, Button, Input } from "@nextui-org/react"


export default function Profile() {
   const { user } = useContext(UserContext)
   function reducer(state,action){
      switch (action.key) {
         case 'loading':
         return{
            ...state,
            isLoading:!state.isLoading,
         };
         default:
            return{
               ...state,
            };
      }
   }
   const initializedValue = {
      isLoading : false,
   }
   const [state , dispatch] = useReducer(reducer,initializedValue)
   // return (
   //    <div className="main w-full h-full flex flex-col text-white p-3">
   //       <input id="userimg" type="file" className="hidden" accept="image/*" />
   //       <label htmlFor="userimg" className="profileimg w-2/4 h-2/6 mx-auto rounded-full bg-slate-300"></label>
   //       <div className="username flex flex-col items-start">
   //          <label htmlFor="username">Username:</label>
   //          <input id="username" className="bg-black" type="text" value={user.username} readOnly />
   //          <label htmlFor="email">Email:</label>
   //          <input id="email" className="bg-black" type="text" value={user.email} readOnly />
   //          <label htmlFor="phoneNo">Phone No:</label>
   //          <input id="phoneNo" className="bg-black" type="text" value={user.phoneNo} readOnly />
   //          <Button variant="ghost">{state.isLoading ? 'Loading...' : 'Update Profile'}</Button>
   //       </div>
   //    </div>
   // )
   return (
      <div className="flex flex-col w-full h-full items-center gap-4 bg-blue-gray-200 p-4 rounded-xl">
                <div className="inputs w-full h-full flex flex-col gap-2">
                  <label className="text-white">Profile Img</label>
                  <div className="avatar flex mx-auto items-center justify-center text-5xl text-black w-2/4 h-[27%] bg-slate-300 rounded-full">{user.username.slice(0,2)}</div>
                  <label htmlFor="username" className="text-white">Username</label>
                     <Input id="username" type="text" value={user.username} minLength={3} maxLength={15}  className="userName w-4/5 capitalize" />
                     <label htmlFor="email" className="text-white">Email</label>
                     <Input type="email" id="email" value={user.email} readOnly className="email w-4/5" />
                     <label htmlFor="phoneNo" className="text-white">Phone No</label>
                     <Input type="number" id="phoneNo" value={user.phoneNo} placeholder="Enter Phone No : +923000000000" maxLength={13} className="phoneNo w-4/5" required />
                     <Button isLoading={state.isLoading} className="" onClick={() => updateUser()} color="primary">Update Profile</Button>
                </div>
           </div>
 )
}