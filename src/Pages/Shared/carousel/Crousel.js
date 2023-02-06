import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../../assets/images/binoculars-night.jpg";
import img2 from "../../../assets/images/mini-horse-in-paddock-1280x640.jpg";

const Crousel = () => {
  return (
    <div className="mb-4">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 " src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={img2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Crousel;
