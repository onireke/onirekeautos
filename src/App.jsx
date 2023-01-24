import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Featured from "./components/Featured/Featured";
import AllVehicles from "./components/AllVehicles/AllVehicles";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import ElectricCar from "./components/ElectricCar/ElectricCar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <AllVehicles />
      <About />
      <ElectricCar />

      <Footer />
    </div>
  );
}

export default App;
