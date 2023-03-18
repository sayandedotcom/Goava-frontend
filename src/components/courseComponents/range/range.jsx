import React from "react";

const Range = ({ value, handleChange, min, max, step }) => {
  return (
    <input
      className="w-56 cursor-pointer"
      type="range"
      defaultValue={value}
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
    />
  );
};

export default Range;
