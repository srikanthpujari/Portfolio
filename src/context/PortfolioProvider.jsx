import React, { createContext, useContext, useState } from "react";

const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <PortfolioContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const PortfolioState = () => {
  return useContext(PortfolioContext);
};

export default PortfolioProvider;
