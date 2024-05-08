import React, { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext();

const AuthContextProvider = ({ children }) => { // Capitalized the component name
  const [auth, setAuth] = useState(true);
  return (
    <MyContext.Provider value={{ auth, setAuth }}>{children}</MyContext.Provider>
  );
};

export default AuthContextProvider; // Capitalized the exported name

