import React from "react";
import summer from "../../assets/images/summer.webp";
import "./Hero.css";

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
        <h2 className="summer">Shop summer</h2>
      </div>
    </div>
  );
};

export default Hero;
