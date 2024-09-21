import { Button, Input } from "@nextui-org/react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import {
     Avatar,
} from "@nextui-org/react";
import { db, auth ,storage} from "../utils/firebase";
import { doc, updateDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function Profile() {
     const { user,setUser } = useContext(UserContext)
     const [profile, setProfile] = useState(user?.profile)
     const [username, setUserName] = useState(user.username)
     const [email, setEmail] = useState(user.email)
     const [phoneNo, setPhoneNo] = useState(user?.phoneNo)
     const [cityName, setCityName] = useState(user?.cityName)
     // console.log(user)
     const [loading , setLoading ] = useState(false)

     const updateUser = async () => {
          try {
               setLoading(true)
               const docRef = doc(db, "users", user.uid)

               const obj = {
                    username,
                    email,
                    phoneNo,
                    cityName,
               };

               const updDoc =await updateDoc(docRef, obj)
               setUser({ ...user, ...obj });
               // console.log('user => ' ,user )
               // console.log('document send successfull ' , updDoc.data())
               setLoading(false)

          } catch (error) {
               // console.log('error =>' , error)
               setLoading(false)

          }
     }

     const updateProfile=async(e)=>{
          try {
               setLoading(true)
               //  * create storage reference
               const storageRef = ref(storage , `users/${user.uid}`)
               // * for image upload
               const uploadImg = await uploadBytes(storageRef , e.target.files[0])
               // * getting url
               const url = await getDownloadURL(storageRef);
               setProfile(url)
               // * create document reference
               const docRef = doc(db, "users", user.uid);
               // * update document
               await updateDoc(docRef, { profile: url });
               setUser({ ...user, profile: url });
               setLoading(false)
          } catch (error) {

               
               // console.log('error => ', error.message)
               setLoading(false)
               
          }
     }
     return (
          <div className="flex flex-col w-full h-screen items-center gap-4 bg-blue-gray-200 p-4 rounded-xl">
               {/* <div className="text-center bg-slate-300 font-sans font-semibold text-2xl">Profile</div> */}
               <div className="flex md:flex-grow py-4 md:p-0 flex-col justify-center w-4/5 sm:w-3/4 md:w-2/4 lg:w-2/5 rounded-lg items-center  bg-blue-gray-100 form gap-2 sm:gap-3 md:gap-5">
                    <div className="header flex flex-col gap-2 sm:gap-3 md:gap-4 items-center">
                         <input type="file" id="images" className="hidden" alt="koi error hy" onChange={updateProfile} />
                         <Avatar
                              isBordered
                              as="label"
                              className="bg-transparent transition-transform w-40 h-40 text-5xl"
                              color="primary"
                              name={user.username}
                         src={profile}
                         />
                         <label htmlFor="images" className=" cursor-pointer flex flex-col items-center gap-3 bg-primary-500 px-4 py-2 rounded-lg hover:bg-primary-400 active:bg-primary-600 text-white " >
                              Change Profile Photo
                         </label>
                    </div>
                    <div className="inputs w-full flex flex-col gap-2 sm:gap-3 md:gap-5 items-center">
                         <Input type="text" value={username} minLength={3} maxLength={15} onChange={(e) => setUserName(e.target.value)} className="userName w-4/5 capitalize" />
                         <Input type="email" value={user.email} readOnly className="email w-4/5" />
                         <Input type="number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} placeholder="Enter Phone No : +923000000000" maxLength={13} className="phoneNo w-4/5" required />
                         <Input type="text" value={cityName} minLength={2} maxLength={15} onChange={(e) => setCityName(e.target.value)} placeholder="Enter your City" className="cityName capitalize w-4/5" required />
                         <Button isLoading={loading} className="" onClick={() => updateUser()} color="primary">Update Profile</Button>
                    </div>
               </div>
          </div>
     )
}