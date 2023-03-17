import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "../../button/button";

const navbar = [
  { id: 1, component: "home", route: "/" },
  { id: 2, component: "about us", route: "/about" },
  { id: 3, component: "courses", route: "/courses" },
];
const navbarIcons = [
  {
    id: 1,
    component: <ShoppingBagOutlinedIcon style={{ fill: "white" }} />,
    route: "/cart",
  },
  {
    id: 2,
    component: <FavoriteBorderOutlinedIcon style={{ fill: "white" }} />,
    route: "/favourites",
  },
  {
    id: 3,
    component: <NotificationsOutlinedIcon style={{ fill: "white" }} />,
    route: "/notifications",
  },
  // { component: <AccountCircleOutlinedIcon />, route: "profile" },
];

const LargeNavbar = () => {
  return (
    <div className="flex items-center justify-between gap-6 mr-3 max-w-5xl:hidden ">
      {navbar.map(({ id, component, route }, i) => (
        <Link
          key={id}
          className="font-semibold no-underline text-black"
          to={route}
        >
          {component}
        </Link>
      ))}
      {navbarIcons.map(({ id, component, route }, i) => (
        <Link key={id} className="flex bg-[black] p-2 rounded-[50%]" to={route}>
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
