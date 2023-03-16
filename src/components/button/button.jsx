import React from "react";

export const BUTTON_TYPE_CLASSES = {
  inverted:
    "bg-black text-white  hover:bg-white hover:text-black hover:ring-1 hover:ring-black",
  google:
    "bg-white text-black hover:bg-white ring-1 hover:text-black hover:ring-1 hover:ring-blue-600",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`flex justify-center gap-2  font-semibold px-5 py-[0.4rem] rounded-[4px]  ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
