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
  const [active, setActive] = useState("All");
  const [activeArray, setActiveArray] = useState(["All"]);
  return (
    <div className="flex flex-col p-3 w-3/12">
      <div className="flex justify-center items-center font-black p-1 text-xl">
        <TuneIcon /> <span className="mx-3">Filters</span>
      </div>
      <div className="flex flex-wrap my-3">
        {filters.map((filter) => (
          <span
            onClick={() => setActiveArray([...activeArray, filter])}
            className="flex items-center bg-[#e4e4e4] px-2 py-1 rounded-[4px] m-2 cursor-pointer border border-black font-semibold	"
          >
            {filter} {`(${Math.floor(Math.random() * 10)})`}
            {activeArray.includes(filter) && <CloseRoundedIcon />}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filters;
