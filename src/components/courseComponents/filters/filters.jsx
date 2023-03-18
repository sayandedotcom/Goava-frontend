import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const filters = [
  "All",
  "Offline Class",
  "Tickets",
  "Stocks",
  "Swing Trading",
  "Technical Analysis For Stock",
  "Stock Recomendation",
  "Intraday",
  "Swing Trading Recomendation",
  "Options Trading",
];

const Filters = () => {
  // const [active, setActive] = useState("All");
  const [activeArray, setActiveArray] = useState(["All"]);

  const removeFilter = (filter) => {
    // const result = activeArray.filter((word) => word === filter);
    // setActiveArray([result]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center font-black p-1 text-xl">
        <TuneIcon /> <span className="mx-3">Filters</span>
      </div>
      <hr className=" border-t-black" />
      <div className="flex flex-wrap my-3">
        {filters.map((filter) => (
          <span
            onClick={() => setActiveArray([...activeArray, filter])}
            className="flex items-center bg-[#e4e4e4] px-2 py-1 rounded-[4px] m-2 cursor-pointer border border-black font-semibold 
            shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]"
          >
            {filter} {`(${Math.floor(Math.random() * 10)})`}
            {activeArray.includes(filter) && (
              <CloseRoundedIcon
                onClick={removeFilter(filter)}
                className=" ml-1 hover:text-red-600"
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filters;
