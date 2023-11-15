import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter, FiGithub } from "react-icons/fi";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.instagram.com/invites/contact/?i=1kgc7p99exnav&utm_content=hm9890i">
            <BsInstagram className="icon-lg" />{" "}
          </a>
          <a href="https://twitter.com/AshwiniMirajka2/status/1529885729664684032">
            <FiTwitter className="icon-lg" />{" "}
          </a>
          <a href="https://github.com/settings/profile">
            <FiGithub className="icon-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
