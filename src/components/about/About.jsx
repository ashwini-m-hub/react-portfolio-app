import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";
import { LuSchool } from "react-icons/lu";
import "./about.css";

const About = (props) => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="container about">
        <div className="education">
          <div className="graduation">
            <h3>
              <FaGraduationCap />
              Graduaction
            </h3>
            <p>
              <a href="https://www.becbgk.edu/">
                Basaveshwar Engineering College, Bagalkote.
              </a>
              <br />
              7.14 cgpa 2020-2024
            </p>
          </div>
          <div className="12th">
            <h3>
              <BiSolidSchool />
              12th
            </h3>
            <p>
              Basaveshwar Indipendent Pu College,bagalkot. <br />
              84.5% 2019
            </p>
          </div>
          <div className="SSLC">
            <h3>
              <LuSchool />
              SSLC
            </h3>
            <p>
              Basaveshwar High School,Bagalkot.
              <br />
              86.24% 2017
            </p>
          </div>
        </div>
        <div className="skills">
          <div className="skills-have">
            <h2>Skills I have</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JS</li>
              <li>React</li>
              <li>Autocad</li>
            </ul>
          </div>
          <div className="language">
            <h2>Languages I know</h2>
            <ul className="language-ul">
              <li>English</li>
              <li>Hindi</li>
              <li>Marathi</li>
              <li>Kannada</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
