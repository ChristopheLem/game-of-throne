import React, { useReducer } from "react";
import FavorisContext from "../context/FavorisContext";
import { favorisReducer, initialState } from "../reducers/favorisReducer";

const FavorisContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favorisReducer, initialState);

  return (
    <FavorisContext.Provider value={[state, dispatch]}>
      {children}
    </FavorisContext.Provider>
  );
};

export default FavorisContextProvider;
