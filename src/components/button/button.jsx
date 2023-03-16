import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className="flex justify-center items-center gap-2 uppercase font-semibold bg-black text-white px-5 py-[0.4rem] rounded-[4px]
     hover:bg-white hover:text-black hover:ring-1 hover:ring-black"
    >
      {children}
    </button>
  );
};

export default Button;
