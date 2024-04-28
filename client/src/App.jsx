// App.js
import React from "react";

import Header from "./components/Header";
import "./App.css";
import CustomItemContext from "./context/ItemContext";

const App = () => {
  return (
    <CustomItemContext>
      <Header />
    </CustomItemContext>
  );
};

export default App;
