import React, { createContext, useReducer, useState } from "react";

export const AppContext = createContext();

function AppContextWrapper({ children }) {
  const initialState = {
    user: null,
    isLoggedIn: false,
    cart: [],
  };
  const reducerFn = (state, action) => {
    switch (action.type) {
      case "SIGNIN":
        return { ...state, user: action.payload };
      case "SIGNOUT":
        return { ...state, user: null };
      case "SET_SIGNIN_STATUS":
        return { ...state, isLoggedIn: true };
      case "SET_SIGNOUT_STATUS":
        return { ...state, isLoggedIn: false, user: null };
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, action.payload] };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <AppContext.Provider value={{ appState: state, appDispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextWrapper;
