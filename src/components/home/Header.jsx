import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./header.css";
import Image from "../../comp-img/as.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import CV from '../../comp-img/Resume-Ashwini-mirajkar.pdf'

function Header() {
  const [text] = useTypewriter({ words: ["I'm Ashwini"], loop: {} });
  return (
    <section id="Home">
      <div className="container header-conatiner">
        <div className="me">
          <div className="me-image">
            <img src={Image} alt="ashwini" />
          </div>
        </div>
        <div>
          <h1 style={{ margin: "50px" }}>
            Hellow!
            <span>{text}</span>
            <span>
              <Cursor />
            </span>
          </h1>

          <a href={CV} download>
            <button className="btn btn-light">Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
