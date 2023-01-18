import React from "react";
import "./Hero.scss";
import Typed from "react-typed";

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

          <Typed
            className="font-bold md:text-5xl sm:text-4xl text-xl pl-[1rem] text-orange-700"
            strings={[
              "Toyota",
              "Honda",
              "Benz",
              "Buggati",
              "Lambogini",
              "Maserati",
              "Lexus",
              "Ford",
              "Nissan",
              "Volkswagen",
            ]}
            typeSpeed={100}
            backSpeed={120}
            loop
          />
        </div>

        <p className="catchy-word">
          {" "}
          we are available because you don’t like to search around.
        </p>
        <button className="contact-button">Contact us now!</button>
      </div>
    </main>
  );
}

export default Hero;
