import React from "react";

const FormInput = ({ children, ...otherProps }) => {
  return (
    <input className="py-2 pl-3 border-2 border-black" {...otherProps}>
      {children}
    </input>
  );
};

export default FormInput;
