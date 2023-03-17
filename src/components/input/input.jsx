import React from "react";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";

const FormInput = ({ children, register, errorMessage, ...otherProps }) => {
  return (
    <div>
      <input
        className="py-1 pl-3 w-80 font-semibold	border-2 border-black"
        {...register}
        {...otherProps}
      >
        {children}
      </input>
      {errorMessage && (
        <p className="flex items-center justify-center gap-1 text-red-600 mt-1">
          <ReportGmailerrorredRoundedIcon />
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormInput;
