import React from "react";
import { useState, useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { signOut } from "firebase/auth";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { UserContext } from "../context/userContext.jsx";
import { Badge, Button } from "antd";
import {
  LogoutOutlined,
  LoginOutlined,
  MoonOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router";
export default function App() {
  // console.log(window.location.pathname)
  // *import states
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [authientication, setAuthientication] = useState(null);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // if (window.location.pathname === '/auth'){
  //   setAuthientication("")
  // }else {
  //   console.log("eror")
  // }
  const goToHomePage = () => navigate("/");

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

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
    <Navbar
      className="bg-slate-100 w-full m-0 border-3 border-gray-400"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href="/" color="foreground">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">Nehal Supermart</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="sm:flex gap-9 hidden" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="#">
          Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/product/" aria-current="page">
            Products
          </Link>
        </NavbarItem>
        {!user?.isLogin ? (
          <NavbarItem isActive>
            <Link color={authientication} href="/auth/signin">
              <Button
                className="mx-2"
                shape="circle"
                icon={<LoginOutlined />}
                onClick={navigate("/auth/signin")}
                type="default"
              ></Button>
            </Link>
          </NavbarItem>
        ) : (
          ""
        )}
      </NavbarContent>
      {user?.isLogin ? (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name={user?.username}
                size="sm"
                // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user.email}</p>
              </DropdownItem>
              <DropdownItem key="myProfile" className="">
                <Link href="/profile" className="text-black">My Profile</Link>
              </DropdownItem>
              {/* <DropdownItem key="team_settings">Team Settings</DropdownItem> */}
              {/* <DropdownItem key="analytics">Analytics</DropdownItem> */}
              {/* <DropdownItem key="system">System</DropdownItem> */}
              {/* <DropdownItem key="configurations">Configurations</DropdownItem> */}
              {/* <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem> */}
              <DropdownItem key="logout" color="danger">
                <Button
                  className="mx-2"
                  shape="circle"
                  icon={<LogoutOutlined />}
                  onClick={handleSignOut}
                  danger
                  type="default"
                ></Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Link href="/cart">
            <Badge count={0} showZero>
              <Button
                shape="circle"
                icon={<ShoppingCartOutlined />}
                type="default"
                className="mx-2"
              ></Button>
            </Badge>
          </Link>
        </NavbarContent>
      ) : (
        ""
      )}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 5
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
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
