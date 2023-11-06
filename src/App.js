import React from "react";
import Nav from "./layout/Navbar";
import Outlet from "./Chemin";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
