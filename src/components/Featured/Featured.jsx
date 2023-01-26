import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { RxDot } from "react-icons/rx";

import "./Featured.scss";

function Featured() {
  const slides = [
    {
      decsription: "Our amazing car of all times",
      image: "secondpage-image1.jpeg",
    },
    {
      decsription: "Our amazing car of all times",
      image: "secondpage-image2.jpeg",
    },
    {
      decsription: "Our amazing car of all times",
      image: "secondpage-image3.jpeg",
    },
    {
      decsription: "Our amazing car of all times",
      image: "secondpage-image4.jpeg",
    },
    {
      decsription: "Our amazing car of all times",
      image: "secondpage-image5.jpeg",
    },
    {
      decsription: "Our amazing car of all times",
      image: "secondpage-image6.jpeg",
    },
    {
      decsription: "Our amazing car of all times",
      image: "secondpage-image7.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="featured-main">
      <div className="feature-description">
        <h1 className="attract"> View of our gratest cars of all times</h1>
        <h1 className="attract"></h1>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="featured-content group"
      >
        <div className="arrow left-5  hidden group-hover:block">
          <IoChevronBack size={30} onClick={prevSlide} />
        </div>
        <div className="arrow right-5 hidden group-hover:block">
          <IoChevronForward size={30} onClick={nextSlide} />
        </div>
        <div className="dot">
          {slides.map((slide, slideIndex) => (
            <div key={slide} onClick={() => goToSlide(slideIndex)}>
              <RxDot />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
