import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const Input = () => {
  return (
    <form action="" className="flex justify-center items-center p-2">
      <input type="text" placeholder="Search Courses" name="search" />
      <button>
        <SearchRoundedIcon />
      </button>
    </form>
  );
};

export default Input;
