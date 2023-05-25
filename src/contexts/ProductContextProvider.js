import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, LIMIT } from "../helpers/const";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: null,
  pageTotalCount: 1,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.products:
      return { ...state, products: action.payload };
    case ACTIONS.oneProduct:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.pageTotalCount:
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const productsCollectionRef = collection(db, "prosucts");

  // !Get products //
  const getProducts = async () => {
    try {
      const querySnapshot = await getDocs(productsCollectionRef);
      const totalDocuments = querySnapshot.size;
      const totalPages = Math.ceil(totalDocuments / LIMIT);

      const filteredData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      dispatch({
        type: ACTIONS.products,
        payload: filteredData,
      });

      dispatch({
        type: ACTIONS.pageTotalCount,
        payload: totalPages,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // !Delete products //
  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(productsCollectionRef, id));
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // !Edit products //
  const getOneProduct = async (id) => {
    try {
      const docRef = doc(productsCollectionRef, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        dispatch({
          type: ACTIONS.oneProduct,
          payload: data,
        });
      } else {
        alert("Document not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (obj, id) => {
    try {
      const docRef = doc(productsCollectionRef, id);
      await updateDoc(docRef, obj);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (productData) => {
    try {
      const docRef = await addDoc(productsCollectionRef, productData);
      return docRef;
    } catch (error) {
      console.log(error);
    }
  };

  const updateRating = async (id, newRating) => {
    try {
      const productRef = doc(productsCollectionRef, id);
      await updateDoc(productRef, { rating: +newRating });
    } catch (error) {
      console.log(error);
    }
  };

  let values = {
    products: state.products,
    oneProduct: state.oneProduct,
    addProduct,
    getProducts,
    deleteProduct,
    getOneProduct,
    editProduct,
    pageTotalCount: state.pageTotalCount,
    updateRating,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
