import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, calcSubPrice, totalSumFunc } from "../helpers/const";
import axios from "axios";
import { API } from "../helpers/const";

const ThingsContext = createContext();

export const useThings = () => useContext(ThingsContext);

const INIT_STATE = {
  Things: {
    products: [],
    totalPrice: 0,
  },
  ThingsLength: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.Things:
      return { ...state, Things: action.payload };
    case ACTIONS.ThingsLength:
      return { ...state, ThingsLength: action.payload };
    default:
      return state;
  }
}

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("Things"));
  if (!data) {
    data = {
      products: [],
      totalPrice: 0,
    };
  }
  return data;
}

const ThingsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getThings() {
    const data = getDataFromLS();
    let len = 0;
    data.products.forEach((item) => {
      len += +item.count;
    });

    dispatch({
      type: ACTIONS.Things,
      payload: data,
    });
    dispatch({
      type: ACTIONS.ThingsLength,
      payload: len,
    });
  }

  async function addProductToThings(product) {
    let data = getDataFromLS();
    const isInThings = data.products.some((item) => item.id === product.id);
    if (isInThings) {
      deleteFromThings(product.id);
    } else {
      data.products.push({ ...product, count: 1, subPrice: +product.price });
    }

    data.totalPrice = totalSumFunc(data.products);
    localStorage.setItem("Things", JSON.stringify(data));

    getThings();
  }

  function changeProductCount(count, id) {
    const Things = getDataFromLS();

    Things.products = Things.products.map((product) => {
      if (product.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    Things.totalPrice = totalSumFunc(Things.products);
    localStorage.setItem("Things", JSON.stringify(Things));
    getThings();
  }
  function deleteFromThings(id) {
    const data = getDataFromLS();
    data.products = data.products.filter((item) => item.id !== id);
    data.totalPrice = totalSumFunc(data.products);
    localStorage.setItem("Things", JSON.stringify(data));
    getThings();
  }
  function isAlreadyThings(id) {
    const data = getDataFromLS();

    const isInThings = data.products.some((item) => item.id === id);
    return isInThings;
  }

  async function addBankInfo(userInfo) {
    await axios.post(API, userInfo);
  }

  const values = {
    Things: state.Things,
    ThingsLength: state.ThingsLength,
    getThings,
    addProductToThings,
    changeProductCount,
    deleteFromThings,
    isAlreadyThings,
    addBankInfo,
  };

  return (
    <ThingsContext.Provider value={values}>{children}</ThingsContext.Provider>
  );
};

export default ThingsContextProvider;
