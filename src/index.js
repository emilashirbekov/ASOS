import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import BagContextProvider from "./contexts/BagContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <BagContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </CartContextProvider>
      </BagContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
