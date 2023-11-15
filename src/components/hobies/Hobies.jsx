import React from "react";
import "./hobbies.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Hobies = () => {
  let mehendiImage = [
    { src: "../../images/img2.png" },
    { src: "../../images/img4.png" },
    { src: "../../images/img3.png" },
    { src: "../../images/img5.png" },
    { src: "../../images/img1.png" },
  ];
  let pillysImage = [
    { src: "../../images/dog4.jpg" },
    { src: "../../images/dog1.jpg" },
    { src: "../../images/dog5.jpg" },
    { src: "../../images/dog3.jpg" },
    { src: "../../images/dog2.jpg" },
  ];

  return (
    <section id="hobbies">
      <h1>Hobbies</h1>
      <div className="hobies-container">
        <div className="Mehendi-container">
          <h2>
            Im mehendi artist
            <h3>
              <p>In my free time I Enjoy drawing a mehendi</p>
            </h3>
          </h2>
          <div className="mehdni-img">
            <Slide>
              {mehendiImage.map((index) => (
                <img src={index.src} alt="img" />
              ))}
            </Slide>
          </div>
        </div>
        <div className="dog-container">
          <div className="dog-img">
            <Slide>
              {pillysImage.map((index) => (
                <img src={index.src} alt="img" />
              ))}
            </Slide>
          </div>
          <h2>
            Dog Lover
            <h3>
              <p>
                I rescued an injured puppy and gave her a loving home through
                adoption! and in my free time i play with her.
              </p>
            </h3>
          </h2>
        </div>
        <div className="cooking-container">
          <h2>
            Cooking{" "}
            <h3>
              <p>I Enjoy cooking in my free time</p>
            </h3>
          </h2>
          <iframe
            width="450"
            height="350"
            src="https://www.youtube-nocookie.com/embed/rDKsvQOxPvM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>{" "}
        </div>
      </div>
    </section>
  );
};

export default Hobies;
