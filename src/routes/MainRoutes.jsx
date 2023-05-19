import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DroppedPage from "../pages/DroppedPage/DroppedPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/dropped" element={<DroppedPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
