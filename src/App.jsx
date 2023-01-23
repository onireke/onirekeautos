import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Featured from "./components/Featured/Featured";
import AllVehicles from "./components/AllVehicles/AllVehicles";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <AllVehicles />
    </div>
  );
}

export default App;
