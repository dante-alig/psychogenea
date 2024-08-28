import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";

const Feedback = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setActiveSlide(current),
  };

  console.log(activeSlide);

  const feedbackText = [
    "1 Easy functionality, very fair pricing, but I will say the absolute key is their instance customer service!",
    "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, et minima quos laboriosam corrupti architecto dignissimos vero possimus ipsa iste sunt atque modi consequuntur. Soluta error iure repellendus quam temporibus!",
    "3 Very reliable and affordable for small businesses like ours.",
    "4 Amazing support, great tools, highly recommend!",
    "5 Best experience we've had with any service provider.",
    "6 Incredible value for money and stellar customer service!",
  ];

  return (
    <div className="feedback">
      <div className="feedback-title">
        <h1>Témoignages</h1>
        <p>Libérez votre Histoire, Révélez Votre Potentiel</p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider">
            <div className="slider-pic">
              <img src={img1} />
              <p>1</p>
            </div>
          </div>
          <div className="slider">
            <div className="slider-pic">
              <img src={img2} />
              <p>2</p>
            </div>
          </div>
          <div className="slider">
            <div className="slider-pic">
              <img src={img3} />
              <p>3</p>
            </div>
          </div>
          <div className="slider">
            <div className="slider-pic">
              <img src={img4} />
              <p>4</p>
            </div>
          </div>
          <div className="slider">
            <div className="slider-pic">
              <img src={img5} />
              <p>5</p>
            </div>
          </div>
          <div className="slider">
            <div className="slider-pic">
              <img src={img6} />
              <p>6</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="feeback-text-container">
        <div className="feedback-text">
          <p>{feedbackText[activeSlide]}</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
