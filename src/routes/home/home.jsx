import React from "react";
import Carousel from "better-react-carousel";
import { carouselImage } from "./homeCarouselImages";
const Home = () => {
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
