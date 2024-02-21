import React from "react";
import { Link } from "react-scroll";
import "./Navigation.css";

function Navigtion() {
  return (
    <div className="nav">
      <div className="Name">
        <h3>Justin Koster</h3>
      </div>

      <ul className="links">
        <li className="item">
          {/* <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link> */}

          <Link to="section1" smooth={true} duration={500}>
            Go to Section 1
          </Link>
        </li>
        <li className="item">
          <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
            Work
          </Link>
        </li>
        <li className="item">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            {" "}
            Contact{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigtion;
