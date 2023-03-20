import React from "react";

const Radio = ({ value, ...otherProps }) => {
  return (
    <div className="flex items-center justify-start p-1">
      <input
        className="cursor-pointer w-8"
        type="radio"
        value={value}
        {...otherProps}
      />
      <span className="font-bold text-xl">{value}</span>
    </div>
  );
};

export default Radio;
