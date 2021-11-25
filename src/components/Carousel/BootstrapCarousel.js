import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "./../../assets/Carousel1.jfif";
import Carousel2 from "./../../assets/Carousel2.jfif";
import Carousel3 from "./../../assets/Carousel3.jfif";

const BootstrapCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block m-auto w-75 rounded"
          src={Carousel1}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block m-auto w-75 rounded"
          src={Carousel2}
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block m-auto w-75 rounded"
          src={Carousel3}
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
