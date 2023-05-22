import { Grid } from "@mui/material";
import React from "react";
import brill from "../../assets/images/brill.JPG";
import clock from "../../assets/images/clock.JPG";
import "./Shop.css";

const Shop = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      gap="5rem"
      marginBottom="10rem"
    >
      <Grid item xs={10} sm={6} md={4} lg={3} textAlign="center">
        <img
          src={clock}
          alt="clocks img"
          style={{
            maxWidth: "100%",
            height: "auto",
            marginBottom: "1.5rem",
            objectFit: "contain",
          }}
        />
        <h2 style={{ fontSize: "2.8rem", marginBottom: "1.5rem" }}>
          POOL-PROOF JEWELS
        </h2>
        <h4 style={{ fontSize: "1.8rem", marginBottom: "3rem" }}>
          Holiday-friendly accessories
        </h4>
        <a
          style={{ textDecoration: "none" }}
          className="shop-text"
          href="/jewels"
        >
          SHOP NOW
        </a>
      </Grid>
      <Grid item xs={10} sm={6} md={4} lg={3} textAlign="center">
        <img
          src={brill}
          alt="brill img"
          style={{
            maxWidth: "100%",
            height: "auto",
            marginBottom: "1.5rem",
            objectFit: "contain",
          }}
        />
        <h2 style={{ fontSize: "2.8rem", marginBottom: "1.5rem" }}>
          PIECE OF SZN
        </h2>
        <h4 style={{ fontSize: "1.8rem", marginBottom: "3rem" }}>
          Living your vest life
        </h4>
        <a
          style={{ textDecoration: "none" }}
          className="shop-text"
          href="/jewels"
        >
          SHOP NOW
        </a>
      </Grid>
    </Grid>
  );
};

export default Shop;
