import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import Carousel from 'better-react-carousel';
import {bannerCarouselImage} from './bannerCarouselImages';
const Bannercarousel = () => {
  return (
    <Carousel
      cols={1}
      rows={1}
      // gap={10}
      autoplay={2000}
      loop
      showDots
      dotColorActive='black'>
      {bannerCarouselImage.map((image) => (
        <Carousel.Item>
          <LazyLoadImage height='20%' width='100%' src={image} effect='blur' />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Bannercarousel;
