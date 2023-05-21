import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { Discount } from "@mui/icons-material";
import Social from "../components/Social/Social";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Discount />
      <Outlet />
      <Social />
      <Footer />
    </div>
  );
};

export default MainLayout;
