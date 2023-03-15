import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "../navigation.css";
const MobileNavigation = () => {
  return (
    <div className="flex items-center md:hidden">
      <MenuRoundedIcon />
    </div>
  );
};

export default MobileNavigation;
