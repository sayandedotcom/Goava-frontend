import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fullProgress } from "../../redux/loaderSlice";

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fullProgress());
  }, []);

  return <div>Information About founders and team</div>;
};

export default About;
