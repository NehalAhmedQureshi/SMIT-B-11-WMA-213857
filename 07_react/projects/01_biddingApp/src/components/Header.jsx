import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { UserContext } from "../context/UserContext.jsx";
import { useState, useContext } from "react";


export default function Header() {
     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

     const { user } = useContext(UserContext)

     const menuItems = [
          "Profile",
          "Dashboard",
          "Log Out",
     ];

     return (
          <Navbar onMenuOpenChange={setIsMenuOpen}>
               <NavbarContent>
                    <NavbarMenuToggle
                         aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                         className="sm:hidden"
                    />
                    <NavbarBrand>
                         {/* <AcmeLogo /> */}
                         <p className="font-bold text-inherit">Bidding Store</p>
                    </NavbarBrand>
               </NavbarContent>

               <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                         <Link color="foreground" href="#">
                              My Cart
                         </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                         <Link href="#" aria-current="page">
                              Products
                         </Link>
                    </NavbarItem>
                    <NavbarItem>
                         <Link color="foreground" href="#">
                              My Bidding
                         </Link>
                    </NavbarItem>
               </NavbarContent>
               <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                         {!user?.isLogin ?
                              <Button as={Link} color="primary" href="/auth/" variant="flat">
                                   LogIn
                              </Button> :
                              <Dropdown placement="bottom-end">
                                   <DropdownTrigger>
                                        <Avatar
                                             isBordered
                                             as="button"
                                             className="transition-transform"
                                             color="secondary"
                                             name="Jason Hughes"
                                             size="sm"
                                             src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                        />
                                   </DropdownTrigger>
                                   <DropdownMenu aria-label="Profile Actions" variant="flat">
                                        <DropdownItem key="profile" className="h-14 gap-2">
                                             <p className="font-semibold">Signed in as</p>
                                             <p className="font-semibold">zoey@example.com</p>
                                        </DropdownItem>
                                        <DropdownItem key="settings">My Settings</DropdownItem>
                                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                                        <DropdownItem key="analytics">Analytics</DropdownItem>
                                        <DropdownItem key="system">System</DropdownItem>
                                        <DropdownItem key="configurations">Configurations</DropdownItem>
                                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
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
                                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                   }
                                   className="w-full"
                                   href="#"
                                   size="lg"
                              >
                                   {item}
                              </Link>
                         </NavbarMenuItem>
                    ))}
               </NavbarMenu>
          </Navbar>
     );
}
