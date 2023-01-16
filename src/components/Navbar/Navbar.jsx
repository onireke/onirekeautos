import React, { useState } from "react";
import "./Navbar.scss";
import { BiX, BiMenu } from "react-icons/bi";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <div className="nav">
      <h1 className="auto-name">ONIREKE AUTOS.</h1>
      <ul className="nav-rights">
        <li className="nav-right">Home </li>
        <li className="nav-right">Company</li>
        <li className="nav-right">About</li>
        <li className="nav-right">Contact</li>
      </ul>

      <div onClick={handleNavbar} className="block md:hidden">
        {!navbar ? <BiX size={25} /> : <BiMenu size={25} />}

        <div
          className={
            !navbar
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black m-4 pt-4 ease-in-out duration-700"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="auto-name">ONIREKE AUTOS.</h1>

          <ul className=" uppercase p-4">
            <li className="nav-right border-b border-gray-700">Home </li>
            <li className="nav-right border-b border-gray-700">Company</li>
            <li className="nav-right border-b border-gray-700">About</li>
            <li className="nav-right">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
