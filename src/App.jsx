import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Featured from "./components/Featured/Featured";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
    </div>
  );
}

export default App;
