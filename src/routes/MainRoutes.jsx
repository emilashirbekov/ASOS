import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DroppedPage from "../pages/DroppedPage/DroppedPage";
import Favourites from "../pages/FavouritesPages/Favourites";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import HomePage from "../pages/HomePage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dropped" element={<DroppedPage />} />
          <Route path="/fav" element={<Favourites />} />
          <Route path="/edit/:id" element={<EditCardPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
