import React from "react";
import CountUp from "react-countup";

const Number = () => {
  return (
    <div>
      <h1>Numbers say it all !</h1>
      <div className="flex flex-wrap gap-5">
        <h1 className="flex flex-col justify-center items-center">
          Number of Students <CountUp end={23000} duration={4} />
        </h1>
        <h1 className="flex flex-col justify-center items-center">
          Number of Courses <CountUp end={155} duration={4} />
        </h1>
        <h1 className="flex flex-col justify-center items-center">
          Profits
          <CountUp end={10} duration={4} prefix="₹ " suffix=" crore" />
        </h1>
        <h1 className="flex flex-col justify-center items-center">
          Rating
          <CountUp end={4.5} decimals={1} decimal="." duration={4} />
        </h1>
      </div>
    </div>
  );
};

export default Number;
