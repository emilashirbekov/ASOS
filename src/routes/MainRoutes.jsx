import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DroppedPage from "../pages/DroppedPage/DroppedPage";
import Favourites from "../pages/FavouritesPages/Favourites";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage/AddproductPage";
import BagPage from "../pages/BagPage/BagPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import Reviews from "../pages/Reviews/Reviews";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dropped" element={<DroppedPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/add" element={<AddProductPage />} />
          <Route path="/edit/:id" element={<EditCardPage />} />
          <Route path="/fav" element={<Favourites />} />
          <Route path="/bag" element={<BagPage />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
