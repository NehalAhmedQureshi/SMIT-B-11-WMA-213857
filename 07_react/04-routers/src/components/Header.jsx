import React from "react";
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  console.log(window.location.pathname)
  const [authientication,setAuthientication] = useState(null)
  // if (window.location.pathname === '/auth'){
  //   setAuthientication("")
  // }else {
  //   console.log("eror")
  // }

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  // const [isActive, setIsActive] = useState(null)

  return (
    <Navbar className="bg-slate-300 w-full m-0 border-3 border-gray-400" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href="/" color ='foreground'>
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">Nehal Supermart</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="sm:flex gap-9 hidden" justify="center">
        <NavbarItem isActive>
          <Link  color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive >
          <Link color="foreground" href="#" aria-current="page">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive >
          <Link color={authientication} href="/auth">
            Authientication
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent as="div" justify="end">
        <Dropdown  placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Nehal Ahmed Qureshi"
              size="sm"
              // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
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
            <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 5 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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
