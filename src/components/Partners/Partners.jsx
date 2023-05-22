import React from "react";
import tommi from "../../assets/images/tommi.webp";
import north from "../../assets/images/north.avif";
import adidas from "../../assets/images/adidas.avif";
import carhartt from "../../assets/images/carhartt.avif";
import ellesse from "../../assets/images/ellesse.avif";
import martens from "../../assets/images/martens.avif";
import "./Partners.css";
const Partners = () => {
  return (
    <div className="partners" style={{ textAlign: "center" }}>
      <h2>TRENDING BRANDS</h2>
      <div className="partners__body" style={{ padding: "2rem" }}>
        <a href="/tommy">
          <img
            style={{ width: "19rem", height: "19rem" }}
            src={tommi}
            alt="Tommy Hilfiger"
          />
        </a>
        <a href="/tommy">
          <img
            style={{ width: "19rem", height: "19rem" }}
            src={north}
            alt="The North Face"
          />
        </a>
        <a href="/tommy">
          <img
            style={{ width: "19rem", height: "19rem" }}
            src={adidas}
            alt="Adidas"
          />
        </a>
        <a href="/tommy">
          <img
            style={{ width: "19rem", height: "19rem" }}
            src={carhartt}
            alt="Carharrt"
          />
        </a>
        <a href="/tommy">
          <img
            style={{ width: "19rem", height: "19rem" }}
            src={ellesse}
            alt="Ellesse"
          />
        </a>
        <a href="/tommy">
          <img
            style={{ width: "19rem", height: "19rem" }}
            src={martens}
            alt="Ellesse"
          />
        </a>
      </div>
    </div>
  );
};

export default Partners;
