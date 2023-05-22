import React from "react";
import Hero from "../components/Hero/Hero";
import Partners from "../components/Partners/Partners";
import MainCardList from "../components/MainCardList/MainCardList";
import Discount from "../components/Discount/Discount";
import Bonus from "../components/Bonus/Bonus";
import JackPot from "../components/Jackpot/JackPot";
import Shop from "../components/Shop/Shop";

const HomePage = () => {
  return (
    <>
      <Bonus />
      <Discount />
      <Hero />
      <MainCardList />
      <JackPot />
      <Shop />
      <Partners />
      <hr />
    </>
  );
};

export default HomePage;
