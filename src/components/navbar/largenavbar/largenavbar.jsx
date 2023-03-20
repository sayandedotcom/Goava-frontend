import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "../../button/button";
import NewTooltip from "../../tooltip/tooltip";

const navbar = [
  { id: 1, component: "home", route: "/" },
  { id: 2, component: "about us", route: "/about" },
  { id: 3, component: "courses", route: "/courses" },
];
const navbarIcons = [
  {
    id: 1,
    tooltip: "My Cart",
    component: <ShoppingBagOutlinedIcon style={{ fill: "white" }} />,
    route: "/cart",
  },
  {
    id: 2,
    tooltip: "My Favourites",
    component: <FavoriteBorderOutlinedIcon style={{ fill: "white" }} />,
    route: "/favourites",
  },
  {
    id: 3,
    tooltip: "Notifications",
    component: <NotificationsOutlinedIcon style={{ fill: "white" }} />,
    route: "/notifications",
  },
  // { component: <AccountCircleOutlinedIcon />, route: "profile" },
];

const LargeNavbar = () => {
  return (
    <div className="flex items-center justify-between gap-6 mr-3 max-w-5xl:hidden ">
      {navbar.map(({ id, component, route }) => (
        <Link
          key={id}
          className="font-semibold no-underline text-black"
          to={route}
        >
          {component}
        </Link>
      ))}
      {navbarIcons.map(({ id, tooltip, component, route }) => (
        <NewTooltip title={tooltip}>
          <Link
            key={id}
            className="flex bg-[black] p-2 rounded-[50%]"
            to={route}
          >
            {component}
          </Link>
        </NewTooltip>
      ))}
      <Link to="/signin">
        <NewTooltip title="Sign In">
          <Button buttonType="inverted">Sign In</Button>
        </NewTooltip>
      </Link>
      <Link to="/signup">
        <NewTooltip title="Sign In">
          <Button buttonType="inverted">Sign Up</Button>
        </NewTooltip>
      </Link>
    </div>
  );
};

export default LargeNavbar;
