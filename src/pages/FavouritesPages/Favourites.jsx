import React from "react";
import Header from "../../components/Header/Header";
import Social from "../../components/Social/Social";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Discount from "../../components/Discount/Discount";

const Favourites = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Discount />
      <div
        style={{
          textAlign: "center",
          fontWeight: "700",
          marginTop: "0",
          padding: "3rem",
          background: "#ccc",
        }}
        className="title"
      >
        <h1>Saved items</h1>
      </div>
      <Social />
      <Footer />
    </div>
  );
};

export default Favourites;
