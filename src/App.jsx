import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Dashboard from "./components/Dashboard/Dashboard";
import MobileData from "./components/MobileData/MobileData";

const App = () => {
  return (
    <>
      <Header />
      <MobileData/>
      <Dashboard/>
      <Products />
    </>
  );
};

export default App;
