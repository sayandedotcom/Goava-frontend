import React from "react";

export const BUTTON_TYPE_CLASSES = {
  inverted:
    "bg-black text-white  hover:bg-white hover:text-black hover:ring-1 hover:ring-black",
  google:
    "bg-white text-black hover:bg-white ring-1 hover:text-black hover:ring-1 hover:ring-blue-600",
  blue: "bg-blue-500 text-white hover:bg-white ring-1 hover:text-black hover:ring-1 hover:ring-blue-600",
};

const Button = ({ children, buttonType, className, ...otherProps }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 font-semibold px-5 py-[0.4rem]   ${BUTTON_TYPE_CLASSES[buttonType]} ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
