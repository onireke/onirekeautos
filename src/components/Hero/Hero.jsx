import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <main className="hero-home">
      <div className="auto-description">
        <h1 className="motivation">GET EXPERIRNCE OF LUXURY CARS WITH US</h1>
        <div className="car-list">
          <p className="font-bold md:text-5xl sm:text-4xl text-xl">
            {" "}
            You can call us for{" "}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Hero;
