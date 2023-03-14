import React from "react";
import { Link, Outlet } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./navigation.css";

const navigations = [
  { component: "home", route: "/" },
  { component: "courses", route: "courses" },
  { component: "about", route: "about" },
  { component: "chats", route: "chats" },
  { component: <ShoppingBagOutlinedIcon />, route: "cart" },
  { component: <FavoriteBorderOutlinedIcon />, route: "favourites" },
  { component: <NotificationsOutlinedIcon />, route: "notifications" },
  { component: <AccountCircleOutlinedIcon />, route: "profile" },
];
const Navigation = () => {
  return (
    <>
      <header className="nav">
        <Link className="logo" to="/">
          Goava
        </Link>
        <div className="links">
          {navigations.map(({ component, route }, i) => (
            <Link to={route}>{component}</Link>
          ))}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
