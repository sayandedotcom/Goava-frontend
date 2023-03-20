import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fullProgress } from "../../redux/loaderSlice";
import Button from "../../components/button/button";
import Number from "../../components/aboutComponents/numbers/numbers";
import Socials from "../../components/aboutComponents/socials/socials";
import Review from "../../components/aboutComponents/review/review";
import Team from "../../components/aboutComponents/team/team";

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fullProgress());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-3 gap-6">
      <Team />
      <Number />
      <Review />
      <div>Locations</div>
      <Socials />
      <Link to={"/courses"}>
        <Button className="rounded-none" buttonType="inverted">
          Check Courses !
        </Button>
      </Link>
    </div>
  );
};

export default About;
