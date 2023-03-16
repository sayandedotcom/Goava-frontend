import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "../../button/button";

const navbar = [
  { component: "home", route: "/" },
  { component: "about us", route: "/about" },
  { component: "courses", route: "/courses" },
];
const navbarIcons = [
  {
    component: <ShoppingBagOutlinedIcon style={{ fill: "white" }} />,
    route: "/cart",
  },
  {
    component: <FavoriteBorderOutlinedIcon style={{ fill: "white" }} />,
    route: "/favourites",
  },
  {
    component: <NotificationsOutlinedIcon style={{ fill: "white" }} />,
    route: "/notifications",
  },
  // { component: <AccountCircleOutlinedIcon />, route: "profile" },
];

const LargeNavbar = () => {
  return (
    <div className="flex items-center justify-between gap-6 mr-3 max-w-5xl:hidden ">
      {navbar.map(({ component, route }, i) => (
        <Link className="font-semibold no-underline text-black" to={route}>
          {component}
        </Link>
      ))}
      {navbarIcons.map(({ component, route }, i) => (
        <Link className="flex bg-[black] p-2 rounded-[50%]" to={route}>
          {component}
        </Link>
      ))}
      <Link to="/signin">
        <Button buttonType="inverted">Sign In</Button>
      </Link>
      <Link to="/signup">
        <Button buttonType="inverted">Sign Up</Button>
      </Link>
    </div>
  );
};

export default LargeNavbar;
