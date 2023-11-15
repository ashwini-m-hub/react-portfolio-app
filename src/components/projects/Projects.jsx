import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./projects.css";
import { projects } from "../../data.js";
import { Card } from "react-bootstrap";

const Projects = () => {
  return (
    <section id="project">
      <h1>Projects</h1>
      <div className="container project">
        {projects.map(({ id, img, title, desc, host,code }) => {
          return (
            <Card className="projects" key={id}>
              {
                (URL = (
                  <a href={host}>
                    <img src={img} alt="img" />
                  </a>
                ))
              }
              <h2>{title}</h2>
              <small>{desc}</small>
              {
                (URL = (
                  <a href={code}>
                    <div className="btn" >code</div>
                  </a>
                ))
              }
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
