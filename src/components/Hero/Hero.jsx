import React from "react";
import summer from "../../assets/images/summer.webp";
import "./Hero.Module.css";

const Hero = () => {
  return (
    <div className="image__container">
      <img
        className="img"
        src={summer}
        style={{ height: "100%", width: "100%" }}
        alt="Summer clothes"
      />
      <div className="image__text">
        <p>Shop summer</p>
      </div>
    </div>
  );
};

export default Hero;
