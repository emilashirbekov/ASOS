import React from "react";
import visa from "../../assets/images/visa.webp";
import express from "../../assets/images/express.webp";
import visapng from "../../assets/images/visapng.webp";
import paypal from "../../assets/images/paypal.webp";
import mastercard from "../../assets/images/mastercard.webp";
import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import styles from "./Social.Module.css";

const Social = () => {
  return (
    <div className={styles.social}>
      <FacebookRounded
        sx={{
          width: "3rem",
          height: "3rem",
          color: "blue",
        }}
      />
      <Instagram
        sx={{
          width: "3rem",
          height: "3rem",
          color: "purple",
        }}
      />
      <Twitter
        sx={{
          width: "3rem",
          height: "3rem",
          color: "lightblue",
        }}
      />
      <img src={visa} style={{ height: "2rem", width: "3rem" }} alt="visa" />
      <img src={paypal} style={{ height: "2rem", width: "3rem" }} alt="visa" />
      <img src={express} style={{ height: "2rem", width: "3rem" }} alt="visa" />
      <img src={visapng} style={{ height: "2rem", width: "3rem" }} alt="visa" />
      <img
        src={mastercard}
        style={{ height: "2rem", width: "3rem" }}
        alt="visa"
      />
    </div>
  );
};

export default Social;
