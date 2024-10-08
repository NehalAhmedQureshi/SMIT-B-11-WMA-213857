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
    navigate("/auth");
  };
  return (
    <Navbar
      shouldHideOnScroll
      className="bg-slate-600 text-slate-200 border-b-2 border-slate-500"
    >
      <NavbarBrand className="">
        <p
          onClick={() => {
            navigate();
          }}
          className="font-bold cursor-pointer text-inherit text-xl"
        >
          {user?.username
            ? `${user.username.toUpperCase()}  ACCOUNTS`
            : "GUEST"}{" "}
        </p>
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
          <Button as={Link} href="/add-cards" color="danger" variant="solid">
            Add New
          </Button>
        ) : (
          ""
        )}
        <Button color="danger" variant="solid">
          Change
        </Button>
        {user.isLogin ? (
          <Button
            color="danger"
            onClick={() => {
              handleSignOut();
            }}
            variant="solid"
          >
            Logout
          </Button>
        ) : (
          <Button as={Link} href="/auth" color="danger" variant="solid">
            SignIn
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
}
