import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CountUp from "react-countup";
import { fullProgress } from "../../redux/loaderSlice";

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fullProgress());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Information About founders and team</h1>
      <div>About Raj</div>
      <h1>Numbers say it all</h1>
      <div className="flex flex-wrap gap-5">
        <h1 className="flex flex-col justify-center items-center">
          Number of Students <CountUp end={23000} duration={4} />
        </h1>
        <h1 className="flex flex-col justify-center items-center">
          Number of Courses <CountUp end={155} duration={5} />
        </h1>
        <h1 className="flex flex-col justify-center items-center">
          Profits
          <CountUp end={10} duration={5} prefix="₹ " suffix=" crore" />
        </h1>
        <h1 className="flex flex-col justify-center items-center">
          Rating
          <CountUp end={4.5} duration={5} />
        </h1>
      </div>
      <div>Review Coursel</div>
      <div>Certificates</div>
      <div>Locations</div>
      <div>Socials</div>
      <div>Go to the Courses !</div>
    </div>
  );
};

export default About;
