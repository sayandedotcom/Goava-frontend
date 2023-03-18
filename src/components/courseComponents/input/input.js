import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FormInput from "../../input/input";
import NewTooltip from "../../tooltip/tooltip";
import Button from "../../button/button";
const Input = () => {
  return (
    <form action="" className="flex justify-center items-center gap-3 p-4">
      <FormInput type="text" placeholder="Search Courses" name="search" />
      <NewTooltip title="Search">
        <Button
          buttonType="inverted"
          // className="p-1 bg-slate-300  border border-black rounded-sm"
        >
          <SearchRoundedIcon />
        </Button>
      </NewTooltip>
    </form>
  );
};

export default Input;
