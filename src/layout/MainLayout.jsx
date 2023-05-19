import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { Discount } from "@mui/icons-material";
import Hero from "../components/Hero/Hero";
import MainCardList from "../components/MainCardList/MainCardList";
import Partners from "../components/Partners/Partners";
import Social from "../components/Social/Social";
import Footer from "../components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Discount />
      <Hero />
      <MainCardList />
      <Partners />
      <Social />
      <Footer />
    </div>
  );
};

export default MainLayout;
