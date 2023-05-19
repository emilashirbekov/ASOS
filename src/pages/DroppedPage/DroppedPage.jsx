import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";
import ProductList from "./ProductList";
import Sort from "../../components/Sort/Sort";

const DroppedPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Sort />
      <ProductList />
      <Social />
      <Footer />
    </>
  );
};

export default DroppedPage;
