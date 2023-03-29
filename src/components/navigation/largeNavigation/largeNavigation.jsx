import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "../navigation.css";

const navigations = [
  { component: "home", route: "/" },
  { component: "about us", route: "about" },
  { component: "courses", route: "courses" },
];
const navigationsIcons = [
  {
    component: <ShoppingBagOutlinedIcon style={{ fill: "white" }} />,
    route: "cart",
  },
  {
    component: <FavoriteBorderOutlinedIcon style={{ fill: "white" }} />,
    route: "favourites",
  },
  {
    component: <NotificationsOutlinedIcon style={{ fill: "white" }} />,
    route: "notifications",
  },
  // { component: <AccountCircleOutlinedIcon />, route: "profile" },
];

const LargeNavigation = () => {
  return (
    <div className="flex items-center justify-between gap-6 mr-3 max-w-5xl:hidden ">
      {navigations.map(({ component, route }, i) => (
        <Link className="font-semibold no-underline text-black" to={route}>
          {component}
        </Link>
      ))}
      {navigationsIcons.map(({ component, route }, i) => (
        <Link className="flex bg-[black] p-2 rounded-[50%]" to={route}>
          {component}
        </Link>
      ))}
      <Link
        to="login"
        className="font-semibold bg-black text-white px-5 py-[0.4rem] rounded-[4px] hover:bg-white hover:text-black hover:ring hover:ring-black"
      >
        Sign In
      </Link>
      <Link
        to="signup"
        className="font-semibold bg-black text-white px-5 py-[0.4rem] rounded-[4px] hover:bg-white hover:text-black hover:ring hover:ring-black"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default LargeNavigation;
