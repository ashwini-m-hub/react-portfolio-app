import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./nav.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <ul>
          <li>
            {" "}
            <a className="nav-link" href="#header">
              Home
            </a>
          </li>
          <li>
            {" "}
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#project">
              projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Certification">
            Certification
            </a>
          </li>
          <li>
            {" "}
            <a className="nav-link" href="#hobbies">
              Hobbies
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contacts">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
