import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PortfolioProvider from "./context/PortfolioProvider";

ReactDOM.render(
  <PortfolioProvider>
    <App />
  </PortfolioProvider>,
  document.getElementById("root")
);
