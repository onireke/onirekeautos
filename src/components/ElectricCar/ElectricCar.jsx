import React from "react";
import "./ElectricCar.scss";

function ElectricCar() {
  return (
    <main className="electric-car">
      <div className="electric-words">
        <p className="tittle">ELECTRIFIED</p>
        <p className="word">Selling an electrified,</p>
        <p className="word">future today</p>
        <button className="electric-button">Learn more</button>
      </div>
      <div className="cars">
        <img
          src="electric-cars.jpeg"
          width={1000}
          alt=""
          className="cars-image mt-[10rem] "
        />
        <div className="brand-div">
          {/* <small className="brand-name  max-w-[11rem] h-[7rem] text-[2.5rem] text-white font-bold bg-red-600 border absolute">
            ONIREKE <br /> AUTOS.
          </small> */}
        </div>
      </div>
    </main>
  );
}

export default ElectricCar;
