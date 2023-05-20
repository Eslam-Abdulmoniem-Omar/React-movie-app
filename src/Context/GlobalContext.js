import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const initialState = {
  watchlist: JSON.parse(localStorage.getItem("watchlistData")) || [],
  watched: JSON.parse(localStorage.getItem("watchedData")) || [],
};

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log("effect");
    localStorage.setItem("watchlistData", JSON.stringify(state.watchlist));
    localStorage.setItem("watchedData", JSON.stringify(state.watched));
  }, [state]);
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        MoviesDispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const UseMovieContext = () => {
  return useContext(GlobalContext);
};
