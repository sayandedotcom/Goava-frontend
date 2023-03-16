import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fullProgress } from "../../redux/loaderSlice";
import Carousel from "better-react-carousel";
import { carouselImage } from "./homeCarouselImages";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fullProgress());
  }, []);

  return (
    <>
      <Carousel
        cols={1}
        rows={1}
        // gap={10}
        autoplay={2000}
        loop
        showDots
        dotColorActive="black"
      >
        {carouselImage.map((image) => (
          <Carousel.Item>
            <img height="20%" width="100%" src={image} alt="" />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Home;
