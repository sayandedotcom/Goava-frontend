import React from "react";
import TuneIcon from "@mui/icons-material/Tune";

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
  return (
    <div className="flex flex-col p-3 max-w-xs">
      <div className="flex justify-center items-center font-black p-1 text-xl">
        <TuneIcon /> <span className="mx-3">Filters</span>
      </div>
      <div className="flex flex-wrap my-3">
        {filters.map((filter) => (
          <span className="bg-[#e6e6e6] px-2 py-1 rounded-[4px] m-2 cursor-pointer">
            {filter} {`(${Math.floor(Math.random() * 4)})`}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filters;
