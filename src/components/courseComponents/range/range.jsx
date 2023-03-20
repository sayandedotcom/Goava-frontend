import React, { useState } from "react";

const Range = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      {value}
      <input
        className="w-56 cursor-pointer"
        type="range"
        defaultValue={value}
        onChange={handleChange}
        min={0}
        max={1000}
        step={100}
      />
    </div>
  );
};

export default Range;
