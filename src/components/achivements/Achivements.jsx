import React from "react";
import "./certification.css";
import Nptl from "../../comp-img/nptl.jpg";
import GCD from "../../comp-img/Google-cloud.jpg";

const Achivements = () => {
  return (
    <section id="Certification">
      <h1>Certification</h1>
      <div className="certificats">
        <div>
          <img src={Nptl} alt="nptl" />
          <h3>
            Nptl Online Certificat.
            <h4>
              I successfully complited <b>Data Science For Engineers</b>
            </h4>
          </h3>
        </div>
        <div>
          <img src={GCD} alt="gdc"/>
          <h3>30 Days of Google Cloud Participant at Google</h3>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
