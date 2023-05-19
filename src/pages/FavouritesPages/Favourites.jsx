import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { Discount } from "@mui/icons-material";
import Social from "../components/Social/Social";
import Footer from "../components/Footer/Footer";

const Favourites = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Discount />
      <Social />
      <Footer />
    </div>
  );
};

export default Favourites;
