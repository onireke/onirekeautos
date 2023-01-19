import React, { useState } from "react";
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
  return (
    <div className="featured-main">
      <div
        style={{ backgroundImage: `url(${slides[5].image})` }}
        className="featured-content"
      >
        This is the div for the featured cars
      </div>
    </div>
  );
}

export default Featured;
