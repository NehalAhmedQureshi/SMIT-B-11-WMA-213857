import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  LinkIcon,
  link,
} from "@nextui-org/react";
import { Button } from "antd";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(user.username);
  const handleSignOut = async () => {
    await signOut(auth);
    // navigate("/auth");
  };
  return (
    <Navbar
      className="bg-black text-slate-200 "
      shouldHideOnScroll
    >
      <NavbarBrand className="">
        <p
          onClick={() => {
            navigate('/');
          }}
          className="font-bold cursor-pointer text-inherit text-xl"
        >FAIZAN ACCOUNT'S</p>
      </NavbarBrand>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent as="div" justify="end" className="flex gap-5">
        {/* //* profile icon */}
        {/* <Dropdown placement="bottom-end">
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
        </Dropdown> */}

        {user.isLogin ? (
          <button as={Link} href="/add-cards" color="" variant="solid"
            className="px-4 py-1 border-2 border-orange-600 rounded-lg bg-orange-400 hover:bg-orange-300 active:bg-orange-600 active:text-orange-200 active:border-orange-300 hover:text-orange-600"
          >
            Add New
          </button>
        ) : (
          ""
        )}
        <button color="" variant="solid"
          className="px-4 py-1 border-2 border-orange-600 rounded-lg bg-orange-400 hover:bg-orange-300 active:bg-orange-600 active:text-orange-200 active:border-orange-300 hover:text-orange-600">
          Change
        </button>
        {user.isLogin ? (
          <button
            color=""
            className="px-4 py-1 border-2 border-orange-600 rounded-lg bg-orange-400 hover:bg-orange-300 active:bg-orange-600 active:text-orange-200 active:border-orange-300 hover:text-orange-600"
            variant="solid"
            onClick={() => {
              handleSignOut();
            }}
          >
            Logout
          </button>
        ) : (
          <button as={Link} href="/auth" variant="solid"
          className="px-4 py-1 border-2 border-orange-600 rounded-lg bg-orange-400 hover:bg-orange-300 active:bg-orange-600 active:text-orange-200 active:border-orange-300 hover:text-orange-600"
          onClick={()=>navigate("/auth")}>
            SignIn
          </button>
        )}
      </NavbarContent>
    </Navbar>
  );
}
