import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { UserContext } from "../context/UserContext.jsx";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from '../utils/firebase'

export default function Header() {
     const [isMenuOpen, setIsMenuOpen] = React.useState(false);
     const [userData, setUserData] = useState()
     const navigate = useNavigate()
     const { user } = useContext(UserContext)

     const Data = async () => {
          try {
               const Docref = doc(db, "users", user.uid);
               const result = await getDoc(Docref)
               setUserData(result.data())
          } catch (error) {
               console.log("🚀 ~ data ~ error:", error, error.message)
          }
     }
     useEffect(() => { Data() }, [])

     const menuItems = [
          "My Profile",
          "My Bidding",
          "My Products",
          "Add Products",
          user?.isLogin ? "Log Out" : "Sign In",
     ];

     return (
          <Navbar onMenuOpenChange={setIsMenuOpen} className="border-b-2">
               <NavbarContent>
                    <NavbarMenuToggle
                         aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                         className="lg:hidden"
                    />
                    <NavbarBrand>
                         {/* <AcmeLogo /> */}
                         <p className="font-bold text-inherit cursor-pointer">Bidding Store</p>
                    </NavbarBrand>
               </NavbarContent>

               <NavbarContent className="md:flex hidden gap-6" justify="center">
                    <NavbarItem>
                         <Link href="/all-products/" color="foreground" className="active:text-blue-800 active:font-semibold hover:text-blue-600" aria-current="page">
                              Products
                         </Link>
                    </NavbarItem>
                    <NavbarItem>
                         <Link color="foreground" className="active:text-blue-800 active:font-semibold hover:text-blue-600" href="/biddings/">
                              My Bidding
                         </Link>
                    </NavbarItem>
                    <NavbarItem>
                         <Link color="foreground" className="active:text-blue-800 active:font-semibold hover:text-blue-600" href="/addproduct/">
                              Add Product
                         </Link>
                    </NavbarItem>
               </NavbarContent>
               <NavbarContent justify="end">
                    <NavbarItem className="flex">
                         {!user?.isLogin ?
                              <Button as={Link} color="primary" href="/auth/" variant="flat">
                                   Sign In
                              </Button> :
                              <Dropdown placement="bottom-end">
                                   <DropdownTrigger>
                                        <Avatar
                                             isBordered
                                             as="button"
                                             className="transition-transform"
                                             color="primary"
                                             name={userData?.displayName}
                                             size="sm"
                                             src={userData?.photoUrl}
                                        />
                                   </DropdownTrigger>
                                   <DropdownMenu aria-label="Profile Actions" variant="flat">
                                        <DropdownItem color="primary" key="profile" className="h-14 gap-2">
                                             <p className="font-semibold">Signed in as</p>
                                             <p className="font-semibold">{userData?.email}</p>
                                        </DropdownItem>
                                        <DropdownItem color='primary' key="settings">My Profile</DropdownItem>
                                        <DropdownItem color='primary' key="team_settings">Add Products</DropdownItem>
                                        <DropdownItem color='primary' key="analytics">My Products</DropdownItem>
                                        <DropdownItem color='primary' key="system">My Bits</DropdownItem>
                                        <DropdownItem color='primary' key="configurations">Products</DropdownItem>
                                        {/* <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
                                        <DropdownItem key="logout" color="danger">
                                             Log Out
                                        </DropdownItem>
                                   </DropdownMenu>
                              </Dropdown>}
                    </NavbarItem>
                    <NavbarItem>
                         {/* <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button> */}
                    </NavbarItem>

               </NavbarContent>
               <NavbarMenu>
                    {menuItems.map((item, index) => (
                         <NavbarMenuItem key={`${item}-${index}`}>
                              <Link
                                   color={
                                        index === menuItems.length - 1 ? user?.isLogin ? "danger" : "primary" : "foreground"
                                   }
                                   className="w-full hover:text-blue-600 active:text-blue-900"
                                   href="#"
                                   size="lg"
                                   onClick={
                                        () => {
                                             index === menuItems.length - 1 ? user.isLogin ? signOut() : navigate('/auth/') : index === menuItems.length - 2 ? navigate('/addproduct/') : ""
                                        }
                                   }
                              >
                                   {item}
                              </Link>
                         </NavbarMenuItem>
                    ))}
               </NavbarMenu>
          </Navbar>
     );
}
