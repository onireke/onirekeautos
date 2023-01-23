import React from "react";
import "./Footer.scss";

import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="Footer-main">
        <div className="footer-left">
          <h1 className="brand-name">ONIREKEAUTOS.</h1>
          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            assumenda sequi officia dignissimos doloremque dolorem nobis magnam
            porro commodi ducimus nesciunt, doloribus sed impedit iusto!
            Assumenda expedita labore magnam officiis!
          </p>

          <div className="socials">
            <a href="http://">
              <FaFacebookSquare size={30} />
            </a>
            <a href="http://">
              <FaDribbbleSquare size={30} />
            </a>
            <a href="http://">
              <FaInstagramSquare size={30} />
            </a>

            <a href="http://">
              <FaTwitterSquare size={30} />
            </a>
            <a href="http://">
              <FaGithubSquare size={30} />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-list">
            <a href="http://">
              <h3 className="title">Works</h3>
            </a>

            <ul className="lists">
              <a href="http://">
                <li className="list">Commerce</li>
              </a>

              <a href="http://">
                <li className="list">Marketing</li>
              </a>
              <a href="http://">
                <li className="list">Insights</li>
              </a>
              <a href="http://">
                <li className="list">location</li>
              </a>
              <a href="http://">
                <li className="list">Recommendation</li>
              </a>
              <a href="http://">
                <li className="list">Licensing</li>
              </a>
            </ul>
          </div>

          <div className="footer-list">
            <a href="http://">
              <h3 className="title">Vehicles</h3>
            </a>

            <ul className="lists">
              <a href="http://">
                <li className="list">SUV Motor</li>
              </a>

              <a href="http://">
                <li className="list">Toyota</li>
              </a>
              <a href="http://">
                <li className="list">Honda</li>
              </a>
              <a href="http://">
                <li className="list">Benz</li>
              </a>
            </ul>
          </div>

          <div className="footer-list">
            <a href="http://">
              <h3 className="title">Shopping Tools</h3>
            </a>

            <ul className="lists">
              <a href="http://">
                <li className="list">Find a Dealer</li>
              </a>

              <a href="http://">
                <li className="list">Buy Parts</li>
              </a>
              <a href="http://">
                <li className="list">Accessories</li>
              </a>
              <a href="http://">
                <li className="list"> My Budget</li>
              </a>
            </ul>
          </div>

          <div className="footer-list">
            <a href="http://">
              <h3 className="title">Owners</h3>
            </a>

            <ul className="lists">
              <a href="http://">
                <li className="list">Owner Home</li>
              </a>

              <a href="http://">
                <li className="list">Service Center</li>
              </a>
              <a href="http://">
                <li className="list">Service parts</li>
              </a>
              <a href="http://">
                <li className="list"> Warranties</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
