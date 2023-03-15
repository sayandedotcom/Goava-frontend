import React from "react";
import { Link, Outlet } from "react-router-dom";
import LargeNavigation from "./largeNavigation/largeNavigation";
import MobileNavigation from "./mobileNavigation/mobileNavigation";
import Footer from "../footer/footer";
import "./navigation.css";

const Navigation = () => {
  return (
    <>
      <header className="nav flex flex-row justify-between w-full z-[101] bg-white fixed top-0 shadow-[0_3px_6px_0_rgb(0_0_0_/_20%)] uppercase no-underline h-[100px] border-t-[3px] border-t-[#2c4152] border-b-[#e0e0e0] border-solid border-b ">
        <Link
          className="logo flex items-center justify-center no-underline text-[black] text-[2rem] font-bold px-8 py-0"
          to="/"
        >
          Goava
        </Link>
        <LargeNavigation />
        <MobileNavigation />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
