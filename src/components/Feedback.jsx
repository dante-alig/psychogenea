import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const feedbackText = [
    "Easy functionality, very fair pricing, but I will say the absolute key is their instance customer service!",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, et minima quos laboriosam corrupti architecto dignissimos vero possimus ipsa iste sunt atque modi consequuntur. Soluta error iure repellendus quam temporibus!",
    "Very reliable and affordable for small businesses like ours.",
    "Amazing support, great tools, highly recommend!",
    "Best experience we've had with any service provider.",
    "Incredible value for money and stellar customer service!",
  ];

  return (
    <div className="feedback">
      <div className="feedback-title">
        <h6>Témoignages</h6>
        <p>Libérez votre Histoire, Révélez Votre Potentiel</p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {[img1, img2, img3, img4, img5, img6].map((img, index) => (
            <div
              key={index}
              className={`slider ${
                index === activeSlide + 1 || index === 0 ? "active" : ""
              }`}
            >
              <div className="slider-pic">
                <img src={img} alt={`slide-${index}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="feeback-text-container">
        <div className="feedback-text">
          <FontAwesomeIcon icon="fa-solid fa-quote-left" className="fa-quote" />
          <p>{feedbackText[activeSlide]}</p>
          <FontAwesomeIcon
            icon="fa-solid fa-quote-right"
            className="fa-quote"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
