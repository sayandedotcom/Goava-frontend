import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fullProgress } from "../../redux/loaderSlice";
import Bannercarousel from "../../components/homeComponents/bannerCarousel/bannerCarousel";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fullProgress());
  }, []);

  return (
    <>
      <Bannercarousel />
    </>
  );
};

export default Home;
