import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FormInput from "../../input/input";
const Input = () => {
  return (
    <form action="" className="flex justify-center items-center p-4">
      <FormInput type="text" placeholder="Search Courses" name="search" />
      <button className="p-1 bg-slate-300  border border-black rounded-sm">
        <SearchRoundedIcon />
      </button>
    </form>
  );
};

export default Input;
