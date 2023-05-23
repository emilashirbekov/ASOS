import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS } from "../helpers/const";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const authContext = createContext();

export const useAuth = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.user:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function REGISTER({ email, password, displayName, photoURL }) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
    } catch (error) {
      alert("error");
    }
  }

  async function LOGIN({ email, password }) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("успех");
    } catch (error) {
      alert("error");
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ACTIONS.user,
        payload: user,
      });
    });
  }, []);

  // function isAdmin() {
  //   if (state.user) {
  //     const bool = ADMINS.includes(state.user.email);
  //     return bool;
  //   }
  // }
  let values = {
    user: state.user,
    REGISTER,
    LOGIN,
    logout,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
