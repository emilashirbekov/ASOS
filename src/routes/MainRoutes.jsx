import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DroppedPage from "../pages/DroppedPage/DroppedPage";
import Favourites from "../pages/FavouritesPages/Favourites";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/dropped" element={<DroppedPage />} />
        <Route path="/fav" element={<Favourites />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
