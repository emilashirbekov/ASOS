import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS } from "../helpers/const";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.products:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const productsCollectionRef = collection(db, "prosucts");

  const getProducts = async () => {
    try {
      const data = await getDocs(productsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch({
        type: ACTIONS.products,
        payload: filteredData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  let values = {
    products: state.products,
    getProducts,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
