import React from "react";
import Carousel from "better-react-carousel";
import Cards from "../../cards/cards";
const CardsCarousel = () => {
  return (
    <Carousel
      cols={5}
      gap={10}
      rows={1}
      autoplay={2000}
      loop
      showDots
      dotColorActive="black"
    >
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
    </Carousel>
  );
};

export default CardsCarousel;
